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

                        <ol style={{ paddingLeft: '1.4rem', lineHeight: '1.6', color: '#222', fontSize: '0.97rem' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Treebo Park</strong><br />
                                Address: CH Centre, Chalakuzhy Rd, near Medical Chalakkuzhi<br />
                                <a href="https://maps.app.goo.gl/xhvQQmedpdcCHrCYA" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Google Maps</a>
                                {' | '}
                                <a href="https://tinyurl.com/3ywbpfx9" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Booking Link</a>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Hotel Pattom Royal</strong><br />
                                Address: Pattom Junction, MG Road / Pattom Road, Thiruvananthapuram, Kerala 695004<br />
                                <a href="https://pattomroyal.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>pattomroyal.com</a>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Biverah Hotel &amp; Suites</strong><br />
                                Location: Kumarapuram – Pattom Road, near the Government Medical College, Thiruvananthapuram<br />
                                <a href="https://www.booking.com/hotel/in/biverah-amp-suites.html" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Booking.com</a>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Hotel Chothys Park</strong><br />
                                Address: Ulloor Rd, Kesavadasapuram, Thiruvananthapuram, Kerala 695004<br />
                                <a href="https://maps.app.goo.gl/96yjSjTGRUbpVQkf6" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Google Maps</a>
                                {' | '}
                                <a href="https://chothyspark.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>chothyspark.in</a>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Hotel Chinnus</strong><br />
                                Address: Chinnu's Ln, NSP Nagar, Kesavadasapuram, Thiruvananthapuram, Kerala 695004<br />
                                <a href="https://maps.app.goo.gl/mcMkbkU59zj9qSvr7" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Google Maps</a>
                            </li>
                        </ol>
                    </section>

                    <hr style={{ border: 'none', borderTop: '1px solid #ddd', marginBottom: '2rem' }} />

                    {/* ── Hotels near Railway Station ── */}
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.2rem' }}>
                            Hotels near Thiruvananthapuram Central Railway Station (within 5km)
                        </h2>

                        <ol style={{ paddingLeft: '1.4rem', lineHeight: '1.6', color: '#222', fontSize: '0.97rem' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Majestic Inn</strong><br />
                                Address: Myladikadavu Brg, Valiasala gramam, Thiruvananthapuram, Kerala 695036<br />
                                <a href="https://maps.app.goo.gl/FcWUJAV2jG4q8jAz8" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Google Maps</a>
                                {' | '}
                                <a href="https://tinyurl.com/t2z8z7xu" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Booking Link</a>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Hotel Venkateswara</strong><br />
                                Address: Aristo Rd, near New Theatre Road, Thampanoor, Thiruvananthapuram, Kerala 695014<br />
                                <a href="https://maps.app.goo.gl/4oFZBfBHgBLwZECt9" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Google Maps</a>
                                {' | '}
                                <a href="https://www.hotelvenkateswara.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>hotelvenkateswara.in</a>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Hotel Goodland Residency</strong><br />
                                Address: Manorama Rd, opposite Desabhimani Malayala, Aristo Junction, Thampanoor, Thiruvananthapuram<br />
                                <a href="https://maps.app.goo.gl/bwAPQUCUWhUParvq9" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Google Maps</a>
                                {' | '}
                                <a href="https://www.goodlandresidency.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>goodlandresidency.com</a>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Hotel Brown Palace</strong><br />
                                Address: Manjalikulam Rd, Overbridge, Santhi Nagar, Thampanoor, Thiruvananthapuram<br />
                                <a href="https://maps.app.goo.gl/sx3vp2SUr3iiwUHGA" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Google Maps</a>
                                {' | '}
                                <a href="https://brownpalace.co.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>brownpalace.co.in</a>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Hotel Prathiba Heritage</strong><br />
                                Address: Dharmalayam Road, Opposite Ayurveda College, Pulimoodu, Thiruvananthapuram<br />
                                <a href="https://maps.app.goo.gl/qxRbEYRHpyVqZ72o7" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>Google Maps</a>
                                {' | '}
                                <a href="https://www.prathibaheritage.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070c0' }}>prathibaheritage.com</a>
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
