import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Users extends Component{
    constructor() {
        super()
          this.state = {

          //state for randomuser api //
          user: []
        }
      }

      async componentDidMount() {
         this.userInfo();
        }

        // Functions for the user data
        userInfo = async () => {
            const url = "https://api.randomuser.me/?results=5";
            const response = await fetch(url);
            const data = await response.json();
            console.log('user api result', data);
            this.setState({user: data.results})
    
    }

      render(){
        return this.state.user.map((person) => {
            return(
                
                <Col xs={12} sm={4}>
                    <div key={person.login.uuid} className="userList">
                        <div className="user-img">
                            <img src={person.picture.large} alt="" />
                        </div>
    
                        <div className="user-desc">
                            <div className="user-name">
                                <h2> {person.name.first} {person.name.last}</h2>
                            </div>
    
                            <div className="user-email">
                                <p> { person.email } </p>
                            </div>
    
                            <div className="user-loc">
                                <div> {person.location.street.number} {person.location.street.name}</div>
                                <div> {person.location.city} </div>
                                <div> {person.location.state} </div>
                            </div>
                        </div> 
                    </div>
                </Col>
                   
            );
        })
      }
   
  
}

export default Users; 