from flask import request, make_response
from config import app, db, api
from models import Post, Comment, User
from flask_restful import Resource

import ipdb

class Posts(Resource):
    def get(self):
        posts = Post.query.all()
        posts_list = [post.to_dict(rules=('-comments',)) for post in posts]
        return make_response(posts_list)
    

api.add_resource(Posts, '/posts')

class PostById(Resource):
    def get(self, id):
        post = Post.query.get(id)
        return make_response(post.to_dict())

    def patch(self, id):
        post = Post.query.get(id)
        params = request.json

        for attr in params:
            setattr(post, attr, params[attr])
        
        db.session.commit()

        return make_response(post.to_dict())

    def delete(self, id):
        post = Post.query.get(id)
        db.session.delete(post)
        db.session.commit()

        return make_response('', 204)

api.add_resource(PostById, '/posts/<int:id>')

