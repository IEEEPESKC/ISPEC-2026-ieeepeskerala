import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const scheduleData = [
    {
        id: 'day1',
        title: 'Day 1: Friday, 4 December 2026 (Inauguration Day)',
        shortTitle: 'Day 1 (4 Dec)',
        date: 'Friday, 4 December 2026',
        items: [
            {
                time: '9:00 AM – 10:00 AM',
                event: 'Registration',
                desc: 'Conference Registration & Welcome Coffee',
                venue: 'Registration Desk',
                type: 'normal',
            },
            {
                time: '10:00 AM – 10:45 AM',
                event: 'Keynote Address 1 (KN 1)',
                desc: 'Dean Sharafi (Treasurer, IEEE PES; Strategic Advisor, AEMO Australia) – Utility-Scale Energy Transition & Market Operations',
                venue: 'SENATUS HALL',
                type: 'keynote',
            },
            {
                time: '10:45 AM – 11:30 AM',
                event: 'Keynote Address 2 (KN 2)',
                desc: 'Sushil Kumar Soonee (Former & Founder CEO, POSOCO, India) – Grid Integration & Resilience in Dynamic Energy Markets',
                venue: 'SENATUS HALL',
                type: 'keynote',
            },
            {
                time: '11:30 AM – 12:00 PM',
                event: 'Interactive Conversation',
                desc: 'In Conversation with Dean Sharafi and Sushil Kumar Soonee – Open discussions with the Keynote Speakers',
                venue: 'SENATUS HALL',
                type: 'normal',
            },
            {
                time: '12:00 PM – 1:00 PM',
                event: 'Lunch Break',
                desc: 'Networking Lunch',
                venue: 'PASCAL HALL',
                type: 'break',
            },
            {
                time: '1:00 PM – 3:00 PM',
                event: 'Technical Track Session A',
                desc: 'Technical Paper Presentations across 6 parallel tracks (Each paper: 10 min presentation + 3 min Q&A)',
                isMultiTrack: true,
                tracks: [
                    { track: 'Track 1 (Solar PV Systems & Monitoring)', venue: 'ARYABHATA HALL (B 303)' },
                    { track: 'Track 2 (PV Analytics, Forecasting & AI for Solar)', venue: 'SHANON HALL (B104)' },
                    { track: 'Track 3 (Microgrids, Hybrid Renewables & Energy Markets)', venue: 'SENATUS HALL (A 204)' },
                    { track: 'Track 4 (Batteries, Storage & EV Systems)', venue: 'FARADAY HALL (B04)' },
                    { track: 'Track 5 (Power Converters & Electric Drives)', venue: 'PG SOFTWARE LAB (B308)' },
                    { track: 'Track 6 (Online Session I)', venue: 'DEPT. COMPUTING FACILITY (B116)' },
                ],
                type: 'track',
            },
            {
                time: '3:00 PM – 3:15 PM',
                event: 'Tea Break',
                desc: 'Networking Tea Break',
                venue: 'Foyer',
                type: 'break',
            },
            {
                time: '3:15 PM – 4:15 PM',
                event: 'Inaugural Ceremony',
                desc: 'Welcome Address, Lighting of the Lamp, Inaugural Speech by Chief Guest & Address by Guests of Honour',
                venue: 'VISVESVARAYA HALL',
                type: 'special',
            },
            {
                time: '4:15 PM – 4:45 PM',
                event: 'Tribute to Prof. V.K Damodaran',
                desc: "A tribute to Prof. V. K. Damodaran (by IEEE PES Kerala Chapter) – Remembering Prof V K Damodaran, the legend who shaped Kerala's Energy Dialogues and inspired generations.",
                venue: 'VISVESVARAYA HALL',
                type: 'special',
            },
            {
                time: '5:00 PM – 7:00 PM',
                event: 'High Tea Networking Welcome Reception',
                desc: 'Networking Reception & Icebreaker Session',
                venue: 'Lawn / Banquet Area',
                type: 'normal',
            },
        ],
    },
    {
        id: 'day2',
        title: 'Day 2: Saturday, 5 December 2026 (Technical & Panel)',
        shortTitle: 'Day 2 (5 Dec)',
        date: 'Saturday, 5 December 2026',
        items: [
            {
                time: '8:30 AM – 9:00 AM',
                event: 'Registration',
                desc: 'Delegate Registration & Morning Refreshments',
                venue: 'Registration Desk',
                type: 'normal',
            },
            {
                time: '9:00 AM – 9:45 AM',
                event: 'Keynote Address 3 (KN 3)',
                desc: 'Dr. Rasara Samarasinghe (Chair, IEEE PES Sri Lanka Chapter) – From Reliability to Resilience: Intelligent Asset Management',
                venue: 'SENATUS HALL',
                type: 'keynote',
            },
            {
                time: '9:45 AM – 10:30 AM',
                event: 'Keynote Address 4 (KN 4)',
                desc: 'Dr. Sudhakar Kumarasamy (Associate Prof. & Principal Research Fellow, UMPSA Malaysia) – Sustainable Energy Technologies & Clean Systems',
                venue: 'SENATUS HALL',
                type: 'keynote',
            },
            {
                time: '10:30 AM – 11:00 AM',
                event: 'Morning Break',
                desc: 'Tea Break',
                venue: 'Foyer',
                type: 'break',
            },
            {
                time: '11:00 AM – 1:00 PM',
                event: 'Technical Track Session B',
                desc: 'Technical Paper Presentations across 4 parallel tracks (Each paper: 10 min presentation + 3 min Q&A)',
                isMultiTrack: true,
                tracks: [
                    { track: 'Track 1 (Smart Grids, AI & Forecasting)', venue: 'FARADAY HALL (B 04)' },
                    { track: 'Track 2 (Fault Detection, Protection & Grid Security)', venue: 'SHANON HALL (B104)' },
                    { track: 'Track 3 (Drives, Inverters & Grid-Connected Converters)', venue: 'ARYABHATA HALL' },
                    { track: 'Track 4 (Hybrid Session - Onsite & Online)', venue: 'PG SOFTWARE LAB (B 308)' },
                ],
                type: 'track',
            },
            {
                time: '1:00 PM – 2:00 PM',
                event: 'Lunch Break',
                desc: 'Networking Lunch',
                venue: 'PASCAL HALL',
                type: 'break',
            },
            {
                time: '2:00 PM – 3:30 PM',
                event: 'Moderated Panel Discussion',
                desc: "Industry & Policy Panel: Navigating Kerala's Energy Crisis – Hydro-Dependence, Emergence of RTS, Floating Solar, BESS, Pumped Storage & Regional Market Integration",
                venue: 'SENATUS HALL',
                type: 'normal',
            },
            {
                time: '3:30 PM – 4:00 PM',
                event: 'Afternoon Break',
                desc: 'Tea Break',
                venue: 'Foyer',
                type: 'break',
            },
            {
                time: '4:00 PM – 4:30 PM',
                event: 'Product Demonstration',
                desc: 'Demonstration of Innovative Hardwares/Softwares',
                venue: 'Exhibition Area',
                type: 'normal',
            },
            {
                time: '4:30 PM – 5:30 PM',
                event: 'IEEE PES YP Session',
                desc: 'IEEE PES Young Professionals Meetup: Mentorship, Skill Bridges in Clean Energy & Industry-Academia Pathways (1 Hour)',
                venue: 'SENATUS HALL',
                type: 'normal',
            },
            {
                time: '5:30 PM – 6:30 PM',
                event: 'IEEE PES WiP Session',
                desc: 'IEEE PES Women in Power Meetup: Empowering Women Leaders & Researchers in Clean Energy (1 Hour)',
                venue: 'SENATUS HALL',
                type: 'normal',
            },
            {
                time: '6:30 PM – 9:00 PM',
                event: 'Best Paper Awards, Gala Dinner & Cultural Night',
                desc: 'Announcement of Best Paper Awards across each Thematic Area, followed by Gala Dinner & Cultural Night',
                venue: 'AMINETY HALL',
                type: 'special',
            },
        ],
    },
    {
        id: 'day3',
        title: 'Day 3: Sunday, 6 December 2026 (Valedictory & Cultural Visit)',
        shortTitle: 'Day 3 (6 Dec)',
        date: 'Sunday, 6 December 2026',
        items: [
            {
                time: '9:00 AM – 10:00 AM',
                event: 'Valedictory Session',
                desc: 'Concluding Remarks & Official Vote of Thanks',
                venue: 'Main Hall / MBCET Campus',
                type: 'special',
            },
            {
                time: '10:00 AM – 1:00 PM',
                event: 'Cultural Visit (Optional)',
                desc: 'Optional cultural visit for delegates',
                venue: 'Details to be announced',
                type: 'normal',
            },
        ],
    },
];

