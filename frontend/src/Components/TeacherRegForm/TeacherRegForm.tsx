import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { db } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import './TeacherRegStyle.css';

function TeacherRegForm() {
  const [formData, setFormData] = useState({
    facultyName: '',
    department: '',
    position: '',
    profilePhoto: '',
  });

  const [teachers, setTeachers] = useState([]);

  const departments = [
    'Computer Science', 'Electronics & Communication', 'Mechanical Engineering',
    'Civil Engineering', 'Electrical Engineering', 'Mathematics', 'Physics', 'Chemistry'
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

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({ ...formData, profilePhoto: reader.result });
      };
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'teachers'), formData);
      alert('Teacher added successfully!');
      setFormData({ facultyName: '', department: '', position: '', profilePhoto: '' });
      fetchTeachers();
    } catch (error) {
      console.error('Error adding teacher:', error);
    }
  };

  return (
    <div className='teacher-reg-window'>
      <div className='teacher-reg-container'>
        <h1>Teacher Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-grid'>
            <div className="form-column">
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
            </div>

            <div className="form-column">
              <label>Profile Photo:</label>
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                {isDragActive ? <p>Drop the image here...</p> : <p>Drag & drop or click to upload</p>}
              </div>
              {formData.profilePhoto && <img src={formData.profilePhoto} alt="Profile Preview" className="profile-preview" />}
            </div>
          </div>

          <div className="button-group">
            <button type="submit">Save</button>
            <button type="reset" onClick={() => setFormData({ ...formData, profilePhoto: '' })}>Cancel</button>
          </div>
        </form>

        <h2>Registered Teachers</h2>
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher.id} className="teacher-card">
              {teacher.profilePhoto && <img src={teacher.profilePhoto} alt="Profile" className="profile-photo" />}
              <div>
                <strong>{teacher.facultyName}</strong> - {teacher.department} ({teacher.position})
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeacherRegForm;
