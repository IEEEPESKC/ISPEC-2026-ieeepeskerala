import React from 'react';
import PageLayout from '../components/PageLayout';

const InnovationLaunchpadPage = () => {
    return (
        <PageLayout title="Innovation Launchpad">
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ padding: '40px 0 70px' }}>

                    {/* Main Showcase Card */}
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        overflow: 'hidden',
                        marginBottom: '35px',
                    }}>
                        {/* Hero Banner Header */}
                        <div style={{
                            background: 'linear-gradient(135deg, #0f2b48 0%, #1e3a5f 50%, #00629b 100%)',
                            padding: '36px 36px',
                            color: '#ffffff',
                            position: 'relative',
                        }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(4px)',
                                padding: '6px 14px',
                                borderRadius: '20px',
                                fontSize: '0.82rem',
                                fontWeight: '700',
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase',
                                color: '#93c5fd',
                                marginBottom: '14px',
                            }}>
                                <span>🌟</span> Special Event · iSPEC 2026
                            </div>

                            <h1 style={{
                                fontSize: '2.1rem',
                                fontWeight: '800',
                                color: '#ffffff',
                                margin: '0 0 10px 0',
                                lineHeight: '1.25',
                            }}>
                                Innovation Launchpad at iSPEC 2026
                            </h1>

                            <p style={{
                                fontSize: '1.05rem',
                                color: '#e0f2fe',
                                margin: '0 0 8px 0',
                                fontWeight: '600',
                            }}>
                                Call for Participants!
                            </p>

                            <p style={{
                                fontSize: '0.94rem',
                                color: '#cbd5e1',
                                margin: 0,
                                lineHeight: '1.6',
                                maxWidth: '780px',
                            }}>
                                Organized by <strong>IEEE PES Kerala Chapter</strong> in association with <strong>IEEE PES Young Professionals</strong> and <strong>In -SDES</strong>.
                            </p>
                        </div>

                        {/* Card Content Body */}
                        <div style={{ padding: '36px' }}>

                            {/* Key Highlights Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                gap: '16px',
                                marginBottom: '32px',
                            }}>
                                <div style={{
                                    background: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: '18px 20px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                }}>
                                    <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>💡</span>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#00629b', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                            Theme
                                        </div>
                                        <div style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: '600', lineHeight: '1.5' }}>
                                            Mentorship, Skill Bridges in Clean Energy and Industry–Academia Pathways
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    background: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: '18px 20px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                }}>
                                    <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>📅</span>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#00629b', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                            Date
                                        </div>
                                        <div style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: '600', lineHeight: '1.5' }}>
                                            5 December 2026 (Day 2)
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    background: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: '18px 20px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                }}>
                                    <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>⏰</span>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#00629b', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                            Time
                                        </div>
                                        <div style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: '600', lineHeight: '1.5' }}>
                                            4:30 PM – 5:30 PM
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    background: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: '18px 20px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                }}>
                                    <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>📍</span>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#00629b', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                            Venue
                                        </div>
                                        <div style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: '600', lineHeight: '1.5' }}>
                                            Senatus Hall, Mar Baselios
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Prizes Section */}
                            <div style={{
                                background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
                                border: '1px solid #fde68a',
                                borderRadius: '14px',
                                padding: '26px 28px',
                                marginBottom: '32px',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    gap: '10px',
                                    marginBottom: '18px',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ fontSize: '1.5rem' }}>🏆</span>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#92400e', margin: 0 }}>
                                            Exciting Cash Prizes
                                        </h3>
                                    </div>
                                    <span style={{
                                        background: '#fef08a',
                                        color: '#854d0e',
                                        border: '1px solid #facc15',
                                        padding: '4px 12px',
                                        borderRadius: '16px',
                                        fontSize: '0.82rem',
                                        fontWeight: '700',
                                    }}>
                                        Sponsored by InSDES
                                    </span>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                                    gap: '16px',
                                }}>
                                    <div style={{
                                        background: '#ffffff',
                                        border: '2px solid #fbbf24',
                                        borderRadius: '12px',
                                        padding: '18px',
                                        textAlign: 'center',
                                        boxShadow: '0 4px 12px rgba(251, 191, 36, 0.15)',
                                    }}>
                                        <div style={{ fontSize: '2rem', marginBottom: '6px' }}>🥇</div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#78350f', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                            First Prize
                                        </div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#b45309', marginTop: '4px' }}>
                                            ₹5,000
                                        </div>
                                    </div>

                                    <div style={{
                                        background: '#ffffff',
                                        border: '1px solid #cbd5e1',
                                        borderRadius: '12px',
                                        padding: '18px',
                                        textAlign: 'center',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                                    }}>
                                        <div style={{ fontSize: '2rem', marginBottom: '6px' }}>🥈</div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                            Second Prize
                                        </div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#334155', marginTop: '4px' }}>
                                            ₹3,000
                                        </div>
                                    </div>

                                    <div style={{
                                        background: '#ffffff',
                                        border: '1px solid #fed7aa',
                                        borderRadius: '12px',
                                        padding: '18px',
                                        textAlign: 'center',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                                    }}>
                                        <div style={{ fontSize: '2rem', marginBottom: '6px' }}>🥉</div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#9a3412', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                            Third Prize
                                        </div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#c2410c', marginTop: '4px' }}>
                                            ₹2,000
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* How to Participate */}
                            <div style={{
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '14px',
                                padding: '26px 28px',
                                marginBottom: '32px',
                            }}>
                                <h3 style={{
                                    fontSize: '1.15rem',
                                    fontWeight: '800',
                                    color: '#1e3a5f',
                                    margin: '0 0 16px 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}>
                                    <span>📋</span> How to Participate?
                                </h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    {[
                                        {
                                            step: '1',
                                            title: 'Register & Submit Pitch Deck',
                                            desc: 'Register through the link below. A sample pitch deck is attached with the form — make sure to submit your presentation along with your registration.',
                                        },
                                        {
                                            step: '2',
                                            title: 'Finalist Shortlisting',
                                            desc: 'Five finalists will be shortlisted by the review committee.',
                                        },
                                        {
                                            step: '3',
                                            title: 'Live Presentation',
                                            desc: 'Present your innovative idea live before our expert judging panel on 5 December 2026.',
                                        },
                                        {
                                            step: '4',
                                            title: 'Awards & Recognition',
                                            desc: 'Winners will be selected and cash prizes will be awarded right during the session.',
                                        },
                                    ].map((item) => (
                                        <div key={item.step} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '14px',
                                        }}>
                                            <div style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                background: '#00629b',
                                                color: '#ffffff',
                                                fontWeight: '800',
                                                fontSize: '0.9rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}>
                                                {item.step}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1e293b', marginBottom: '2px' }}>
                                                    {item.title}
                                                </div>
                                                <div style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Registration CTA Banner */}
                            <div style={{
                                background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
                                borderRadius: '14px',
                                padding: '28px',
                                color: '#ffffff',
                                textAlign: 'center',
                                marginBottom: '28px',
                                boxShadow: '0 8px 24px rgba(13, 148, 136, 0.25)',
                            }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '0 0 8px 0', color: '#ffffff' }}>
                                    Ready to Showcase Your Idea?
                                </h3>
                                <p style={{ fontSize: '0.94rem', color: '#ccfbf1', margin: '0 0 20px 0' }}>
                                    Fill out the registration form and attach your pitch deck before the deadline.
                                </p>
                                <a
                                    href="https://tinyurl.com/mnyyvvyx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        background: '#ffffff',
                                        color: '#0f766e',
                                        padding: '14px 28px',
                                        borderRadius: '30px',
                                        fontSize: '1rem',
                                        fontWeight: '800',
                                        textDecoration: 'none',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    <span>🔗</span> Register for Innovation Launchpad
                                    <i className="fas fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
                                </a>
                            </div>

                            {/* Final Callout Note */}
                            <div style={{
                                borderLeft: '4px solid #00629b',
                                paddingLeft: '18px',
                                margin: '20px 0 0',
                            }}>
                                <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.7', margin: '0 0 6px 0' }}>
                                    We encourage all student researchers, young professionals, and conference participants to make use of this opportunity to <strong>showcase their innovative ideas</strong>, receive mentorship, and connect with industry leaders.
                                </p>
                                <p style={{ fontSize: '1rem', fontWeight: '800', color: '#1e3a5f', margin: 0 }}>
                                    Don't miss this opportunity to turn your ideas into impact! 🚀
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default InnovationLaunchpadPage;

