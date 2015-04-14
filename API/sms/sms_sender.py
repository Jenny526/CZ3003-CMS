from twilio.rest import TwilioRestClient
from flask import Flask, request, jsonify
import datetime
import json

app = Flask(__name__)

account_sid = 'AC898b702f8fc181d66c0d16efb7f437a6'
auth_token = '739d1612e1ccfb1ebe7a15083ee7bdab'
client = TwilioRestClient(account_sid, auth_token)

@app.route('/post', methods=['POST', 'GET'])
def post():
    try:
        data_str = request.stream.read()
        print data_str
        decoded = json.loads(data_str)
        msg = decoded['body']
        to = decoded['to']
        print "Send"
        send_message(to, msg)
    except Exception as e:
        print "Error"
        print e.message
    return "OK"


def send_message(user, message):
    try:
        client.messages.create(body=message, to=user, from_='+61409127485')
        print "SMS success to" + user
    except Exception as e:
    	print e.message
        print "SMS failed to " + user
        
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5003)