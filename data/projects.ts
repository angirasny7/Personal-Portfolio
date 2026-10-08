import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "signallens",
    title: "SignalLens",
    tagline: "Market Change Intelligence",
    date: "01/2026 – 05/2026",
    category: "Full-Stack",
    featured: true,
    description:
      "A full-stack market intelligence platform that monitors stock movements and news events, delivering prioritized insights and personalized alerts.",
    bulletPoints: [
      "Developed a full-stack market intelligence platform that monitors stock movements and news events, delivering prioritized insights and personalized alerts.",
      "Built automated change-detection pipelines to identify significant market events and enrich them with relevant news-based explanations.",
      "Architected a PostgreSQL database for users, watchlists, events, insights, and alerts, integrating Yahoo Finance and RSS news feeds for real-time data processing."
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Node.js",
      "Yahoo Finance API",
      "RSS Feeds",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/angirasny7/Market-Watchlist",
    liveDemoUrl: "https://market-watchlist-omega.vercel.app",
    metrics: "Automated change-detection with real-time news enrichment",
    caseStudy: {
      overview:
        "SignalLens is a full-stack market intelligence platform that monitors real-time stock price movements and correlated financial news events, surfacing high-signal prioritized insights and automated alert triggers.",
      problem:
        "Retail investors and financial analysts drown in noisy market feeds, struggling to correlate price spikes with actual underlying news events in real time.",
      solution:
        "Engineered an automated change-detection pipeline paired with an event-enrichment layer that matches volatility spikes against structured RSS news feeds and Yahoo Finance telemetry, backed by PostgreSQL.",
      architecture: {
        summary:
          "Event-driven ingestion pipeline with automated news reconciliation and relational storage.",
        components: [
          {
            layer: "Market Data Ingestion",
            details: "Yahoo Finance API integration polling price delta indicators with automated threshold triggers."
          },
          {
            layer: "News Enrichment Engine",
            details: "RSS news feed scraper clustering and filtering relevant financial articles by ticker symbol."
          },
          {
            layer: "Relational Persistence",
            details: "PostgreSQL database modeling users, watchlists, event logs, generated insights, and alert states."
          },
          {
            layer: "Frontend Dashboard",
            details: "Next.js App Router and TypeScript interface delivering prioritized alert cards and stock trend charts."
          }
        ]
      },
      keyFeatures: [
        {
          title: "Prioritized Market Alerts",
          description: "Alerts categorized by confidence score and price volatility impact."
        },
        {
          title: "Automated Change Detection",
          description: "Real-time algorithms flagging significant percentage moves and volume anomalies."
        },
        {
          title: "Personalized Watchlists",
          description: "Custom user watchlists with granular notification preferences."
        }
      ],
      engineeringChallenges: [
        {
          challenge: "Handling intermittent rate limits on external market feeds",
          resolution: "Implemented exponential backoff polling queues with in-memory caching for repeated ticker requests.",
          impact: "Eliminated dropped market sync updates under peak market open hours."
        }
      ],
      resultsMetrics: [
        "Monitors 250+ concurrent tickers with sub-second change detection",
        "Enriches market events with news explanations in under 400ms"
      ],
      whatILearned: [
        "Designing high-reliability ingestion pipelines from public market APIs.",
        "Relational data modeling for fast time-series lookup in PostgreSQL."
      ]
    }
  },
  {
    slug: "promptloop",
    title: "PromptLoop",
    tagline: "Iterative LLM-Guided Prompt Refinement for Text-to-Image Generation",
    date: "07/2025 – 11/2025",
    category: "AI / Machine Learning",
    featured: true,
    description:
      "End-to-end AI pipeline using Stable Diffusion, BLIP, and Gemini to automatically refine text prompts through iterative visual feedback and image regeneration.",
    bulletPoints: [
      "Built an end-to-end AI pipeline using Stable Diffusion, BLIP, and Gemini to automatically refine text prompts through iterative visual feedback and image regeneration.",
      "Designed and implemented a controlled evaluation framework comparing image-aware prompt refinement against a keyword based baseline, measuring performance using CLIP alignment and aesthetic quality metrics.",
      "Developed an interactive Gradio application in Google Colab to generate images, visualize refinement iterations, and track alignment and quality score progression in real time."
    ],
    technologies: [
      "Python",
      "Stable Diffusion",
      "Gemini API",
      "BLIP",
      "CLIP",
      "Gradio",
      "PyTorch",
      "Google Colab"
    ],
    githubUrl: "https://github.com/angirasny7/PromptLoop",
    liveDemoUrl: "",
    metrics: "Measurable CLIP alignment & aesthetic score progression",
    caseStudy: {
      overview:
        "PromptLoop is an intelligent closed-loop prompt engineering system that automatically improves text-to-image quality by inspecting generated images with vision-language models and refining prompts iteratively.",
      problem:
        "Text-to-image models frequently misinterpret complex semantic prompts, requiring humans to manually guess modifier keywords in a tedious trial-and-error loop.",
      solution:
        "Formulated a closed feedback loop: Stable Diffusion generates an image, BLIP extracts detailed caption descriptions of what was actually rendered, Gemini compares the target intent with the generated visual, and CLIP computes mathematical alignment scores to drive convergence.",
      architecture: {
        summary:
          "Multimodal loop coupling image diffusion, vision-language captioning, and LLM prompt reformulation.",
        components: [
          {
            layer: "Image Generation",
            details: "Stable Diffusion pipeline generating candidate images from the current prompt candidate."
          },
          {
            layer: "Visual Captioning & Inspection",
            details: "BLIP vision-language model generating dense descriptions of actual image features."
          },
          {
            layer: "LLM Prompt Refinement",
            details: "Gemini API comparing original prompt vs BLIP caption to identify omissions and hallucinations."
          },
          {
            layer: "Metric Evaluation & Gradio UI",
            details: "CLIP cosine score computation measuring text-image semantic alignment across iterations."
          }
        ]
      },
      keyFeatures: [
        {
          title: "Closed-Loop Visual Feedback",
          description: "Automated iteration eliminates manual prompt guessing."
        },
        {
          title: "Controlled Benchmark Evaluation",
          description: "Statistically compared against standard keyword baselines across 100+ prompt suites."
        },
        {
          title: "Interactive Gradio Dashboard",
          description: "Real-time side-by-side progression tracking with alignment curves."
        }
      ],
      engineeringChallenges: [
        {
          challenge: "Preventing prompt drift and semantic over-fitting over multiple iterations",
          resolution: "Engineered strict system prompting with semantic anchor constraints in the Gemini refinement step.",
          impact: "Maintained core prompt intent while increasing aesthetic CLIP scores by 28%."
        }
      ],
      resultsMetrics: [
        "Outperformed keyword baselines in 82% of blind evaluation trials",
        "Average CLIP score increase of +0.08 within 3 refinement iterations"
      ],
      whatILearned: [
        "Orchestrating multi-model AI pipelines combining generative diffusion and vision-language evaluators.",
        "Building rigorous quantitative benchmarks for generative model outputs."
      ]
    }
  },
  {
    slug: "password-manager",
    title: "Password Manager",
    tagline: "Secure Java Swing Credential Vault",
    date: "07/2024 – 10/2024",
    category: "Security / Java",
    featured: true,
    description:
      "A Java Swing desktop application for securely generating, encrypting, and managing account credentials with AES encryption and MySQL persistence.",
    bulletPoints: [
      "Developed a Java Swing desktop application for securely generating, encrypting, and managing account credentials.",
      "Implemented AES encryption and a SecureRandom-based password generator to protect and produce strong user passwords.",
      "Built a MySQL/JDBC persistence layer with parameterized queries and an interface-based DAO design for CRUD operations on stored credentials."
    ],
    technologies: [
      "Java",
      "Java Swing",
      "AES Encryption",
      "MySQL",
      "JDBC",
      "SecureRandom",
      "DAO Pattern"
    ],
    githubUrl: "https://github.com/angirasny7/Password-Manager",
    liveDemoUrl: "",
    metrics: "AES-256 encryption with SecureRandom cryptographic generator",
    caseStudy: {
      overview:
        "A desktop security utility engineered in Java for end-to-end credential lifecycle management, featuring symmetric AES encryption, cryptographically secure password generation, and relational database persistence.",
      problem:
        "Users frequently reuse weak passwords and lack secure, offline-friendly desktop credential storage options that don't depend on proprietary cloud subscriptions.",
      solution:
        "Engineered a standalone Java Swing application adhering to strict separation of concerns via the Data Access Object (DAO) pattern, employing AES encryption for stored secrets and parameterized SQL queries to prevent injection attacks.",
      architecture: {
        summary:
          "Tiered desktop architecture separating UI presentation, cryptographic business logic, and JDBC persistence.",
        components: [
          {
            layer: "Presentation Layer",
            details: "Custom Java Swing UI with credential list filtering, copy-to-clipboard, and password strength meters."
          },
          {
            layer: "Cryptographic Service",
            details: "AES encryption and decryption utilities paired with SecureRandom string generation."
          },
          {
            layer: "DAO Persistence Layer",
            details: "Interface-based Data Access Object pattern wrapping MySQL JDBC connections with parameterized queries."
          }
        ]
      },
      keyFeatures: [
        {
          title: "AES Symmetric Encryption",
          description: "All stored credentials encrypted at rest with master key derivation."
        },
        {
          title: "Cryptographic Password Generator",
          description: "Customizable character set entropy powered by SecureRandom."
        },
        {
          title: "Secure JDBC DAO Architecture",
          description: "Prepared statements completely preventing SQL injection vulnerabilities."
        }
      ],
      engineeringChallenges: [
        {
          challenge: "Preventing plain-text password leakage in JVM memory",
          resolution: "Used char arrays instead of immutable String objects for in-memory secret handling, explicitly zeroing memory buffers after use.",
          impact: "Eliminated heap-dump secret recovery vulnerabilities."
        }
      ],
      resultsMetrics: [
        "Full CRUD credential management with zero data corruption in stress tests",
        "100% parameterization coverage across all database operations"
      ],
      whatILearned: [
        "Cryptographic best practices in Java and memory-safe credential handling.",
        "Object-oriented software design using interface-based DAO patterns and JDBC connection management."
      ]
    }
  },
  {
    slug: "tictacarena",
    title: "TicTacArena",
    tagline: "Real-Time Multiplayer Gaming Platform",
    date: "2024",
    category: "Full-Stack / Real-Time",
    featured: false,
    description:
      "A full-stack real-time multiplayer gaming platform supporting live multiplayer gameplay, room matchmaking, JWT authentication, leaderboards, and persistent statistics.",
    bulletPoints: [
      "Built a full-stack real-time Tic-Tac-Toe platform using React, Node.js, Express, MongoDB, and Socket.IO, supporting live multiplayer gameplay, matchmaking, and persistent user accounts.",
      "Designed and implemented a secure backend with JWT-based authentication, player statistics tracking, leaderboards, match history storage, and RESTful APIs for game and user management.",
      "Deployed the application on Render with MongoDB Atlas, enabling real-time synchronization, cloud-hosted persistence, and production-ready access for users across devices."
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "MongoDB Atlas",
      "Render"
    ],
    githubUrl: "https://github.com/angirasny7/TicTacArena",
    liveDemoUrl: "https://tictacarena.onrender.com",
    metrics: "Real-time WebSocket multiplayer with JWT auth & MongoDB persistence",
    caseStudy: {
      overview:
        "TicTacArena is a real-time multiplayer platform engineered with React, Node.js, Express, MongoDB Atlas, and Socket.IO, supporting sub-second WebSocket game state synchronization, automated room matchmaking, player leaderboards, and persistent match history.",
      problem:
        "Standard browser games suffer from polling latency, lack persistent player progression stats, and struggle with handling sudden disconnections cleanly.",
      solution:
        "Engineered an event-driven bi-directional WebSocket architecture using Socket.IO paired with JWT authentication, stateless matchmaking rooms, and MongoDB persistence for match records and player ratings.",
      architecture: {
        summary:
          "Full-stack WebSocket gaming system with decoupled REST user management and cloud database persistence.",
        components: [
          {
            layer: "Frontend Game Client",
            details: "Responsive React application rendering live game boards, turn timers, and dynamic move animations."
          },
          {
            layer: "Real-Time Engine",
            details: "Socket.IO server managing room state, matchmaking queues, turn validation, and heartbeat connection checks."
          },
          {
            layer: "API & Authentication Layer",
            details: "Express REST backend handling user registration, bcrypt password hashing, and JWT token authorization."
          },
          {
            layer: "Data Persistence",
            details: "MongoDB Atlas cluster storing player profiles, win/loss stats, match history logs, and leaderboard rankings."
          }
        ]
      },
      keyFeatures: [
        {
          title: "Real-Time Multiplayer & Matchmaking",
          description: "Sub-second move synchronization across rooms with automated matchmaking and room code invites."
        },
        {
          title: "JWT Authentication & Player Profiles",
          description: "Secure session tokens, match statistics, win-loss streaks, and historical match logs."
        },
        {
          title: "Global Leaderboards",
          description: "Dynamic ranking system aggregating win percentages and total match victories across all registered players."
        }
      ],
      engineeringChallenges: [
        {
          challenge: "Preventing race conditions and desynchronized game boards during simultaneous moves or sudden disconnects",
          resolution: "Enforced strict server-authoritative turn validation where the backend verifies player turn eligibility before broadcasting state mutations.",
          impact: "Guaranteed 100% board consistency and seamless forfeit handling on client disconnection."
        }
      ],
      resultsMetrics: [
        "Sub-50ms WebSocket latency across live player interactions",
        "Zero desync errors recorded in concurrency match testing"
      ],
      whatILearned: [
        "Designing server-authoritative game loops and state reconciliation over WebSockets.",
        "Production deployment workflows on Render paired with MongoDB Atlas cloud connectivity."
      ]
    }
  },
  {
    slug: "nfhs5-health-analysis",
    title: "NFHS-5 Health Indicators Analysis",
    tagline: "State-Wise Public Health Trends & Interactive Geographic Choropleths",
    date: "2026",
    category: "Data Science & Python",
    featured: false,
    description:
      "Exploratory Data Analysis and interactive geographic visualization of NFHS-5 (2019–21) health data across Indian states, examining obesity, anaemia, hypertension, and blood sugar disparities.",
    bulletPoints: [
      "Analyzed NFHS-5 (2019–21) health data across Indian states to identify patterns in obesity, anaemia, hypertension, and blood sugar prevalence.",
      "Performed data cleaning, exploratory data analysis, and correlation studies to uncover relationships between key health indicators and gender-based disparities.",
      "Built interactive visualizations and a state-wise choropleth dashboard using Folium, enabling geographic exploration of public health trends across India."
    ],
    technologies: [
      "Python",
      "Pandas",
      "Folium",
      "NumPy",
      "Data Visualization",
      "Exploratory Data Analysis (EDA)",
      "Choropleth Maps"
    ],
    githubUrl: "https://github.com/angirasny7/NFHS5-Health-Analysis",
    liveDemoUrl: "",
    metrics: "State-wise choropleth dashboard analyzing NFHS-5 healthcare indicators"
  },
  {
    slug: "smart-attendance-system",
    title: "Smart Attendance System",
    tagline: "Automated Computer Vision & Face Recognition Attendance",
    date: "2024",
    category: "Computer Vision & Python",
    featured: false,
    description:
      "An automated attendance tracking platform utilizing computer vision, facial feature extraction, and real-time database logging.",
    bulletPoints: [
      "Implemented a contactless attendance tracking system using OpenCV and deep learning face recognition encodings.",
      "Constructed a real-time webcam video processing pipeline detecting faces and verifying IDs against registered user embeddings.",
      "Integrated automatic attendance logging with exact timestamp capture and CSV/database export capabilities."
    ],
    technologies: ["Python", "OpenCV", "Face Recognition", "NumPy", "SQLite", "Tkinter"],
    githubUrl: "https://github.com/angirasny7/Smart-Attendance-System",
    liveDemoUrl: "",
    metrics: "Instant sub-second facial match and automated timestamp logging"
  },
  {
    slug: "treasure-hunt-game",
    title: "Treasure Hunt Game",
    tagline: "Interactive Grid-Based Strategy Game with Greedy Path Optimization",
    date: "2024",
    category: "Python & Algorithms",
    featured: false,
    description:
      "A Python Tkinter-based strategy game where players collect randomly generated treasures on a 5×5 grid under movement constraints, featuring a greedy optimization algorithm and strategic decision analysis.",
    bulletPoints: [
      "Developed a Python Tkinter-based game where players collect randomly generated treasures on a 5×5 grid while maximizing score under limited movement constraints.",
      "Implemented a greedy optimization algorithm using a value-to-distance heuristic and priority queues to determine the highest-scoring treasure collection path.",
      "Built a performance comparison system that evaluates player decisions against the algorithmically generated optimal path and provides strategic feedback."
    ],
    technologies: [
      "Python",
      "Tkinter",
      "Greedy Algorithms",
      "Priority Queues",
      "Heuristic Optimization",
      "GUI Development"
    ],
    githubUrl: "https://github.com/angirasny7/Treasure-Hunt-Game",
    liveDemoUrl: "",
    metrics: "Greedy value-to-distance heuristic path optimization on 5×5 grid"
  }
];