const technicalTracksData = [
    {
        dayId: 'day1',
        dayTitle: 'Day 1 | Friday, 4 December 2026',
        sessionTitle: 'Technical Track Session A | 01:00 PM – 03:00 PM',
        tracks: [
            {
                trackId: 'd1-t1',
                trackNum: 'Track 1',
                venue: 'Aryabhata Hall (B 303)',
                theme: 'Solar PV Systems & Monitoring',
                papers: [
                    { time: '01:00 PM – 01:13 PM', id: '16', title: 'IoT-Based Dual-Axis Solar Tracker for Voltage Stability', authors: 'Rakshitha S, Harshitha S, Shreevarshini S D, Jayeswar T P, R Jayabarathi' },
                    { time: '01:13 PM – 01:26 PM', id: '306', title: 'IoT-Enabled Dual-Axis Solar Tracking System with Cloud-Pause Algorithm and Integrated Battery Charging Using ESP32 and INA219', authors: 'Pawan D Sencha, Manu K, Anav Honymon, Resmi R' },
                    { time: '01:26 PM – 01:39 PM', id: '504', title: 'AI-Enhanced Solar Power Monitoring System for Homes', authors: 'Aravind Boda, Esther Gurram, Santosha Kumar A' },
                    { time: '01:39 PM – 01:52 PM', id: '539', title: 'Comparative Study of MPPT Algorithms for Photovoltaic Power Generation', authors: 'Sudheer S, Dileeplal J' },
                    { time: '01:52 PM – 02:05 PM', id: '762', title: 'Performance Enhancement of Solar photovoltaic Arrays under Partial Shading conditions using circular back shift Reconfiguration Technique', authors: 'Prathima H. V., R. Shivarudraswamy, Dr. Praveen Kumar Bonthagorla, M. Ramesh, Pooja Suman, Sahana V' },
                    { time: '02:05 PM – 02:18 PM', id: '763', title: 'Ginger (Zingiber officinale) Dye-Sensitized Solar Cells: A Literature Review, Comparative Assessment, and COMSOL Multiphysics Voc Simulation', authors: 'Yousef Hazem Ali, Abdel-rahman Hazem Ali, R. Shivarudra Swamy, Dr. Praveen kumar Bonthagorla, Prathima H. V.' },
                    { time: '02:18 PM – 02:31 PM', id: '196', title: 'Development of a Solar-Powered Smart Bottle Vending and Reverse Vending System using AI-Based Bottle Identification', authors: 'Harinandana J, Aswin M, Vaishnav B. Ajith, Anand N, Vivek A, Abhilash Suryan R' },
                    { time: '02:31 PM – 02:44 PM', id: '415', title: 'DESIGN OF A GRID SUPPORTED RENEWABLE ENERGY MICROGRID USING SIMULINK AND APPLICATION OF CUCKOO SEARCH ALGORITHM IN IT', authors: 'Sreekala V, Akhil S. Karun' },
                ],
            },
            {
                trackId: 'd1-t2',
                trackNum: 'Track 2',
                venue: 'Shanon Hall (B104)',
                theme: 'PV Analytics, Forecasting & AI for Solar',
                papers: [
                    { time: '01:00 PM – 01:13 PM', id: '394', title: 'Comparative Analysis of Mathematical Models for Solar Photovoltaic Power Prediction', authors: 'Tanuj Rai, Sri. Revathi B, Dr Sheik Mohammed, Ravikumar Pandi V' },
                    { time: '01:13 PM – 01:26 PM', id: '406', title: 'Controlled Benchmarking of Deep Architectures and Class-Weighting Strategies for Photovoltaic Electroluminescence Defect Segmentation', authors: 'Manu Prakash Maurya, Priyanka Kajal, Satvasheel Powar, Atul Dhar, André Augusto' },
                    { time: '01:26 PM – 01:39 PM', id: '421', title: 'Two-Stage Deep Learning for PV Cell Localization and Defect Triage from Electroluminescence Images', authors: 'Manu Prakash Maurya, Rajwardhan Bhandigare, Satvasheel Powar, Atul Dhar, André Augusto' },
                    { time: '01:39 PM – 01:52 PM', id: '537', title: 'A Multi-Horizon Framework for Power Forecasting by Integrating Satellite Nowcasting and Numerical Weather Prediction at a Utility-Scale Solar Park', authors: 'Abhishek Yadav, Archana Yadav, Saurabh Kapil' },
                    { time: '01:52 PM – 02:05 PM', id: '319', title: 'Integrated Computational Platform for Techno-Sustainable Design Optimization of Bifacial PV Systems', authors: 'Astitva Kumar, Ayushi Srivastava, Pratyai Chakrabarty, Aman Aman, Aditya Garg, Ashish Upadhyay' },
                    { time: '02:05 PM – 02:18 PM', id: '318', title: 'Optimal Sizing of a PV System in an Isolated DC Nanogrid Using a Digital Twin', authors: 'Yashwant Rana, K Kathambari, B Smitha Evelin Zoraida, S Arul Daniel' },
                    { time: '02:18 PM – 02:31 PM', id: '357', title: 'Probabilistic Assessment of PV Hosting Capacity under Uncertainty in Urban Distribution Feeders', authors: 'Pramod Sendanayake' },
                    { time: '02:31 PM – 02:44 PM', id: '358', title: 'AI DRIVEN IOT AND BLOCKCHAIN BASED PEER TO PEER SOLAR ENERGY TRADING USING Q-LEARNING AND DYNAMIC PRICING', authors: 'Manoj B, Bharani M, Joseph Athisayaraj S, Saravana Prabhu D' },
                ],
            },
            {
                trackId: 'd1-t3',
                trackNum: 'Track 3',
                venue: 'Senatus Hall (A 204)',
                theme: 'Microgrids, Hybrid Renewables & Energy Markets',
                papers: [
                    { time: '01:00 PM – 01:13 PM', id: '195', title: 'Optimal Energy Management of a PV–Battery Community Microgrid with Green Hydrogen Production Using Marine Predators Algorithm', authors: 'Dr Sheik Mohammed, Gobbi Ramasamy, Teh Chin Hui, Sri. Revathi B, Rahul Satheesh' },
                    { time: '01:13 PM – 01:26 PM', id: '379', title: 'Optimizing Riverine Hybrid Renewable Energy for Power Quality', authors: 'G BALRAM GYADARI, Sravan Kumar Purella, Nagendra Singh, Chandra Rakhee B, Sunanda S, Natarajan K' },
                    { time: '01:26 PM – 01:39 PM', id: '510', title: 'Load-Flow and Preliminary Dynamic Assessment of a Low-Voltage Prosumer Microgrid with a Shared Solar Collector Bus', authors: 'Rejish Babu, Sheryl Arulini A, Shalu George K' },
                    { time: '01:39 PM – 01:52 PM', id: '402', title: 'CHaRT: A Multi-Criteria Spatial Framework for Climate-Resilient Offshore Wind Siting in U.S. Waters', authors: 'Parvathy Gopikrishna, Peter Enevoldsen' },
                    { time: '01:52 PM – 02:05 PM', id: '244', title: 'Temporal Analysis of Wind Direction Patterns in India: A Multi-Year Perspective', authors: 'Pramod N E, Satheesh Kumar K' },
                    { time: '02:05 PM – 02:18 PM', id: '339', title: 'Real-Time Edge AI and Digital Twin Framework for Intelligent Street Lighting and EV Charging Energy Management in Sustainable Smart Cities', authors: 'BALAMURUGAN E, KARTHIKA M, RAMASAMI S, PRIYADHARSHINI S, PAVITHRA G, NANTHINI M' },
                    { time: '02:18 PM – 02:31 PM', id: '36', title: 'Market Analytics and Policy Pathways in India’s Green Day Ahead Market: A Data-Driven Study', authors: 'Nandan Rajesh, Gopi Krishna K, Harikrishnan Miraj Chathankandath, Sayooj Ramachandran, Anu Kumar, Maya P' },
                    { time: '02:31 PM – 02:44 PM', id: '174', title: 'Short Term Resource Adequacy Assessment and Procurement Planning Under Renewable Integration.', authors: 'Jayeshkumar Priolkar' },
                ],
            },
            {
                trackId: 'd1-t4',
                trackNum: 'Track 4',
                venue: 'Faraday Hall (B04)',
                theme: 'Batteries, Storage & EV Systems',
                papers: [
                    { time: '01:00 PM – 01:13 PM', id: '417', title: 'Early Detection of Thermal Stress in Lithium-Ion Cells Using the Rate of Temperature Rise', authors: 'Ilango Karuppasamy, Thirupugazhl SD, Bhavyaa M' },
                    { time: '01:13 PM – 01:26 PM', id: '209', title: 'EV-BASED SMART ENERGY MANAGEMENT FOR PEAK LOAD REDUCTION', authors: 'Saurav Krishnaprasad, Anto Joseph, Swaroop S S, Horizon A R, Sijo George, Saurav Krishnaprasad' },
                    { time: '01:26 PM – 01:39 PM', id: '305', title: 'Simplified Multiphysics Modelling of Battery Heating Coils for Cold-Climate', authors: 'Chetan Mahawar, Dharanivendhan T' },
                    { time: '01:39 PM – 01:52 PM', id: '403', title: 'A Federated Learning Approach to Electric Vehicle Battery Remaining Useful Life Prediction with Explainable Artificial Intelligence', authors: 'Tejaswini Garlapati, Iswarya Kannoth Veetil' },
                    { time: '01:52 PM – 02:05 PM', id: '536', title: 'A Hybrid Coulomb Counting and LSTM Framework for Residual-Error Correction in Lithium-Ion Battery State-of-Charge Estimation.', authors: 'SajiJustus Justus, Baburaj P' },
                    { time: '02:05 PM – 02:18 PM', id: '662', title: 'Design and Implementation of a Smart Adaptive Active Cell Balancing System for Lithium-Ion Battery Packs', authors: 'Sridharan S, Nancy Princes Stanley, Prangaya C' },
                    { time: '02:18 PM – 02:31 PM', id: '562', title: 'Converter-Less Battery Interconnection Using Relay Coordination and Intelligent Control for Modular LVDC Hotel Loads in Electric Houseboats', authors: 'Dhanesh Raghavan, R M shereef' },
                    { time: '02:31 PM – 02:44 PM', id: '143', title: 'Performance Evaluation and Fault Analysis of PMSM-Based Electric Power Steering System Under Varying Road Conditions', authors: 'Lalitha Saranya Pathi, Sowmya Chalapala, Umashankar Subramaniam' },
                ],
            },
            {
                trackId: 'd1-t5',
                trackNum: 'Track 5',
                venue: 'PG Software Lab (B308)',
                theme: 'Power Converters & Electric Drives',
                papers: [
                    { time: '01:00 PM – 01:13 PM', id: '231', title: 'Hybrid MPCC-Fuzzy Control Strategy for High-Performance PMSM Drives in Three-Phase VSI Systems', authors: 'Manu Neethi Chozhan A M, Prabhanjhan S B, RESMI R' },
                    { time: '01:13 PM – 01:26 PM', id: '234', title: 'Comprehensive study of the Silicon Carbide (SiC) high density traction inverter Field-Oriented Control (FOC) for a Permanent Magnet Synchronous Motor (PMSM)', authors: 'Preethi S, J Ramprabhakar' },
                    { time: '01:26 PM – 01:39 PM', id: '770', title: 'Simulation of MTPA and Field Weakening Control for PMSM Drive for High Speed Applications', authors: 'Deepshiga M, Gopika Gokul, Namitha C Jayan, Ritu Nandana M Nair, RESMI R' },
                    { time: '01:39 PM – 01:52 PM', id: '660', title: 'Integrated Design, Fabrication, and Real-Time Implementation of Space Vector Modulated Field-Oriented Control for Permanent Magnet Synchronous Motor Drives', authors: 'Kumaravel S, Keshav Menon, Justin Yesudas, Athiradh Sudeesh, Bharadwaj V. P.' },
                    { time: '01:52 PM – 02:05 PM', id: '769', title: 'A Modified Dual Input SEPIC Converter using Switched Inductors for Hybrid Energy Applications', authors: 'Jeanmary Jose, Sivaprasad Athikkal, Kumaravel Sundaramoorthy' },
                    { time: '02:05 PM – 02:18 PM', id: '719', title: 'A Numerical Simulation-based Performance Analysis of Low Pass Filter Control and PI-cascaded control strategies for a 7 kW Commercial Battery Vehicle under Randomized Driving Cycles', authors: 'Phani Bankupalli, Inavelli Chandramouli' },
                    { time: '02:18 PM – 02:31 PM', id: '748', title: 'DC-DC Converter fed Class-D Sonar Power Amplifier for Underwater Acoustic Experiments', authors: 'Harshita V P, Panchalai V N, Parvathy S.' },
                    { time: '02:31 PM – 02:44 PM', id: '420', title: 'Hardware Implementation of Closed-Loop DC-DC Boost Converter', authors: 'PAUL JOHN, Mukti Barai' },
                ],
            },
            {
                trackId: 'd1-t6',
                trackNum: 'Track 6',
                venue: 'Department Computing Facility (B116) [Online]',
                theme: 'Online Session I',
                papers: [
                    { time: '01:00 PM – 01:13 PM', id: '163', title: 'Development and testing of a paint for passive cooling of buildings', authors: 'Abhinav Sobti' },
                    { time: '01:13 PM – 01:26 PM', id: '150', title: 'From Vernacular to Appropriate Technology: A Case Study of Sustainable Construction in Vidarbha', authors: 'Pradnyawant Gote, Tarika Dagadkar, Sachin Dagadkar, Anannya Dagadkar' },
                    { time: '01:26 PM – 01:39 PM', id: '514', title: 'Techno-Economic Optimization of Second-Life NMC Battery Energy Storage Systems Using Dataset-Derived Degradation Model', authors: 'Ishaan Garg' },
                    { time: '01:39 PM – 01:52 PM', id: '493', title: 'Smart Grid Driven Energy Management for Electric Vehicles – A Review on Challenges and Future Prospects', authors: 'M VINAY KUMAR, S Nagaraju, CH AMRUTHA, K Aishwarya, B Sumanth, G Anand' },
                    { time: '01:52 PM – 02:05 PM', id: '535', title: 'Multi-Agent System with Knowledge-Grounded Validation for Power Equipment Ledger Maintenance', authors: 'JiangYu Yan, Hong Wang' },
                    { time: '02:05 PM – 02:18 PM', id: '277', title: 'Graph Theory-Based Optimal Relay Coordination in Mesh Distribution Networks', authors: 'Aarya Premkumar, Angel TS, Sreelekshmi RS, Anand Kaippallil, Anupam Krishna, Aswin K Raj' },
                    { time: '02:18 PM – 02:31 PM', id: '524', title: 'Machine Learning-Based Predictive Condition Monitoring of a DC Geared Motor', authors: 'Sheeba G, Akash S, Arun D, Israel M, Rameshkumar A, Jasmin M' },
                    { time: '02:31 PM – 02:44 PM', id: '697', title: 'AI-Based Smart Traffic Management System Using YOLOv8, ByteTrack, and Multi-Factor Traffic Priority Score (MTPS) for Adaptive Traffic Signal Control', authors: 'Vijayalakshmi T, Taasha Trinita V, Jenifer A, Revathi M' },
                ],
            },
        ],
    },
    {
        dayId: 'day2',
        dayTitle: 'Day 2 | Saturday, 5 December 2026',
        sessionTitle: 'Technical Track Session B | 11:00 AM – 01:00 PM',
        tracks: [
            {
                trackId: 'd2-t1',
                trackNum: 'Track 1',
                venue: 'Faraday Hall (B 04)',
                theme: 'Smart Grids, AI & Forecasting',
                papers: [
                    { time: '11:00 AM – 11:13 AM', id: '245', title: 'ML-Assisted Predictive Industrial Load Management Using Mixed Integer Linear Programming', authors: 'Gowtham P K, N Mayadevi, Ashok S' },
                    { time: '11:13 AM – 11:26 AM', id: '378', title: 'Activation–Optimiser Selection for MLP-Based Smart Meter Anomaly Detection and Theft-Type Classification', authors: 'Adhyan Rajiv Gupta, Sreenu Sreekumar, Rahul Satheesh, Sheik Mohammed Sulthan' },
                    { time: '11:26 AM – 11:39 AM', id: '414', title: 'Physics-Calibrated Uncertainty-Aware Transformer for Reliable Early Transient Stability Assessment', authors: 'Devadharshini N, Rakshath Raj Y, Shanthi M' },
                    { time: '11:39 AM – 11:52 AM', id: '448', title: 'ODYSSEY: An AI-Driven Digital Twin Framework for Interactive Marine Ecosystem Simulation and Conservation Awareness', authors: 'Samuel James Billy Graham, Siva Suryakanth M, Jaspin K' },
                    { time: '11:52 AM – 12:05 PM', id: '507', title: 'Toward Carbon-Neutral AI: An Energy and Carbon Audit of Large Language Model Fine-Tuning on Unified-Memory and Discrete GPUs', authors: 'Aadil Ganie, Saad Ezzini' },
                    { time: '12:05 PM – 12:18 PM', id: '526', title: 'Peak-Aware Gradient Boosting for Short-Term Electricity Demand Forecasting in Smart Building Portfolios', authors: 'ROSAMMA S' },
                    { time: '12:18 PM – 12:31 PM', id: '768', title: 'Dynamic Tail-Risk Modelling for Probabilistic Day-Ahead Electricity Price Forecasting in the Indian Power Market', authors: 'Lekshmi B Suresh, Lekshmi Krishna R, Muthukumari S, Rahul Satheesh' },
                    { time: '12:31 PM – 12:44 PM', id: '767', title: 'Memory Augmented Agentic AI for Explainable Power System Simulation and Decision Support', authors: 'Honoksharathna B, Renkhanayagi A R K, Muthukumari S, Rahul Satheesh' },
                ],
            },
            {
                trackId: 'd2-t2',
                trackNum: 'Track 2',
                venue: 'Shanon Hall (B104)',
                theme: 'Fault Detection, Protection & Grid Security',
                papers: [
                    { time: '11:00 AM – 11:13 AM', id: '667', title: 'Evaluation of Thermal Stress Level on Insulation of Power Transformers using Fuzzy Logic Approach', authors: 'AVINASH DEWANGAN' },
                    { time: '11:13 AM – 11:26 AM', id: '765', title: 'Fault Detection and Classification of a Two-Terminal VSC-HVDC System Using SVM in MATLAB/Simulink', authors: 'ANIRUDH NAIK, Devamsh Dinkar, Naveen Babu D, Arjun Prakash, Haseena A, Biju K, Vinod V' },
                    { time: '11:26 AM – 11:39 AM', id: '766', title: 'Explainable AI-Based Transmission Line Fault Classification Using Feature Engineering', authors: 'Devana Bala Sathwik, Porupureddy Rahul Sai Sri Praharsha, Muthukumari S, Rahul Satheesh' },
                    { time: '11:39 AM – 11:52 AM', id: '610', title: 'A Multi-Criteria Analysis Framework for the Siting and Scheduling of UAV Swarm Charging Infrastructure at Forward Operating Bases for DRDO Applications', authors: 'Dr. Deepika Yadav, Dr Ranjit Roy, Prashant Kumar, Tahiti Roy' },
                    { time: '11:52 AM – 12:05 PM', id: '578', title: 'A Hybrid Detection and ANN-Based Recovery Framework for False Data Injection Attacks with Economic Flexibility Analysis in Power Systems', authors: 'Dr Deepika Yadav, Dr Ranjit Roy, Prashant Kumar, Tahiti Roy' },
                    { time: '12:05 PM – 12:18 PM', id: '203', title: 'An Auxiliary Filter–Based Approach for DC Series Arc Fault Detection in Module-Level PV Converters', authors: 'Levin Binu' },
                    { time: '12:18 PM – 12:31 PM', id: '429', title: 'Real-Time Distribution Line Wire Breakage Detection for Sustainable Power Management', authors: 'Narmada Byreddy, Pallavi Mekonda, Srinidhi Adla, Sahithi Sri Tangella' },
                    { time: '12:31 PM – 12:44 PM', id: '730', title: 'Inter-Turn Short-Circuit Fault Detection using SFRA End-to-End Voltage Transfer Function', authors: 'Pavithra M, Jayabal Rajamohan, Rajesh Rajamani, Kalyanasundaram V' },
                ],
            },
            {
                trackId: 'd2-t3',
                trackNum: 'Track 3',
                venue: 'Aryabhata Hall',
                theme: 'Drives, Inverters & Grid-Connected Converters',
                papers: [
                    { time: '11:00 AM – 11:13 AM', id: '299', title: 'Sensorless BLDC Motor Controller for Electric Vehicle Acoustic Alerting Systems (AVAS) via Direct Digital Synthesis SPWM Injection', authors: 'Vinayak H, Mayadevi N' },
                    { time: '11:13 AM – 11:26 AM', id: '672', title: 'Genetic Algorithm-Based Multi-Objective Wheel Slip Control for Independent-Wheel-Drive Electric Vehicles', authors: 'Pranjal Barman, Nayan Jyoti Pathak, Honey Brahma, Brian Azzopardi' },
                    { time: '11:26 AM – 11:39 AM', id: '696', title: 'PSO-Based Dynamic Power-Reference Optimization for Grid-Connected VSC Under Dynamic Local-Load Conditions', authors: 'Vijay Kumar, Jagan Mohan Raju T' },
                    { time: '11:39 AM – 11:52 AM', id: '405', title: 'Sensitivity Analysis of Virtual Synchronous Machine (VSM) Control for Grid-Forming Inverters in Varying Grid Strengths', authors: 'Jacintha Dias, Asheesh Dhaneria' },
                    { time: '11:52 AM – 12:05 PM', id: '408', title: 'PSO-Tuned Flexible Power Point Tracking with Zero-Power Safety Clamping for Low-Voltage Ride-Through in Distributed PV Systems', authors: 'ASHEESH DHANERIA, Anil Kumar, Satish Chetwani, Ashutosh Giri' },
                    { time: '12:05 PM – 12:18 PM', id: '731', title: 'System Configuration and Parameter Optimization for Low-Voltage Ride-Through in Single-Phase PV Systems', authors: 'ASHEESH DHANERIA, Anil Kumar, Satish Chetwani, Ashutosh Giri' },
                    { time: '12:18 PM – 12:31 PM', id: '516', title: 'HIL - Based Accelerator Model for Electric Vehicle Motor Control', authors: 'Subash M, Chandra Prakash, Selvajyothi K, Raja B, Sivaselvan B' },
                ],
            },
            {
                trackId: 'd2-t4',
                trackNum: 'Track 4',
                venue: 'PG Software Lab (B 308) [Hybrid: Onsite & Online]',
                theme: 'Hybrid Session (onsite and online presenters)',
                papers: [
                    { time: '11:00 AM – 11:13 AM', id: '525', title: 'Optimal Tap Selection and Power Electronic Switching for Online Voltage Regulation in Power Systems', authors: 'Lesin Lama Levan, Praveen Raj' },
                    { time: '11:13 AM – 11:26 AM', id: '527', title: 'A Metaheuristic MPPT Control Based ZETA Converter for Solar PV Applications', authors: 'Angel Nazy Simon, Praveen Raj' },
                    { time: '11:26 AM – 11:39 AM', id: '416', title: 'Integrated Forecasting of Solar PV Deployment and End-of-Life Waste in Kerala, India', authors: 'Shoarabh Sharma, Jiya Thakur, Priyanka Kajal, Satvasheel Powar, Atul Dhar' },
                    { time: '11:39 AM – 11:52 AM', id: '385', title: 'Evaluating the Influence of Rectangular and Circular Coil Geometries for Wireless Power Transfer', authors: 'Mr. Jaish J. S., Mr. Karthik Satheesan, Mr. Karthik K., Mr. Arafan Mohammed, Ms. Sandhya P and Dr. Nisha G. K.' },
                    { time: '11:52 AM – 12:05 PM', id: '520', title: 'Cognitive Spectrum Sensing and Dynamic Channel Hopping Using AI (CNN-LSTM) for Interference-Aware IoT Communication', authors: 'Hemalatha S, Sashikiran S, Mukeshwaran M, MANIKANDAN J, Manuneethisozhan K, HEMAMALINI V' },
                    { time: '12:05 PM – 12:18 PM', id: '540', title: 'Adaptive Electric Vehicle Safety System with Intelligent Driver Assistance and Battery Monitoring', authors: 'Hemamalini V, Dhatchayani N, Selvi T, Pooja Sri A, Manikandan J, Hemalatha S' },
                ],
            },
        ],
    },
];

