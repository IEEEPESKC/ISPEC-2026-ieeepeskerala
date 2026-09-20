import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ImportantDates from '../components/ImportantDates';
import Organisers from '../components/Organisers';
import ieeeLogo from '../assets/ieee.png';
import ieeePesLogo from '../assets/ieee-pes.png';
import ieeePesKcLogo from '../assets/ieee-pes-kc.png';
import ieeeKsLogo from '../assets/ieee-ks.png';
import marbaseliosLogo from '../assets/marbaselioslogo.png';
import deanSharafiImg from '../assets/dean-sharafi.jpg';

const importantDates = [
    {
        date: '31st August 2026',
        label: <><span style={{ backgroundColor: '#2e8b57', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', marginRight: '6px', verticalAlign: 'middle' }}>NEW</span>Full Paper Submission Deadline (Final Deadline)</>,
        icon: 'fa-file-alt'
    },
    {
        date: '30th September 2026',
        label: <><span style={{ backgroundColor: '#2e8b57', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', marginRight: '6px', verticalAlign: 'middle' }}>NEW</span>Paper Submission in Special Sessions Open</>,
        icon: 'fa-folder-open'
    },
    { date: '30th September 2026', label: 'Notification of Acceptance', icon: 'fa-bell' },
    {
        date: '20th March 2026',
        label: 'Paper submission open from 20 March 2026',
        icon: 'fa-calendar-plus'
    },
    { date: '15 October 2026', label: 'Camera Ready / Final Paper Deadline', icon: 'fa-check-circle' },
    { date: '1 November 2026', label: 'Registration Deadline', icon: 'fa-id-card' },
    { date: '4 – 6 December 2026', label: 'Conference Dates', icon: 'fa-calendar-check' },
];

/* ── Keynote Speakers Data ── */
const keynoteSpeakers = [
    {
        name: 'Dean Sharafi',
        title: 'Strategic Advisor on Energy Transition',
        org: 'Australian Energy Market Operator (AEMO)',
        image: deanSharafiImg,
        link: 'https://ieee-pes.org/about-pes/2025-governing-board/dean-sharafi/',
        tags: ['IEEE PES Governing Board', 'IEEE PES Treasurer', 'IEEE Distinguished Lecturer'],
        bio: 'Strategic Advisor on energy transition at AEMO with over thirty years of experience in power system engineering. Served on the IEEE PES Governing Board (2017–2022) as Treasurer, is an Associate Editor for the IEEE Transactions on Power Systems Journal, and is an IEEE Distinguished Lecturer.',
    },
    // Add more speakers here as they are confirmed
];

/* ── Speaker Card Component ── */
const SpeakerCard = ({ speaker }) => (
    <div className="keynote-scroll-card" style={{
        flex: '0 0 340px',
        background: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 6px 24px rgba(0,0,0,0.07)',
        border: '1px solid #eaeaea',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}>
        {/* Photo Header */}
        <div style={{
            background: 'linear-gradient(135deg, #00629b 0%, #004b79 100%)',
            padding: '30px 20px',
            textAlign: 'center',
            position: 'relative',
        }}>
            <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(255,255,255,0.3)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                margin: '0 auto 14px',
                background: speaker.image ? 'none' : 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {speaker.image ? (
                    <img src={speaker.image} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <i className="fas fa-user" style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.4)' }}></i>
                )}
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '700', margin: '0 0 4px 0' }}>{speaker.name}</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', margin: '0 0 2px 0', lineHeight: '1.3' }}>{speaker.title}</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', margin: '0', fontWeight: '500' }}>{speaker.org}</p>
        </div>

        {/* Body */}
        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            {speaker.tags && (
                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    {speaker.tags.map((tag, i) => (
                        <span key={i} style={{
                            background: '#f0f7fb',
                            color: '#00629b',
                            padding: '3px 10px',
                            borderRadius: '20px',
                            fontSize: '0.65rem',
                            fontWeight: '600',
                            border: '1px solid #d6eaf5',
                        }}>{tag}</span>
                    ))}
                </div>
            )}
            <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: '#555', margin: 0, flex: 1 }}>
                {speaker.bio}
            </p>

            {speaker.link && (
                <a
                    href={speaker.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        marginTop: '14px',
                        padding: '7px 14px',
                        background: '#f0f7fb',
                        color: '#00629b',
                        border: '1px solid #bce1f5',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#00629b';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.borderColor = '#00629b';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f0f7fb';
                        e.currentTarget.style.color = '#00629b';
                        e.currentTarget.style.borderColor = '#bce1f5';
                    }}
                >
                    <span>View IEEE PES Profile</span>
                    <i className="fas fa-external-link-alt" style={{ fontSize: '0.7rem' }}></i>
                </a>
            )}
        </div>
    </div>
);

