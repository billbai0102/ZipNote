import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import datetime
import pprint

class Note():
    course_key = 0
    course_name = "None"
    note = ""
    date_added = datetime.datetime.now()

    def __init__(self, course_key, course_name, note):
        self.course_key = course_key
        self.course_name = course_name
        self.note = note
        date_added = datetime.datetime.now()

class DatabaseManager():
    # Fetch the service account key JSON file contents
    cred = credentials.Certificate('static/mhacks12-22906-firebase-adminsdk-lbt7e-d7c9a27bb5.json')
    # Initialize the app with a service account, granting admin privileges
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://mhacks12-22906.firebaseio.com/'
    })

    ref = db.reference('notes')

    def add_note_to_db(self, note):
        new_note = self.ref.push({
                    'course_key': note.course_key,
                    'course_name': note.course_name,
                    'note': note.note
                })

        return new_note.key

    def get_note_key(self, note_key):
        snapshot = self.ref.order_by_key().get()
        for key, val in snapshot.items():
            if(key == note_key):
                return val

    def order_notes_by_key(self):
        data = []
        snapshot = self.ref.order_by_key().get()
        for key, val in snapshot.items():
            data.append(val)

        return data

#DEBUG
n = Note(1, "Computer Science", "COOLLLLLLL")
# print(n.note)
dm = DatabaseManager()
k = dm.add_note_to_db(n)
print(k)
v = dm.get_note_key(k)
print(v)

kl = dm.order_notes_by_key()

for d in kl:
    pprint.pprint(d)