import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CreateEmployee = ({ addEmployee }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [designation, setDesignation] = useState('');
    const [gender, setGender] = useState('');
    const [course, setCourse] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: Date.now(),
            name,
            email,
            mobile,
            designation,
            gender,
            course,
            image: URL.createObjectURL(image),
        };
        addEmployee(newEmployee);
        Swal.fire('Success', 'Employee Created Successfully', 'success');
        setName('');
        setEmail('');
        setMobile('');
        setDesignation('');
        setGender('');
        setCourse('');
        setImage(null);
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div>
            <h3>Create Employee</h3>
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
                        type="text"
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
                    <input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    />
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateEmployee;
