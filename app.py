from flask import Flask, render_template, request, flash, redirect
import getsearch
from forms import AddNoteForm

app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guess'
from database import DatabaseManager
import firebase_admin
from firebase_admin import credentials
from twilio.twiml.messaging_response import MessagingResponse
from twilio.rest import Client
import translation

app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guess'

if (not len(firebase_admin._apps)):
    cred = credentials.Certificate('static/mhacks12-22906-firebase-adminsdk-lbt7e-d7c9a27bb5.json')
    default_app = firebase_admin.initialize_app(cred,  {'databaseURL': 'https://mhacks12-22906.firebaseio.com/'})

lang = ""
previous = ""
account_sid = 'ACfb14e1aca55a02457161456ad28e2311'
auth_token = 'cb9d1579d693aa64d9e4d7a113efebbe'

dm = DatabaseManager("super_notes")

@app.route('/')
def main():
    return render_template('index.html')


@app.route("/index")
def index():
    data = get_supernote("Physics")
    user = "Bill"
    return render_template('index.html', data=data, user=user)


#####TWILIO######
@app.route("/sms", methods=['GET', 'POST'])
def sms_ahoy_reply():
    client = Client(account_sid, auth_token)
    resp = MessagingResponse()
    premes = ""
    messages = client.messages.list(limit=1)

    for record in messages:
        premes=record.body
    lang = premes
    resp.message(translation.createTranslation("Enter a course you wish to learn about.", language=lang))
    return str(resp)

def get_supernote(course):
    cl = dm.find_notes_by_course_name(course)
    return cl

@app.route("/results")
def results():
    return render_template('results.html')

@app.route('/<search>', methods=['GET', 'POST'])
def pass_val(search):
    print(search)

    return render_template('index.html')


@app.route('/add_note')
def add_note():
    form = AddNoteForm()
    return render_template('addnote.html', title='Add New Note', form=form)

@app.route('/add_note', methods=['GET', 'POST'])
def login():
    form = AddNoteForm()
    if form.validate_on_submit():
        flash('Note Added: With course key: {} and Course Name: {}'.format(
            form.course_key.data, form.course_name.data))
        return redirect('/index')
    return render_template('add_note.html', title='Add New Note', form=form)