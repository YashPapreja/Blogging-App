from flask import Flask, render_template, abort, jsonify

app = Flask(__name__)

database = ["Yash", "Jatin", "Moti"]

@app.route("/user")
def allUsers():
    return jsonify(database)

@app.route("/user/<username>", methods=["POST"])
def addUserToDatabase(username):
    database.append(username)
    return database
    
app.run()