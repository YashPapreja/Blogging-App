from flask import Flask, render_template, abort, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

database = []

@app.route("/user")
def allUsers():
    return jsonify(database)

@app.route("/user/<username>")
def user(username):
    for user in database:
        if(user['username']==username):
            return jsonify(True)
    
    return jsonify(False)

@app.route("/signup", methods=["POST"])
def addUserToDatabase():
    
    data =  {
                'firstName': request.json['firstName'], 
                'lastName': request.json['lastName'], 
                'age': request.json['age'], 
                'gender': request.json['gender'], 
                'username': request.json['username'], 
                'password': request.json['password'], 
                'rePassword': request.json['rePassword']
            }
    
    # data =  {
    #             'firstName': request.form['firstName'], 
    #             'lastName': request.form['lastName'], 
    #             'age': request.form['age'], 
    #             'gender': request.form['gender'], 
    #             'username': request.form['username'], 
    #             'password': request.form['password'], 
    #             'rePassword': request.form['rePassword']
    #         }
    
    database.append(data)
    
    return {"status":"SUCCESS"}

@app.route("/login", methods=["GET", "POST"])
def login():
    
    if request.method == 'POST':
        valideUser = {}
        
        username = request.json['username']
        password = request.json['password']
        
        for user in database:
            if user['username']==username and user['password']==password:
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