import React, { useState } from "react";
import "./App.css";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rollNo: "",
    course: "",
    year: "",
  });

  const [submitted, setSubmitted] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    setSubmitted(formData);
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        <input type="text" name="rollNo" placeholder="Roll No" value={formData.rollNo} onChange={handleChange} />
        <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} />
        <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange} />

        {error && <p className="error">{error}</p>}

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="submitted-data">
          <p><b>Name:</b> {submitted.name}</p>
          <p><b>Email:</b> {submitted.email}</p>
          <p><b>Password:</b> {submitted.password}</p>
          <p><b>Roll No:</b> {submitted.rollNo}</p>
          <p><b>Course:</b> {submitted.course}</p>
          <p><b>Year:</b> {submitted.year}</p>
        </div>
      )}
    </div>
  );
}

export default Registration;
