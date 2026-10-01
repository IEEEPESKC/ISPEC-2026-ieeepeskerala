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
                                <p style={{ marginTop: '8px', color: '#c0392b', fontStyle: 'italic' }}>
                                    Kindly note that IEEE Copyright Notice or Footer Number for iSPEC2026 is not needed.
                                </p>
                                <p style={{ marginTop: '14px', color: '#c0392b', fontWeight: '600' }}>
                                     Last date for submission of  Final Camera-Ready Paper Submission: <strong>October 31, 2026</strong>
                                </p>

                                {/* PDF eXpress Section */}
                                <h2 style={{ margin: '30px 0 8px 0', padding: '2px', fontSize: '2rem', color: '#333' }}>Check Final Paper in PDF eXpress</h2>
                                <p>
                                    Log in to the{' '}
                                    <a href="https://ieee-pdf-express.org/account/login?ReturnUrl=%2F" target="_blank" rel="noopener noreferrer" style={{ color: '#00629b' }}>
                                        IEEE PDF eXpress website
                                    </a>
                                </p>
                                <p>First-time users should do the following:</p>
                                <ol type="I" style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li style={{ marginBottom: '8px' }}>Select the <strong>New Users</strong></li>
                                    <li style={{ marginBottom: '8px' }}>
                                        Enter the following:
                                        <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                            <li><strong>66762X</strong> for the Conference ID. For PEDES 2026, the conference ID is <strong>66762X</strong>.</li>
                                            <li>Your email address</li>
                                            <li>A password</li>
                                        </ul>
                                    </li>
                                    <li style={{ marginBottom: '8px' }}>Continue to enter information as prompted.</li>
                                    <li style={{ marginBottom: '8px' }}>An online confirmation will be displayed, and an email confirmation will be sent verifying your account setup.</li>
                                </ol>
                                <p>
                                    Previous users of PDF eXpress need to follow the above steps, but should enter the same password that was used for previous conferences. Verify that your contact information is valid. Use <strong>66762X</strong> for the Conference ID.
                                </p>
                                <p>
                                    Before submission of final camera ready version of paper generated using IEEE PDF eXpress, please change the file name to <strong>PID-XXXX</strong>. For example: <em>"PID-0136"</em> (where XXXX is your paper ID in CMT).
                                </p>

                                {/* Copyright Form Section */}
                                <h2 style={{ margin: '30px 0 8px 0', padding: '2px', fontSize: '2rem', color: '#333' }}>Submission of the copyright form to IEEE</h2>
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li style={{ marginBottom: '10px' }}>Authors should carefully review the details of the paper before submitting the copyright form.</li>
                                    <li style={{ marginBottom: '10px' }}>Once the final camera-ready paper (which must have passed the PDF Check in IEEE PDF eXpress) is uploaded, click on the <strong>'Submit IEEE copyright form'</strong> link in the Author Console of the conference.</li>
                                    <li style={{ marginBottom: '10px' }}>Afterward, the IEEE Copyright Form Submission page will open. You must read the instructions before proceeding.</li>
                                    <li style={{ marginBottom: '10px' }}>You need to go to the IEEE Copyright Web Site to submit the IEEE Copyright Form. Upon completion, there is an option to download the completed IEEE Copyright Form in PDF (the corresponding author will also receive the copyright form via email). Be sure to download a copy of the completed form. When you are finished submitting this form, you will be redirected back to the Author Console.</li>
                                    <li style={{ marginBottom: '10px' }}>Once you have the file, you can either drag and drop it into the dotted region or click <strong>'Upload from Computer'</strong> to upload the file. Then click <strong>'Save.'</strong></li>
                                </ul>
                                <p>
                                    More details can be found{' '}
                                    <a href="https://cmt3.research.microsoft.com/docs/help/author/camera-ready-submission.html#ieee-copyright" target="_blank" rel="noopener noreferrer" style={{ color: '#00629b' }}>here</a>.
                                </p>
                                <p style={{ marginTop: '16px' }}>
                                    <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FISPEC2026" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#00629b', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '1rem' }}>
                                        Link to Submit Final Camera-Ready Paper
                                    </a>
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
