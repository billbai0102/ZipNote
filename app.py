from flask import Flask, render_template, request
import getsearch

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route("/index")
def index():
    return render_template('index.html')

@app.route('/pass_val',methods=['POST'])
def pass_val():
    name=request.args.get('value')
    print('name',name)
    print(getsearch.getInfoByHash('-LqyiulvtclaFSFsC4_Q')[2])
    