from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

userDatabase = []
postDatabase = []

@app.route("/user")
def getUsers():
    users = []
    for user in userDatabase:
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
    for user in userDatabase:
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

    userDatabase.append(data)

    return {"status": "SUCCESS"}


@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == 'POST':
        valideUser = {}

        username = request.json['username']
        password = request.json['password']

        for user in userDatabase:
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


@app.route("/post")
def getPosts():
    return jsonify(postDatabase[::-1])


@app.route("/post", methods=["POST"])
def createPost():

    id = len(postDatabase) + 1
    title = request.json['title']
    username = request.json['username']
    message = request.json['message']
    createdAt = datetime.today().strftime('%d %b, %Y')
    modifiedAt = datetime.today().strftime('%d %b, %Y')

    post = {
        'id': id,
        'title': title,
        'username': username,
        'message': message,
        'createdAt': createdAt,
        'modifiedAt': modifiedAt
    }

    postDatabase.append(post)

    return {"status": "SUCCESS"}


if __name__ == "__main__":
    app.run()
