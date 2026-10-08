import React from 'react';
import PageLayout from '../components/PageLayout';
import deanSharafiImg from '../assets/dean-sharafi.jpg';
import sushilSooneeImg from '../assets/sushil-kumar-soonee.jpg';
import rasaraSamarasingheImg from '../assets/rasara-samarasinghe.jpg';

const KeynoteSpeakersPage = () => {
    return (
        <PageLayout title="Keynote Speakers">
            <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ padding: '50px 0 80px', color: '#2b2b2b', fontSize: '1.05rem', lineHeight: '1.8' }}>

                    {/* Speaker Card Layout */}
                    <div style={{
                        background: '#fff',
                        borderRadius: '12px',
                        border: '1px solid #e8eef3',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                        padding: '40px 45px',
                    }}>
                        {/* Header & Photo Row */}
                        <div style={{
                            display: 'flex',
                            gap: '40px',
                            alignItems: 'center',
                            flexWrap: 'wrap-reverse',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid #edf2f7',
                            paddingBottom: '30px',
                            marginBottom: '30px',
                        }}>
                            <div style={{ flex: '1 1 420px' }}>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1a1a2e', margin: '0 0 8px 0' }}>
                                    Dean Sharafi
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#00629b', fontWeight: '600', margin: '0 0 6px 0' }}>
                                    Strategic Advisor on Energy Transition
                                </p>
                                <p style={{ fontSize: '0.98rem', color: '#555', margin: '0 0 6px 0', fontWeight: '500' }}>
                                    <i className="fas fa-building" style={{ color: '#00629b', marginRight: '8px' }}></i>
                                    Australian Energy Market Operator (AEMO)
                                </p>
                                <p style={{ fontSize: '1rem', color: '#2e8b57', fontWeight: '700', margin: '0 0 16px 0' }}>
                                    <i className="fas fa-award" style={{ marginRight: '8px' }}></i>
                                    Treasurer, IEEE PES
                                </p>
                                <a
                                    href="https://ieee-pes.org/about-pes/2025-governing-board/dean-sharafi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: '#00629b',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                                    onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                                >
                                    <span>IEEE PES Governing Board Profile</span>
                                    <i className="fas fa-external-link-alt" style={{ fontSize: '0.78rem' }}></i>
                                </a>
                            </div>

                            <div style={{ flex: '0 0 200px', margin: '0 auto' }}>
                                <img
                                    src={deanSharafiImg}
                                    alt="Dean Sharafi"
                                    style={{
                                        width: '190px',
                                        height: '220px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                                        display: 'block',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Biography */}
                        <div>
                            <h3 style={{
                                fontSize: '1.4rem',
                                fontWeight: '700',
                                color: '#1a1a2e',
                                margin: '0 0 16px 0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <i className="fas fa-user" style={{ color: '#00629b', fontSize: '1.1rem' }}></i>
                                Biography
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#374151' }}>
                                <p style={{ margin: 0 }}>
                                    Dean Sharafi is the Strategic Advisor on energy transition at the Australian Energy Market Operator (AEMO). Dean holds a degree in Applied Physics, a degree in Electrical Engineering and a degree in Business Management. He has over thirty years of experience in power system engineering which includes Power System Protection, High Voltage Systems, Asset Management and Power System and Electricity Market Operation.
                                </p>
                                <p style={{ margin: 0 }}>
                                    Dean is a senior member of the IEEE and has been involved with IEEE Power and Energy Society for twenty years including serving at the Governing Board from 2017 to 2026.
                                </p>
                                <p style={{ margin: 0 }}>
                                    Dean has published many papers on power system protection, condition monitoring, asset management and power system operations. He lectured for a decade as a Sessional Academic on Power System Earthing at Curtin University in Western Australia.
                                </p>
                                <p style={{ margin: 0 }}>
                                    Dean is an Associate Editor for the IEEE Transactions on Power Systems Journal and an IEEE Distinguished Lecturer.
                                </p>
                            </div>
                        </div>

                        {/* Key Highlights */}
                        <div style={{ marginTop: '30px', paddingTop: '24px', borderTop: '1px solid #edf2f7' }}>
                            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1a1a2e', marginBottom: '12px' }}>
                                Key Positions &amp; Affiliations
                            </h4>
                            <ul style={{
                                paddingLeft: '20px',
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                                color: '#4b5563',
                                fontSize: '0.95rem'
                            }}>
                                <li><strong>Treasurer, IEEE PES</strong></li>
                                <li>Strategic Advisor on Energy Transition, Australian Energy Market Operator (AEMO)</li>
                                <li>IEEE PES Governing Board Member (2017–2026)</li>
                                <li>Associate Editor, IEEE Transactions on Power Systems Journal</li>
                                <li>IEEE Distinguished Lecturer &amp; IEEE Senior Member</li>
                                <li>Former Sessional Academic (Power System Earthing), Curtin University</li>
                            </ul>
                        </div>

                    </div>

                    {/* Speaker 2: Sushil Kumar Soonee */}
                    <div style={{
                        background: '#fff',
                        borderRadius: '12px',
                        border: '1px solid #e8eef3',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                        padding: '40px 45px',
                        marginTop: '40px',
                    }}>
                        {/* Header & Photo Row */}
                        <div style={{
                            display: 'flex',
                            gap: '40px',
                            alignItems: 'center',
                            flexWrap: 'wrap-reverse',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid #edf2f7',
                            paddingBottom: '30px',
                            marginBottom: '30px',
                        }}>
                            <div style={{ flex: '1 1 420px' }}>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1a1a2e', margin: '0 0 8px 0' }}>
                                    Sushil Kumar Soonee
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#00629b', fontWeight: '600', margin: '0 0 6px 0' }}>
                                    Former and Founder Chief Executive Officer
                                </p>
                                <p style={{ fontSize: '0.98rem', color: '#555', margin: '0 0 16px 0', fontWeight: '500' }}>
                                    <i className="fas fa-building" style={{ color: '#00629b', marginRight: '8px' }}></i>
                                    Power System Operation Corporation Ltd. (POSOCO)
                                </p>
                            </div>

                            <div style={{ flex: '0 0 200px', margin: '0 auto' }}>
                                <img
                                    src={sushilSooneeImg}
                                    alt="Sushil Kumar Soonee"
                                    style={{
                                        width: '190px',
                                        height: '220px',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                                        display: 'block',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Biography */}
                        <div>
                            <h3 style={{
                                fontSize: '1.4rem',
                                fontWeight: '700',
                                color: '#1a1a2e',
                                margin: '0 0 16px 0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <i className="fas fa-user" style={{ color: '#00629b', fontSize: '1.1rem' }}></i>
                                Biography
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#374151' }}>
                                <p style={{ margin: 0 }}>
                                    Shri Soonee has first hand four decades of experience of Power System Operation of various Regional Grids of India and has worked extensively towards Integration of Grids leading to the formation of the National Grid and now SAARC Grid.
                                </p>
                                <p style={{ margin: 0 }}>
                                    He specializes in Power System Operation, Planning, Commercial, Settlement, Restoration and the entire gamut of Power Pooling and Governance. Other areas of interest include Electricity Markets, Open Access, Regulatory affairs besides expertise in Load Despatch Technology, integration of Renewable Energy including REC Mechanism, Transmission Pricing and development of Ancillary Services.
                                </p>
                                <p style={{ margin: 0 }}>
                                    Shri S K Soonee is a Life Fellow of Institution of Engineers (India), Fellow of IEEE, Distinguished Alumnus IIT Kharagpur, Distinguished Member CIGRE, Fellow INAE, Foreign Member NAE, USA.
                                </p>
                                <p style={{ margin: 0 }}>
                                    He has represented India on the CIGRE Study Committee C2 on Power System Operation and the CIGRE Study Committee C5 on Electricity Markets and Regulation.
                                </p>
                            </div>
                        </div>

                        {/* Key Highlights */}
                        <div style={{ marginTop: '30px', paddingTop: '24px', borderTop: '1px solid #edf2f7' }}>
                            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1a1a2e', marginBottom: '12px' }}>
                                Key Positions &amp; Affiliations
                            </h4>
                            <ul style={{
                                paddingLeft: '20px',
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                                color: '#4b5563',
                                fontSize: '0.95rem'
                            }}>
                                <li><strong>Former &amp; Founder CEO, Power System Operation Corporation Ltd. (POSOCO)</strong></li>
                                <li>Life Fellow, Institution of Engineers (India)</li>
                                <li>Fellow, IEEE</li>
                                <li>Distinguished Alumnus, IIT Kharagpur</li>
                                <li>Distinguished Member, CIGRE</li>
                                <li>Fellow, INAE</li>
                                <li>Foreign Member, National Academy of Engineering (NAE), USA</li>
                                <li>CIGRE Study Committee C2 (Power System Operation) &amp; C5 (Electricity Markets and Regulation) — India Representative</li>
                            </ul>
                        </div>

                    </div>

                    {/* Speaker 3: Dr. Rasara Samarasinghe */}
                    <div style={{
                        background: '#fff',
                        borderRadius: '12px',
                        border: '1px solid #e8eef3',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                        padding: '40px 45px',
                        marginTop: '40px',
                    }}>
                        {/* Header & Photo Row */}
                        <div style={{
                            display: 'flex',
                            gap: '40px',
                            alignItems: 'center',
                            flexWrap: 'wrap-reverse',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid #edf2f7',
                            paddingBottom: '30px',
                            marginBottom: '30px',
                        }}>
                            <div style={{ flex: '1 1 420px' }}>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1a1a2e', margin: '0 0 8px 0' }}>
                                    Dr. Rasara Samarasinghe
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#00629b', fontWeight: '600', margin: '0 0 6px 0' }}>
                                    Senior Lecturer, Department of Electrical Engineering
                                </p>
                                <p style={{ fontSize: '0.98rem', color: '#555', margin: '0 0 6px 0', fontWeight: '500' }}>
                                    <i className="fas fa-building" style={{ color: '#00629b', marginRight: '8px' }}></i>
                                    University of Moratuwa, Sri Lanka
                                </p>
                                <p style={{ fontSize: '1rem', color: '#2e8b57', fontWeight: '700', margin: '0 0 16px 0' }}>
                                    <i className="fas fa-award" style={{ marginRight: '8px' }}></i>
                                    Chair, IEEE PES Sri Lanka Chapter
                                </p>
                                <div style={{
                                    background: '#f0f7ff',
                                    borderLeft: '3px solid #00629b',
                                    borderRadius: '0 6px 6px 0',
                                    padding: '12px 16px',
                                    marginTop: '8px',
                                }}>
                                    <p style={{ fontSize: '0.85rem', color: '#00629b', fontWeight: '700', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Keynote Title</p>
                                    <p style={{ fontSize: '0.95rem', color: '#1a1a2e', fontWeight: '600', margin: 0, fontStyle: 'italic' }}>
                                        "From Reliability to Resilience: Intelligent Asset Management for a Sustainable and Future-Ready Power Grid"
                                    </p>
                                </div>
                            </div>

                            <div style={{ flex: '0 0 200px', margin: '0 auto' }}>
                                <img
                                    src={rasaraSamarasingheImg}
                                    alt="Dr. Rasara Samarasinghe"
                                    style={{
                                        width: '190px',
                                        height: '220px',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                                        display: 'block',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Biography */}
                        <div>
                            <h3 style={{
                                fontSize: '1.4rem',
                                fontWeight: '700',
                                color: '#1a1a2e',
                                margin: '0 0 16px 0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <i className="fas fa-user" style={{ color: '#00629b', fontSize: '1.1rem' }}></i>
                                Biography
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#374151' }}>
                                <p style={{ margin: 0 }}>
                                    Dr. Rasara Samarasinghe is a Senior Lecturer in the Department of Electrical Engineering at the University of Moratuwa, Sri Lanka, and Director of the Engineering Research Unit, Faculty of Engineering. She also serves as Chair of the IEEE Power &amp; Energy Society (PES) Sri Lanka Chapter.
                                </p>
                                <p style={{ margin: 0 }}>
                                    She obtained her BSc in Electrical Engineering from the University of Moratuwa and her PhD from RMIT University, Australia. Her research focuses on the reliability, condition assessment, and performance of critical electrical assets — particularly power-system insulation and high-voltage equipment.
                                </p>
                                <p style={{ margin: 0 }}>
                                    Her work encompasses condition monitoring and diagnostics, partial-discharge detection, reliability-centred maintenance, asset health assessment, and the application of advanced technologies to improve the performance and extend the useful life of power-system assets.
                                </p>
                                <p style={{ margin: 0 }}>
                                    Her current interests extend towards integrating emerging digital technologies, data-driven approaches, and intelligent monitoring techniques into power-asset management — exploring how the transition to renewable and increasingly digitalised power systems requires a shift from conventional maintenance towards predictive and intelligent asset management.
                                </p>
                                <p style={{ margin: 0 }}>
                                    Through her academic, research, and IEEE PES leadership roles, Dr. Samarasinghe actively promotes collaboration between universities, industry, and professional engineering communities, reflecting a broader commitment to developing reliable, resilient, and sustainable power systems.
                                </p>
                            </div>
                        </div>

                        {/* Key Highlights */}
                        <div style={{ marginTop: '30px', paddingTop: '24px', borderTop: '1px solid #edf2f7' }}>
                            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1a1a2e', marginBottom: '12px' }}>
                                Key Positions &amp; Affiliations
                            </h4>
                            <ul style={{
                                paddingLeft: '20px',
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                                color: '#4b5563',
                                fontSize: '0.95rem'
                            }}>
                                <li><strong>Chair, IEEE Power &amp; Energy Society (PES) Sri Lanka Chapter</strong></li>
                                <li>Senior Lecturer, Department of Electrical Engineering, University of Moratuwa, Sri Lanka</li>
                                <li>Director, Engineering Research Unit, Faculty of Engineering, University of Moratuwa</li>
                                <li>PhD, RMIT University, Australia</li>
                                <li>BSc in Electrical Engineering, University of Moratuwa</li>
                                <li>Research Areas: Condition monitoring, partial-discharge detection, reliability-centred maintenance, HV asset diagnostics, AI-driven predictive maintenance</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default KeynoteSpeakersPage;
