from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)


class Planet(db.Model, SerializerMixin):
    __tablename__ = 'planets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    distance_from_earth = db.Column(db.Integer)
    nearest_star = db.Column(db.String)

    missions = db.relationship('Mission', back_populates='planet')
    scientists = association_proxy('missions', 'scientist')
    
    serialize_rules = ('-missions',)


class Scientist(db.Model, SerializerMixin):
    __tablename__ = 'scientists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    field_of_study = db.Column(db.String, nullable=False)

    missions = db.relationship('Mission', back_populates='scientist', cascade='all, delete-orphan')
    planets = association_proxy('missions', 'planet')
    
    serialize_rules = ('-missions.scientist',)

    @validates('name', 'field_of_study')
    def validates_name(self, key, value):
        if not value:
            raise ValueError(f'{key} must be provided.')
        return value

    # @validates('field_of_study')
    # def validates_field_of_study(self, key, new_field):
    #     if not new_field:
    #         raise ValueError('Field of study must be provided.')
    #     return new_field



class Mission(db.Model, SerializerMixin):
    __tablename__ = 'missions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    scientist_id = db.Column(db.Integer, db.ForeignKey('scientists.id'), nullable=False)
    planet_id = db.Column(db.Integer, db.ForeignKey('planets.id'), nullable=False)

    scientist = db.relationship('Scientist', back_populates='missions')
    planet = db.relationship('Planet', back_populates='missions')

    serialize_rules = ('-scientist.missions', '-planet.missions')

    @validates('name')
    def validates_name(self, key, value):
        if not value:
            raise ValueError(f'{key} must be provided.')
        return value


    @validates('scientist_id')
    def validates_scientist_id(self, key, value):
        scientist_ids = [id[0] for id in db.session.query(Scientist.id)]
        if value not in scientist_ids:
            raise ValueError('Must be an existing Scientist')
        return value


    @validates('planet_id')
    def validates_planet_id(self, key, value):
        planet_ids = [id[0] for id in db.session.query(Planet.id)]
        if value not in planet_ids:
            raise ValueError('Must be an existing Planet')
        return value