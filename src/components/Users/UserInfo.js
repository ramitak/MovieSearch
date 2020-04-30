import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Users from './Users';
import UserTitle from './UserTitle';


class UserInfo extends Component{
// constructor() {
//     super()
//     this.state = {

//         //state for randomuser api //
//         user: []
//     }
// }

// async componentDidMount() {
//     this.userInfo();
//    }

//    // Functions for the user data
//    userInfo = async () => {
//        const url = "https://api.randomuser.me/?results=5";
//        const response = await fetch(url);
//        const data = await response.json();
//        console.log('user api result', data);
//        this.setState({user: data.results})

// }

    render(){
        return(
            <Container>
                <Row>
                    <UserTitle />
                    <Users />
                </Row>
                 
             </Container>
        )
    }
}

export default UserInfo;