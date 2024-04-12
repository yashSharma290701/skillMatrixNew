import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from '../HomePage/Navbar';
import SideBar from '../HomePage/SideBar';
import { useState } from 'react';
import '../styles.css'
export default function Skills() {
    const [data, setdata] = useState({
        employeeID: "",
        skills: "",
        rating: 0

    })

    const handleEvent = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        });
        console.log(data)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/Skills',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data })
            })
        console.log(response)
        if (response.status === 500) {
            alert('Skills not saved')
        }
        if (response.status == 204) {
            alert("Skills Added")
        }
    }
    return (
        <div>
            <Navbar />
            <div className="container-fluid text-center Skills p-0">
                        <SideBar />
            
                    <div className="container">
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <TextField sx={{ width: '100%', maxWidth: 500 }} label="EmployeeId" name="employeeID" variant="filled" className="mb-3 mt-3  empID" onChange={handleEvent} InputLabelProps={{ style: { color: 'brown' } }} />
                            <Box sx={{ width: '100%', maxWidth: 500 }} className="mb-3 mt-2">
                                <FormControl fullWidth >
                                    <InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Skills</InputLabel>
                                    <Select
                                        className='skills'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Skills"
                                        name="skills"
                                        onChange={handleEvent}
                                    >
                                        <MenuItem value="HTML" name="skills">HTML</MenuItem>
                                        <MenuItem value="CSS" name="skills">CSS</MenuItem>
                                        <MenuItem value="JavaScript" name="skills">JavaScript</MenuItem>
                                        <MenuItem value="React" name="skills">React</MenuItem>
                                        <MenuItem value="Angular" name="skills">Angular</MenuItem>
                                        <MenuItem value="Vue.js" name="skills">Vue.js</MenuItem>
                                        <MenuItem value="Node.js" name="skills">Node.js</MenuItem>
                                        <MenuItem value="Express.js" name="skills">Express.js</MenuItem>
                                        <MenuItem value="MongoDB" name="skills">MongoDB</MenuItem>
                                        <MenuItem value="MySQL" name="skills">MySQL</MenuItem>
                                        <MenuItem value="PostgreSQL" name="skills">PostgreSQL</MenuItem>
                                        <MenuItem value="Git" name="skills">Git</MenuItem>
                                        <MenuItem value="Docker" name="skills">Docker</MenuItem>
                                        <MenuItem value="Kubernetes" name="skills">Kubernetes</MenuItem>
                                        <MenuItem value="AWS" name="skills">AWS</MenuItem>
                                        <MenuItem value="Azure" name="skills">Azure</MenuItem>
                                        <MenuItem value="Google Cloud Platform" name="skills">Google Cloud Platform</MenuItem>
                                        <MenuItem value="RESTful API" name="skills">RESTful API</MenuItem>
                                        <MenuItem value="GraphQL" name="skills">GraphQL</MenuItem>
                                        <MenuItem value="CI/CD" name="skills">CI/CD</MenuItem>
                                        <MenuItem value="Agile Methodologies" name="skills">Agile Methodologies</MenuItem>
                                        <MenuItem value="Scrum" name="skills">Scrum</MenuItem>
                                        <MenuItem value="Test-Driven Development" name="skills">Test-Driven Development</MenuItem>
                                        <MenuItem value="Behavior-Driven Development" name="skills">Behavior-Driven Development</MenuItem>
                                        <MenuItem value="DevOps" name="skills">DevOps</MenuItem>
                                        <MenuItem value="Continuous Integration" name="skills">Continuous Integration</MenuItem>
                                        <MenuItem value="Continuous Deployment" name="skills">Continuous Deployment</MenuItem>
                                        <MenuItem value="Microservices" name="skills">Microservices</MenuItem>
                                        <MenuItem value="Containerization" name="skills">Containerization</MenuItem>
                                        <MenuItem value="Machine Learning" name="skills">Machine Learning</MenuItem>
                                        <MenuItem value="Artificial Intelligence" name="skills">Artificial Intelligence</MenuItem>
                                        <MenuItem value="Data Science" name="skills">Data Science</MenuItem>
                                        <MenuItem value="Data Analysis" name="skills">Data Analysis</MenuItem>
                                        <MenuItem value="Data Visualization" name="skills">Data Visualization</MenuItem>
                                        <MenuItem value="Statistical Analysis" name="skills">Statistical Analysis</MenuItem>
                                        <MenuItem value="Cybersecurity" name="skills">Cybersecurity</MenuItem>
                                        <MenuItem value="Network Security" name="skills">Network Security</MenuItem>
                                        <MenuItem value="Penetration Testing" name="skills">Penetration Testing</MenuItem>
                                        <MenuItem value="Cryptography" name="skills">Cryptography</MenuItem>
                                        <MenuItem value="Information Security" name="skills">Information Security</MenuItem>
                                        <MenuItem value="UI/UX Design" name="skills">UI/UX Design</MenuItem>
                                        <MenuItem value="Wireframing" name="skills">Wireframing</MenuItem>
                                        <MenuItem value="Prototyping" name="skills">Prototyping</MenuItem>
                                        <MenuItem value="User Research" name="skills">User Research</MenuItem>
                                        <MenuItem value="Interaction Design" name="skills">Interaction Design</MenuItem>
                                        <MenuItem value="Responsive Design" name="skills">Responsive Design</MenuItem>
                                        <MenuItem value="Accessibility" name="skills">Accessibility</MenuItem>
                                        <MenuItem value="Product Management" name="skills">Product Management</MenuItem>
                                        <MenuItem value="Agile Product Management" name="skills">Agile Product Management</MenuItem>
                                        <MenuItem value="Requirements Analysis" name="skills">Requirements Analysis</MenuItem>
                                        <MenuItem value="User Stories" name="skills">User Stories</MenuItem>
                                        <MenuItem value="Business Analysis" name="skills">Business Analysis</MenuItem>
                                        <MenuItem value="Technical Writing" name="skills">Technical Writing</MenuItem>
                                        <MenuItem value="Documentation" name="skills">Documentation</MenuItem>
                                        <MenuItem value="Support" name="skills">Support</MenuItem>
                                        <MenuItem value="Troubleshooting" name="skills">Troubleshooting</MenuItem>
                                        <MenuItem value="Problem Solving" name="skills">Problem Solving</MenuItem>
                                        <MenuItem value="Communication" name="skills">Communication</MenuItem>
                                        <MenuItem value="Collaboration" name="skills">Collaboration</MenuItem>
                                        <MenuItem value="Leadership" name="skills">Leadership</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box sx={{ width: '100%', maxWidth: 500 }} className="mb-3 mt-2">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Rating</InputLabel>
                                    <Select
                                        className='skills'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Rating"
                                        name="rating"
                                        onChange={handleEvent}
                                    >
                                        <MenuItem value={1} name="rating">1</MenuItem>
                                        <MenuItem value={2} name="rating">2</MenuItem>
                                        <MenuItem value={3} name="rating">3</MenuItem>
                                        <MenuItem value={4} name="rating">4</MenuItem>
                                        <MenuItem value={5} name="rating">5</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>

                            <Button variant="outlined" onClick={handleSubmit} style={{ color: 'brown' }}>Submit</Button>
                        </Box>
                    </div>
                    </div>
                </div>
           
    );
}
