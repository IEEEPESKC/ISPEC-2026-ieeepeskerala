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
                sessionKey: 'day1',
                tracks: [
                    { track: 'Track 1 (Solar PV Systems & Monitoring)', venue: 'Aryabhata Hall (B 303)' },
                    { track: 'Track 2 (PV Analytics, Forecasting & AI for Solar)', venue: 'Shanon Hall (B104)' },
                    { track: 'Track 3 (Microgrids, Hybrid Renewables & Energy Markets)', venue: 'Senatus Hall (A 204)' },
                    { track: 'Track 4 (Batteries, Storage & EV Systems)', venue: 'Faraday Hall (B04)' },
                    { track: 'Track 5 (Power Converters & Electric Drives)', venue: 'PG Software Lab (B308)' },
                    { track: 'Track 6 (Online Session I)', venue: 'Department Computing Facility (B116)' },
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
                sessionKey: 'day2',
                tracks: [
                    { track: 'Track 1 (Smart Grids, AI & Forecasting)', venue: 'Faraday Hall (B 04)' },
                    { track: 'Track 2 (Fault Detection, Protection & Grid Security)', venue: 'Shanon Hall (B104)' },
                    { track: 'Track 3 (Drives, Inverters & Grid-Connected Converters)', venue: 'Aryabhata Hall' },
                    { track: 'Track 4 (Hybrid Session - Onsite & Online)', venue: 'PG Software Lab (B 308)' },
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

const trackDetailData = {
    day1: {
        sessionTitle: 'Day 1: Technical Track Session A | 01:00 PM – 03:00 PM',
        label: 'Day 1 (4 Dec) — Technical Track Session A | 01:00 PM – 03:00 PM',
        tracks: [
            {
                trackNo: 'Track 1',
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
                trackNo: 'Track 2',
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
                trackNo: 'Track 3',
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
                trackNo: 'Track 4',
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
                trackNo: 'Track 5',
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
                trackNo: 'Track 6 (Online)',
                venue: 'Department Computing Facility (B116)',
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
    day2: {
        sessionTitle: 'Day 2: Technical Track Session B | 11:00 AM – 01:00 PM',
        label: 'Day 2 (5 Dec) — Technical Track Session B | 11:00 AM – 01:00 PM',
        tracks: [
            {
                trackNo: 'Track 1',
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
                trackNo: 'Track 2',
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
                trackNo: 'Track 3',
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
                trackNo: 'Track 4 (Hybrid)',
                venue: 'PG Software Lab (B 308) — Onsite & Online',
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
};


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
    // Two main view modes: 'master' (Master Conference Schedule) and 'technical' (Technical Track Schedule)
    const [activeScheduleView, setActiveScheduleView] = useState('master');

    // Filter for Master Schedule: 'all', 'day1', 'day2', 'day3'
    const [selectedDay, setSelectedDay] = useState('all');

    // Filter for Technical Track Schedule: 'all', 'day1', 'day2'
    const [selectedTechnicalDay, setSelectedTechnicalDay] = useState('all');

    // Filter for individual tracks inside Technical Track Schedule: 'all' or track index string '0', '1', etc.
    const [selectedTrackDay1, setSelectedTrackDay1] = useState('all');
    const [selectedTrackDay2, setSelectedTrackDay2] = useState('all');

    const filteredDays = selectedDay === 'all'
        ? scheduleData
        : scheduleData.filter(d => d.id === selectedDay);

    const goToTechnicalTrack = (dayKey, trackIndex) => {
        setActiveScheduleView('technical');
        setSelectedTechnicalDay(dayKey);
        if (dayKey === 'day1') {
            setSelectedTrackDay1(trackIndex !== undefined ? String(trackIndex) : 'all');
        } else if (dayKey === 'day2') {
            setSelectedTrackDay2(trackIndex !== undefined ? String(trackIndex) : 'all');
        }
        setTimeout(() => {
            const targetId = trackIndex !== undefined ? `track-${dayKey}-${trackIndex}` : `session-${dayKey}`;
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.scrollTo({ top: 120, behavior: 'smooth' });
            }
        }, 80);
    };

    return (
        <PageLayout title="Technical Programme">
            {/* Embedded styles: reduce header gap and enable smooth table scroll on mobile */}
            <style>{`
                html, body, .page-wrapper {
                    overflow-x: hidden !important;
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
                        padding: '24px 20px',
                        marginBottom: '22px',
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
                            Conference Programme
                        </span>
                        <h2 style={{ margin: '0 0 8px 0', fontSize: '1.45rem', fontWeight: '800', letterSpacing: '0.3px', lineHeight: '1.3' }}>
                            {activeScheduleView === 'master'
                                ? 'IEEE iSPEC 2026 — Master Conference Schedule'
                                : 'IEEE iSPEC 2026 — Technical Track Schedule'}
                        </h2>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Theme: Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality<br />
                            <strong>Venue:</strong> MBCET, Thiruvananthapuram &nbsp;|&nbsp; <strong>Date:</strong> 4 – 6 December 2026
                        </p>
                    </div>

                    {/* ═══════════════════════════════════════════
                        TWO MAIN NAVIGATION BUTTONS
                    ═══════════════════════════════════════════ */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '12px',
                        marginBottom: '26px',
                        flexWrap: 'wrap',
                    }}>
                        <button
                            type="button"
                            onClick={() => setActiveScheduleView('master')}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                border: activeScheduleView === 'master' ? '2px solid #00629b' : '1px solid #cbd5e1',
                                background: activeScheduleView === 'master' ? '#00629b' : '#ffffff',
                                color: activeScheduleView === 'master' ? '#ffffff' : '#1e293b',
                                boxShadow: activeScheduleView === 'master' ? '0 4px 14px rgba(0, 98, 155, 0.25)' : '0 1px 4px rgba(0,0,0,0.05)',
                            }}
                        >
                            <i className="fa fa-calendar-alt"></i>
                            Master Conference Schedule
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setActiveScheduleView('technical');
                                setSelectedTechnicalDay('all');
                                setSelectedTrackDay1('all');
                                setSelectedTrackDay2('all');
                            }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                border: activeScheduleView === 'technical' ? '2px solid #00629b' : '1px solid #cbd5e1',
                                background: activeScheduleView === 'technical' ? '#00629b' : '#ffffff',
                                color: activeScheduleView === 'technical' ? '#ffffff' : '#1e293b',
                                boxShadow: activeScheduleView === 'technical' ? '0 4px 14px rgba(0, 98, 155, 0.25)' : '0 1px 4px rgba(0,0,0,0.05)',
                            }}
                        >
                            <i className="fa fa-file-alt"></i>
                            Technical Track Schedule
                        </button>
                    </div>

                    {/* ═══════════════════════════════════════════
                        VIEW 1: MASTER CONFERENCE SCHEDULE
                    ═══════════════════════════════════════════ */}
                    {activeScheduleView === 'master' && (
                        <>
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
                                        const isActive = selectedDay === tab.id;
                                        return (
                                            <button
                                                key={tab.id}
                                                type="button"
                                                onClick={() => setSelectedDay(tab.id)}
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
                            {filteredDays.map((day) => (
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
                                                                                    <div style={{ fontWeight: '800', color: '#1e3a5f' }}>{item.event}</div>
                                                                                    <div style={{ marginTop: '8px' }}>
                                                                                        <button
                                                                                            type="button"
                                                                                            onClick={() => goToTechnicalTrack(item.sessionKey || day.id)}
                                                                                            title={`View all papers in ${item.event}`}
                                                                                            style={{
                                                                                                background: '#e0f2fe',
                                                                                                color: '#0284c7',
                                                                                                border: '1px solid #bae6fd',
                                                                                                padding: '4px 9px',
                                                                                                borderRadius: '5px',
                                                                                                fontSize: '0.74rem',
                                                                                                fontWeight: '700',
                                                                                                cursor: 'pointer',
                                                                                                display: 'inline-flex',
                                                                                                alignItems: 'center',
                                                                                                gap: '4px',
                                                                                                whiteSpace: 'nowrap',
                                                                                                transition: 'all 0.15s ease',
                                                                                            }}
                                                                                            onMouseEnter={(e) => {
                                                                                                e.currentTarget.style.background = '#0284c7';
                                                                                                e.currentTarget.style.color = '#fff';
                                                                                            }}
                                                                                            onMouseLeave={(e) => {
                                                                                                e.currentTarget.style.background = '#e0f2fe';
                                                                                                e.currentTarget.style.color = '#0284c7';
                                                                                            }}
                                                                                        >
                                                                                            View All Papers &rarr;
                                                                                        </button>
                                                                                    </div>
                                                                                </td>
                                                                            </>
                                                                        )}
                                                                        <td style={cellStyle}>
                                                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                                                                                <span
                                                                                    onClick={() => goToTechnicalTrack(item.sessionKey || day.id, tIdx)}
                                                                                    style={{
                                                                                        fontWeight: '700',
                                                                                        color: '#1e3a5f',
                                                                                        cursor: 'pointer',
                                                                                        transition: 'color 0.15s ease',
                                                                                    }}
                                                                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00629b')}
                                                                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#1e3a5f')}
                                                                                    title={`Click to view paper schedule for ${trackItem.track}`}
                                                                                >
                                                                                    {trackItem.track}
                                                                                </span>
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() => goToTechnicalTrack(item.sessionKey || day.id, tIdx)}
                                                                                    title={`View paper schedule for ${trackItem.track}`}
                                                                                    style={{
                                                                                        background: '#f0f9ff',
                                                                                        color: '#0284c7',
                                                                                        border: '1px solid #bae6fd',
                                                                                        padding: '3px 8px',
                                                                                        borderRadius: '4px',
                                                                                        fontSize: '0.75rem',
                                                                                        fontWeight: '700',
                                                                                        cursor: 'pointer',
                                                                                        whiteSpace: 'nowrap',
                                                                                        transition: 'all 0.15s ease',
                                                                                    }}
                                                                                    onMouseEnter={(e) => {
                                                                                        e.currentTarget.style.background = '#0284c7';
                                                                                        e.currentTarget.style.color = '#fff';
                                                                                    }}
                                                                                    onMouseLeave={(e) => {
                                                                                        e.currentTarget.style.background = '#f0f9ff';
                                                                                        e.currentTarget.style.color = '#0284c7';
                                                                                    }}
                                                                                >
                                                                                    View Papers &rarr;
                                                                                </button>
                                                                            </div>
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

                            {/* Color Legend for Master Schedule */}
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
                        </>
                    )}

                    {/* ═══════════════════════════════════════════
                        VIEW 2: TECHNICAL TRACK SCHEDULE
                    ═══════════════════════════════════════════ */}
                    {activeScheduleView === 'technical' && (
                        <div>
                            {/* Session Switcher Tabs & Back Button */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '10px',
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '10px',
                                padding: '10px 14px',
                                marginBottom: '22px',
                            }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {[
                                        { id: 'all', label: 'All Sessions (10 Tracks)' },
                                        { id: 'day1', label: 'Day 1: Session A (6 Tracks)' },
                                        { id: 'day2', label: 'Day 2: Session B (4 Tracks)' },
                                    ].map((tab) => {
                                        const isActive = selectedTechnicalDay === tab.id;
                                        return (
                                            <button
                                                key={tab.id}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedTechnicalDay(tab.id);
                                                    if (tab.id === 'day1') setSelectedTrackDay1('all');
                                                    if (tab.id === 'day2') setSelectedTrackDay2('all');
                                                }}
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

                                <button
                                    type="button"
                                    onClick={() => setActiveScheduleView('master')}
                                    style={{
                                        background: '#fff',
                                        color: '#00629b',
                                        border: '1px solid #00629b',
                                        padding: '6px 14px',
                                        borderRadius: '6px',
                                        fontSize: '0.82rem',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        transition: 'all 0.15s ease',
                                    }}
                                >
                                    <i className="fa fa-arrow-left"></i>
                                    Back to Master Schedule
                                </button>
                            </div>

                            {/* DAY 1: TECHNICAL TRACK SESSION A */}
                            {(selectedTechnicalDay === 'all' || selectedTechnicalDay === 'day1') && (
                                <div id="session-day1" style={{ marginBottom: '45px', scrollMarginTop: '80px' }}>
                                    {/* Session Banner */}
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e3a5f 0%, #0d233a 100%)',
                                        color: '#fff',
                                        borderRadius: '8px',
                                        padding: '16px 20px',
                                        marginBottom: '16px',
                                        boxShadow: '0 3px 12px rgba(30, 58, 95, 0.12)',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}>
                                        <div>
                                            <span style={{
                                                display: 'inline-block',
                                                background: 'rgba(255,255,255,0.15)',
                                                padding: '3px 10px',
                                                borderRadius: '12px',
                                                fontSize: '0.74rem',
                                                fontWeight: '700',
                                                letterSpacing: '0.6px',
                                                textTransform: 'uppercase',
                                                marginBottom: '6px'
                                            }}>
                                                Day 1 (Friday, 4 Dec) • 01:00 PM – 03:00 PM
                                            </span>
                                            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.25rem', fontWeight: '800', color: '#fff' }}>
                                                {trackDetailData.day1.sessionTitle}
                                            </h3>
                                            <p style={{ margin: 0, fontSize: '0.86rem', color: '#cbd5e1' }}>
                                                Each paper: <strong style={{ color: '#fff' }}>10 min presentation + 3 min Q&amp;A</strong> &nbsp;|&nbsp; 6 Parallel Tracks (48 Papers)
                                            </p>
                                        </div>
                                    </div>

                                    {/* Track Filter Pills for Day 1 */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px',
                                        marginBottom: '18px',
                                    }}>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedTrackDay1('all')}
                                            style={{
                                                padding: '6px 14px',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                border: selectedTrackDay1 === 'all' ? '2px solid #00629b' : '1px solid #cbd5e1',
                                                background: selectedTrackDay1 === 'all' ? '#00629b' : '#fff',
                                                color: selectedTrackDay1 === 'all' ? '#fff' : '#334155',
                                                transition: 'all 0.15s ease',
                                            }}
                                        >
                                            All Tracks ({trackDetailData.day1.tracks.length})
                                        </button>
                                        {trackDetailData.day1.tracks.map((tr, tIdx) => {
                                            const isSelected = selectedTrackDay1 === String(tIdx);
                                            return (
                                                <button
                                                    key={tIdx}
                                                    type="button"
                                                    onClick={() => setSelectedTrackDay1(String(tIdx))}
                                                    style={{
                                                        padding: '6px 14px',
                                                        borderRadius: '20px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        cursor: 'pointer',
                                                        border: isSelected ? '2px solid #00629b' : '1px solid #cbd5e1',
                                                        background: isSelected ? '#00629b' : '#fff',
                                                        color: isSelected ? '#fff' : '#334155',
                                                        transition: 'all 0.15s ease',
                                                    }}
                                                >
                                                    {tr.trackNo}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Day 1 Track Tables */}
                                    {trackDetailData.day1.tracks.map((track, tIdx) => {
                                        if (selectedTrackDay1 !== 'all' && selectedTrackDay1 !== String(tIdx)) {
                                            return null;
                                        }

                                        return (
                                            <div id={`track-day1-${tIdx}`} key={tIdx} style={{ marginBottom: '24px', scrollMarginTop: '80px' }}>
                                                {/* Track Bar Header */}
                                                <div style={{
                                                    background: '#1e3a5f',
                                                    color: '#fff',
                                                    padding: '12px 18px',
                                                    borderRadius: '8px 8px 0 0',
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    borderBottom: '2px solid #00629b',
                                                }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                                        <span style={{
                                                            background: '#00629b',
                                                            color: '#fff',
                                                            padding: '3px 10px',
                                                            borderRadius: '4px',
                                                            fontSize: '0.78rem',
                                                            fontWeight: '700',
                                                            letterSpacing: '0.5px'
                                                        }}>
                                                            {track.trackNo}
                                                        </span>
                                                        <span style={{ fontWeight: '700', fontSize: '0.92rem', color: '#fff' }}>
                                                            {track.theme}
                                                        </span>
                                                    </div>
                                                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                                                        Venue: <strong style={{ color: '#fff' }}>{track.venue}</strong>
                                                    </div>
                                                </div>

                                                {/* Papers Table */}
                                                <div className="schedule-table-wrapper" style={{ borderRadius: '0 0 8px 8px', marginBottom: 0 }}>
                                                    <table style={{ width: '100%', minWidth: '720px', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                                                        <thead>
                                                            <tr>
                                                                <th style={{ ...headerStyle, width: '160px' }}>Time Slot</th>
                                                                <th style={{ ...headerStyle, width: '85px', textAlign: 'center' }}>Paper ID</th>
                                                                <th style={headerStyle}>Paper Title</th>
                                                                <th style={{ ...headerStyle, width: '300px' }}>Authors</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {track.papers.map((paper, pIdx) => (
                                                                <tr key={pIdx} style={{ background: pIdx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                                                    <td style={{ ...timeStyle, fontSize: '0.82rem', whiteSpace: 'nowrap' }}>{paper.time}</td>
                                                                    <td style={{ ...cellStyle, textAlign: 'center', fontWeight: '800', color: '#00629b' }}>{paper.id}</td>
                                                                    <td style={{ ...cellStyle, fontWeight: '600', color: '#1e293b', lineHeight: '1.45' }}>{paper.title}</td>
                                                                    <td style={{ ...cellStyle, fontSize: '0.8rem', color: '#475569', lineHeight: '1.45' }}>{paper.authors}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* DAY 2: TECHNICAL TRACK SESSION B */}
                            {(selectedTechnicalDay === 'all' || selectedTechnicalDay === 'day2') && (
                                <div id="session-day2" style={{ marginBottom: '45px', scrollMarginTop: '80px' }}>
                                    {/* Session Banner */}
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e3a5f 0%, #0d233a 100%)',
                                        color: '#fff',
                                        borderRadius: '8px',
                                        padding: '16px 20px',
                                        marginBottom: '16px',
                                        boxShadow: '0 3px 12px rgba(30, 58, 95, 0.12)',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}>
                                        <div>
                                            <span style={{
                                                display: 'inline-block',
                                                background: 'rgba(255,255,255,0.15)',
                                                padding: '3px 10px',
                                                borderRadius: '12px',
                                                fontSize: '0.74rem',
                                                fontWeight: '700',
                                                letterSpacing: '0.6px',
                                                textTransform: 'uppercase',
                                                marginBottom: '6px'
                                            }}>
                                                Day 2 (Saturday, 5 Dec) • 11:00 AM – 01:00 PM
                                            </span>
                                            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.25rem', fontWeight: '800', color: '#fff' }}>
                                                {trackDetailData.day2.sessionTitle}
                                            </h3>
                                            <p style={{ margin: 0, fontSize: '0.86rem', color: '#cbd5e1' }}>
                                                Each paper: <strong style={{ color: '#fff' }}>10 min presentation + 3 min Q&amp;A</strong> &nbsp;|&nbsp; 4 Parallel Tracks (29 Papers)
                                            </p>
                                        </div>
                                    </div>

                                    {/* Track Filter Pills for Day 2 */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px',
                                        marginBottom: '18px',
                                    }}>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedTrackDay2('all')}
                                            style={{
                                                padding: '6px 14px',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                border: selectedTrackDay2 === 'all' ? '2px solid #00629b' : '1px solid #cbd5e1',
                                                background: selectedTrackDay2 === 'all' ? '#00629b' : '#fff',
                                                color: selectedTrackDay2 === 'all' ? '#fff' : '#334155',
                                                transition: 'all 0.15s ease',
                                            }}
                                        >
                                            All Tracks ({trackDetailData.day2.tracks.length})
                                        </button>
                                        {trackDetailData.day2.tracks.map((tr, tIdx) => {
                                            const isSelected = selectedTrackDay2 === String(tIdx);
                                            return (
                                                <button
                                                    key={tIdx}
                                                    type="button"
                                                    onClick={() => setSelectedTrackDay2(String(tIdx))}
                                                    style={{
                                                        padding: '6px 14px',
                                                        borderRadius: '20px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        cursor: 'pointer',
                                                        border: isSelected ? '2px solid #00629b' : '1px solid #cbd5e1',
                                                        background: isSelected ? '#00629b' : '#fff',
                                                        color: isSelected ? '#fff' : '#334155',
                                                        transition: 'all 0.15s ease',
                                                    }}
                                                >
                                                    {tr.trackNo}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Day 2 Track Tables */}
                                    {trackDetailData.day2.tracks.map((track, tIdx) => {
                                        if (selectedTrackDay2 !== 'all' && selectedTrackDay2 !== String(tIdx)) {
                                            return null;
                                        }

                                        return (
                                            <div id={`track-day2-${tIdx}`} key={tIdx} style={{ marginBottom: '24px', scrollMarginTop: '80px' }}>
                                                {/* Track Bar Header */}
                                                <div style={{
                                                    background: '#1e3a5f',
                                                    color: '#fff',
                                                    padding: '12px 18px',
                                                    borderRadius: '8px 8px 0 0',
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    borderBottom: '2px solid #00629b',
                                                }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                                        <span style={{
                                                            background: '#00629b',
                                                            color: '#fff',
                                                            padding: '3px 10px',
                                                            borderRadius: '4px',
                                                            fontSize: '0.78rem',
                                                            fontWeight: '700',
                                                            letterSpacing: '0.5px'
                                                        }}>
                                                            {track.trackNo}
                                                        </span>
                                                        <span style={{ fontWeight: '700', fontSize: '0.92rem', color: '#fff' }}>
                                                            {track.theme}
                                                        </span>
                                                    </div>
                                                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                                                        Venue: <strong style={{ color: '#fff' }}>{track.venue}</strong>
                                                    </div>
                                                </div>

                                                {/* Papers Table */}
                                                <div className="schedule-table-wrapper" style={{ borderRadius: '0 0 8px 8px', marginBottom: 0 }}>
                                                    <table style={{ width: '100%', minWidth: '720px', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                                                        <thead>
                                                            <tr>
                                                                <th style={{ ...headerStyle, width: '160px' }}>Time Slot</th>
                                                                <th style={{ ...headerStyle, width: '85px', textAlign: 'center' }}>Paper ID</th>
                                                                <th style={headerStyle}>Paper Title</th>
                                                                <th style={{ ...headerStyle, width: '300px' }}>Authors</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {track.papers.map((paper, pIdx) => (
                                                                <tr key={pIdx} style={{ background: pIdx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                                                    <td style={{ ...timeStyle, fontSize: '0.82rem', whiteSpace: 'nowrap' }}>{paper.time}</td>
                                                                    <td style={{ ...cellStyle, textAlign: 'center', fontWeight: '800', color: '#00629b' }}>{paper.id}</td>
                                                                    <td style={{ ...cellStyle, fontWeight: '600', color: '#1e293b', lineHeight: '1.45' }}>{paper.title}</td>
                                                                    <td style={{ ...cellStyle, fontSize: '0.8rem', color: '#475569', lineHeight: '1.45' }}>{paper.authors}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Back to Master Schedule Bottom Button */}
                            <div style={{ textAlign: 'center', marginTop: '35px', marginBottom: '10px' }}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setActiveScheduleView('master');
                                        window.scrollTo({ top: 120, behavior: 'smooth' });
                                    }}
                                    style={{
                                        background: '#00629b',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '12px 24px',
                                        borderRadius: '8px',
                                        fontSize: '0.92rem',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        boxShadow: '0 2px 8px rgba(0, 98, 155, 0.25)',
                                    }}
                                >
                                    <i className="fa fa-calendar-alt"></i>
                                    Back to Master Conference Schedule
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </PageLayout>
    );
};

export default TechnicalProgrammePage;
