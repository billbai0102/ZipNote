from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, TextAreaField
from wtforms.validators import DataRequired

class AddNoteForm(FlaskForm):
    course_key = StringField('Course Key', validators=[DataRequired()])
    course_name = StringField('Course Name', validators=[DataRequired()])
    note = TextAreaField('Note', validators=[DataRequired()])
    submit = SubmitField('Submit Note')
