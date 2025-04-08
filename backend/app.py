from flask import Flask,jsonify, send_from_directory  # type: ignore
from flask_cors import CORS  # type: ignore
import os 

app = Flask(__name__)
CORS(app)

frontend_folder = os.path.join(os.getcwd(),"..","frontend")
dist_folder = os.path.join(frontend_folder,"dist")

@app.route("/",defaults={"filename":""})
@app.route("/<path:filename>")
def index(filename):
  if not filename:
    filename = "index.html"
  return send_from_directory(dist_folder,filename)

import routes




if __name__ == "__main__":
    app.run(debug=True)
