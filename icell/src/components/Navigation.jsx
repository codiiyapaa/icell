import React from 'react';
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';



function Navigation() {
    var x=-1;
    console.log(x);
    return(
        <>
        <Navbar>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center">
            <Navbar.Text style={{color: '#FFFFFF', fontSize: '40pt', fontWeight: 'bold'}}>
                Admin Panel- Industry Cell Website
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}
 
export default Navigation;