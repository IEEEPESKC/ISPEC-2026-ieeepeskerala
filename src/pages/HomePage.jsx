import React, { useRef, useLayoutEffect, useState } from 'react';
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
import sushilSooneeImg from '../assets/sushil-kumar-soonee.jpg';
import rasaraSamarasingheImg from '../assets/rasara-samarasinghe.jpg';
import sudhakarKumarasamyImg from '../assets/sudhakar-kumarasamy.jpg';

const importantDates = [
    {
        date: '31st August 2026',
        label: <span style={{ color: '#c0392b', fontWeight: '700' }}>Paper Submission Closed</span>,
        icon: 'fa-times-circle'
    },
    { date: '1 November 2026', label: 'Registration Deadline', icon: 'fa-id-card' },
    { date: '4 – 6 December 2026', label: 'Conference Dates', icon: 'fa-calendar-check' },
    { date: '31st October 2026', label: <><span style={{ backgroundColor: '#2e8b57', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', marginRight: '6px', verticalAlign: 'middle' }}>NEW</span>Camera Ready Paper Submission (Extended)</>, icon: 'fa-check-circle' },
    {
        date: '30th September 2026',
        label: <><span style={{ backgroundColor: '#2e8b57', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', marginRight: '6px', verticalAlign: 'middle' }}>NEW</span>Paper Submission in Special Sessions Open</>,
        icon: 'fa-folder-open'
    },
    { date: '30th September 2026', label: 'Notification of Acceptance', icon: 'fa-bell' },
    {
        date: '31st August 2026',
        label: <><span style={{ backgroundColor: '#2e8b57', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', marginRight: '6px', verticalAlign: 'middle' }}>NEW</span>Full Paper Submission Deadline (Final Deadline)</>,
        icon: 'fa-file-alt'
    },

    {
        date: '20th March 2026',
        label: 'Paper submission open from 20 March 2026',
        icon: 'fa-calendar-plus'
    },
];

/* ── Keynote Speakers Data ── */
const keynoteSpeakers = [
    {
        num: '01',
        name: 'Dean Sharafi',
        org: 'Australian Energy Market Operator (AEMO)',
        image: deanSharafiImg,
        sessionTitle: 'Energy Transition Strategies for a Decarbonised Power Grid',
        link: '/keynote-speakers',
    },
    {
        num: '02',
        name: 'Sushil Kumar Soonee',
        org: 'Power System Operation Corporation Ltd. (POSOCO)',
        image: sushilSooneeImg,
        sessionTitle: 'National Grid Integration and Power System Operation Challenges in India',
      
        link: '/keynote-speakers',
    },
    {
        num: '03',
        name: 'Dr. Rasara Samarasinghe',
        org: 'University of Moratuwa, Sri Lanka',
        image: rasaraSamarasingheImg,
        sessionTitle: '"From Reliability to Resilience: Intelligent Asset Management for a Sustainable and Future-Ready Power Grid"',
        link: '/keynote-speakers',
    },
    {
        num: '04',
        name: 'Dr. Sudhakar Kumarasamy',
        org: 'Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA), Malaysia',
        image: sudhakarKumarasamyImg,
        sessionTitle: 'Sustainable Energy Transitions, Climate-Resilient Technologies and Low-Carbon Pathways',
        link: '/keynote-speakers',
    },
    {
        name: 'Dr. Sudhakar Kumarasamy',
        title: 'Associate Professor & Principal Research Fellow',
        org: 'Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA), Malaysia',
        pesRole: '',
        image: sudhakarKumarasamyImg,
        link: null,
        tags: ['Clarivate Highly Cited Researcher (Top 1%)', 'Stanford Top 2% Scientists', 'Certified Energy Manager'],
        bio: 'Associate Professor at UMPSA with 18+ years of academic and research experience. Clarivate Highly Cited Researcher (Top 1%) in 2025 and listed among Stanford\'s World Top 2% Scientists for seven consecutive years. Expert in sustainable energy transitions, energy modelling, electric mobility, and climate-resilient low-carbon technologies. Has published over 265 peer-reviewed articles.',
    },
];

/* ── Keynote Card (dark style matching screenshot) ── */
const KeynoteCard = ({ speaker, index }) => (
    <div
        className="keynote-dark-card"
        style={{
            flex: '1 1 220px',
            minWidth: '200px',
            maxWidth: '280px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '30px 30px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            transition: 'background 0.25s, transform 0.25s',
            cursor: 'default',
        }}
        onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
    >
        {/* Badge + Photo row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            {/* Circular photo */}
            <div style={{
                width: '72px', height: '72px', borderRadius: '50%',
                overflow: 'hidden', border: '2px solid rgba(255,255,255,0.25)',
                flexShrink: 0,
            }}>
                {speaker.image
                    ? <img src={speaker.image} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    : <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-user" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.8rem' }} /></div>
                }
            </div>
            {/* Keynote number badge */}
            <span style={{
                background: '#2bbd8e',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                padding: '3px 8px',
                borderRadius: '4px',
            }}>KEYNOTE {speaker.num}</span>
        </div>

        {/* Name */}
        <div>
            <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700', margin: '0 0 4px 0', lineHeight: '1.3' }}>
                {speaker.name}
            </h3>
            <p style={{ color: '#4dd9ac', fontSize: '0.78rem', margin: 0, lineHeight: '1.4', fontWeight: '500' }}>
                {speaker.org}
            </p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.12)' }} />

        {/* Session */}
        <div style={{ flex: 1 }}>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.08em', margin: '0 0 5px 0', textTransform: 'uppercase' }}>
                Keynote Session:
            </p>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.82rem', lineHeight: '1.5', margin: 0, fontStyle: 'italic' }}>
                "{speaker.sessionTitle}"
            </p>
        </div>

        {/* Footer: link */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 'auto', paddingTop: '8px' }}>
            <Link
                to={speaker.link}
                style={{ color: '#4dd9ac', fontSize: '0.78rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
                Bio & Abstract <i className="fas fa-arrow-right" style={{ fontSize: '0.65rem' }} />
            </Link>
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
                                                <span>📄 Camera Ready Paper Submission deadline extended to <strong>31st October 2026</strong>!</span>
                                                <span>🎤 Keynote Speaker Announced: Dean Sharafi, Strategic Advisor — AEMO, Australia</span>
                                                <span>Paper Submission in Special Sessions is now open! Deadline: 30 September 2026</span>
                                                <span>Paper Submission Deadline extended to August 15</span>
                                                <span>All accepted Papers will be published in IEEE Xplore</span>
                                                <span>Accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore&apos;s scope and quality requirements</span>
                                                {/* Duplicate set for seamless loop */}
                                                <span>📄 Camera Ready Paper Submission deadline extended to <strong>31st October 2026</strong>!</span>
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