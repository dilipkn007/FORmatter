from flask import render_template,request,jsonify
from app import app


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get',methods=['POST'])
def get():
    data=request.json
    return jsonify(data)

