import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from flask import Flask, request, jsonify
import datetime
import json

app = Flask(__name__)


@app.route('/post', methods=['POST', 'GET'])
def send_email_to():
    sender = '3003CMS2015@gmail.com'
    password = '20153003'
    session = smtplib.SMTP('smtp.gmail.com:587')
    session.ehlo() 
    session.starttls()
    session.login(sender, password)

    data_str = request.stream.read()
    decoded = json.loads(data_str)
    body = decoded['body']
    receiver = decoded['to']
    subject = "Crisis Update"

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = '3003CMS2015@gmail.com'
    msg['To'] = receiver
    html_body = MIMEText(body, 'html')
    msg.attach(html_body)

    try:
        session.sendmail(sender, receiver, msg.as_string())
        print "Send email done"
    except smtplib.SMTPException:
        print "Error: unable to send email"
    return "OK"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5004)