from flask import request, make_response, session
from config import app, db, api
from models import Project, User
from flask_restful import Resource

import ipdb

class Projects(Resource):
    def get(self):
        projects = Project.query.all()
        projects_list = [project.to_dict() for project in projects]
        return make_response(projects_list)

    def post(self):
        data = request.json
        try:
            project = Project(name=data['name'],\
                             about=data['about'],\
                             phase=data['phase'],\
                             link=data['link'],\
                             image=data['image']\
                            )
            db.session.add(project)
            db.session.commit()
            return make_response(project.to_dict(), 201)
        except:
            return make_response({'error': "couldn't create project"}, 400)


api.add_resource(Projects, '/projects')

class ProjectById(Resource):
    def get(self, id):
        project = Project.query.get(id)
        return make_response(project.to_dict())

api.add_resource(ProjectById, '/projects/<int:id>')

class Users(Resource):
    def post(self):
        data = request.json
        try:
            user = User(username=data['username'])
            user.password_hash = data['password']

            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id
            response = make_response(user.to_dict(), 201)
        except:
            return make_response({'error': "something went wrong"}, 400)

        return response

api.add_resource(Users, '/users')

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    if not user:
        return make_response({'error': 'invalid username'}, 404)

    if user.authenticate(data['password']):
        session['user_id'] = user.id
        return make_response(user.to_dict(), 200)
    else:
        return make_response({'error': 'invalid username or password'}, 401)


@app.route('/authorized', methods=['GET'])
def authorized():
    user_id = session.get('user_id')
    if user_id:
        user = User.query.filter_by(id=user_id).first()
        return make_response(user.to_dict())
    else:
        return make_response({'error': 'Unauthorized'}, 401)

@app.route('/logout', methods=['DELETE'])
def logout():
    session['user_id'] = None
    return make_response({}, 204)