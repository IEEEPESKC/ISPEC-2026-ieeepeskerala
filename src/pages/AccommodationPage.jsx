import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const AccommodationPage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="Accommodation" breadcrumb="Accommodation" />

            <main className="page-content">
                <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>



                    {/* ── Student Accommodation ── */}
                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.2rem', color: '#1a1a2e' }}>
                            Accommodation for Outstation Student Participants
                        </h2>

                        <p style={{ color: '#374151', fontSize: '0.97rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            Accommodation can be arranged for outstation student participants during the conference at:
                        </p>

                        <div style={{
                            background: '#f0f7ff',
                            borderLeft: '4px solid #00629b',
                            borderRadius: '0 8px 8px 0',
                            padding: '14px 18px',
                            marginBottom: '1.4rem',
                        }}>
                            <p style={{ margin: 0, fontWeight: '700', fontSize: '1rem' }}>
                                <a
                                    href="https://www.google.com/maps/search/Mar+Gregorios+Renewal+Centre,+Nalanchira,+Thiruvananthapuram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#00629b',
                                        textDecoration: 'underline',
                                        fontWeight: '700',
                                        fontSize: '1rem',
                                    }}
                                >
                                    <i className="fas fa-map-marker-alt" style={{ color: '#e63946', fontSize: '1rem', marginRight: '6px' }}></i>
                                    Mar Gregorios Renewal Centre
                                </a>
                            </p>
                            <p style={{ margin: '4px 0 0 0', color: '#555', fontSize: '0.95rem' }}>
                                Mar Ivanios Vidya Nagar, Nalanchira, Thiruvananthapuram
                            </p>
                        </div>

                        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1a1a2e', marginBottom: '0.6rem' }}>
                            How to Apply
                        </h3>
                        <p style={{ color: '#374151', fontSize: '0.97rem', lineHeight: '1.8', marginBottom: '0.8rem' }}>
                            Participants who wish to avail of the accommodation facility are requested to fill in the accommodation request form on or before <strong>15 November 2026</strong>.
                        </p>

                        <a
                            href="https://forms.gle/ktmzdzTMN4xHMtke6"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                background: '#00629b',
                                color: '#fff',
                                padding: '10px 22px',
                                borderRadius: '6px',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                textDecoration: 'none',
                                marginBottom: '1.4rem',
                            }}
                        >
                            Fill Accommodation Request Form
                        </a>

                        <p style={{ color: '#374151', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                            Accommodation will be allotted on a <strong>first-come, first-served basis</strong>, subject to availability. Confirmation will be communicated by email to the registered address.
                        </p>

                        <div style={{
                            background: '#f9f9f9',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            padding: '14px 18px',
                        }}>
                            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#1a1a2e', fontSize: '0.95rem' }}>
                                For any queries, please contact:
                            </p>
                            <p style={{ margin: 0, color: '#374151', fontSize: '0.95rem', lineHeight: '1.8' }}>
                                <strong>Mr. Aswin R B</strong><br />
                                Assistant Professor, Department of EEE, MBCET<br />
                                Phone: <a href="tel:9447329628" style={{ color: '#00629b', textDecoration: 'none' }}>9447329628</a>
                            </p>
                        </div>
                    </section>

                    <hr style={{ border: 'none', borderTop: '1px solid #ddd', marginBottom: '2.5rem' }} />

                    {/* ── Hotels near College ── */}
                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.2rem' }}>
                            Hotels near College (within 5km)
                        </h2>

                        <ol style={{ paddingLeft: '1.6rem', lineHeight: '2.2', color: '#222', fontSize: '0.97rem' }}>
                            <li>
                                <a href="https://maps.app.goo.gl/xhvQQmedpdcCHrCYA" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Treebo Park</a>: CH Centre, Chalakuzhy Rd, near Medical Chalakkuzhi
                            </li>
                            <li>
                                <a href="https://pattomroyal.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Hotel Pattom Royal</a>: Pattom Junction, MG Road / Pattom Road, Thiruvananthapuram, Kerala 695004
                            </li>
                            <li>
                                <a href="https://www.booking.com/hotel/in/biverah-amp-suites.html" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Biverah Hotel &amp; Suites</a>: Kumarapuram – Pattom Road, near the Government Medical College, Thiruvananthapuram
                            </li>
                            <li>
                                <a href="https://chothyspark.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Hotel Chothys Park</a>: Ulloor Rd, Kesavadasapuram, Thiruvananthapuram, Kerala 695004
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/mcMkbkU59zj9qSvr7" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Hotel Chinnus</a>: Chinnu's Ln, NSP Nagar, Kesavadasapuram, Thiruvananthapuram, Kerala 695004
                            </li>
                        </ol>
                    </section>

                    <hr style={{ border: 'none', borderTop: '1px solid #ddd', marginBottom: '2rem' }} />

                    {/* ── Hotels near Railway Station ── */}
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.2rem' }}>
                            Hotels near Thiruvananthapuram Central Railway Station (within 5km)
                        </h2>

                        <ol style={{ paddingLeft: '1.6rem', lineHeight: '2.2', color: '#222', fontSize: '0.97rem' }}>
                            <li>
                                <a href="https://maps.app.goo.gl/FcWUJAV2jG4q8jAz8" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Majestic Inn</a>: Myladikadavu Brg, Valiasala gramam, Thiruvananthapuram, Kerala 695036
                            </li>
                            <li>
                                <a href="https://www.hotelvenkateswara.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Hotel Venkateswara</a>: Aristo Rd, near New Theatre Road, Thampanoor, Thiruvananthapuram, Kerala 695014
                            </li>
                            <li>
                                <a href="https://www.goodlandresidency.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Hotel Goodland Residency</a>: Manorama Rd, opposite Desabhimani Malayala, Aristo Junction, Thampanoor, Thiruvananthapuram
                            </li>
                            <li>
                                <a href="https://brownpalace.co.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Hotel Brown Palace</a>: Manjalikulam Rd, Overbridge, Santhi Nagar, Thampanoor, Thiruvananthapuram
                            </li>
                            <li>
                                <a href="https://www.prathibaheritage.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Hotel Prathiba Heritage</a>: Dharmalayam Road, Opposite Ayurveda College, Pulimoodu, Thiruvananthapuram
                            </li>
                        </ol>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AccommodationPage;
