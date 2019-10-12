from flask import Flask, render_template, request
import getsearch
from database import DatabaseManager
import firebase_admin
from firebase_admin import credentials
from twilio.twiml.messaging_response import MessagingResponse
import translation

app = Flask(__name__)

if (not len(firebase_admin._apps)):
    cred = credentials.Certificate('static/mhacks12-22906-firebase-adminsdk-lbt7e-d7c9a27bb5.json')
    default_app = firebase_admin.initialize_app(cred,  {'databaseURL': 'https://mhacks12-22906.firebaseio.com/'})

lang = ""
previous = ""

dm = DatabaseManager("super_notes")

@app.route('/')
def main():
    return render_template('index.html')


@app.route("/index")
def index():
    data = get_supernote("Physics")
    user = "Bill"
    return render_template('index.html', data=data, user=user)
@app.route('/pass_val',methods=['POST'])
def pass_val():
    name=request.args.get('value')
    print('name',name)
    print(getsearch.getInfoByHash('-LqyiulvtclaFSFsC4_Q')[2])


'''
@app.route("/sms", methods=['GET', 'POST'])
def sms_ahoy_reply():
    """Respond to incoming messages with a friendly SMS."""
    resp = MessagingResponse()
    lang = str(resp)
    resp.message(translation.createTranslation("Enter a course you wish to learn about.", language=lang))
    return str(resp)
    # # Add a message
    # resp.message("Hello")

    # return str(resp)

'''

def get_supernote(course):
    cl = dm.find_notes_by_course_name(course)
    return cl


    return render_template('index.html')

@app.route("/results")
def results():
    return render_template('results.html')

@app.route('/<search>', methods=['GET', 'POST'])
def pass_val(search):
    print(search)
    if("phy" in search.)
    return render_template('index.html')
