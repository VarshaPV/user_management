import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';

class App extends Component{

    state = {

        users:[
          {firstname:" test", lastname: "user", email: "test@gmail.com", password: 1234, username: "test user", isEditing:false},
          {firstname:" varsha", lastname: "g", email: "varsha@gmail.com", password: 1234, username: " varsha", isEditing:false} 
    
        ]
      }
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      
      
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
            <div className="container">
                <h1>User Management System</h1>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;