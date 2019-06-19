import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
class Header extends Component { 
 
    render() { 
        return ( 
            <div> 
                <Link to='/'>home</Link> 
                <Link to='/singin'>signin</Link> 
                <Link to='/singup'>singup</Link> 
            </div> 
        ) 
    } 
} 
export default Header;