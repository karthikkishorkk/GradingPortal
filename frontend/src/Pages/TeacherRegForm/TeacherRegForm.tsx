import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import './TeacherRegStyle.css';

function TeacherRegForm() {
  const [formData, setFormData] = useState({
    facultyName: '',
    department: '',
    position: '',
  });

  const [teachers, setTeachers] = useState([]);

  const departments = [
    'Computer Science',
    'Electronics & Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Mathematics',
    'Physics',
    'Chemistry',
  ];

  const positions = ['HOD', 'Professor', 'Associate Professor', 'Assistant Professor'];

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    const querySnapshot = await getDocs(collection(db, 'teachers'));
    const teacherList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTeachers(teacherList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, 'teachers'), formData);
      alert('Teacher added successfully!');
      setFormData({ facultyName: '', department: '', position: '' });
      fetchTeachers();
    } catch (error) {
      console.error('Error adding teacher:', error);
    }
  };

  return (
    <div className='teacher-reg-window'>
      <h1>Teacher Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Faculty Name:</label>
        <input type="text" name="facultyName" value={formData.facultyName} onChange={handleChange} required />

        <label>Department:</label>
        <select name="department" value={formData.department} onChange={handleChange} required>
          <option value="">Select Department</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>

        <label>Position:</label>
        <select name="position" value={formData.position} onChange={handleChange} required>
          <option value="">Select Position</option>
          {positions.map((pos, index) => (
            <option key={index} value={pos}>{pos}</option>
          ))}
        </select>

        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
      </form>

      <h2>Registered Teachers</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.facultyName} - {teacher.department} ({teacher.position})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherRegForm;
