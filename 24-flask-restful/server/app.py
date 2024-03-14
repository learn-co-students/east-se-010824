from flask import request, make_response
from config import app, db, api
from models import Post, Comment, User
from flask_restful import Resource

import ipdb
#  @app.route('/posts', methods=["GET"])
# def all_posts():
#     posts = Post.query.all()
#     posts_list = [post.to_dict(rules=('-comments',)) for post in posts]
#     return make_response(posts_list)

class Posts(Resource):
    def get(self):
        posts = Post.query.all()
        posts_list = [post.to_dict(rules=('-comments',)) for post in posts]
        return make_response(posts_list)
    
    # def post(self):
    #     print('create new post')

api.add_resource(Posts, '/posts')

# @app.route('/posts/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
# def post_by_id(id):
#     post = Post.query.get(id)
    # if request.method == 'PATCH':
    #     params = request.json

    #     for attr in params:
    #         setattr(post, attr, params[attr])
        
    #     db.session.commit()

    #     return make_response(post.to_dict())
    # elif request.method == 'DELETE':
    #     db.session.delete(post)
    #     db.session.commit()

    #     return make_response('', 204)

    # elif request.method == 'GET':
    #     return make_response(post.to_dict())

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

# if __name__ == '__main__':
#     app.run()