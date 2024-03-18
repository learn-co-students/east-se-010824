#!/usr/bin/env python3

from models import db, Scientist, Mission, Planet
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
from sqlalchemy.exc import IntegrityError
import os
import ipdb
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

class Scientists(Resource):
    def get(self):
        scientists = Scientist.query.all()
        scientists_dict = [scientist.to_dict(rules=('-missions',)) for scientist in scientists]
        return make_response(scientists_dict)

    def post(self):
        try:
            json = request.json
            scientist = Scientist(name=json.get('name'), field_of_study=json.get('field_of_study'))
            db.session.add(scientist)
            db.session.commit()
        except ValueError as v_error:
            return make_response({'errors': ['validation errors']}, 400)
        except IntegrityError as i_error:
            return make_response({'errors': ['validation errors']}, 400)

        return make_response(scientist.to_dict(), 201)

api.add_resource(Scientists, '/scientists')

class ScientistById(Resource):
    def get(self, id):
        scientist = Scientist.query.filter_by(id=id).first()

        if not scientist:
            return make_response({'error': "Scientist not found"}, 404)

        return make_response(scientist.to_dict())

    def patch(self, id):
        scientist = Scientist.query.filter_by(id=id).first()

        if not scientist:
            return make_response({'error': "Scientist not found"}, 404)

        try:
            json = request.json

            for attr in json:
                setattr(scientist, attr, json[attr])
            
            db.session.commit()
        except ValueError as v_error:
            return make_response({'errors': ['validation errors']}, 400)
        except IntegrityError as i_error:
            return make_response({'errors': ['validation errors']}, 400)

        return make_response(scientist.to_dict(), 202)

    def delete(self, id):
        scientist = Scientist.query.filter_by(id=id).first()

        if not scientist:
            return make_response({'error': "Scientist not found"}, 404)

        db.session.delete(scientist)
        db.session.commit()

        return make_response({}, 204)

api.add_resource(ScientistById, '/scientists/<int:id>')

class Planets(Resource):
    def get(self):
        planets = Planet.query.all()
        planets_dict = [planet.to_dict() for planet in planets]
        return make_response(planets_dict)

api.add_resource(Planets, '/planets')

class Missions(Resource):
    def post(self):
        data = request.json
        try:
            mission = Mission(name=data.get('name'), \
                            scientist_id=data.get('scientist_id'),\
                            planet_id=data.get('planet_id')
                            )
            db.session.add(mission)
            db.session.commit()
        except:
            return make_response({'errors': ['validation errors']}, 400)

        return make_response(mission.to_dict(), 201)


api.add_resource(Missions, '/missions')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
