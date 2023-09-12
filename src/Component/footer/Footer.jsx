import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="logo">Website Logo</p>
                    <ul className="footer-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <p className="phone">Phone: +1 123 456 7890</p>
                    <p className="copyright">&copy; 2023 ShoeStore. All rights reserved.</p>
                    <div className="footer-social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
               
               
               
            </div>
        </footer>
    );
}

export default Footer;
