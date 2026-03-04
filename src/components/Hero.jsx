import React from 'react';
import { Link } from 'react-router-dom';
import keralaIllustration from '../assets/kerala2.7.png';

const Hero = () => {
    return (
        <section id="home" className="hero-new">
            <div className="dot-pattern"></div>

            <div className="container hero-container">
                <div className="hero-main-content">
                    <h1 className="hero-title">ISPEC 2026</h1>
                    <h2 className="hero-subtitle">
                        IEEE Sustainable Power and Energy <br />
                        Conference (iSPEC) 2026
                    </h2>

                    <div className="hero-top-info">
                        <div className="info-row">
                            <i className="fas fa-calendar-alt"></i>
                            <span>06 - 10 November 2026</span>
                        </div>
                        <div className="info-row">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Trivandrum, Kerala</span>
                        </div>
                    </div>

                    <div className="hero-actions-new">
                        <Link to="/registration" className="btn-pill">
                            Explore Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Illustration */}
            <div className="hero-bottom-illustration">
                <img src={keralaIllustration} alt="Kerala Culture" />
            </div>
        </section>
    );
};

export default Hero;
