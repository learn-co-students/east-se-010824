from flask import request, make_response
from config import app, db
from models import Post, Comment

import ipdb

@app.route('/posts', methods=["GET"])
def all_posts():
    posts = Post.query.all()
    posts_list = [post.to_dict(rules=('-comments',)) for post in posts]
    return make_response(posts_list)

@app.route('/posts/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def post_by_id(id):
    post = Post.query.get(id)
    if request.method == 'PATCH':
        params = request.json

        for attr in params:
            setattr(post, attr, params[attr])
        
        db.session.commit()

        return make_response(post.to_dict())
    elif request.method == 'DELETE':
        db.session.delete(post)
        db.session.commit()

        return make_response('', 204)

    elif request.method == 'GET':
        return make_response(post.to_dict())
