from flask import Flask,jsonify,request,json
app = Flask(__name__)

@app.route('/')
def home():
    return "Hello World, from Flask!"


@app.route("/api/password", methods = ['GET', 'POST'])
def passwordMethods():
    if request.method == 'GET':
    #Call the method to Get all of the puppies
        return "You cannot access here!"

    elif request.method == 'POST':
    #Call the method to make a new puppy
        return postPassword()


def postPassword():
    #Password Generator start here
    requestData = request.form
    with open('password.json') as f:
        data = json.load(f)


    return data
