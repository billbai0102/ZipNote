import pprint
from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
from firebase_admin import credentials
import firebase_admin
from database import DatabaseManager, Note
from flask import Flask, render_template, request, flash, redirect
import getsearch
from forms import AddNoteForm
import os
import translation

credential_path = "TranslationKey.json"
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path
app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guess'

lang = "en"


app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guess'

if (not len(firebase_admin._apps)):
    cred = credentials.Certificate(
        'static/mhacks12-22906-firebase-adminsdk-lbt7e-d7c9a27bb5.json')
    default_app = firebase_admin.initialize_app(
        cred,  {'databaseURL': 'https://mhacks12-22906.firebaseio.com/'})
previous = ""
account_sid = 'ACfb14e1aca55a02457161456ad28e2311'
auth_token = 'cb9d1579d693aa64d9e4d7a113efebbe'

dm = DatabaseManager("super_notes")
notesManager = DatabaseManager("notes")


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
    global lang
    courses = ["physics", "computer science"]  # WHERE THE COURSES ARE STORED
    client = Client(account_sid, auth_token)
    resp = MessagingResponse()
    premes = ""
    messages = client.messages.list(limit=1)
    for record in messages:
        premes = record.body
    if(translation.createTranslation(premes, "English").lower() in courses):
        super_notes_list = dm.find_notes_by_course_name(premes)
        for note in super_notes_list:
            sn_translated = translation.createTranslation(note['note'], lang)
        resp.message(sn_translated)
        return str(resp)
    lang = str(premes)
    resp.message(translation.createTranslation(
        "Enter a course you wish to learn about.", language=lang))
    return str(resp)


def get_supernote(course):
    cl = dm.find_notes_by_course_name(course)
    return cl


@app.route("/results")
def results():
    return render_template('results.html')


@app.route('/<search>/<language>', methods=['GET', 'POST'])
def pass_val(search, language):
    print(search + language)
    s = translation.createTranslation(search, "EN")
    print(s)
    super_notes_list = dm.find_notes_by_course_name(s)
    pprint.pprint(super_notes_list)
    for note in super_notes_list:
        sn_translated = translation.createTranslation(note['note'], language)
        pprint.pprint(sn_translated)
    return render_template('index.html')


@app.route('/addnote.html')
def add_note():
    form = AddNoteForm()
    return render_template('addnote.html', title='Add New Note', form=form)


@app.route('/add_note', methods=['GET', 'POST'])
def login():
    form = AddNoteForm()
    if form.validate_on_submit():
        flash('Note Added: With course key: {} and Course Name: {}'.format(
            form.course_key.data, form.course_name.data))
        course_name = form.course_name.data
        new_note = Note(form.course_key.data,
                        course_name.lower(), form.note.data)
        notesManager.add_note_to_db(new_note)
        return redirect('/index')
    return render_template('add_note.html', title='Add New Note', form=form)
