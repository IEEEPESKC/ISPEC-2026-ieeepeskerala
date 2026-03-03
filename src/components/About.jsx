import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Ispeclogo from '../assets/Ispeclogo.png';

const About = () => {
    return (
        <section id="about" className="section no-padding-bottom">
            <div className="container">
                <div className="welcome-grid">
                    <div className="welcome-image">
                        <img src={Ispeclogo} alt="iSPEC 2026 Sustainable Power Conference" style={{ width: '100%', borderRadius: '15px', boxShadow: 'var(--shadow)' }} />
                    </div>
                    <div className="welcome-text">
                        <h2 className="section-title">Welcome Message</h2>
                        <div className="divider-line"></div>
                        <p>
                            We are delighted to invite you to the <strong>2026 IEEE Sustainable Power and Energy Conference (iSPEC)</strong>, taking place in the vibrant city of Trivandrum, Kerala.
                        </p>
                        <p>
                            iSPEC 2026 brings together global experts to discuss the critical challenges and opportunities in building a sustainable and resilient energy future. The conference will feature cutting-edge technical sessions, inspiring keynote speeches, and opportunities to network with leaders in the field.
                        </p>
                        <p>
                            We look forward to welcoming you to Kerala, "God's Own Country", for an unforgettable academic and cultural experience.
                        </p>

                        <div className="welcome-actions">
                            <Link to="/call-for-papers" className="btn btn-primary">Download CFP</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
