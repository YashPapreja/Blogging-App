from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient('localhost', 27017)
database = client['BloggingApp'] 

userCollection = database['users'] 
postCollection = database['posts']

userDatabase = []
postDatabase = []

useMongoDB = True

@app.route("/user")
def getUsers():

    users = []

    if useMongoDB:
        users = list(userCollection.find({},{'_id':0, 'password':0, 'rePassword':0}))
    else:
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

    if useMongoDB:
        user = userCollection.find_one({"username": username})
        if user:
            return jsonify(True)
    else:
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

    if useMongoDB:
        userCollection.insert_one(data) 
    else:
        userDatabase.append(data)

    return {"status": "SUCCESS"}


@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == 'POST':
        valideUser = {}

        username = request.json['username']
        password = request.json['password']

        if useMongoDB:
            valideUser = userCollection.find_one({"username": username, "password": password},
                                                 {'_id':0, 'password':0, 'rePassword':0})
        else:
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

    if useMongoDB:
        postData = list(postCollection.aggregate([
                            {'$addFields': {'id': {"$toString": "$_id"}}},
                            {'$project': {'_id': 0}},
                            {'$sort': {'time': -1}}
                             ]))
        
        return jsonify(postData)
    else:
        return jsonify(postDatabase[::-1])


@app.route("/post/<username>")
def getPost(username):
    
    requiredPosts = []

    if useMongoDB:
        requiredPosts = list(postCollection.aggregate([
                            {'$match': {"username": username}},
                            {'$addFields': {'id': {"$toString": "$_id"}}},
                            {'$project': {'_id': 0}},
                            {'$sort': {'time': -1}}
                             ]))
        
        return jsonify(requiredPosts)
    else:
        for post in postDatabase:
            if post['username'] == username:
                requiredPosts.append(post)

        return jsonify(requiredPosts[::-1])


@app.route("/post", methods=["POST"])
def createPost():

    title = request.json['title']
    username = request.json['username']
    message = request.json['message']
    createdAt = datetime.today().strftime('%d %b, %Y')
    modifiedAt = datetime.today().strftime('%d %b, %Y')
    time = datetime.now()

    post = {
        'title': title,
        'username': username,
        'message': message,
        'createdAt': createdAt,
        'modifiedAt': modifiedAt,
        'time': time
    }

    if useMongoDB:
        postCollection.insert_one(post)
    else:
        id = len(postDatabase) + 1
        post['id'] = id
        postDatabase.append(post)

    return {"status": "SUCCESS"}


if __name__ == "__main__":
    app.run()
