from flask import Flask, request, jsonify
import datetime
import json

app = Flask(__name__)

import twitter
api = twitter.Api(consumer_key='xbcBplidsJnh9Rugl1b4Lp9M5',
                               consumer_secret='XK0Uhp4EHFCr49CxU2Da6MMMbyiABYlZ4mTd7zV2EdL2Ev12Tc',
                               access_token_key='3096290168-Ip8gyaniTV4KRLjAzg1aLyWxRyT4SKPctyZjBkM',
                               access_token_secret='ceNl1BZUj3Qk6IKKRs5HYUrVVoQEmxIrYjPosc5flAR5N')
@app.route('/post', methods=['POST', 'GET'])
def tweet():
    data_str = request.stream.read()
    decoded = json.loads(data_str)
    msg = decoded['body']
    try:
        api.PostUpdate(msg[0:100])
        print "Twitter success"
    except Exception as e:
        print "Twitter messenger failed."
        print e.message
    return "OK"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5002)