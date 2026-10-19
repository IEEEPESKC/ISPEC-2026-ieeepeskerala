import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

/* ═══════════════════════════════════════
   FEE TABLE DATA
═══════════════════════════════════════ */
const indianTables = [
    {
        caption: 'Registration Category (For Presentation and Publication)',
        rows: [
            { name: 'PES Member',      earlyBird: '₹9,000',  regular: '₹11,000' },
            { name: 'IEEE Member',     earlyBird: '₹10,000', regular: '₹12,000' },
            { name: 'Non-IEEE Member', earlyBird: '₹12,000', regular: '₹14,000' },
        ],
    },
    {
        caption: 'Registration Category (Only for Presenting)',
        rows: [
            { name: 'PES Graduate Student Member',       earlyBird: '₹6,500', regular: '₹7,500' },
            { name: 'IEEE Graduate Student Member',      earlyBird: '₹7,000', regular: '₹8,000' },
            { name: 'PES Undergraduate Student Member',  earlyBird: '₹5,500', regular: '₹6,500' },
            { name: 'IEEE Undergraduate Student Member', earlyBird: '₹6,000', regular: '₹7,000' },
            { name: 'Non-IEEE Student Member',           earlyBird: '₹8,000', regular: '₹9,000' },
        ],
    },
    {
        caption: 'Registration Category',
        rows: [
            { name: 'IEEE Life Member', earlyBird: '₹6,000', regular: '₹7,000' },
        ],
    },
    {
        caption: 'Registration Category (Only for attending)',
        rows: [
            { name: 'Delegates', earlyBird: '₹4,000', regular: '₹5,000' },
        ],
    },
];

const internationalRows = [
    { name: 'PES Member',      earlyBird: '$270', regular: '$350' },
    { name: 'IEEE Member',     earlyBird: '$300', regular: '$400' },
    { name: 'Non-IEEE Member', earlyBird: '$350', regular: '$500' },
];

/* ═══════════════════════════════════════
   FEE TABLE COMPONENT
═══════════════════════════════════════ */
const FeeTable = ({ caption, rows }) => (
    <div style={{ marginBottom: '30px' }}>
        <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '480px', background: '#fff' }}>
                <thead>
                    <tr style={{ background: '#00629b' }}>
                        <th style={{
                            padding: '12px 16px', textAlign: 'left', color: '#fff',
                            fontWeight: '700', fontSize: '0.9rem', width: '55%'
                        }}>
                            {caption}
                        </th>
                        <th style={{ padding: '12px 16px', textAlign: 'center', color: '#fff', fontWeight: '700', fontSize: '0.85rem' }}>
                            Early Bird<br />
                            <span style={{ fontWeight: '400', fontSize: '0.78rem', opacity: 0.85 }}>(Up to 31 Oct 2026)</span>
                        </th>
                        <th style={{ padding: '12px 16px', textAlign: 'center', color: '#fff', fontWeight: '700', fontSize: '0.85rem' }}>
                            Regular<br />
                            <span style={{ fontWeight: '400', fontSize: '0.78rem', opacity: 0.85 }}>(1–15 Nov 2026)</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #eef2f7', background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                            <td style={{ padding: '11px 16px', fontSize: '0.95rem', color: '#374151' }}>{row.name}</td>
                            <td style={{ padding: '11px 16px', textAlign: 'center', fontWeight: '600', color: '#1a1a2e', fontSize: '0.95rem' }}>{row.earlyBird}</td>
                            <td style={{ padding: '11px 16px', textAlign: 'center', fontWeight: '600', color: '#1a1a2e', fontSize: '0.95rem' }}>{row.regular}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

/* ═══════════════════════════════════════
   SECTION HEADING
═══════════════════════════════════════ */
const SectionHeading = ({ children }) => (
    <h2 style={{
        fontSize: '1.6rem', fontWeight: '800', color: '#1a1a2e',
        marginBottom: '20px', paddingBottom: '10px',
        borderBottom: '2px solid #e2e8f0'
    }}>
        {children}
    </h2>
);

