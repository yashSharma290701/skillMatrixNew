from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import euclidean_distances
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Sample data
data = pd.read_csv('modelData.csv')

# Create DataFrame
df = pd.DataFrame(data)

# Concatenate columns into a single string for each row
df['combined'] = df['COURSENAME'] + " " + df['TECHSTACK'] + " " + df['skills']

# Vectorize the combined strings
vectorizer = CountVectorizer()
skill_vectors = vectorizer.fit_transform(df['combined'])

@app.route('/recommend_employee', methods=['POST'])
def recommend_employee():
    # Get user input string from request
    user_string = request.json['user_input']
    
    # Vectorize user input
    user_vector = vectorizer.transform([user_string])
    
    # Calculate Euclidean distances between the user vector and each employee vector
    distances = euclidean_distances(user_vector, skill_vectors)
    
    # Find the index of the employee with the smallest distance
    recommended_index = distances.argmin()
    
    # Get the name of the recommended employee
    recommended_employee = df.iloc[recommended_index]['userId']
    
    return jsonify({"recommended_employee": recommended_employee})

if __name__ == '__main__':
    app.run(debug=True)
