from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, TextAreaField
from wtforms.validators import DataRequired

class AddNoteForm(FlaskForm):
    course_key = StringField('Course Key', validators=[DataRequired()])
    course_name = StringField('Course Name', validators=[DataRequired()])
    note = TextAreaField('Note', validators=[DataRequired()])
    submit = SubmitField('Submit Note')

class SuperNoteForm(FlaskForm):
    key1 = StringField('Key Note 1:', validators=[DataRequired()])
    key2 = StringField('Key Note 2:', validators=[DataRequired()])
    submit = SubmitField('Generate Super Note')