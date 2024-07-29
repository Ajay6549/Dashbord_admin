import React, { useState } from 'react';

const EmployeeList = ({ employees, setEditingEmployee }) => {
    const [search, setSearch] = useState('');

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h3>Employee List</h3>
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredEmployees.map(employee => (
                    <li key={employee.id}>
                        <img src={employee.image} alt={employee.name} width="50" height="50" />
                        {employee.name} - {employee.designation}
                        <button onClick={() => setEditingEmployee(employee)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
