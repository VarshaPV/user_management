import React, { Component } from 'react';

class Users extends Component{

    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.firstname.value, this.lastname.value, this.email.value, this.password.value, this.username.value);
    }

    render(){

        const {allUsers, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.firstname = val}} required defaultValue={user.firstname}/></td>
                    <td><input type="text" ref={(val) => {this.lastname = val}} required defaultValue={user.lastname}/></td>
                    <td><input type="text" ref={(val) => {this.email = val}} required defaultValue={user.email}/></td>
                    <td><input type="text" ref={(val) => {this.password = val}} required defaultValue={user.password}/></td>
                    <td><input type="text" ref={(val) => {this.username = val}} required defaultValue={user.username}/></td>
                    <td>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.username}</td>
                    <td> <button className="btn red" onClick={()=>pressDelete(index)}>Delete</button></td>
                </tr>

            );
        });

        return(
            <table className="striped">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>User Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}

export default Users;