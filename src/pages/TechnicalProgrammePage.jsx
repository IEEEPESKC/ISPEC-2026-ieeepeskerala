import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const scheduleData = [
    {
        id: 'day1',
        title: 'Day 1: Friday, 4 December 2026 (Inauguration Day)',
        shortTitle: 'Day 1 (4 Dec)',
        date: 'Friday, 4 December 2026',
        items: [
            {
                time: '9:00 AM – 10:00 AM',
                event: 'Registration',
                desc: 'Conference Registration & Welcome Coffee',
                venue: 'Registration Desk',
                type: 'normal',
            },
            {
                time: '10:00 AM – 10:45 AM',
                event: 'Keynote Address 1 (KN 1)',
                desc: 'Dean Sharafi (Treasurer, IEEE PES; Strategic Advisor, AEMO Australia) – Utility-Scale Energy Transition & Market Operations',
                venue: 'SENATUS HALL',
                type: 'keynote',
            },
            {
                time: '10:45 AM – 11:30 AM',
                event: 'Keynote Address 2 (KN 2)',
                desc: 'Sushil Kumar Soonee (Former & Founder CEO, POSOCO, India) – Grid Integration & Resilience in Dynamic Energy Markets',
                venue: 'SENATUS HALL',
                type: 'keynote',
            },
            {
                time: '11:30 AM – 12:00 PM',
                event: 'Interactive Conversation',
                desc: 'In Conversation with Dean Sharafi and Sushil Kumar Soonee – Open discussions with the Keynote Speakers',
                venue: 'SENATUS HALL',
                type: 'normal',
            },
            {
                time: '12:00 PM – 1:00 PM',
                event: 'Lunch Break',
                desc: 'Networking Lunch',
                venue: 'PASCAL HALL',
                type: 'break',
            },
            {
                time: '1:00 PM – 3:00 PM',
                event: 'Technical Track Session A',
                desc: 'Technical Paper Presentations across 5 parallel tracks',
                isMultiTrack: true,
                tracks: [
                    { track: 'Track 1', venue: 'ARYABHATA HALL' },
                    { track: 'Track 2', venue: 'FARADAY HALL' },
                    { track: 'Track 3', venue: 'SHANON HALL' },
                    { track: 'Track 4', venue: 'SENATUS HALL' },
                    { track: 'Track 5', venue: 'SOFTWARE LAB B-308' },
                ],
                type: 'track',
            },
            {
                time: '3:00 PM – 3:15 PM',
                event: 'Tea Break',
                desc: 'Networking Tea Break',
                venue: 'Foyer',
                type: 'break',
            },
            {
                time: '3:15 PM – 4:15 PM',
                event: 'Inaugural Ceremony',
                desc: 'Welcome Address, Lighting of the Lamp, Inaugural Speech by Chief Guest & Address by Guests of Honour',
                venue: 'VISVESVARAYA HALL',
                type: 'special',
            },
            {
                time: '4:15 PM – 4:45 PM',
                event: 'Tribute to Prof. V.K Damodaran',
                desc: "A tribute to Prof. V. K. Damodaran (by IEEE PES Kerala Chapter) – Remembering Prof V K Damodaran, the legend who shaped Kerala's Energy Dialogues and inspired generations.",
                venue: 'VISVESVARAYA HALL',
                type: 'special',
            },
            {
                time: '5:00 PM – 7:00 PM',
                event: 'High Tea Networking Welcome Reception',
                desc: 'Networking Reception & Icebreaker Session',
                venue: 'Lawn / Banquet Area',
                type: 'normal',
            },
        ],
    },
    {
        id: 'day2',
        title: 'Day 2: Saturday, 5 December 2026 (Technical & Panel)',
        shortTitle: 'Day 2 (5 Dec)',
        date: 'Saturday, 5 December 2026',
        items: [
            {
                time: '8:30 AM – 9:00 AM',
                event: 'Registration',
                desc: 'Delegate Registration & Morning Refreshments',
                venue: 'Registration Desk',
                type: 'normal',
            },
            {
                time: '9:00 AM – 9:45 AM',
                event: 'Keynote Address 3 (KN 3)',
                desc: 'Dr. Rasara Samarasinghe (Chair, IEEE PES Sri Lanka Chapter) – From Reliability to Resilience: Intelligent Asset Management',
                venue: 'SENATUS HALL',
                type: 'keynote',
            },
            {
                time: '9:45 AM – 10:30 AM',
                event: 'Keynote Address 4 (KN 4)',
                desc: 'Dr. Sudhakar Kumarasamy (Associate Prof. & Principal Research Fellow, UMPSA Malaysia) – Sustainable Energy Technologies & Clean Systems',
                venue: 'SENATUS HALL',
                type: 'keynote',
            },
            {
                time: '10:30 AM – 11:00 AM',
                event: 'Morning Break',
                desc: 'Tea Break',
                venue: 'Foyer',
                type: 'break',
            },
            {
                time: '11:00 AM – 1:00 PM',
                event: 'Technical Track Session B',
                desc: 'Technical Paper Presentations across 4 parallel tracks',
                isMultiTrack: true,
                tracks: [
                    { track: 'Track 7', venue: 'ARYABHATA HALL' },
                    { track: 'Track 8', venue: 'FARADAY HALL' },
                    { track: 'Track 9', venue: 'SHANON HALL' },
                    { track: 'Track 10', venue: 'SOFTWARE LAB B-308' },
                ],
                type: 'track',
            },
            {
                time: '1:00 PM – 2:00 PM',
                event: 'Lunch Break',
                desc: 'Networking Lunch',
                venue: 'PASCAL HALL',
                type: 'break',
            },
            {
                time: '2:00 PM – 3:30 PM',
                event: 'Moderated Panel Discussion',
                desc: "Industry & Policy Panel: Navigating Kerala's Energy Crisis – Hydro-Dependence, Emergence of RTS, Floating Solar, BESS, Pumped Storage & Regional Market Integration",
                venue: 'SENATUS HALL',
                type: 'normal',
            },
            {
                time: '3:30 PM – 4:00 PM',
                event: 'Afternoon Break',
                desc: 'Tea Break',
                venue: 'Foyer',
                type: 'break',
            },
            {
                time: '4:00 PM – 4:30 PM',
                event: 'Product Demonstration',
                desc: 'Demonstration of Innovative Hardwares/Softwares',
                venue: 'Exhibition Area',
                type: 'normal',
            },
            {
                time: '4:30 PM – 5:30 PM',
                event: 'IEEE PES YP Session',
                desc: 'IEEE PES Young Professionals Meetup: Mentorship, Skill Bridges in Clean Energy & Industry-Academia Pathways (1 Hour)',
                venue: 'SENATUS HALL',
                type: 'normal',
            },
            {
                time: '5:30 PM – 6:30 PM',
                event: 'IEEE PES WiP Session',
                desc: 'IEEE PES Women in Power Meetup: Empowering Women Leaders & Researchers in Clean Energy (1 Hour)',
                venue: 'SENATUS HALL',
                type: 'normal',
            },
            {
                time: '6:30 PM – 9:00 PM',
                event: 'Best Paper Awards, Gala Dinner & Cultural Night',
                desc: 'Announcement of Best Paper Awards across each Thematic Area, followed by Gala Dinner & Cultural Night',
                venue: 'AMINETY HALL',
                type: 'special',
            },
        ],
    },
    {
        id: 'day3',
        title: 'Day 3: Sunday, 6 December 2026 (Valedictory & Cultural Visit)',
        shortTitle: 'Day 3 (6 Dec)',
        date: 'Sunday, 6 December 2026',
        items: [
            {
                time: '9:00 AM – 10:00 AM',
                event: 'Valedictory Session',
                desc: 'Concluding Remarks & Official Vote of Thanks',
                venue: 'Main Hall / MBCET Campus',
                type: 'special',
            },
            {
                time: '10:00 AM – 1:00 PM',
                event: 'Cultural Visit (Optional)',
                desc: 'Optional cultural visit for delegates',
                venue: 'Details to be announced',
                type: 'normal',
            },
        ],
    },
];

