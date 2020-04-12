import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <header>
            <div className="overlay"></div>
                <nav>
                    <h2>Movie Search</h2>
                    <ul>
                        <li><Link to="/"> Movie </Link></li>
                        <li><Link to="/User">Users</Link></li>
                        <li className="cart"><Link to="/Weather">Weather</Link></li>
                    </ul>
                </nav>
        </header>  
    )
        
    
}

export default Header;