const headerStyle = {
    background: '#1e3a5f',
    color: '#fff',
    padding: '12px 14px',
    fontSize: '0.84rem',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: '0.3px',
};

const cellStyle = {
    padding: '12px 14px',
    fontSize: '0.84rem',
    color: '#1a202c',
    borderBottom: '1px solid #e2e8f0',
    verticalAlign: 'middle',
    lineHeight: '1.5',
};

const timeStyle = {
    ...cellStyle,
    fontWeight: '700',
    whiteSpace: 'nowrap',
    color: '#1a202c',
};

const eventStyle = {
    ...cellStyle,
    fontWeight: '700',
};

const venueCellStyle = {
    ...cellStyle,
    textAlign: 'center',
    fontWeight: '600',
};

const dayHeaderStyle = {
    background: '#1e3a5f',
    color: '#fff',
    textAlign: 'center',
    padding: '12px 16px',
    fontSize: '1rem',
    fontWeight: '700',
    borderRadius: '8px 8px 0 0',
};

const trackHeaderStyle = {
    background: '#0f385c',
    color: '#fff',
    padding: '12px 16px',
    borderRadius: '8px 8px 0 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
};

const getRowStyle = (type) => {
    switch (type) {
        case 'keynote':
            return { background: '#fffbe6' };
        case 'break':
            return { background: '#f0f4f8' };
        case 'special':
            return { background: '#e8f4ea' };
        default:
            return { background: '#fff' };
    }
};

