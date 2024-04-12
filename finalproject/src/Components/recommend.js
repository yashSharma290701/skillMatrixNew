import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar';
import SideBar from '../HomePage/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

function Recommend() {
  const [userInput, setUserInput] = useState('');
  const [recommendedEmployee, setRecommendedEmployee] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/recommend_employee', {
        user_input: userInput
      });
      setRecommendedEmployee(response.data.recommended_employee);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid text-center dashboard p-0">
        <SideBar />
        <div className="container mt-4 recommendation">
          <div className="card bg-dark text-white shadow" style={{ width: '70%', height: '80%' }}>
            <div className="card-body">
              <h1 className="card-title">Employee Recommendation System</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="userInput">Enter required skills for the project:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userInput"
                    value={userInput}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Recommend Employee</button>
              </form>
              {recommendedEmployee && (
                <div className="mt-4">
                  <h2>Recommended Employee:</h2>
                  <p className="card-text">{recommendedEmployee}</p>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Recommend;
