from flask import Flask, request, jsonify
import datetime
import json

app = Flask(__name__)

import facebook

graph = facebook.GraphAPI("CAACEdEose0cBACoKuycn6AUZBqi57nJa8O6zTSTevjMO1GDM0zCP0A42flRUkzazqrm8UihmbWJ4YH6W8w58z3sfEngsncR1VZCCz78bLeNh6e2ciODGd4BJS2z6JL1nOBdrrdm3E1yIZAVzjo6bYOZCNmNkBJVxzntRYhDcZALMZBJEzHWXKKEKygwPLJTnqW01wuIqsuEAZDZD")

@app.route('/post', methods=['POST', 'GET'])
def post_message():
    # msg = "test"
    data_str = request.stream.read()
    decoded = json.loads(data_str)
    msg = decoded['body']
    try:
        graph.put_object('me', "feed", message=msg)
        print "Facebook success"
    except Exception as e:
        print "Facebook update failed"
        print e.message
    return "OK"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)