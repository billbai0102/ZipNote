from flask import Flask, render_template, request
import getsearch

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('index.html')


@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/results")
def results():
    return render_template('results.html')

@app.route('/<search>', methods=['GET', 'POST'])
def pass_val(search):
    print(search)
    
    return render_template('index.html')

