import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const CMTAcknowledgmentPage = () => {
    return (
        <PageLayout title="CMT Acknowledgment">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className="section-content" style={{ paddingBottom: '60px' }}>

                    <div style={{
                        marginTop: '20px',
                        fontSize: '1rem',
                        lineHeight: '1.8',
                        color: '#333'
                    }}>
                        <p>
                            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default CMTAcknowledgmentPage;
