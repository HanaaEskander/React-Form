import React, { Component } from 'react';
class Form extends React.Component {
    render() {
      return (
        <div id="Form">
          <h3>Add a new item to the table:</h3>  
          <form onSubmit={this.props.handleFormSubmit}>
            
            <input id="username" value={this.props.newUsername} 
              type="text" name="username"
              onChange={this.props.handleInputChange} />
        
            
            <input id="password" value={this.props.newPassword} 
              type="text" name="password"
              onChange={this.props.handleInputChange} />
              <input id="address" value={this.props.newadd} 
              type="text" name="address"
              onChange={this.props.handleInputChange} /><br></br>
           
            <button type="submit" value="Submit">Add Item</button>
          </form>
        </div>
      );
    }
  }
  
  export default Form;