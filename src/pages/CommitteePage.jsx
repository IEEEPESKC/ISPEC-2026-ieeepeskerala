import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const committeeMembers = [
    { title: 'Prof. Dipti', name: 'Srinivasan', role: 'Advisory Chair', email: 'dipti@nus.edu.sg', linkedin: 'https://www.linkedin.com/in/dipti-srinivasan-2617b828/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1605769015622.jpg', borderColor: '#f6f7f7' },
    { title: 'Asst. Prof. Dhivya', name: 'Sampath Kumar', role: 'General Co-Chair', email: 'dhivya.sampathkumar@singaporetech.edu.sg', linkedin: 'https://www.linkedin.com/in/dhivyasampathkumar/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1517480097238.jpg', borderColor: '#f6f7f7' },
    { title: 'Assoc. Prof. Jimmy', name: 'Peng', role: 'General Co-Chair', email: 'jpeng@nus.edu.sg', linkedin: 'https://www.linkedin.com/in/jimmychpeng/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1516879020592.jpg', borderColor: '#f6f7f7' },
    { title: 'Assoc. Prof. Sivaneasan', name: 'Balakrishnan', role: 'Finance Chair', email: 'sivaneasan@singaporetech.edu.sg', linkedin: 'https://www.linkedin.com/in/sivaneasan/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1719051592351.jpg', borderColor: '#f6f7f7' },
    { title: 'Assoc. Prof. Anurag', name: 'Sharma', role: 'Technical Co-Chair', email: 'Anurag.Sharma@newcastle.ac.uk', linkedin: 'https://www.linkedin.com/in/anurag-sharma-783a4015/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1634547633798.jpg', borderColor: '#f6f7f7' },
    { title: 'Assoc. Prof. Xu', name: 'Yan', role: 'Technical Co-Chair', email: 'xuyan@ntu.edu.sg', linkedin: 'https://www.linkedin.com/in/yan-xu-146a5537/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1744211396546.jpg', borderColor: '#f6f7f7' },
    { title: 'Assoc. Prof. Daisuke', name: 'Mashima', role: 'Technical Co-Chair', email: 'daisuke_mashima@sutd.edu.sg', linkedin: 'https://www.linkedin.com/in/daisukemashima/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1737814490433.jpg', borderColor: '#f6f7f7' },
    { title: 'Assoc. Prof. Elsa', name: 'Feng', role: 'Special Sessions Chair', email: 'elsa.feng@singaporetech.edu.sg', linkedin: 'https://www.linkedin.com/in/elsa-feng-68511588/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1739892710185.jpg', borderColor: '#f6f7f7' },
    { title: 'Asst. Prof. Muhammad', name: 'Ramadan', role: 'Registrations Chair', email: 'Ramadan.Saifuddin@newcastle.ac.uk', linkedin: 'https://www.linkedin.com/in/b-m-s-muhammad-ramadan/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1606344791949.jpg', borderColor: '#f6f7f7' },
    { title: 'Assoc. Prof. Kuan Tak', name: 'Tan', role: 'Local Arrangement Chair', email: 'kuantak.tan@singaporetech.edu.sg', linkedin: 'https://www.linkedin.com/in/kuan-tak-tan-b3602868/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1634340838866.jpg', borderColor: '#f6f7f7' },
    { title: 'Asst. Prof. Sze Sing', name: 'Lee', role: 'Publications/Proceedings Chair', email: 'SzeSing.Lee@newcastle.ac.uk', linkedin: 'https://www.linkedin.com/in/sze-sing-lee-976484269/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1697154445666.jpg', borderColor: '#444444' },
    { title: 'Dr. Sandeep', name: 'Madishetti', role: 'Publicity Co-Chair', email: 'sandeep.madishetti@ieee.org', linkedin: 'https://www.linkedin.com/in/sandeepmadishetti/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1517358192282.jpg', borderColor: '#444444' },
    { title: 'Mr. Zhenhui', name: 'Li', role: 'Industry Co-Chair', email: 'Zhenhui.Li@emcsg.com', linkedin: 'https://www.linkedin.com/in/zhenhuili/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1715869135700.jpg', borderColor: '#444444' },
    { title: 'Dr. Kai Xian', name: 'Lai', role: 'Industry Co-Chair', email: 'KAIXIAN@SPGROUP.COM.SG', linkedin: 'https://www.linkedin.com/in/kai-xian-lai-91b07542/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1516962596310.jpg', borderColor: '#444444' },
    { title: 'Mr. Teck Lee', name: 'Tan', role: 'Industry Co-Chair', email: 'TECKLEETAN@SPGROUP.COM.SG', linkedin: 'https://www.linkedin.com/in/tan-teck-lee-181a64187/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1723135286454.jpg', borderColor: '#444444' },
    { title: 'Dr. Jiaxin', name: 'Dong', role: 'Website Chair', email: 'jiaxin.dong@singaporetech.edu.sg', linkedin: 'https://www.linkedin.com/in/harrydjx/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/SIT_20240605.png', borderColor: '#444444' },
    { title: 'Xiang', name: 'Yue (Steven)', role: 'Students Activity Co-Chair', email: 'xiang.yue@u.nus.edu', linkedin: 'https://www.linkedin.com/in/yue-xiang-a70a1217b/?locale=en_US', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1550152598344.jpg', borderColor: '#444444' },
    { title: 'Mille', name: 'Goh', role: 'Students Activity Co-Chair', email: 'c1051996@newcastle.ac.uk', linkedin: 'https://www.linkedin.com/in/mille-goh-067a61263/', img: 'https://attend.ieee.org/appeec-2026/wp-content/uploads/sites/809/1675343881702.jpg', borderColor: '#444444' }
];

const CommitteePage = () => {
    return (
        <PageLayout title="Committee Members">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div id="breadcrumbs" style={{ padding: '20px 0', fontSize: '0.9rem', color: '#666' }}>
                    <span><span><Link to="/" style={{ color: '#00629b', textDecoration: 'none' }}>Home</Link></span> » <span className="breadcrumb_last" aria-current="page">Committee Members</span></span>
                </div>

                <div className="section-content" style={{ paddingBottom: '60px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333' }}><strong>Committee</strong></h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
                        {committeeMembers.map((member, index) => (
                            <div key={index} style={{
                                position: 'relative',
                                background: '#f8f9fa',
                                borderRadius: '8px',
                                padding: '60px 20px 20px',
                                textAlign: 'center',
                                marginTop: '50px',
                                borderTop: `5px solid ${member.borderColor}`,
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                            }}>
                                {/* Floating Picture */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    border: '4px solid #fff',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    backgroundImage: `url(${member.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundColor: '#ddd'
                                }}></div>

                                {/* Text Block */}
                                <div style={{ marginTop: '10px' }}>
                                    <div style={{ fontSize: '1.2rem', color: '#333', marginBottom: '5px' }}>
                                        <span style={{ fontWeight: 'normal' }}>{member.title}</span> <span style={{ fontWeight: 'bold' }}>{member.name}</span>
                                    </div>
                                    <div style={{ fontSize: '0.95rem', color: '#00629b', fontWeight: 'bold', marginBottom: '15px' }}>
                                        {member.role}
                                    </div>

                                    {/* Social Links */}
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                                        {member.email && (
                                            <a href={`mailto:${member.email}`} title="Email" style={{ color: '#666', transition: 'color 0.3s' }}>
                                                <i className="fa-solid fa-envelope" style={{ fontSize: '1.2rem' }}></i>
                                            </a>
                                        )}
                                        {member.linkedin && (
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: '#0077b5', transition: 'color 0.3s' }}>
                                                <i className="fa-brands fa-linkedin" style={{ fontSize: '1.2rem' }}></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .fa-envelope:hover { color: #00629b !important; }
                .fa-linkedin:hover { color: #004b79 !important; }
            `}</style>
        </PageLayout>
    );
};

export default CommitteePage;
