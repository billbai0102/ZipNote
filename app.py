from flask import Flask, render_template, request, flash
import getsearch
from forms import AddNoteForm

app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guess'

@app.route('/')
def main():
    return render_template('index.html')


@app.route("/index")
def index():
    return render_template('index.html')


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