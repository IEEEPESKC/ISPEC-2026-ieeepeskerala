import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import cfpPdf from '../assets/cfp 2.2.pdf';

const tracks = [
    {
        id: 'track1',
        title: 'Track 1: Renewable Energy & Sustainable Technologies',
        topics: [
            'Advanced solar PV modeling, forecasting, and performance optimization',
            'Wind energy conversion systems',
            'hybrid energy systems',
            'renewable integration',
            'Green hydrogen and fuel cells',
            'Biomass, waste-to-energy, and circular energy systems',
            'Sustainability assessment, carbon neutrality, and life cycle analysis'
        ]
    },
    {
        id: 'track2',
        title: 'Track 2: Grid Infrastructure & Resilience',
        topics: [
            'Modern transmission and distribution system planning',
            'Microgrids and resilient distributed energy architectures',
            'Grid hardening strategies against extreme weather events',
            'Black start capability and system restoration techniques',
            'Wide-area monitoring systems (WAMS) and synchrophasor applications',
            'Power quality issues and solutions'
        ]
    },
    {
        id: 'track3',
        title: 'Track 3: Protection, Control & Automation for Power Grid Operation',
        topics: [
            'Adaptive and AI-based protection schemes',
            'Wide-area protection and coordinated control',
            'Substation automation and IEC 61850 applications',
            'Fault detection, isolation, and service restoration (FDIR)',
            'HVDC and FACTS-based control strategies'
        ]
    },
    {
        id: 'track4',
        title: 'Track 4: Smart Grids, AI & Digitalization',
        topics: [
            'AI/ML applications in load forecasting and stability assessment',
            'Digital twins for power systems',
            'DER Integration and IoT-enabled smart energy management systems',
            'Cybersecurity in smart grid infrastructure',
            'Big data analytics and cloud computing in utilities',
            'HIL /SIL  based simulation systems'
        ]
    },
    {
        id: 'track5',
        title: 'Track 5: Transportation Electrification',
        topics: [
            'Electric vehicle (EV) charging infrastructure and standards',
            'Vehicle-to-Grid (V2G) and bidirectional charging technologies',
            'Battery management systems (BMS) and state estimation techniques',
            'Electrification of public and freight transportation',
            'Power electronics for EV propulsion systems'
        ]
    },
    {
        id: 'track6',
        title: 'Track 6: Energy Storage Systems',
        topics: [
            'Advanced battery technologies and solid-state batteries',
            'Supercapacitors and hybrid storage systems',
            'Grid-scale storage integration and control',
            'Thermal energy storage systems',
            'Degradation modeling and lifetime prediction of storage systems',
            'Design and siting of energy storage systems'
        ]
    },
    {
        id: 'track7',
        title: 'Track 7: Energy Markets, Policy & Governance',
        topics: [
            'Peer-to-Peer (P2P) Energy Trading and Decentralized Energy Markets',
            'Transactive Energy Systems and Blockchain Applications',
            'Regulatory and Policy Frameworks for Distributed Energy Resources and Energy Trading',
            'Market Design, Demand Response Programs, and Governance Models for Future Energy Systems'
        ]
    },
    {
        id:'track8',
        title:'Track 8: Advanced Power Converters and Electric Drives for Sustainable Energy Systems  ',
        topics:[
            'High-Efficient Power Converters for Renewable Integration',
            'Electric Drives for Sustainable Transportation and Industrial Electrification',
            'Grid-Interactive Power Electronics and Energy Storage Systems',
            'Advanced Modulation, Control, and AI-Based Optimization in Power Electronics'
        ]
    }
];

