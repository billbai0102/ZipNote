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

    def __init__(self, db_name):
        self.ref = db.reference(db_name)

   

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

    def find_notes_by_course_name(self, course_name):
        data = []
        snapshot = self.ref.order_by_child('course_name').equal_to(course_name).get()
        for key, val in snapshot.items():
            data.append(val)

        return data


#DEBUG
n = Note(2, "Physics", "First Law"
"With no outside forces, objects stay in one place or continue moving at the sape speed and sirection.The first law says that an object at rest tends to stay at rest, and an object in motion tends to stay in motion, with the same direction and speed. Motion (or lack of motion) cannot change without an unbalanced force acting. If nothing is happening to you, and nothing does happen, you will never go anywhere. If you're going in a specific direction, unless something happens to you, you will always go in that direction. Forever."

"You can see good examples of this idea when you see video footage of astronauts. Have you ever noticed that their tools float? They can just place them in space and they stay in one place. There is no interfering force to cause this situation to change. The same is true when they throw objects for the camera. Those objects move in a straight line. If they threw something when doing a spacewalk, that object would continue moving in the same direction and with the same speed unless interfered with; for example, if a planet's gravity pulled on it (Note: This is a really really simple way of descibing a big idea. You will learn all the real details - and math - when you start taking more advanced classes in physics.)."

"Second Law"
"As acceleration increases, the force increases.The second law says that the acceleration of an object produced by a net (total) applied force is directly related to the magnitude of the force, the same direction as the force, and inversely related to the mass of the object (inverse is a value that is one over another number... the inverse of 2 is 1/2). The second law shows that if you exert the same force on two objects of different mass, you will get different accelerations (changes in motion). The effect (acceleration) on the smaller mass will be greater (more noticeable). The effect of a 10 newton force on a baseball would be much greater than that same force acting on a truck. The difference in effect (acceleration) is entirely due to the difference in their masses."

"Third Law"
"The third law says that for every action (force) there is an equal and opposite reaction (force). Forces are found in pairs. Think about the time you sit in a chair. Your body exerts a force downward and that chair needs to exert an equal force upward or the chair will collapse. It's an issue of symmetry. Acting forces encounter other forces in the opposite direction. There's also the example of shooting a cannonball. When the cannonball is fired through the air (by the explosion), the cannon is pushed backward. The force pushing the ball out was equal to the force pushing the cannon back, but the effect on the cannon is less noticeable because it has a much larger mass. That example is similar to the kick when a gun fires a bullet forward.")
# print(n.note)
dm = DatabaseManager("notes")
# k = dm.add_note_to_db(n)
# print(k)
# v = dm.get_note_key(k)
# print(v)

# kl = dm.order_notes_by_key()

# for d in kl:
#     pprint.pprint(d)

cl = dm.find_notes_by_course_name("Physics")
print("\n\n COURSE NAME ONLY\n")
# for d in cl:
    
#     pprint.pprint(d)

pprint.pprint(cl)