const headerStyle = {
    background: '#1e3a5f',
    color: '#fff',
    padding: '12px 14px',
    fontSize: '0.84rem',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: '0.3px',
};

const cellStyle = {
    padding: '12px 14px',
    fontSize: '0.84rem',
    color: '#1a202c',
    borderBottom: '1px solid #e2e8f0',
    verticalAlign: 'middle',
    lineHeight: '1.5',
};

const timeStyle = {
    ...cellStyle,
    fontWeight: '700',
    whiteSpace: 'nowrap',
    color: '#1a202c',
};

const eventStyle = {
    ...cellStyle,
    fontWeight: '700',
};

const venueCellStyle = {
    ...cellStyle,
    textAlign: 'center',
    fontWeight: '600',
};

const dayHeaderStyle = {
    background: '#1e3a5f',
    color: '#fff',
    textAlign: 'center',
    padding: '12px 16px',
    fontSize: '1rem',
    fontWeight: '700',
    borderRadius: '8px 8px 0 0',
};

const getRowStyle = (type) => {
    switch (type) {
        case 'keynote':
            return { background: '#fffbe6' };
        case 'break':
            return { background: '#f0f4f8' };
        case 'special':
            return { background: '#e8f4ea' };
        default:
            return { background: '#fff' };
    }
};

