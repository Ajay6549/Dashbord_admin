import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList';
import EmployeeEdit from './EmployeeEdit';

const Dashboard = ({ username, onLogout }) => {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);

    const addEmployee = (employee) => {
        setEmployees([...employees, employee]);
    };

    const updateEmployee = (updatedEmployee) => {
        setEmployees(employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
        setEditingEmployee(null);
    };

    return (
        <div>
            <header className={styles.header}>
                <h2>Welcome, {username}</h2>
                <button onClick={onLogout}>Logout</button>
            </header>
            <nav className={styles.nav}>
                <button onClick={() => setEditingEmployee(null)}>Create Employee</button>
                <button onClick={() => setEditingEmployee('list')}>Employee List</button>
            </nav>
            <div>
                {editingEmployee === 'list' ? (
                    <EmployeeList employees={employees} setEditingEmployee={setEditingEmployee} />
                ) : editingEmployee ? (
                    <EmployeeEdit
                        employee={editingEmployee}
                        updateEmployee={updateEmployee}
                        deleteEmployee={deleteEmployee}
                        setEditingEmployee={setEditingEmployee}
                    />
                ) : (
                    <CreateEmployee addEmployee={addEmployee} />
                )}
            </div>
        </div>
    );
};

export default Dashboard;
