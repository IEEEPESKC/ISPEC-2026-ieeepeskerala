import React from 'react';
import PageLayout from '../components/PageLayout';
import deanSharafiImg from '../assets/dean-sharafi.jpg';

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
                                <p style={{ fontSize: '1rem', color: '#2e8b57', fontWeight: '700', margin: '0 0 10px 0' }}>
                                    <i className="fas fa-award" style={{ marginRight: '8px' }}></i>
                                    IEEE PES Treasurer
                                </p>
                                <p style={{ fontSize: '0.98rem', color: '#555', margin: '0 0 16px 0', fontWeight: '500' }}>
                                    <i className="fas fa-building" style={{ color: '#00629b', marginRight: '8px' }}></i>
                                    Australian Energy Market Operator (AEMO)
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
                                    Dean is a senior member of the IEEE and has been involved with IEEE Power and Energy Society for twenty years including serving at the Governing Board from 2017 to 2022.
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
                                <li><strong>IEEE PES Treasurer</strong></li>
                                <li>Strategic Advisor on Energy Transition, Australian Energy Market Operator (AEMO)</li>
                                <li>IEEE PES Governing Board Member (2017–2022)</li>
                                <li>Associate Editor, IEEE Transactions on Power Systems Journal</li>
                                <li>IEEE Distinguished Lecturer &amp; IEEE Senior Member</li>
                                <li>Former Sessional Academic (Power System Earthing), Curtin University</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default KeynoteSpeakersPage;
