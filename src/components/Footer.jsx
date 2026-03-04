import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="colophon" className="site-footer">
            <div className="container">
                <div className="footer-row footer-menu-row">
                    <div className="footer-col-full">
                        <ul id="menu-footer-navigation" className="footer-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="http://www.ieee.org/sitemap.html">Sitemap</a></li>
                            <li><a href="mailto:info@ispec2026.org">Contact &amp; Support</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.ieee.org/accessibility-statement.html">Accessibility</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.ieee.org/about/corporate/governance/p9-26.html">Nondiscrimination Policy</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://secure.ethicspoint.com/domain/media/en/gui/20410/index.html">IEEE Ethics Reporting</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.ieee.org/security_privacy.html">IEEE Privacy Policy</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="http://www.ieee.org/site_terms_conditions.html">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-row footer-bottom-row">
                    <div className="footer-col-text">
                        <p>© Copyright 2026 IEEE – All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions.<br />A public charity, IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
                    </div>
                    <div id="social-links" className="footer-col-social text-center">
                        <a className="ico-collabratec" href="https://ieee-collabratec.ieee.org/" target="_blank" rel="noopener noreferrer"></a>
                        <a href="https://twitter.com/IEEEorg" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/IEEE.org/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/company/ieee" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/user/IEEEorg" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/ieeeorg/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://www.addthis.com/bookmark.php" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-share-nodes" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