const SubHeading = ({ children }) => (
    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#00629b', marginBottom: '16px', marginTop: '32px' }}>
        {children}
    </h3>
);

/* ═══════════════════════════════════════
   COLLAPSIBLE SECTION
═══════════════════════════════════════ */
const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div style={{ borderBottom: '1px solid #e2e8f0' }}>
            <button
                onClick={() => setOpen(o => !o)}
                style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '16px 0', textAlign: 'left',
                }}
            >
                <span style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1a1a2e' }}>{title}</span>
                <i className={`fas fa-chevron-${open ? 'up' : 'down'}`}
                    style={{ fontSize: '0.85rem', color: '#00629b', transition: 'transform 0.2s', flexShrink: 0, marginLeft: '12px' }} />
            </button>
            {open && (
                <div style={{ paddingBottom: '20px', fontSize: '0.97rem', color: '#4b5563', lineHeight: '1.75' }}>
                    {children}
                </div>
            )}
        </div>
    );
};

/* ═══════════════════════════════════════
   PAGE
═══════════════════════════════════════ */
const RegistrationPage = () => {
    return (
        <PageLayout title="Registration">
            <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ padding: '40px 0 80px', color: '#2b2b2b', fontSize: '1.05rem', lineHeight: '1.8' }}>

                    {/* Intro */}
                    <p style={{ marginBottom: '8px' }}>The registration and payment site is now open.</p>
                    <p style={{ marginBottom: '40px', color: '#4b5563' }}>
                        All registration fees include applicable taxes. For online registration, payment methods are
                        credit card, debit card, or net banking (the sender is responsible for all banking fees).
                    </p>

                    {/* ── Registration Fees ── */}
                    <SectionHeading>Registration Fees</SectionHeading>

                    <SubHeading>Indian Participants (INR)</SubHeading>
                    {indianTables.map((t, i) => (
                        <FeeTable key={i} caption={t.caption} rows={t.rows} />
                    ))}

                    <SubHeading>International Participants (USD)</SubHeading>
                    <FeeTable caption="Registration Category" rows={internationalRows} />

                    <p style={{ fontSize: '0.9rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '48px' }}>
                        IEEE membership must be active and verified during registration. A valid student ID must be provided for student categories.
                    </p>

                    {/* ── Registration Period ── */}
                    <SectionHeading>Registration Period</SectionHeading>
                    <ul style={{ paddingLeft: '20px', marginBottom: '48px', color: '#374151', lineHeight: '2' }}>
                        <li><strong>Early-bird Registration:</strong> until 31 October 2026</li>
                        <li><strong>Standard Registration:</strong> 1 November 2026 – 15 November 2026</li>
                        <li><strong>Onsite Registration:</strong> 3 or 4 December 2026</li>
                    </ul>

                    {/* ── Extra Charges ── */}
                    <SectionHeading>Extra Charges</SectionHeading>
                    <ul style={{ paddingLeft: '20px', marginBottom: '48px', color: '#374151', lineHeight: '2' }}>
                        <li>
                            One of the authors (typically the presenter) is responsible for paying the extra page charges
                            and/or the extra paper charges, if applicable.
                        </li>
                        <li>
                            Pages exceeding 6 will incur an extra charge of <strong>₹2,000 per page</strong> (maximum 2 extra pages, 8 pages in total).
                        </li>
                    </ul>

                    {/* ── Registration Notes ── */}
                    <SectionHeading>Registration Notes</SectionHeading>
                    <ul style={{ paddingLeft: '20px', marginBottom: '48px', color: '#374151', lineHeight: '2.1' }}>
                        <li>Each registration is valid for one (1) participant only.</li>
                        <li>All participants, including co-authors, must register individually if they plan to attend the conference.</li>
                        <li>For each accepted paper, at least one author must complete the conference registration for the paper to be included in the conference program.</li>
                        <li><strong>One full author registration (Indian or foreign author) is required for inclusion of the paper(s) in the conference program and IEEE proceedings.</strong></li>
                        <li><strong>Each full conference registration covers a maximum of two (2) papers.</strong></li>
                        <li>Student registration covers one (1) paper.</li>
                        <li><strong>Student registration is not entitled to IEEE Xplore conference proceedings.</strong></li>
                        <li>Additional charges apply for final papers exceeding 6 pages. The maximum number of pages allowed is 8.</li>
                        <li>Full author registration and attendees: includes access to tutorials, keynote sessions, all conference sessions, conference registration kit, lunch, high tea, and gala dinner.</li>
                        <li>The registration fee is non-refundable.</li>
                    </ul>

                    {/* ── No-Show Policy ── */}
                    <SectionHeading>No-Show and Originality Policy</SectionHeading>
                    <p style={{ marginBottom: '10px', color: '#374151' }}>
                        IEEE has a strict <strong>"NO-SHOW"</strong> policy. Authors who do not present risk exclusion from
                        IEEE Xplore. One author or representative must present the paper.
                    </p>
                    <p style={{ marginBottom: '48px', color: '#374151' }}>
                        Papers with a similarity index above <strong>30%</strong> will be rejected.
                    </p>

                    {/* ── Terms and Conditions ── */}
                    <SectionHeading>Terms and Conditions</SectionHeading>
                    <div style={{ marginBottom: '48px' }}>
                        <CollapsibleSection title="Program Changes" defaultOpen>
                            <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                <li>The Organiser reserves the right to modify the program, speakers, venue, or schedule without prior notice.</li>
                            </ul>
                        </CollapsibleSection>
                        <CollapsibleSection title="Code of Conduct">
                            <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                <li style={{ marginBottom: '8px' }}>All attendees are expected to behave professionally and respectfully.</li>
                                <li>Harassment, discrimination, or disruptive behaviour will not be tolerated and may result in removal from the event without refund, in accordance with IEEE policies.</li>
                            </ul>
                        </CollapsibleSection>
                        <CollapsibleSection title="Liability Disclaimer">
                            <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                <li>The Organiser shall not be liable for personal injury, loss, or damage to personal property during the event. Attendance is at the participant's own risk.</li>
                            </ul>
                        </CollapsibleSection>
                        <CollapsibleSection title="Force Majeure">
                            <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                <li>The Organiser shall not be held responsible for delays, interruptions, or cancellations caused by events beyond its reasonable control, including but not limited to natural disasters, public health emergencies, strikes, or government restrictions.</li>
                            </ul>
                        </CollapsibleSection>
                        <CollapsibleSection title="IEEE Policies">
                            <p style={{ marginBottom: '10px' }}>Registration for iSPEC 2026 constitutes acceptance of applicable IEEE policies, including:</p>
                            <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                <li style={{ marginBottom: '6px' }}>
                                    <a href="https://www.ieee.org/security-privacy.html" target="_blank" rel="noopener noreferrer"
                                        style={{ color: '#00629b' }}>
                                        IEEE Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.ieee.org/conferences/event-terms-and-conditions.html" target="_blank" rel="noopener noreferrer"
                                        style={{ color: '#00629b' }}>
                                        IEEE Events Terms and Conditions
                                    </a>
                                </li>
                            </ul>
                        </CollapsibleSection>
                    </div>

                    {/* ── Disclaimer ── */}
                    <SectionHeading>Disclaimer</SectionHeading>
                    <p style={{ marginBottom: '56px', color: '#4b5563' }}>
                        Every effort will be made to deliver the program as published. The conference reserves the right
                        to make changes without prior notice. Participants are advised to obtain personal travel insurance.
                        The conference does not compensate for booking cancellations, loss, theft, or damages.
                    </p>

                    {/* ── Register Button ── */}
                    <div style={{ textAlign: 'center' }}>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                background: '#00629b',
                                color: '#fff',
                                padding: '14px 44px',
                                borderRadius: '6px',
                                fontSize: '1.05rem',
                                fontWeight: '700',
                                textDecoration: 'none',
                                transition: 'background 0.2s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = '#004a7c'}
                            onMouseLeave={e => e.currentTarget.style.background = '#00629b'}
                        >
                            Register here
                        </a>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default RegistrationPage;
