import React from 'react';
import PageLayout from '../components/PageLayout';

const TechnicalProgrammePage = () => {
    return (
        <PageLayout title="Technical Programme">
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <div className="section-content" style={{ padding: '40px 0 60px' }}>
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                        border: '1px solid #e2e8f0',
                        padding: '36px',
                        marginBottom: '30px'
                    }}>
                        <h2 style={{
                            fontSize: '2rem',
                            color: '#1a202c',
                            marginBottom: '20px',
                            fontWeight: '700',
                            borderBottom: '2px solid #edf2f7',
                            paddingBottom: '12px'
                        }}>
                            Technical Programme
                        </h2>

                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: '1.8',
                            color: '#374151',
                            margin: 0
                        }}>
                            The Programme will by Updated by 5th November, 2026.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default TechnicalProgrammePage;
