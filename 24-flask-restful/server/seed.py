from models import Post, Comment, User
from config import db, app

if __name__ == '__main__':
    with app.app_context():
        Post.query.delete()
        Comment.query.delete()
        User.query.delete()

        p1 = Post(title="Coding is awesome", body="Love learning python and javascript!")
        p2 = Post(title="Sqlalchemy", body="Sqlalchemy makes our life easier!")

        db.session.add_all([p1, p2])
        db.session.commit()

        u1 = User(username="emiley")
        u2 = User(username="apollo")

        db.session.add_all([u1, u2])
        db.session.commit()

        c1 = Comment(content="Cool!", post_id=p1.id, user_id=u1.id)
        c2 = Comment(content="Agree!", post_id=p1.id, user_id=u2.id)
        c3 = Comment(content="The best", post_id=p2.id, user_id=u1.id)

        db.session.add_all([c1,c2,c3])
        db.session.commit()