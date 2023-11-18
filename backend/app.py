from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

database = []

@app.route("/user")
def getUsers():
    users = []
    for user in database:
        valideUser = {
            'firstName': user['firstName'],
            'lastName': user['lastName'],
            'age': user['age'],
            'gender': user['gender'],
            'username': user['username']
        }

        users.append(valideUser)

    return jsonify(users)


@app.route("/user/<username>")
def getUser(username):
    for user in database:
        if (user['username'] == username):
            return jsonify(True)

    return jsonify(False)


@app.route("/signup", methods=["POST"])
def addUserToDatabase():

    data = {
        'firstName': request.json['firstName'],
        'lastName': request.json['lastName'],
        'age': request.json['age'],
        'gender': request.json['gender'],
        'username': request.json['username'],
        'password': request.json['password'],
        'rePassword': request.json['rePassword']
    }

    database.append(data)

    return {"status": "SUCCESS"}


@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == 'POST':
        valideUser = {}

        username = request.json['username']
        password = request.json['password']

        for user in database:
            if user['username'] == username and user['password'] == password:
                valideUser = {
                    'firstName': user['firstName'],
                    'lastName': user['lastName'],
                    'age': user['age'],
                    'gender': user['gender'],
                    'username': user['username']
                }
                break

        return valideUser


if __name__ == "__main__":
    app.run()
