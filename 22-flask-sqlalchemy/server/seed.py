from config import app, db
from models.dog import Dog


if __name__ == '__main__':
    with app.app_context():
        # delete all dogs in db
        Dog.query.delete()
        db.session.commit()

        # create dog instances
        apollo = Dog(age=2, name="Apollo")
        daisy = Dog(name='Daisy', age=2)
        bailey = Dog(name='Bailey', age=12)

        # add dog instance to db.session and commit
        db.session.add_all([daisy, bailey, apollo])
        db.session.commit()