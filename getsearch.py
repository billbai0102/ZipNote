import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

def getInfoByHash(filename):
    # Fetch the service account key JSON file contents
    cred = credentials.Certificate('app\static\mhacks12-22906-firebase-adminsdk-lbt7e-d7c9a27bb5.json')
    # Initialize the app with a service account, granting admin privileges
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://mhacks12-22906.firebaseio.com/'
    })

    reference = 'notes/' + filename
    
    ref = db.reference(reference)

    arr = (ref.get()['course_key'], ref.get()['course_name'], ref.get()['note'])
    return arr