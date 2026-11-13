import React from 'react';
import PageLayout from '../components/PageLayout';

const PPT_TEMPLATE_URL = 'https://docs.google.com/presentation/d/1HA_Fr9sG6wEfFFhjHKcBdxWwtrsTrVjN/edit?usp=sharing&ouid=117547984015209509017&rtpof=true&sd=true';

const PresentationGuidelinePage = () => {
    return (
        <PageLayout title="Presentation Instructions">
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px', paddingBottom: '60px' }}>

                {/* Hero Banner / Overview */}
                <div style={{
                    background: '#fff',
                    borderRadius: '14px',
                    padding: '35px 30px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    borderLeft: '5px solid #2e8b57',
                    marginBottom: '40px'
                }}>
                    <div style={{ marginBottom: '15px' }}>
                        <span style={{ background: '#e8f5e9', color: '#2e8b57', padding: '4px 12px', borderRadius: '4px', fontSize: '0.82rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            IEEE iSPEC 2026 Technical Sessions
                        </span>
                        <h2 style={{ fontSize: '1.9rem', color: '#1a1a2e', margin: '10px 0 0 0', fontWeight: '800' }}>
                            Paper Session Presenter Instructions
                        </h2>
                    </div>
                    <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                        All authors presenting papers at IEEE iSPEC 2026 are requested to carefully follow the instructions below to ensure smooth and effective conduct of the technical sessions.
                    </p>
                </div>

                {/* Grid of Key Instructions */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                    {[
                        {
                            num: '01',
                            icon: 'fa-id-card',
                            color: '#0284c7',
                            bg: '#f0f9ff',
                            title: 'Conference Registration',
                            desc: 'Presenters must complete their conference registration to be eligible to present their papers at IEEE iSPEC 2026.'
                        },
                        {
                            num: '02',
                            icon: 'fa-stopwatch',
                            color: '#e11d48',
                            bg: '#fff1f2',
                            title: 'Presentation Duration',
                            desc: 'Each paper will be allotted 13 minutes in total, comprising 10 minutes for the oral presentation and 3 minutes for Questions and Answers (Q&A).'
                        },
                        {
                            num: '03',
                            icon: 'fa-file-powerpoint',
                            color: '#d97706',
                            bg: '#fffbeb',
                            title: 'Mandatory Presentation Template',
                            desc: 'All presenters must use the official IEEE iSPEC 2026 Oral Presentation PPT Template. Presentations that do not follow the prescribed iSPEC 2026 template will not be permitted during the technical sessions.'
                        },
                        {
                            num: '04',
                            icon: 'fa-comments',
                            color: '#7c3aed',
                            bg: '#faf5ff',
                            title: 'Presentation and Q&A',
                            desc: 'Presenters are expected to deliver their paper presentation and actively respond to questions from the audience and session moderators during the allotted Q&A period.'
                        },
                        {
                            num: '05',
                            icon: 'fa-chalkboard-teacher',
                            color: '#0d9488',
                            bg: '#f0fdfa',
                            title: 'Presentation Content',
                            desc: 'The 10-minute presentation should provide a concise overview of the research background, problem statement, methodology, key results, and conclusions, complementing the full paper already accepted and made available to registered conference attendees.'
                        },
                        {
                            num: '06',
                            icon: 'fa-clock',
                            color: '#2563eb',
                            bg: '#eff6ff',
                            title: 'Reporting Time',
                            desc: 'Presenters must report to their respective presentation rooms at least 5 minutes before the scheduled session and check in with the session moderator.'
                        },
                        {
                            num: '07',
                            icon: 'fa-hourglass-half',
                            color: '#059669',
                            bg: '#ecfdf5',
                            title: 'Time Management',
                            desc: 'Presenters are strongly encouraged to rehearse their presentations in advance to ensure that they can complete their talk within the allotted 10 minutes. Please coordinate with the session moderator regarding the session schedule and timekeeping arrangements.'
                        },
                        {
                            num: '08',
                            icon: 'fa-exclamation-triangle',
                            color: '#b91c1c',
                            bg: '#fef2f2',
                            title: 'Strict Adherence to Time Limits',
                            desc: 'Presenters must strictly adhere to the allocated presentation and Q&A durations. Going beyond the allotted time will not be permitted, as it may affect the schedule and limit opportunities for other presenters and audience interactions.'
                        }
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            background: item.bg,
                            border: `1px solid ${item.color}25`,
                            borderRadius: '12px',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '10px',
                                    background: item.color,
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.1rem'
                                }}>
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <span style={{ fontSize: '0.85rem', fontWeight: '800', color: item.color, opacity: 0.8 }}>
                                    {item.num}
                                </span>
                            </div>
                            <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#1e293b', fontWeight: '700' }}>
                                {item.title}
                            </h4>
                            <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155', lineHeight: '1.65' }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Template Download Card */}
                <div style={{
                    background: 'linear-gradient(135deg, #00629b 0%, #004a7c 100%)',
                    borderRadius: '16px',
                    padding: '35px 30px',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '24px',
                    marginBottom: '40px',
                    boxShadow: '0 10px 30px rgba(0, 98, 155, 0.2)'
                }}>
                    <div style={{ maxWidth: '620px' }}>
                        <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '3px 10px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Mandatory Resource
                        </span>
                        <h3 style={{ margin: '10px 0 8px 0', fontSize: '1.45rem', fontWeight: '700', color: '#ffffff' }}>
                            Official IEEE iSPEC 2026 Oral Presentation PPT Template
                        </h3>
                        <p style={{ margin: 0, fontSize: '0.98rem', opacity: 0.9, lineHeight: '1.6' }}>
                            Presentations that do not follow the prescribed iSPEC 2026 template will not be permitted during technical sessions. Click to open and download the template directly from Google Slides / PowerPoint.
                        </p>
                    </div>
                    <a
                        href={PPT_TEMPLATE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: '#2e8b57',
                            color: '#ffffff',
                            padding: '14px 28px',
                            borderRadius: '10px',
                            fontWeight: '700',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '1rem',
                            boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                            transition: 'all 0.2s ease',
                            whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#246e45'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#2e8b57'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <i className="fas fa-external-link-alt"></i> Open PPT Template
                    </a>
                </div>

                <p style={{ margin: '0 0 50px 0', fontSize: '1.05rem', color: '#64748b', fontStyle: 'italic', textAlign: 'center' }}>
                    We look forward to your active participation and engaging technical presentations at IEEE iSPEC 2026.
                </p>

                {/* Assistance / Contact section */}
                <section style={{ textAlign: 'center' }}>
                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '40px', borderRadius: '16px', color: '#1e293b' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#00629b', fontWeight: 'bold' }}>Need Further Assistance?</h3>
                        <p style={{ fontSize: '1.05rem', marginBottom: '25px', color: '#64748b', maxWidth: '600px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
                            Do contact us if there is any further information or clarification you may need regarding your technical presentation.
                        </p>
                        <a href="mailto:contact@ispec2026.org" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#2e8b57',
                            color: '#fff',
                            padding: '12px 30px',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.05rem',
                            transition: 'transform 0.2s, background 0.2s'
                        }} className="btn-guideline-contact">
                            <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>
                            contact@ispec2026.org
                        </a>
                    </div>
                </section>

                <style>{`
                    .btn-guideline-contact:hover {
                        background: #246e45 !important;
                        transform: translateY(-2px);
                    }
                `}</style>

            </div>
        </PageLayout>
    );
};

export default PresentationGuidelinePage;
