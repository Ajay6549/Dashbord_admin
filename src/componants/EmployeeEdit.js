import React, { useState } from 'react';
import styles from './EmployeeForm.module.css';

const EmployeeEdit = ({ employee, updateEmployee, deleteEmployee, setEditingEmployee }) => {
    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [mobile, setMobile] = useState(employee.mobile);
    const [designation, setDesignation] = useState(employee.designation);
    const [gender, setGender] = useState(employee.gender);
    const [course, setCourse] = useState(employee.course);
    const [image, setImage] = useState(employee.image);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedEmployee = {
            ...employee,
            name,
            email,
            mobile,
            designation,
            gender,
            course,
            image,
        };
        updateEmployee(updatedEmployee);
        setEditingEmployee(null);
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className={styles['form-container']}>
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mobile</label>
                    <input
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Designation</label>
                    <input
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Gender</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label>Course</label>
                    <input
                        type="text"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Image</label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Update</button>
                <button
                    type="button"
                    onClick={() => deleteEmployee(employee.id)}
                    className={styles.delete}
                >
                    Delete
                </button>
            </form>
        </div>
    );
};

export default EmployeeEdit;
