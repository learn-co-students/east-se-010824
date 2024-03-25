from config import db
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-created_at', '-updated_at',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    # ✅ Add a column _password_hash
        # Note: When an underscore is used, it's a sign that the variable or method is for internal use.
   
    # ✅ Create a property that will protect the hash from being viewed
    
  
    # ✅ Create a setter method called password_hash that takes self and a password.
        #11.1 Use bcyrpt to generate the password hash with bcrypt.generate_password_hash
        #11.2 Set the _password_hash to the hashed password



    # 12.✅ Create an authenticate method that uses bcyrpt to verify the password against the hash in the DB with bcrypt.check_password_hash 


    def __repr__(self):
        return f'<User id={self.id} username={self.username} >'

class Project(db.Model, SerializerMixin):
    __tablename__ = 'projects'

    serialize_rules = ('-created_at','-updated_at',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    about = db.Column(db.String)
    phase = db.Column(db.String)
    link = db.Column(db.String)
    image = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def __repr__(self):
        return f'<Project id={self.id} name={self.name} >'