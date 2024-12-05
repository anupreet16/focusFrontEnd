
import React from 'react';
import { deleteUser } from './services/api';

function UserList({ users, onEdit, fetchUsers }){
    const handleDelete = async (id) => {
        await deleteUser(id);
        fetchUsers();
    };

    return (
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {Array.isArray(users)? (users.map (user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => onEdit(user)}>Edit</button>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>

                        </tr>
                    ))):''}
                </tbody>
            </table>
        </div>
    );
};
export default UserList;