const TechnicalProgrammePage = () => {
    const [selectedDay, setSelectedDay] = useState('all');

    const filteredDays = selectedDay === 'all'
        ? scheduleData
        : scheduleData.filter(d => d.id === selectedDay);

    return (
        <PageLayout title="Technical Programme">
            {/* Embedded styles: reduce header gap and enable smooth table scroll on mobile */}
            <style>{`
                html, body, .page-wrapper {
                    overflow-x: hidden !important;
                    max-width: 100vw;
                }
                .page-content-wrapper {
                    padding-top: 15px !important;
                }
                .schedule-table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                    overscroll-behavior-x: contain;
                    -webkit-overflow-scrolling: touch;
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                    margin-bottom: 35px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }
                .schedule-table-wrapper::-webkit-scrollbar {
                    height: 8px;
                }
                .schedule-table-wrapper::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 4px;
                }
                .schedule-table-wrapper::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}</style>

            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
                <div style={{ padding: '0 0 50px' }}>

                    {/* Master Banner Header */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1e3a5f 0%, #0d233a 100%)',
                        color: '#fff',
                        borderRadius: '12px',
                        padding: '22px 20px',
                        marginBottom: '20px',
                        textAlign: 'center',
                        boxShadow: '0 4px 15px rgba(30, 58, 95, 0.12)',
                    }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(255,255,255,0.15)',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.78rem',
                            fontWeight: '600',
                            letterSpacing: '0.8px',
                            textTransform: 'uppercase',
                            marginBottom: '8px'
                        }}>
                            Conference Schedule
                        </span>
                        <h2 style={{ margin: '0 0 8px 0', fontSize: '1.4rem', fontWeight: '800', letterSpacing: '0.3px', lineHeight: '1.3' }}>
                            IEEE ISPEC 2026 — Master Conference Schedule
                        </h2>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Theme: Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality<br />
                            <strong>Venue:</strong> MBCET, Thiruvananthapuram &nbsp;|&nbsp; <strong>Date:</strong> 4 – 6 December 2026
                        </p>
                    </div>

                    {/* Day Filter Tabs */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '10px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        marginBottom: '20px',
                    }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {[
                                { id: 'all', label: 'All Days' },
                                { id: 'day1', label: 'Day 1 (4 Dec)' },
                                { id: 'day2', label: 'Day 2 (5 Dec)' },
                                { id: 'day3', label: 'Day 3 (6 Dec)' },
                            ].map((tab) => {
                                const isActive = selectedDay === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setSelectedDay(tab.id)}
                                        style={{
                                            background: isActive ? '#00629b' : '#fff',
                                            color: isActive ? '#fff' : '#334155',
                                            border: `1px solid ${isActive ? '#00629b' : '#cbd5e1'}`,
                                            padding: '6px 14px',
                                            borderRadius: '6px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                        }}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Conference Tables */}
                    {filteredDays.map((day) => (
                        <div key={day.id} style={{ marginBottom: '35px' }}>
                            <div style={dayHeaderStyle}>{day.title}</div>
                            <div className="schedule-table-wrapper">
                                <table style={{ width: '100%', minWidth: '720px', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ ...headerStyle, width: '160px' }}>Time Slot</th>
                                            <th style={{ ...headerStyle, width: '200px' }}>Session / Event</th>
                                            <th style={headerStyle}>Description &amp; Key Highlights</th>
                                            <th style={{ ...headerStyle, width: '180px' }}>Venue / Track</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {day.items.map((item, idx) => {
                                            const rowBg = getRowStyle(item.type);

                                            if (item.isMultiTrack && item.tracks) {
                                                return (
                                                    <React.Fragment key={idx}>
                                                        {item.tracks.map((trackItem, tIdx) => (
                                                            <tr key={tIdx} style={rowBg}>
                                                                {tIdx === 0 && (
                                                                    <>
                                                                        <td
                                                                            style={{ ...timeStyle, verticalAlign: 'top', paddingTop: '14px' }}
                                                                            rowSpan={item.tracks.length}
                                                                        >
                                                                            {item.time}
                                                                        </td>
                                                                        <td
                                                                            style={{ ...eventStyle, verticalAlign: 'top', paddingTop: '14px' }}
                                                                            rowSpan={item.tracks.length}
                                                                        >
                                                                            {item.event}
                                                                        </td>
                                                                    </>
                                                                )}
                                                                <td style={cellStyle}>
                                                                    <strong>{trackItem.track}</strong>
                                                                </td>
                                                                <td style={venueCellStyle}>
                                                                    <span style={{
                                                                        color: '#00629b',
                                                                        fontWeight: '700',
                                                                    }}>
                                                                        {trackItem.venue}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </React.Fragment>
                                                );
                                            }

                                            return (
                                                <tr key={idx} style={rowBg}>
                                                    <td style={timeStyle}>{item.time}</td>
                                                    <td style={eventStyle}>{item.event}</td>
                                                    <td style={cellStyle}>{item.desc}</td>
                                                    <td style={venueCellStyle}>
                                                        {item.venue ? (
                                                            <span style={{
                                                                color: '#00629b',
                                                                fontWeight: '700',
                                                            }}>
                                                                {item.venue}
                                                            </span>
                                                        ) : '—'}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}

                    {/* Legend */}
                    <div style={{
                        background: '#fff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        padding: '14px 18px',
                        marginTop: '10px'
                    }}>
                        <div style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1e293b', marginBottom: '8px' }}>
                            Color Legend:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.82rem' }}>
                            {[
                                { color: '#fffbe6', border: '#f59e0b', label: 'Keynote Sessions' },
                                { color: '#f0f4f8', border: '#cbd5e1', label: 'Breaks & Networking' },
                                { color: '#e8f4ea', border: '#10b981', label: 'Special / Ceremonial Events' },
                                { color: '#fff', border: '#e2e8f0', label: 'Technical / General Sessions' },
                            ].map(({ color, border, label }) => (
                                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '18px', height: '18px', background: color, border: `1px solid ${border}`, borderRadius: '4px' }}></div>
                                    <span style={{ color: '#475569', fontWeight: '500' }}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default TechnicalProgrammePage;
