from flask import Flask, request, jsonify, make_response
import joblib
import numpy as np
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

classifier = joblib.load("random_forest_grade.joblib")

@app.route("/", methods = ['GET']) 
def home():
    return "Hello world"

@app.route("/grades", methods=['POST', "GET"])
def grades():
    if request.method == "POST":
        try:
            formData = request.json
            data = [val for val in formData.values()]
            prediction = classifier.predict(np.array(data).reshape(1, -1))
            types = {0:"A",1:"B",2:"C",3:"D",4:"F"}
            response = jsonify({
            "statusCode": 200,
            "status": data,
            "result":types[prediction[0]]
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        except Exception as error:
            return jsonify({
                "statusCode": 500,
                "status": "Could not make prediction",
                "result":"Could not make prediction",
                "error": str(error)
            })
    
if __name__ == "__main__":
    app.run(debug=True)