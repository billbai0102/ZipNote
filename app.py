from flask import Flask, render_template, request, flash, redirect
import getsearch
from forms import AddNoteForm

app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guess'
from database import DatabaseManager, Note
import firebase_admin
from firebase_admin import credentials
from twilio.twiml.messaging_response import MessagingResponse
import translation

import pprint

app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guess'

if (not len(firebase_admin._apps)):
    cred = credentials.Certificate('static/mhacks12-22906-firebase-adminsdk-lbt7e-d7c9a27bb5.json')
    default_app = firebase_admin.initialize_app(cred,  {'databaseURL': 'https://mhacks12-22906.firebaseio.com/'})

lang = ""
previous = ""

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

'''
@app.route("/sms", methods=['GET', 'POST'])
def sms_ahoy_reply():
    """"Respond to incoming messages with a friendly SMS.""""
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
        course_name = form.course_name.data
        new_note = Note( form.course_key.data, course_name.lower(), form.note.data)
        notesManager.add_note_to_db(new_note)
        return redirect('/index')
    return render_template('add_note.html', title='Add New Note', form=form)