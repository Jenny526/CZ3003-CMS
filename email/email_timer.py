import threading
import requests
import json

email_server = "http://localhost:5004/post"
server_address = "http://10.27.163.216:5000/report"

def send_report():
    #300.0
    threading.Timer(1800.0, send_report).start()
    print "send report"
    to = 'guoj0019@e.ntu.edu.sg'
    r = requests.get(server_address)
    print r.text
    body = r.text
    data = {
        "to": to,
        "body": body
    }
    print "send report"
    requests.post(email_server, data=json.dumps(data))
    print "send report done"

send_report()