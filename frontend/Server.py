from flask import Flask, send_from_directory, request
from ollama import Client
from pydantic import BaseModel
from flask_cors import CORS 

app = Flask(__name__, static_folder='dist', static_url_path='')
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins for all routes

@app.route('/')
def serve():
    return send_from_directory('dist', 'index.html')

@app.route('/<path:path>')
def serve_path(path):
    return send_from_directory('dist', path)


class Country(BaseModel):
  name: str
  capital: str
  languages: list[str]


client = Client(
  host='https://puny-plums-take.loca.lt',
)



@app.route('/api/chat')
def home():
    message = request.json.get('message')
    
    response = client.chat(
    messages=[
        {
        'role': 'user',
        'content': 'Tell me about Canada.',
        }
    ],
    model='granite3.1-dense',
    format=Country.model_json_schema(),
    )
    return response

if __name__ == '__main__':
    app.run()