import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const CallForPapersPage = () => {
    const [openTrack, setOpenTrack] = useState(null);

    const toggleTrack = (trackId) => {
        if (openTrack === trackId) {
            setOpenTrack(null);
        } else {
            setOpenTrack(trackId);
        }
    };

    return (
        <PageLayout title="Call for Papers">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div id="breadcrumbs" style={{ padding: '20px 0', fontSize: '0.9rem', color: '#666' }}>
                    <span><span><Link to="/" style={{ color: '#00629b', textDecoration: 'none' }}>Home</Link></span> » <span className="breadcrumb_last" aria-current="page">Call for Papers</span></span>
                </div>

                <div className="section-content" style={{ paddingBottom: '60px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#333' }}><span>Call for Papers</span></h1>

                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#00629b', marginBottom: '20px', lineHeight: '1.4' }}>
                            Theme: Empowering a Sustainable Future Through Green Technology and Systems Innovation.
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px 0' }}>
                            <div style={{ flex: 1, height: '3px', background: '#ccc' }}></div>
                            <div style={{ width: '50px', height: '3px', background: '#00629b', margin: '0 10px' }}></div>
                            <div style={{ flex: 1, height: '3px', background: '#ccc' }}></div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
                        {/* Left Column (Main Content) */}
                        <div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px', marginBottom: '40px' }} className="col-lg-8 col-md-12">
                            <div style={{ marginBottom: '40px' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}><span>Conference Overview</span></h2>
                                <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                                    <p style={{ margin: '0 0 15px 0' }}>The IEEE Sustainable Power and Energy Conference (iSPEC) 2026 will be held in Trivandrum, Kerala under the theme "Empowering a Sustainable Future Through Green Technology and Systems Innovation."</p>
                                    <p style={{ margin: '0 0 15px 0' }}>The conference brings together researchers, industry professionals, utilities, policymakers, and educators to exchange ideas and showcase advances in power and energy systems, with a focus on sustainability, digitalization, resilience, and system-level innovation.</p>
                                    <p style={{ margin: '0 0 15px 0' }}>The technical program will include keynote speeches, panel sessions, tutorials, and peer-reviewed paper and poster presentations, highlighting both research breakthroughs and practical applications. With six technical tracks delivered over three days, iSPEC 2026 provides a dynamic platform for knowledge sharing, collaboration, and professional development.</p>
                                </div>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>Conference Tracks</h2>
                                <div className="accordion" style={{ border: '1px solid #e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
                                    {[
                                        { id: 'track1', title: 'Smart Grid Concepts and Applications', content: 'Track content details go here...' },
                                        { id: 'track2', title: 'Renewable Energy and Energy Storage Systems', content: 'Track content details go here...' },
                                        { id: 'track3', title: 'Emerging Sustainable Power Technologies', content: 'Track content details go here...' },
                                        { id: 'track4', title: 'Transportation Electrification', content: 'Track content details go here...' },
                                        { id: 'track5', title: 'Power Electronics in Power Systems', content: 'Track content details go here...' },
                                        { id: 'track6', title: 'AI and Machine Learning for Power Systems', content: 'Track content details go here...' },
                                        { id: 'track7', title: 'Cyber Security and IoT for Power Systems', content: 'Track content details go here...' },
                                        { id: 'track8', title: 'Power System Resilience and Climate Change Mitigation', content: 'Track content details go here...' },
                                        { id: 'track9', title: 'Energy Policy, Economics and Market', content: 'Track content details go here...' },
                                        { id: 'track10', title: 'High Voltage Engineering and Technology', content: 'Track content details go here...' },
                                    ].map((track) => (
                                        <div key={track.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <div 
                                                onClick={() => toggleTrack(track.id)}
                                                style={{ 
                                                    padding: '15px 20px', 
                                                    background: '#f8f9fa', 
                                                    cursor: 'pointer', 
                                                    display: 'flex', 
                                                    alignItems: 'center',
                                                    color: openTrack === track.id ? '#00629b' : '#333'
                                                }}
                                            >
                                                <i className={`fa-solid ${openTrack === track.id ? 'fa-minus' : 'fa-plus'}`} style={{ marginRight: '15px', color: '#00629b' }}></i>
                                                <h3 style={{ margin: '0', fontSize: '1.1rem', fontWeight: '500' }}>{track.title}</h3>
                                            </div>
                                            {openTrack === track.id && (
                                                <div style={{ padding: '20px', background: '#fff', fontSize: '1rem', color: '#555' }}>
                                                    {/* This would be replaced by actual track content if available */}
                                                    <ul>
                                                        <li>Detailed topics for {track.title.toLowerCase()}</li>
                                                        <li>Related research and industry applications</li>
                                                        <li>Case studies and innovations</li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div style={{ marginTop: '50px' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}><a href="#" style={{ color: '#00629b', textDecoration: 'none' }}>Manuscript Submission</a></h2>
                            </div>
                        </div>

                        {/* Right Column (Sidebar) - But inline with layout requested */}
                        <div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px' }} className="col-lg-4 col-md-12">
                            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}><span>Important Dates</span></h2>
                            <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                                <p style={{ marginBottom: '15px' }}>
                                    <strong>Paper Submission</strong><br />
                                    • Submission Open: 15 February 2026<br />
                                    • Full Paper Deadline: 15 April 2026<br />
                                    • Acceptance Notification: 15 June 2026
                                </p>
                                <p style={{ marginBottom: '15px' }}>
                                    <strong>Tutorials &amp; Special Sessions</strong><br />
                                    • Proposal Deadline: 10 March 2026<br />
                                    • Decision Notification: 15 March 2026
                                </p>
                                <p style={{ marginBottom: '15px' }}>
                                    <strong>Registration</strong><br />
                                    • Early Registration Deadline: 15 July 2026<br />
                                    • Camera-ready Paper Due: 15 July 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{`
                @media (min-width: 992px) {
                    .col-lg-8 { flex: 0 0 66.666667% !important; max-width: 66.666667% !important; }
                    .col-lg-4 { flex: 0 0 33.333333% !important; max-width: 33.333333% !important; }
                }
            `}</style>
        </PageLayout>
    );
};

export default CallForPapersPage;
