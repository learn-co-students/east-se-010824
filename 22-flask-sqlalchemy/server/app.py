from flask import make_response, request
from config import app, db

import ipdb

from models.dog import Dog

@app.route('/dogs', methods=['GET', 'POST'])
def dogs():
    if request.method == 'GET':
        all_dog_instances = Dog.query.all()

        dogs_dict = [dog.to_dict() for dog in all_dog_instances]

        return make_response(dogs_dict)
    
    elif request.method == 'POST':
        params = request.json
        new_dog = Dog(name=params["name"], age=params["age"])

        db.session.add(new_dog)
        db.session.commit()

        return make_response(new_dog.to_dict(), 201)

@app.route('/dogs/<int:id>', methods=['GET'])
def dog_by_id(id):
    found_dog = Dog.query.get(id)
    return make_response(found_dog.to_dict())