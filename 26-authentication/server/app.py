from flask import request, make_response
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

