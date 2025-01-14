
import React from 'react';
import { Link } from 'react-router-dom';

// Navbar.jsx
function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/register" style={styles.link}>Register</Link>
      <Link to="/login" style={styles.link}>Login</Link>
      
      
    </nav>
  );
}



const styles = {
   navbar: {
      display: 'flex',
      justifyContent: 'center',
      padding: '1.5rem',
      backgroundColor: 'rgba(231, 250, 248, 0.6)',
      borderBottom: '1px solid #ddd',
      position:'fixed',
      top:0,
      left:0,
      width:'100%',
      zIndex:1000,
   },
   link: {
      margin: '0 1rem',
      fontSize: '1.2em',
      textDecoration: 'none',
      color: '#0066FF',
      fontWeight: '600',
   },
};

export default Navbar;


