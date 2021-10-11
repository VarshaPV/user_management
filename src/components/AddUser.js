import React,{ Component } from 'react';

class AddUser extends Component{

    state = {
        firstname:null,
        lastname:null,
        email:null,
        password:null,
        username:null,
        isEditing:false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        e.target.reset();

    }
  

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                <div className="input-field col s2">
                        <input name="firstname" autoComplete="off" placeholder="Enter your firstname" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="lastname" autoComplete="off" placeholder="Enter your lastname" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="email" autoComplete="off" placeholder="Enter your email" required type="email" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="password" autoComplete="off" placeholder="Enter your Password" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="username" autoComplete="off" placeholder="Enter your Username" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="btn blue"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;