const SectionTitle = ({ children }) => (
    <div style={{ marginBottom: '24px' }}>
        <h3 style={{
            fontSize: '1.35rem',
            fontWeight: '700',
            color: '#1a1a2e',
            letterSpacing: '-0.3px',
            margin: '0 0 8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }}>
            {children}
        </h3>
        <div style={{ width: '32px', height: '3px', background: '#2e8b57', borderRadius: '2px' }}></div>
    </div>
);

const HomePage = () => {
    const heroRef = useRef(null);

    // Smooth scroll parallax for the hero
    useLayoutEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const scrollY = window.scrollY;
            const progress = Math.min(scrollY / 700, 1);
            heroRef.current.style.transform = `scale(${1 - progress * 0.04})`;
            heroRef.current.style.borderRadius = `${progress * 40}px`;
            heroRef.current.style.opacity = 1 - progress * 0.6;
            heroRef.current.style.filter = `blur(${progress * 4}px)`;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="home-page" style={{ background: '#000' }}>

                {/* ── Sticky Hero Wrapper ── */}
                <div style={{ position: 'sticky', top: 0, zIndex: 0 }}>
                    <div ref={heroRef} style={{ width: '100%', overflow: 'hidden', transformOrigin: 'top center', willChange: 'transform, opacity, border-radius, filter' }}>
                        <Hero />
                    </div>
                </div>

                {/* ── Content overlapping the hero ── */}
                <div style={{ position: 'relative', zIndex: 10, background: '#fafafa', borderRadius: '40px 40px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.6)' }}>
                    
                    {/* ── About Section ── */}
                    <div style={{ padding: '90px 15px 80px', borderBottom: '1px solid #eaeaea' }}>
                        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                                <h2 style={{ fontSize: '2.4rem', color: '#1a1a2e', fontWeight: '800', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                                    About iSPEC 2026
                                </h2>
                                <div style={{ width: '60px', height: '3px', background: '#2e8b57', margin: '0 auto', borderRadius: '2px' }}></div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div style={{ background: '#fff', padding: '45px 50px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#333', marginBottom: '24px', fontWeight: '400' }}>
                                        The <strong style={{ color: '#00629b' }}>IEEE Sustainable Power and Energy Conference (iSPEC) 2026</strong> is a premier international forum that brings together researchers, engineers, policymakers, and industry leaders from across the globe to present and discuss the latest advances in <strong>power systems</strong>, <strong>energy technologies</strong>, and <strong>sustainable solutions</strong>.
                                    </p>
                                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#333', margin: 0, fontWeight: '400' }}>
                                        The IEEE iSPEC, organized by the <strong>IEEE Power &amp; Energy Society (PES) Kerala Chapter</strong> in association with the <strong>IEEE Kerala Section</strong>, promises to be a landmark event in the energy sector, offering a unique opportunity to deepen our understanding of sustainable energy through cross-disciplinary collaboration in an inspiring environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Keynote Speakers Scrolling Window ── */}
                    <div style={{ padding: '80px 0', borderBottom: '1px solid #eaeaea', background: '#fff' }}>
                        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                                <h2 style={{ fontSize: '2.4rem', color: '#1a1a2e', fontWeight: '800', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                                    Keynote Speakers
                                </h2>
                                <div style={{ width: '60px', height: '3px', background: '#2e8b57', margin: '0 auto', borderRadius: '2px' }}></div>
                            </div>
                        </div>
                        {/* Single speaker = centered card, multiple = scrolling strip */}
                        {keynoteSpeakers.length === 1 ? (
                            <div style={{ maxWidth: '380px', margin: '0 auto', padding: '0 15px' }}>
                                <SpeakerCard speaker={keynoteSpeakers[0]} />
                            </div>
                        ) : (
                            <div className="keynote-scroll-container" style={{
                                overflow: 'hidden',
                                width: '100%',
                                position: 'relative',
                                padding: '10px 0',
                            }}>
                                {/* Fade edges */}
                                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
                                <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }}></div>

                                <div className="keynote-scroll-track" style={{
                                    display: 'flex',
                                    gap: '30px',
                                    width: 'max-content',
                                }}>
                                    {keynoteSpeakers.map((speaker, i) => (
                                        <SpeakerCard key={`a-${i}`} speaker={speaker} />
                                    ))}
                                    {keynoteSpeakers.map((speaker, i) => (
                                        <SpeakerCard key={`b-${i}`} speaker={speaker} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Link to Full Keynote Speakers Page */}
                        <div style={{ textAlign: 'center', marginTop: '30px' }}>
                            <Link
                                to="/keynote-speakers"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: '#00629b',
                                    color: '#fff',
                                    padding: '9px 20px',
                                    borderRadius: '25px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    boxShadow: '0 3px 10px rgba(0,98,155,0.2)',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#004b79';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,98,155,0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#00629b';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,98,155,0.2)';
                                }}
                            >
                                <span>Detailed Speaker Info</span>
                                <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                            </Link>
                        </div>
                    </div>

                    {/* ── Main Content Grid (Calm UI) ── */}
                    <div style={{ background: '#fff', padding: '80px 15px' }}>
                        <div className="responsive-home-grid" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: '60px' }}>

                            {/* ── Left: Important Dates ── */}
                            <div>
                                <SectionTitle>Important Dates</SectionTitle>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {importantDates.map((item, i) => (
                                        <div key={i} className="responsive-date-tile" style={{ 
                                            padding: '16px 20px', 
                                            background: i === 4 ? '#f4fbf7' : '#fafafa', 
                                            border: '1px solid', 
                                            borderColor: i === 4 ? '#c8f0db' : '#eaeaea', 
                                            borderRadius: '8px', 
                                            transition: 'background-color 0.2s ease', 
                                            cursor: 'default' 
                                        }}
                                            onMouseEnter={e => e.currentTarget.style.backgroundColor = i === 4 ? '#edf9f2' : '#f5f5f5'}
                                            onMouseLeave={e => e.currentTarget.style.backgroundColor = i === 4 ? '#f4fbf7' : '#fafafa'}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                                <i className={`fas ${item.icon}`} style={{ color: i === 4 ? '#2e8b57' : '#666', fontSize: '1.1rem', width: '20px', textAlign: 'center' }}></i>
                                                <span style={{ fontSize: '1.05rem', color: '#333', fontWeight: '500' }}>{item.label}</span>
                                            </div>
                                            <span className="date-text" style={{ fontWeight: '600', fontSize: '1rem', color: i === 4 ? '#2e8b57' : '#1a1a2e' }}>
                                                {item.date}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Right: News + Sponsors + Supporters ── */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '45px' }}>

                                {/* Latest News */}
                                <div className="latest-news-wrapper">
                                    <SectionTitle>Latest News</SectionTitle>
                                    <div className="news-ticker-container">
                                        <div className="news-icon">
                                            <i className="fas fa-bullhorn"></i>
                                        </div>
                                        <div className="news-ticker-track">
                                            <div className="news-ticker-content">
                                                {/* First set */}
                                                <span>🎤 Keynote Speaker Announced: Dean Sharafi, Strategic Advisor — AEMO, Australia</span>
                                                <span>Paper Submission in Special Sessions is now open! Deadline: 30 September 2026</span>
                                                <span>Paper Submission Deadline extended to August 15</span>
                                                <span>All accepted Papers will be published in IEEE Xplore</span>
                                                <span>Accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore&apos;s scope and quality requirements</span>
                                                {/* Duplicate set for seamless loop */}
                                                <span>🎤 Keynote Speaker Announced: Dean Sharafi, Strategic Advisor — AEMO, Australia</span>
                                                <span>Paper Submission in Special Sessions is now open! Deadline: 30 September 2026</span>
                                                <span>Paper Submission Deadline extended to August 15</span>
                                                <span>All accepted Papers will be published in IEEE Xplore</span>
                                                <span>Accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore&apos;s scope and quality requirements</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '30px' }}></div>
                                </div>

                                {/* Sponsors */}
                                <div>
                                    <SectionTitle>Sponsors</SectionTitle>
                                    <div className="responsive-sponsors" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                                        <a href="https://www.ieee.org" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.9 }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.9}>
                                            <img src={ieeeLogo} alt="IEEE" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
                                        </a>
                                        <a href="https://www.ieee-pes.org" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.9 }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.9}>
                                            <img src={ieeePesLogo} alt="IEEE PES" style={{ height: '75px', width: 'auto', objectFit: 'contain' }} />
                                        </a>
                                    </div>
                                </div>

                                {/* Supporters */}
                                <div>
                                    <SectionTitle>Supporters</SectionTitle>
                                    <div className="responsive-sponsors" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                                        <a href="https://ieeekerala.org" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.85 }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.85}>
                                            <img src={ieeeKsLogo} alt="IEEE Kerala Section" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
                                        </a>
                                        <a href="https://ewh.ieee.org/r10/kerala/pes/" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.85 }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.85}>
                                            <img src={ieeePesKcLogo} alt="IEEE PES Kerala Chapter" style={{ height: '85px', width: 'auto', objectFit: 'contain' }} />
                                        </a>
                                        <a href="https://mbcet.ac.in/" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.85 }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.85}>
                                            <img src={marbaseliosLogo} alt="Mar Baselios College" style={{ height: '128px', width: 'auto', objectFit: 'contain' }} />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Organisers />

                </div>
            </div>
        </>
    );
};

export default HomePage;