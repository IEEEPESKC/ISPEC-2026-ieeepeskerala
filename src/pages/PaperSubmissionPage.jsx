import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const PaperSubmissionPage = () => {
    return (
        <PageLayout title="Submission">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className="section-content" style={{ paddingBottom: '60px' }}>

                    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
                        {/* Left Column (Main Content) */}
                        <div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px', marginBottom: '40px' }} className="col-lg-8 col-md-12">
                            <div style={{ lineHeight: '1.5', fontSize: '18px', color: '#444' }}>
                                <h2 style={{ margin: '0 0 8px 0', padding: '2px', fontSize: '2rem', color: '#333' }}>Paper Preparation Guidelines</h2>
                                <p>
                                    All papers must follow the IEEE PES conference paper preparation guidelines.<br />
                                    Authors are strongly advised to review the official instructions carefully before preparing their manuscripts.<br />
                                    <a href="https://ieee-pes.org/publications/authors-kit/preparation-and-submission-of-conference-technical-papers/" target="_blank" rel="noopener noreferrer" style={{ color: '#00629b' }}>
                                        <br />Author Guidelines<br />
                                    </a>
                                </p>

                                <h2 style={{ margin: '30px 0 8px 0', padding: '2px', fontSize: '2rem', color: '#333' }}>IEEE Conference Templates</h2>
                                <p>Manuscripts must be prepared using the official IEEE conference templates, available in both Microsoft Word and LaTeX formats.</p>
                                <p>
                                    (1) Standard IEEE two-column format is mandatory;<br />
                                    (2) The manuscript must not exceed <strong>SIX (6) pages</strong>, including all text, figures, tables, references, and appendices.
                                </p>
                                <p>
                                    <a style={{ marginTop: '0', color: '#00629b' }} href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noopener noreferrer">
                                        IEEE Conference Templates<br />
                                    </a>
                                </p>

                                <h2 style={{ margin: '30px 0 8px 0', padding: '2px', fontSize: '2rem', color: '#333' }}>Submission Portal</h2>
                                <p>Authors are required to submit their manuscripts through the official conference submission system Microsoft CMT. Please ensure that your paper complies with all IEEE PES guidelines before submission.</p>
                                <p style={{ lineHeight: '1.0' }}>
                                    <a style={{ marginTop: '0', color: '#00629b' }} href="https://cmt3.research.microsoft.com/ISPEC2026" target="_blank" rel="noopener noreferrer">
                                        Microsoft CMT – iSPEC 2026 Submission<br />
                                    </a>
                                </p>
                                <p>Each submission will undergo a peer-review process based on originality, relevance to the conference scope, technical quality and soundness, adequacy of literature review and validation of results, as well as organization and writing quality.</p>

                                <h2 style={{ margin: '30px 0 8px 0', padding: '2px', fontSize: '2rem', color: '#333' }}>Final Camera-Ready Paper Submission</h2>
                                <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li style={{ marginBottom: '12px' }}>
                                        Submit the final paper in IEEE two-column format as a .pdf file not exceeding six (6) A4 size pages (maximum size 3 MB). Two extra pages can be added with additional page charges.  However, the paper cannot be more than eight (8) pages under any circumstances. The paper template can be downloaded from following link:<br />
                                        <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00629b' }}>
                                            IEEE - Manuscript Templates for Conference Proceedings
                                        </a>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        Authors are fully responsible for the plagiarism check of the final manuscript to be uploaded in IEEE Xplore. More details can be found{' '}
                                        <a href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00629b', fontWeight: 'bold', textDecoration: 'underline' }}>here.</a>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        Paper title, authors name, and authors order should not be changed while submitting the final manuscript.
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        The accepted papers will be published in the conference proceedings and IEEE Xplore, only if at least one author registers (full registration) and presents the paper in the conference.
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        Carefully address the reviewers' comments in camera-ready final paper.
                                    </li>
                                </ol>
                                <p style={{ marginTop: '14px', color: '#c0392b', fontWeight: '600' }}>
                                     Last date for submission of  Final Camera-Ready Paper Submission: <strong>October 31, 2026</strong>
                                </p>

                                <h2 style={{ margin: '30px 0 8px 0', padding: '2px', fontSize: '2rem', color: '#333' }}>Presentation Requirement</h2>
                                <p>
                                    The IEEE Sustainable Power and Energy Conference (iSPEC) 2026 will be held fully in person. For each accepted paper, at least one author must attend the conference and present the work according to the conference schedule.<br />
                                    Only papers that are accepted and presented will be included in the conference proceedings.
                                </p>

                                <h2 style={{ margin: '30px 0 8px 0', padding: '2px', fontSize: '2rem', color: '#333' }}>Publication</h2>
                                <p>All accepted and presented papers will be published in the conference e-proceedings and submitted to the IEEE Xplore Digital Library, and will be indexed by Scopus and Google Scholar.</p>
                            </div>
                        </div>

                        {/* Right Column (Sidebar) */}
                        <div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px' }} className="col-lg-4 col-md-12">
                            <div style={{ marginBottom: '30px' }}>
                                <div style={{ lineHeight: '1.15', borderRadius: '10px', padding: '0' }}>
                                    <p style={{ margin: '0 0 15px 0', padding: '0', fontWeight: '600', fontSize: '18px', color: '#333' }}>Quick Links</p>

                                    <div>
                                        <div style={{ textAlign: 'center', marginBottom: '10px', padding: '14px 12px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', background: '#e6f4ef' }}>
                                            <a style={{ textDecoration: 'none', color: '#00629b' }} href="https://cmt3.research.microsoft.com/ISPEC2026" target="_blank" rel="noopener noreferrer">
                                                Microsoft CMT Portal
                                            </a>
                                        </div>
                                        <div style={{ textAlign: 'center', marginBottom: '10px', padding: '14px 12px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', background: '#e6f4ef' }}>
                                            <Link style={{ textDecoration: 'none', color: '#00629b' }} to="/call-for-papers">
                                                Call for Papers &amp; Important Dates
                                            </Link>
                                        </div>
                                        <div style={{ textAlign: 'center', marginBottom: '10px', padding: '14px 12px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', background: '#e6f4ef' }}>
                                            <a style={{ textDecoration: 'none', color: '#00629b' }} href="https://ieee-pes.org/publications/authors-kit/preparation-and-submission-of-conference-technical-papers/" target="_blank" rel="noopener noreferrer">
                                                IEEE PES Author Guidelines
                                            </a>
                                        </div>
                                        <div style={{ textAlign: 'center', marginBottom: '10px', padding: '14px 12px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', background: '#e6f4ef' }}>
                                            <a style={{ textDecoration: 'none', color: '#00629b' }} href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noopener noreferrer">
                                                IEEE Conference Templates
                                            </a>
                                        </div>

                                        <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                                            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft, and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{ lineHeight: '1.15', borderRadius: '10px', padding: '0' }}>
                                    <p style={{ margin: '0 0 15px 0', padding: '0', fontWeight: '600', fontSize: '18px', color: '#333' }}>Contact</p>
                                </div>
                                <div style={{ fontSize: '1rem', color: '#444' }}>
                                    <div style={{ marginBottom: '10px' }}>
                                        Technical Program:&nbsp;<a href="mailto:contact@ispec2026.org" style={{ color: '#00629b' }}>contact@ispec2026.org</a>
                                    </div>
                                    <div>
                                        Conference Secretariat:&nbsp;<a href="mailto:contact@ispec2026.org" style={{ color: '#00629b' }}>contact@ispec2026.org</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (min-width: 992px) {
                    .col-lg-8 { flex: 0 0 66.666667% !important; max-width: 66.666667% !important; }
                    .col-lg-4 { flex: 0 0 33.333333% !important; max-width: 33.333333% !important; }
                }
            `}</style>
        </PageLayout>
    );
};

export default PaperSubmissionPage;
