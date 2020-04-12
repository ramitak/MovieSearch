import React from 'react';

const Users = props => {
    return props.users.map((person) => {
        return(
            <div key={person.login.uuid} className="col-md-3">
                <div className="userList">
                
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
                            <div> {person.location.street} </div>
                            <div> {person.location.city} </div>
                            <div> {person.location.state} </div>
                        </div>
                    </div> 
                </div>
            </div>
            
        );
    })
  
}

export default Users; 