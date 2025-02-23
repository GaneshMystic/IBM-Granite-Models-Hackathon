from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Example data (replace with your actual data or logic)
data = {"message": "Hello from the Python server!"}


@app.route('/api/data', methods=['GET'])
def get_data():
    """Returns data with CORS headers."""
    return jsonify(data)  # Flask automatically adds appropriate CORS headers


@app.route('/api/post_data', methods=['POST'])  # Example POST route
def post_data():
    """Handles POST requests with CORS."""
    try:
        # Get data from the request (e.g., JSON payload)
        request_data = request.get_json()  # Assuming JSON data
        # Process request_data (e.g., store in database)

        response = {"message": "Data received successfully!",
                    "data": request_data}
        return jsonify(response), 201  # 201 Created status code

    except Exception as e:
        return jsonify({"error": str(e)}), 400  # Bad Request


if __name__ == '__main__':
    from flask import request  # Import request within the if __name__ == '__main__' block
    app.run(port=5000)  # Run the server on port 5000