const TechnicalProgrammePage = () => {
    const [activeSection, setActiveSection] = useState('tracks'); // 'master' or 'tracks'
    const [selectedMasterDay, setSelectedMasterDay] = useState('all');
    const [selectedTrackDay, setSelectedTrackDay] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredMasterDays = selectedMasterDay === 'all'
        ? scheduleData
        : scheduleData.filter((d) => d.id === selectedMasterDay);

    const filteredTrackSessions = technicalTracksData
        .filter((sess) => selectedTrackDay === 'all' || sess.dayId === selectedTrackDay)
        .map((sess) => {
            if (!searchQuery.trim()) return sess;
            const query = searchQuery.toLowerCase().trim();
            const matchingTracks = sess.tracks
                .map((track) => {
                    const filteredPapers = track.papers.filter((paper) => (
                        paper.id.toLowerCase().includes(query) ||
                        paper.title.toLowerCase().includes(query) ||
                        paper.authors.toLowerCase().includes(query) ||
                        track.theme.toLowerCase().includes(query) ||
                        track.venue.toLowerCase().includes(query)
                    ));
                    return { ...track, papers: filteredPapers };
                })
                .filter((track) => track.papers.length > 0);
            return { ...sess, tracks: matchingTracks };
        })
        .filter((sess) => sess.tracks.length > 0);

    return (
        <PageLayout title="Technical Programme">
            <style>{`
                html, body, .page-wrapper {
                    overflow-x: clip !important;
                    max-width: 100vw;
                }
                .page-content-wrapper {
                    padding-top: 15px !important;
                }
                .schedule-table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                    overscroll-behavior-x: contain;
                    -webkit-overflow-scrolling: touch;
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                    margin-bottom: 35px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }
                .schedule-table-wrapper::-webkit-scrollbar {
                    height: 8px;
                }
                .schedule-table-wrapper::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 4px;
                }
                .schedule-table-wrapper::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}</style>

            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
                <div style={{ padding: '0 0 50px' }}>

                    {/* Master Banner Header */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1e3a5f 0%, #0d233a 100%)',
                        color: '#fff',
                        borderRadius: '12px',
                        padding: '22px 20px',
                        marginBottom: '20px',
                        textAlign: 'center',
                        boxShadow: '0 4px 15px rgba(30, 58, 95, 0.12)',
                    }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(255,255,255,0.15)',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.78rem',
                            fontWeight: '600',
                            letterSpacing: '0.8px',
                            textTransform: 'uppercase',
                            marginBottom: '8px'
                        }}>
                            Conference Schedule
                        </span>
                        <h2 style={{ margin: '0 0 8px 0', fontSize: '1.4rem', fontWeight: '800', letterSpacing: '0.3px', lineHeight: '1.3' }}>
                            IEEE ISPEC 2026 — Conference Programme
                        </h2>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Theme: Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality<br />
                            <strong>Venue:</strong> MBCET, Thiruvananthapuram &nbsp;|&nbsp; <strong>Date:</strong> 4 – 6 December 2026
                        </p>
                    </div>

                    {/* Main Section Navigation Switcher */}
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        marginBottom: '24px',
                        background: '#f1f5f9',
                        padding: '6px',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0',
                    }}>
                        <button
                            type="button"
                            onClick={() => setActiveSection('tracks')}
                            style={{
                                flex: 1,
                                padding: '10px 16px',
                                border: 'none',
                                borderRadius: '8px',
                                background: activeSection === 'tracks' ? '#00629b' : 'transparent',
                                color: activeSection === 'tracks' ? '#fff' : '#334155',
                                fontWeight: '700',
                                fontSize: '0.92rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                boxShadow: activeSection === 'tracks' ? '0 2px 6px rgba(0, 98, 155, 0.3)' : 'none',
                            }}
                        >
                            <i className="fas fa-list-alt"></i>
                            Technical Track Presentation Schedule (All 10 Tracks)
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveSection('master')}
                            style={{
                                flex: 1,
                                padding: '10px 16px',
                                border: 'none',
                                borderRadius: '8px',
                                background: activeSection === 'master' ? '#00629b' : 'transparent',
                                color: activeSection === 'master' ? '#fff' : '#334155',
                                fontWeight: '700',
                                fontSize: '0.92rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                boxShadow: activeSection === 'master' ? '0 2px 6px rgba(0, 98, 155, 0.3)' : 'none',
                            }}
                        >
                            <i className="fas fa-calendar-check"></i>
                            Master Conference Schedule (Overall Timeline)
                        </button>
                    </div>

                    {/* ========================================================= */}
                    {/* SECTION 1: TECHNICAL TRACK PAPER PRESENTATION SCHEDULE   */}
                    {/* ========================================================= */}
                    {activeSection === 'tracks' && (
                        <div>
                            {/* Track Subheader Banner */}
                            <div style={{
                                background: '#e0f2fe',
                                border: '1px solid #bae6fd',
                                borderRadius: '8px',
                                padding: '14px 18px',
                                marginBottom: '20px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0369a1', fontWeight: '800' }}>
                                        iSPEC 2026: TECHNICAL TRACK SCHEDULE
                                    </h3>
                                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#0284c7', fontWeight: '600' }}>
                                        Timing per Paper: 10 minutes presentation + 3 minutes Q&amp;A
                                    </p>
                                </div>
                                <span style={{
                                    background: '#00629b',
                                    color: '#fff',
                                    padding: '4px 12px',
                                    borderRadius: '16px',
                                    fontSize: '0.8rem',
                                    fontWeight: '700',
                                }}>
                                    10 Technical Tracks Total
                                </span>
                            </div>

                            {/* Filters & Search Bar */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '12px',
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '10px',
                                padding: '12px 14px',
                                marginBottom: '22px',
                            }}>
                                {/* Day Filter Buttons */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {[
                                        { id: 'all', label: 'All Sessions (10 Tracks)' },
                                        { id: 'day1', label: 'Day 1: Session A (Tracks 1–6)' },
                                        { id: 'day2', label: 'Day 2: Session B (Tracks 1–4)' },
                                    ].map((tab) => {
                                        const isActive = selectedTrackDay === tab.id;
                                        return (
                                            <button
                                                key={tab.id}
                                                type="button"
                                                onClick={() => setSelectedTrackDay(tab.id)}
                                                style={{
                                                    background: isActive ? '#00629b' : '#fff',
                                                    color: isActive ? '#fff' : '#334155',
                                                    border: `1px solid ${isActive ? '#00629b' : '#cbd5e1'}`,
                                                    padding: '6px 14px',
                                                    borderRadius: '6px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease',
                                                }}
                                            >
                                                {tab.label}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Instant Paper Search Box */}
                                <div style={{ position: 'relative', minWidth: '240px', flex: '1 1 240px', maxWidth: '380px' }}>
                                    <input
                                        type="text"
                                        placeholder="Search by Paper ID (e.g. 16, 306), Title, Author..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '8px 12px 8px 34px',
                                            borderRadius: '6px',
                                            border: '1px solid #cbd5e1',
                                            fontSize: '0.84rem',
                                            outline: 'none',
                                            boxSizing: 'border-box',
                                        }}
                                    />
                                    <i className="fas fa-search" style={{ position: 'absolute', left: '11px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '0.85rem' }}></i>
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            onClick={() => setSearchQuery('')}
                                            style={{
                                                position: 'absolute',
                                                right: '10px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                background: 'none',
                                                border: 'none',
                                                color: '#64748b',
                                                cursor: 'pointer',
                                                fontSize: '0.85rem',
                                            }}
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Track Sessions & Tables */}
                            {filteredTrackSessions.length === 0 ? (
                                <div style={{
                                    background: '#fff',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    padding: '30px',
                                    textAlign: 'center',
                                    color: '#64748b',
                                }}>
                                    No papers matched your search query "{searchQuery}". Try searching with another Paper ID, author name, or keyword.
                                </div>
                            ) : (
                                filteredTrackSessions.map((session, sIdx) => (
                                    <div key={sIdx} style={{ marginBottom: '40px' }}>
                                        {/* Session Banner */}
                                        <div style={{
                                            background: '#1e3a5f',
                                            color: '#fff',
                                            padding: '12px 18px',
                                            borderRadius: '8px',
                                            marginBottom: '18px',
                                        }}>
                                            <div style={{ fontSize: '1.05rem', fontWeight: '800' }}>
                                                {session.dayTitle}
                                            </div>
                                            <div style={{ fontSize: '0.86rem', color: '#93c5fd', fontWeight: '600', marginTop: '2px' }}>
                                                {session.sessionTitle}
                                            </div>
                                        </div>

                                        {/* Tracks in this Session */}
                                        {session.tracks.map((track) => (
                                            <div key={track.trackId} style={{ marginBottom: '30px' }}>
                                                <div style={trackHeaderStyle}>
                                                    <div>
                                                        <span style={{ fontSize: '1.02rem', fontWeight: '800', marginRight: '10px' }}>
                                                            {track.trackNum}
                                                        </span>
                                                        <span style={{ fontSize: '0.92rem', color: '#67e8f9', fontWeight: '600' }}>
                                                            — {track.theme}
                                                        </span>
                                                    </div>
                                                    <div style={{ fontSize: '0.85rem', color: '#fef08a', fontWeight: '700' }}>
                                                        Venue: {track.venue}
                                                    </div>
                                                </div>

                                                <div className="schedule-table-wrapper">
                                                    <table style={{ width: '100%', minWidth: '720px', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                                                        <thead>
                                                            <tr>
                                                                <th style={{ ...headerStyle, width: '150px' }}>Time Slot</th>
                                                                <th style={{ ...headerStyle, width: '90px' }}>Paper ID</th>
                                                                <th style={{ ...headerStyle, width: '380px', textAlign: 'left' }}>Paper Title</th>
                                                                <th style={{ ...headerStyle, textAlign: 'left' }}>Authors</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {track.papers.map((paper, pIdx) => (
                                                                <tr key={pIdx} style={{ background: pIdx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                                                                    <td style={timeStyle}>{paper.time}</td>
                                                                    <td style={{ ...cellStyle, textAlign: 'center' }}>
                                                                        <span style={{
                                                                            display: 'inline-block',
                                                                            background: '#00629b',
                                                                            color: '#fff',
                                                                            fontWeight: '800',
                                                                            padding: '3px 8px',
                                                                            borderRadius: '5px',
                                                                            fontSize: '0.85rem',
                                                                            letterSpacing: '0.3px',
                                                                        }}>
                                                                            {paper.id}
                                                                        </span>
                                                                    </td>
                                                                    <td style={{ ...cellStyle, fontWeight: '700', color: '#0f172a' }}>
                                                                        {paper.title}
                                                                    </td>
                                                                    <td style={{ ...cellStyle, color: '#334155' }}>
                                                                        {paper.authors}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* ========================================================= */}
                    {/* SECTION 2: MASTER CONFERENCE TIMELINE SCHEDULE            */}
                    {/* ========================================================= */}
                    {activeSection === 'master' && (
                        <div>
                            {/* Day Filter Tabs */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                gap: '10px',
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '10px',
                                padding: '10px 14px',
                                marginBottom: '20px',
                            }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {[
                                        { id: 'all', label: 'All Days' },
                                        { id: 'day1', label: 'Day 1 (4 Dec)' },
                                        { id: 'day2', label: 'Day 2 (5 Dec)' },
                                        { id: 'day3', label: 'Day 3 (6 Dec)' },
                                    ].map((tab) => {
                                        const isActive = selectedMasterDay === tab.id;
                                        return (
                                            <button
                                                key={tab.id}
                                                type="button"
                                                onClick={() => setSelectedMasterDay(tab.id)}
                                                style={{
                                                    background: isActive ? '#00629b' : '#fff',
                                                    color: isActive ? '#fff' : '#334155',
                                                    border: `1px solid ${isActive ? '#00629b' : '#cbd5e1'}`,
                                                    padding: '6px 14px',
                                                    borderRadius: '6px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease',
                                                }}
                                            >
                                                {tab.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Conference Tables */}
                            {filteredMasterDays.map((day) => (
                                <div key={day.id} style={{ marginBottom: '35px' }}>
                                    <div style={dayHeaderStyle}>{day.title}</div>
                                    <div className="schedule-table-wrapper">
                                        <table style={{ width: '100%', minWidth: '720px', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ ...headerStyle, width: '160px' }}>Time Slot</th>
                                                    <th style={{ ...headerStyle, width: '200px' }}>Session / Event</th>
                                                    <th style={headerStyle}>Description &amp; Key Highlights</th>
                                                    <th style={{ ...headerStyle, width: '180px' }}>Venue / Track</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {day.items.map((item, idx) => {
                                                    const rowBg = getRowStyle(item.type);

                                                    if (item.isMultiTrack && item.tracks) {
                                                        return (
                                                            <React.Fragment key={idx}>
                                                                {item.tracks.map((trackItem, tIdx) => (
                                                                    <tr key={tIdx} style={rowBg}>
                                                                        {tIdx === 0 && (
                                                                            <>
                                                                                <td
                                                                                    style={{ ...timeStyle, verticalAlign: 'top', paddingTop: '14px' }}
                                                                                    rowSpan={item.tracks.length}
                                                                                >
                                                                                    {item.time}
                                                                                </td>
                                                                                <td
                                                                                    style={{ ...eventStyle, verticalAlign: 'top', paddingTop: '14px' }}
                                                                                    rowSpan={item.tracks.length}
                                                                                >
                                                                                    {item.event}
                                                                                    <div style={{ marginTop: '8px' }}>
                                                                                        <button
                                                                                            type="button"
                                                                                            onClick={() => {
                                                                                                setActiveSection('tracks');
                                                                                                setSelectedTrackDay(day.id);
                                                                                            }}
                                                                                            style={{
                                                                                                background: '#00629b',
                                                                                                color: '#fff',
                                                                                                border: 'none',
                                                                                                padding: '4px 8px',
                                                                                                borderRadius: '4px',
                                                                                                fontSize: '0.74rem',
                                                                                                fontWeight: '700',
                                                                                                cursor: 'pointer',
                                                                                            }}
                                                                                        >
                                                                                            View Papers Schedule →
                                                                                        </button>
                                                                                    </div>
                                                                                </td>
                                                                            </>
                                                                        )}
                                                                        <td style={cellStyle}>
                                                                            <strong>{trackItem.track}</strong>
                                                                        </td>
                                                                        <td style={venueCellStyle}>
                                                                            <span style={{
                                                                                color: '#00629b',
                                                                                fontWeight: '700',
                                                                            }}>
                                                                                {trackItem.venue}
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </React.Fragment>
                                                        );
                                                    }

                                                    return (
                                                        <tr key={idx} style={rowBg}>
                                                            <td style={timeStyle}>{item.time}</td>
                                                            <td style={eventStyle}>{item.event}</td>
                                                            <td style={cellStyle}>{item.desc}</td>
                                                            <td style={venueCellStyle}>
                                                                {item.venue ? (
                                                                    <span style={{
                                                                        color: '#00629b',
                                                                        fontWeight: '700',
                                                                    }}>
                                                                        {item.venue}
                                                                    </span>
                                                                ) : '—'}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}

                            {/* Legend */}
                            <div style={{
                                background: '#fff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '8px',
                                padding: '14px 18px',
                                marginTop: '10px'
                            }}>
                                <div style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1e293b', marginBottom: '8px' }}>
                                    Color Legend:
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.82rem' }}>
                                    {[
                                        { color: '#fffbe6', border: '#f59e0b', label: 'Keynote Sessions' },
                                        { color: '#f0f4f8', border: '#cbd5e1', label: 'Breaks & Networking' },
                                        { color: '#e8f4ea', border: '#10b981', label: 'Special / Ceremonial Events' },
                                        { color: '#fff', border: '#e2e8f0', label: 'Technical / General Sessions' },
                                    ].map(({ color, border, label }) => (
                                        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '18px', height: '18px', background: color, border: `1px solid ${border}`, borderRadius: '4px' }}></div>
                                            <span style={{ color: '#475569', fontWeight: '500' }}>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </PageLayout>
    );
};

export default TechnicalProgrammePage;
