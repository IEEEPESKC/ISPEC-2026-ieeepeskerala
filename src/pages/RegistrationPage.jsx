import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const RegistrationPage = () => {
    return (
        <PageLayout title="Registration">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div id="breadcrumbs" style={{ padding: '20px 0', fontSize: '0.9rem', color: '#666' }}>
                    <span><span><Link to="/" style={{ color: '#00629b', textDecoration: 'none' }}>Home</Link></span> » <span className="breadcrumb_last" aria-current="page">Registration</span></span>
                </div>

                <div className="section-content" style={{ paddingBottom: '60px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333' }}><span>Registration Fee Table</span></h2>

                    <div style={{ marginBottom: '40px' }}>
                        <div className="table-responsive" style={{ overflowX: 'auto', marginBottom: '20px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', fontSize: '1.05rem' }}>
                                <thead>
                                    <tr style={{ background: '#f8f9fa' }}>
                                        <th style={{ padding: '15px', border: '1px solid #ddd', textAlign: 'left' }}><strong>Registration Category</strong></th>
                                        <th style={{ padding: '15px', border: '1px solid #ddd', textAlign: 'left' }}><strong>Author and Early Bird Fee</strong><br /><span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>(Before 15 July 2026)</span></th>
                                        <th style={{ padding: '15px', border: '1px solid #ddd', textAlign: 'left' }}><strong>Regular Fee</strong><br /><span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>(16 July to 9 August 2026)</span></th>
                                        <th style={{ padding: '15px', border: '1px solid #ddd', textAlign: 'left' }}><strong>On Site Fee</strong><br /><span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>(After 9 August 2026)</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>IEEE PES Society Member</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 950.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 1,140.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 1,370.00</td>
                                    </tr>
                                    <tr style={{ background: '#f8f9fa' }}>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>IEEE Member</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 1,095.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 1,315.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 1,575.00</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>Non-Member</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 1,425.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 1,710.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 2,055.00</td>
                                    </tr>
                                    <tr style={{ background: '#f8f9fa' }}>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>IEEE PES Student Member</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 475.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 570.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 685.00</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>IEEE Student Member</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 570.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 685.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 825.00</td>
                                    </tr>
                                    <tr style={{ background: '#f8f9fa' }}>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>IEEE Life Member</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 475.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 570.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 685.00</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>Additional Paper</td>
                                        <td colSpan="3" style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 200.00</td>
                                    </tr>
                                    <tr style={{ background: '#f8f9fa' }}>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>Tutorial only (24 August 2026)</td>
                                        <td colSpan="2" style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 300.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 400.00</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>Tutorial only (24 August 2026) Student</td>
                                        <td colSpan="2" style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 200.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 300.00</td>
                                    </tr>
                                    <tr style={{ background: '#f8f9fa' }}>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>Banquet</td>
                                        <td colSpan="2" style={{ padding: '15px', border: '1px solid #ddd' }}>SGD 200.00</td>
                                        <td style={{ padding: '15px', border: '1px solid #ddd' }}>Contact Secretariat</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={{ fontStyle: 'italic', color: '#666' }}>
                            All fees are quoted in Singapore Dollars (SGD) (Please note: iSPEC 2026 might adapt this to INR if needed based on location).<br />
                            All deadlines are based on the UTC +08:00 time zone.
                        </p>
                    </div>

                    <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333', marginTop: '40px' }}><span>Registration Notes</span></h2>
                    <div style={{ marginBottom: '40px', fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '10px' }}>Each registration is valid for one (1) participant only.</li>
                            <li style={{ marginBottom: '10px' }}>All participants, including co-authors, are required to register individually if they are planning to attend the conference.</li>
                            <li style={{ marginBottom: '10px' }}>For each accepted paper, <strong>at least one author</strong> must complete the online conference registration by <strong>15 July 2026 (UTC+08:00)</strong> for the paper to be included in the conference technical program.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Each Full Conference</strong> registration may cover a maximum of two (2) papers and includes a ticket to the conference banquet.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Student</strong> registration covers one (1) paper and does not include the conference banquet.</li>
                            <li style={{ marginBottom: '10px' }}>Up to two (2) additional papers may be added to a Full Conference registration at SGD 200 per paper. Student registrations are not eligible for additional paper purchases.</li>
                        </ul>
                    </div>

                    <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333', marginTop: '40px' }}><span>Refund and Cancellation Policy</span></h2>
                    <div style={{ marginBottom: '40px', fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '10px' }}>All cancellation requests must be submitted in writing to the Conference Secretariat at <a href="mailto:info@ispec2026.org" style={{ color: '#00629b' }}>info@ispec2026.org</a>.</li>
                            <li style={{ marginBottom: '10px' }}>Approved refunds (if any) will be <strong>processed after the conference</strong>.</li>
                            <li style={{ marginBottom: '10px' }}>A <strong>non-refundable administrative fee of 10%</strong> of the registration fee will be deducted from all approved refunds.</li>
                            <li style={{ marginBottom: '10px' }}><strong>No refunds</strong> will be granted after <strong>9 August 2026</strong>, including for no-shows.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Author registrations are non-refundable</strong> once the paper has been included in the conference program.</li>
                            <li style={{ marginBottom: '10px' }}>Registration transfers to another individual may be permitted, subject to <strong>Organizing Committee approval</strong> and a written request.</li>
                        </ul>
                    </div>

                    <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333', marginTop: '40px' }}><span>Terms and Conditions</span></h2>
                    <div style={{ marginBottom: '40px', fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                        <h3 style={{ fontSize: '1.25rem', marginTop: '20px', marginBottom: '10px', color: '#333' }}><strong>Program Changes</strong></h3>
                        <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                            <li>The Organiser reserves the right to modify the program, speakers, venue, or schedule without prior notice.</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', marginTop: '20px', marginBottom: '10px', color: '#333' }}><strong>Code of Conduct</strong></h3>
                        <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                            <li>All attendees are expected to behave professionally and respectfully.</li>
                            <li>Harassment, discrimination, or disruptive behaviour will not be tolerated and may result in removal from the event without refund, in accordance with IEEE policies</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', marginTop: '20px', marginBottom: '10px', color: '#333' }}><strong>Photography &amp; Recording</strong></h3>
                        <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                            <li>By attending iSPEC 2026, participants consent to being photographed, filmed, or recorded for conference, promotional, and archival purposes.</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', marginTop: '20px', marginBottom: '10px', color: '#333' }}><strong>Liability Disclaimer</strong></h3>
                        <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                            <li>The Organiser shall not be liable for personal injury, loss, or damage to personal property during the event. Attendance is at the participant's own risk.</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', marginTop: '20px', marginBottom: '10px', color: '#333' }}><strong>Force Majeure</strong></h3>
                        <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                            <li>The Organiser shall not be held responsible for delays, interruptions, or cancellations caused by events beyond its reasonable control, including but not limited to natural disasters, public health emergencies, strikes, or government restrictions.</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', marginTop: '20px', marginBottom: '10px', color: '#333' }}><strong>IEEE Policies</strong></h3>
                        <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                            <li>Registration for iSPEC 2026 constitutes acceptance of applicable IEEE policies, including:
                                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                    <li><a href="https://www.ieee.org/security-privacy.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00629b' }}> IEEE Privacy Policy </a></li>
                                    <li><a href="https://www.ieee.org/conferences/event-terms-and-conditions.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00629b' }}> IEEE Events Terms and Conditions </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default RegistrationPage;
