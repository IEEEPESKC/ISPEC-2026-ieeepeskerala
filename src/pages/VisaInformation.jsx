import React from 'react';
import PageLayout from '../components/PageLayout';

const VisaInformation = () => {
    const requiredDetails = [
        'Paper ID',
        'Paper Title',
        'Your name as per passport',
        'Your current Affiliation',
        'Complete address including pin no.',
        'A copy of passport',
        'Passport Number, Nationality and Country of Birth.',
        'Receipt of registration fee payment'
    ];

    return (
        <PageLayout title="Visa Information">
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
                            marginBottom: '24px',
                            fontWeight: '700',
                            borderBottom: '2px solid #edf2f7',
                            paddingBottom: '12px'
                        }}>
                            Visa Information
                        </h2>

                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.8',
                            color: '#374151',
                            marginBottom: '24px'
                        }}>
                            If you are not an Indian citizen then you need a visa to travel to India and attend the conference. If you need Letter of Invitation for visa application, we will share to you based on your request. Please send an email to <a href="mailto:contact@ispec2026.org" style={{ color: '#00629b', fontWeight: '600', textDecoration: 'underline' }}>contact@ispec2026.org</a> with following details. We must submit these details to the VISA issuing authorities for the approval. Only after their approval, we can prepare and send the invitation letter to you. <strong>Please be aware that the approval from VISA issuing authorities takes time, and therefore share the details as soon as possible.</strong>
                        </p>

                        <div style={{
                            background: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            padding: '24px 28px',
                            marginBottom: '24px'
                        }}>
                            <ol style={{
                                margin: 0,
                                paddingLeft: '20px',
                                fontSize: '1.05rem',
                                lineHeight: '2.1',
                                color: '#1f2937'
                            }}>
                                {requiredDetails.map((detail, index) => (
                                    <li key={index} style={{ paddingLeft: '6px' }}>
                                        {detail}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.8',
                            color: '#4b5563',
                            fontStyle: 'italic',
                            background: '#fffbeb',
                            borderLeft: '4px solid #f59e0b',
                            padding: '14px 18px',
                            borderRadius: '0 6px 6px 0',
                            margin: 0
                        }}>
                            Kindly note that you need to apply yourself for visa after receiving the invitation letter and iSPEC 2026 has no role in it.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default VisaInformation;
