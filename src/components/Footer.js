import React from 'react';

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <footer className="footer">
        <p>&copy; {year} DSA Visualizer</p>
      </footer>
    );
  }
  
  export default Footer;