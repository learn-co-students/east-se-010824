from config import db
from sqlalchemy_serializer import SerializerMixin

class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    serialize_rules = ('-comments.post',)

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    body = db.Column(db.String)

    comments = db.relationship('Comment', back_populates='post')

class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'

    serialize_rules = ('-post.comments',)

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))

    post = db.relationship('Post', back_populates='comments')

    def __repr__(self):
        return f'<Comment id={self.id}, post_id={self.id}>'