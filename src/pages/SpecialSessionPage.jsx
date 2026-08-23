import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import ss1Pdf from '../assets/iSPEC2026_AllSpecialSessions-1.pdf';
import ss2Pdf from '../assets/iSPEC2026_AllSpecialSessions-2.pdf';
import ss3Pdf from '../assets/iSPEC2026_AllSpecialSessions-3.pdf';
import ss4Pdf from '../assets/iSPEC2026_AllSpecialSessions-4.pdf';
import ss5Pdf from '../assets/iSPEC2026_AllSpecialSessions-5.pdf';

const SpecialSessionPage = () => {
    return (
        <PageLayout title="Special Sessions">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className="section-content" style={{ paddingBottom: '60px' }}>

                    {/* Approved Special Sessions */}
                    <div style={{ marginTop: '30px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}><span>Approved Special Sessions</span></h2>
                        <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                            <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                <li><a href={ss1Pdf} target="_blank" rel="noopener noreferrer" style={{ color: '#00629b', textDecoration: 'none' }}><strong>SS1</strong> – Cyber-Physical Security, Reliability &amp; Resiliency in Smart Power Systems</a></li>
                                <li><a href={ss2Pdf} target="_blank" rel="noopener noreferrer" style={{ color: '#00629b', textDecoration: 'none' }}><strong>SS2</strong> – Advanced High-Gain Power Converters: Topologies, Control, and Renewable Energy Integration</a></li>
                                <li><a href={ss3Pdf} target="_blank" rel="noopener noreferrer" style={{ color: '#00629b', textDecoration: 'none' }}><strong>SS3</strong> – AI-Driven Sustainable Power Systems and Electric Mobility</a></li>
                                <li><a href={ss4Pdf} target="_blank" rel="noopener noreferrer" style={{ color: '#00629b', textDecoration: 'none' }}><strong>SS4</strong> – Advanced Multiport DC-DC Converters for Integrated Hybrid Energy Systems and Carbon Neutrality</a></li>
                                <li><a href={ss5Pdf} target="_blank" rel="noopener noreferrer" style={{ color: '#00629b', textDecoration: 'none' }}><strong>SS5</strong> – Emerging Intelligence and Power Conversion for Electrified Systems</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default SpecialSessionPage;
