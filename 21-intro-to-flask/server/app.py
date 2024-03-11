from flask import Flask, make_response, request
import ipdb

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return make_response('<h1>Hello world</h1>')
    elif request.method == 'POST':
        body = request.json['potato']
        # create something new with the data sent in the body
        return make_response(body)

@app.route('/cats/<int:id>', methods=['GET'])
def cat_by_id(id):
    # find cat by id
    return make_response(f"found cat by id of {id}")

if __name__ == '__main__':
    app.run(port=5555, debug=True)