const CallForPapersPage = () => {
    const [openTrack, setOpenTrack] = useState(null);

    const toggleTrack = (trackId) => {
        setOpenTrack(openTrack === trackId ? null : trackId);
    };

    return (
        <PageLayout title="Call for Papers">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className="section-content" style={{ paddingBottom: '60px' }}>

                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#00629b', marginBottom: '20px', lineHeight: '1.4' }}>
                            Theme: "Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality"
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
                                    <p style={{ margin: '0 0 15px 0' }}>The IEEE Sustainable Power and Energy Conference (iSPEC) 2026 will be held at Mar Baselios College of Engineering and Technology, Thiruvananthapuram, Keralam, India under the theme "Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality"</p>
                                    <p style={{ margin: '0 0 15px 0' }}>The conference brings together researchers, industry professionals, utilities, policymakers, and educators to exchange ideas and showcase advances in power and energy systems, with a focus on sustainability, digitalization, resilience, and system-level innovation.</p>
                                    <p style={{ margin: '0 0 15px 0' }}>The technical program will include keynote speeches, panel sessions, tutorials, and peer-reviewed paper and poster presentations, highlighting both research breakthroughs and practical applications. With seven technical tracks delivered over three days, iSPEC 2026 provides a dynamic platform for knowledge sharing, collaboration, and professional development.</p>
                                </div>
                                <div style={{ marginTop: '25px', marginBottom: '10px' }}>
                                    <a href={cfpPdf} download="iSPEC_2026_Call_For_Papers.pdf" style={{ 
                                        display: 'inline-flex', 
                                        alignItems: 'center', 
                                        gap: '10px', 
                                        textDecoration: 'none',
                                        background: '#00629b',
                                        color: 'white',
                                        padding: '12px 24px',
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        transition: 'background 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#004a7c'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = '#00629b'}>
                                        <i className="fas fa-file-pdf"></i> Download Call for Papers PDF
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>Conference Tracks</h2>
                                <div className="accordion" style={{ border: '1px solid #e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
                                    {tracks.map((track) => (
                                        <div key={track.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <div
                                                onClick={() => toggleTrack(track.id)}
                                                style={{
                                                    padding: '15px 20px',
                                                    background: openTrack === track.id ? '#e8f4fc' : '#f8f9fa',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: openTrack === track.id ? '#00629b' : '#333',
                                                    transition: 'background 0.2s ease'
                                                }}
                                            >
                                                <i className={`fa-solid ${openTrack === track.id ? 'fa-minus' : 'fa-plus'}`} style={{ marginRight: '15px', color: '#00629b', fontSize: '0.9rem' }}></i>
                                                <h3 style={{ margin: '0', fontSize: '1.1rem', fontWeight: '500' }}>{track.title}</h3>
                                            </div>
                                            {openTrack === track.id && (
                                                <div style={{ padding: '20px 20px 20px 50px', background: '#fff', fontSize: '1rem', color: '#555' }}>
                                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                                        {track.topics.map((topic, i) => (
                                                            <li key={i}>{topic}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginTop: '50px' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>
                                    <Link to="/submission" style={{ color: '#00629b', textDecoration: 'none' }}>Manuscript Submission</Link>
                                </h2>
                            </div>
                        </div>

                        {/* Right Column (Sidebar) */}
{/* Right Column (Sidebar) */}
<div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px' }} className="col-lg-4 col-md-12">
    
    <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}><span>Important Dates</span></h2>
    
    <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
        <p style={{ marginBottom: '15px' }}>
            <strong>Paper Submission</strong><br />
            • Full Paper Deadline: 31st August 2026 (Final Deadline)<br />
            • Paper Submission in Special Sessions Open: 30th September 2026 <span style={{ backgroundColor: '#2e8b57', color: 'white', padding: '1px 5px', borderRadius: '3px', fontSize: '0.7rem', verticalAlign: 'middle' }}>NEW</span><br />
            • Acceptance Notification: 30th September 2026<br />
            • Camera Ready Paper Submission: <s style={{ color: '#e74c3c' }}>31st Oct 2026</s>&nbsp;<span style={{ color: '#2e8b57', fontWeight: '700' }}>10th Nov 2026</span>
        </p>
        <p style={{ marginBottom: '15px' }}>
            <strong>Registration</strong><br />
            • Early-bird Registration: up to 10th November 2026<br />
            • Standard Registration: 11th – 15th November 2026
        </p>
        <p style={{ marginBottom: '15px' }}>
            <strong>Conference</strong><br />
            • Conference Dates: 4 – 6 December 2026
        </p>

        {/* ── INTEGRATED TICKER ── */}
        <div className="news-ticker-container" style={{ marginTop: '25px' }}>
            <div className="news-icon">
                <i className="fas fa-bullhorn"></i>
            </div>
            <div className="news-ticker-track">
                <div className="news-ticker-content">
                    {/* First set */}
                    <span>Paper Submission Deadline extended to August 15</span>
                    <span>All accepted Papers will be published in IEEE Xplore</span>
                    <span>Accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore&apos;s scope and quality requirements</span>
                    {/* Duplicate set for seamless loop */}
                    <span>Paper Submission Deadline extended to August 15</span>
                    <span>All accepted Papers will be published in IEEE Xplore</span>
                    <span>Accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore&apos;s scope and quality requirements</span>
                </div>
            </div>
        </div>

    </div>
</div>
                    </div>

                    {/* ── Presentation Instructions Section ── */}
                    <div id="presentation-instructions" style={{ marginTop: '50px', paddingTop: '40px', borderTop: '2px solid #eef2f6' }}>
                        <div style={{ marginBottom: '25px' }}>
                            <span style={{ background: '#e8f5e9', color: '#2e8b57', padding: '4px 12px', borderRadius: '4px', fontSize: '0.82rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>For Presenters</span>
                            <h2 style={{ fontSize: '2.2rem', color: '#1a1a2e', margin: '8px 0 0 0', fontWeight: '800' }}>
                                Presentation Instructions
                            </h2>
                        </div>

                        <div style={{
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            borderLeft: '5px solid #2e8b57',
                            borderRadius: '12px',
                            padding: '30px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                            marginBottom: '30px'
                        }}>
                            <h3 style={{ fontSize: '1.4rem', color: '#00629b', fontWeight: '700', marginBottom: '12px' }}>
                                Paper Session Presenter Instructions – IEEE iSPEC 2026
                            </h3>
                            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '25px' }}>
                                All authors presenting papers at IEEE iSPEC 2026 are requested to carefully follow the instructions below to ensure smooth and effective conduct of the technical sessions.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                                {[
                                    {
                                        icon: 'fa-id-card',
                                        color: '#0284c7',
                                        bg: '#f0f9ff',
                                        title: 'Conference Registration',
                                        desc: 'Presenters must complete their conference registration to be eligible to present their papers at IEEE iSPEC 2026.'
                                    },
                                    {
                                        icon: 'fa-stopwatch',
                                        color: '#e11d48',
                                        bg: '#fff1f2',
                                        title: 'Presentation Duration',
                                        desc: 'Each paper will be allotted 13 minutes in total, comprising 10 minutes for the oral presentation and 3 minutes for Questions and Answers (Q&A).'
                                    },
                                    {
                                        icon: 'fa-file-powerpoint',
                                        color: '#d97706',
                                        bg: '#fffbeb',
                                        title: 'Mandatory Presentation Template',
                                        desc: 'All presenters must use the official IEEE iSPEC 2026 Oral Presentation PPT Template. Presentations that do not follow the prescribed iSPEC 2026 template will not be permitted during the technical sessions.'
                                    },
                                    {
                                        icon: 'fa-comments',
                                        color: '#7c3aed',
                                        bg: '#faf5ff',
                                        title: 'Presentation and Q&A',
                                        desc: 'Presenters are expected to deliver their paper presentation and actively respond to questions from the audience and session moderators during the allotted Q&A period.'
                                    },
                                    {
                                        icon: 'fa-chalkboard-teacher',
                                        color: '#0d9488',
                                        bg: '#f0fdfa',
                                        title: 'Presentation Content',
                                        desc: 'The 10-minute presentation should provide a concise overview of the research background, problem statement, methodology, key results, and conclusions, complementing the accepted full paper.'
                                    },
                                    {
                                        icon: 'fa-clock',
                                        color: '#2563eb',
                                        bg: '#eff6ff',
                                        title: 'Reporting Time',
                                        desc: 'Presenters must report to their respective presentation rooms at least 5 minutes before the scheduled session and check in with the session moderator.'
                                    },
                                    {
                                        icon: 'fa-hourglass-half',
                                        color: '#059669',
                                        bg: '#ecfdf5',
                                        title: 'Time Management',
                                        desc: 'Presenters are strongly encouraged to rehearse their presentations in advance to ensure completion within the allotted 10 minutes. Please coordinate with the session moderator regarding timekeeping arrangements.'
                                    },
                                    {
                                        icon: 'fa-exclamation-triangle',
                                        color: '#b91c1c',
                                        bg: '#fef2f2',
                                        title: 'Strict Adherence to Time Limits',
                                        desc: 'Presenters must strictly adhere to the allocated presentation and Q&A durations. Going beyond the allotted time will not be permitted to ensure fair opportunity for all presenters.'
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} style={{
                                        background: item.bg,
                                        border: `1px solid ${item.color}22`,
                                        borderRadius: '10px',
                                        padding: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                width: '38px',
                                                height: '38px',
                                                borderRadius: '8px',
                                                background: item.color,
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1rem',
                                                flexShrink: 0
                                            }}>
                                                <i className={`fas ${item.icon}`}></i>
                                            </div>
                                            <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1e293b', fontWeight: '700' }}>
                                                {item.title}
                                            </h4>
                                        </div>
                                        <p style={{ margin: 0, fontSize: '0.92rem', color: '#334155', lineHeight: '1.6' }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Template CTA Banner */}
                            <div style={{
                                background: 'linear-gradient(135deg, #00629b 0%, #004a7c 100%)',
                                borderRadius: '10px',
                                padding: '24px 28px',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '20px'
                            }}>
                                <div>
                                    <h4 style={{ margin: '0 0 6px 0', fontSize: '1.2rem', fontWeight: '700', color: '#ffffff' }}>
                                        Official Oral Presentation PPT Template
                                    </h4>
                                    <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.9, lineHeight: '1.5' }}>
                                        Required for all accepted paper oral presentations at IEEE iSPEC 2026.
                                    </p>
                                </div>
                                <a
                                    href="https://docs.google.com/presentation/d/1HA_Fr9sG6wEfFFhjHKcBdxWwtrsTrVjN/edit?usp=sharing&ouid=117547984015209509017&rtpof=true&sd=true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: '#2e8b57',
                                        color: '#ffffff',
                                        padding: '12px 24px',
                                        borderRadius: '8px',
                                        fontWeight: '700',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '0.95rem',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                        transition: 'background 0.2s ease'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = '#246e45'}
                                    onMouseLeave={e => e.currentTarget.style.background = '#2e8b57'}
                                >
                                    <i className="fas fa-external-link-alt"></i> Open Presentation Template
                                </a>
                            </div>

                            <p style={{ margin: '20px 0 0 0', fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic', textAlign: 'center' }}>
                                We look forward to your active participation and engaging technical presentations at IEEE iSPEC 2026.
                            </p>
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
