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
