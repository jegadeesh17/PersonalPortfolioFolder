import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  // ─── RESUME FEATURED FLAGSHIP SYSTEMS (1-3) ───
  {
    id: 'financial-copilot',
    title: "Financial Intelligence Copilot",
    featured: true,
    category: "Generative AI & RAG",
    tagline: "Enterprise Dual-Vertical RAG · BFSI Regulatory Compliance & Hybrid BM25+Dense",
    description: "Architected an enterprise dual-vertical RAG platform over RBI/SEBI regulatory circulars and BFSI annual filings. Engineered hybrid retrieval combining dense vector embeddings (Sentence Transformers + ChromaDB) with BM25 sparse keyword ranking via Reciprocal Rank Fusion (RRF), achieving 70% hit rate and 0.550 MRR with Portkey LLM gateway failover.",
    bullets: [
      "Chunked 3,459 semantic segments via PyMuPDF with paragraph-aware splitting (800-char / 100-char overlap)",
      "Engineered hybrid search combining dense MiniLM embeddings and BM25 via Reciprocal Rank Fusion (RRF), lifting MRR to 0.550",
      "Exposed production FastAPI endpoints with confidence gating, Pydantic-Settings, and multi-stage Docker; validated by 88 automated pytest tests"
    ],
    tags: ["Hybrid RAG", "BM25", "ChromaDB", "FastAPI", "Docker", "Pydantic-Settings", "PyMuPDF"],
    metrics: [
      { label: "Retrieval MRR", value: "0.550" },
      { label: "Top-5 Hit Rate", value: "70.0%" },
      { label: "Pytest Suite", value: "88 Passed" }
    ],
    image: "/projects/financial-copilot.png",
    fallbackIcon: "📊",
    github: "https://github.com/jegadeesh17/FinancialIntelligenceCopilot",
    live: "https://financial-copilot-api-242711953247.asia-south1.run.app/app",
    docs: "https://financial-copilot-api-242711953247.asia-south1.run.app/docs",
    status: "Live on GCP Cloud Run",
    architecture: {
      overview: "Dual-domain PDF ingestion pipeline extracting page-level metadata, generating dense vector embeddings via all-MiniLM-L6-v2 + BM25 sparse index, and providing auditable answers with exact page citations and confidence scoring.",
      pipeline: ["PDF Ingestion (PyMuPDF)", "Paragraph-aware Chunking", "Hybrid BM25 + Dense Retrieval", "ChromaDB Vector Store", "Portkey LLM Gateway Failover", "Streamlit UI + FastAPI REST API"],
      dataset: "Curated BFSI regulatory PDFs (RBI KYC, SEBI circulars, HDFC quarterly & annual filings)."
    }
  },
  {
    id: 'goalos',
    title: "GoalOS — Personal AI Executive Life Operating System",
    featured: true,
    category: "Generative AI & RAG",
    tagline: "Local-First Agent Runtime · Cognitive Hybrid Memory & Tool Calling",
    description: "Architected a local-first agentic life operating system with a React 18 + Vite frontend and FastAPI backend. Engineered a 5-factor composite memory retrieval engine combining SQLite FTS5 lexical search with ChromaDB cosine similarity, recency decay, and importance weighting, achieving 100% tool-calling accuracy on benchmark.",
    bullets: [
      "Engineered 5-factor composite memory retrieval engine (SQLite FTS5 full-text search, ChromaDB vector similarity, recency decay, importance weighting)",
      "Implemented autonomous agentic coordinator supporting structured tool calling with 100% benchmark verification (7/7 tests)",
      "Dogfooded daily over 2-month personal journal; demo seeded with curated 14-day authentic slice; 130 pytests passing"
    ],
    tags: ["Agent Runtime", "Tool Calling", "SQLite FTS5", "FastAPI", "React 18", "ChromaDB", "Docker"],
    metrics: [
      { label: "Tool-Calling Accuracy", value: "100%" },
      { label: "Memory Retrieval", value: "5-Factor Composite" },
      { label: "Pytest Suite", value: "130 Passed" }
    ],
    image: "/projects/goalos.png",
    fallbackIcon: "🧠",
    github: "https://github.com/jegadeesh17/GoalOS",
    live: "https://goalos-api-242711953247.asia-south1.run.app/app",
    docs: "https://goalos-api-242711953247.asia-south1.run.app/docs",
    status: "Live on GCP Cloud Run",
    architecture: {
      overview: "Local-first agent runtime integrating cognitive long-term memory, SQLite FTS5 lexical indexing, and multi-turn tool-calling LLM workflows.",
      pipeline: ["React 18 + Vite UI", "FastAPI Service Gateway", "5-Factor Cognitive Memory Engine", "SQLite FTS5 + ChromaDB", "Tool Calling Coordinator", "Telemetry & Analytics"],
      dataset: "Structured multi-horizon personal goal hierarchy and journal vector database."
    }
  },
  {
    id: 'superkalam-upsc',
    title: "SuperKalam — Agentic UPSC Mains Evaluator Platform",
    featured: true,
    category: "Generative AI & RAG",
    tagline: "Multi-Agent UPSC Evaluator · Indic Mentorship & Schema-Validated Scoring",
    description: "Engineered an agentic UPSC Mains answer evaluation and multilingual mentorship platform. Designed a multi-agent pipeline (Retrieval → Evaluator → Feedback) scoring student answers against 40 official Civil Services previous year questions, with strict Pydantic v2 JSON contracts and native Indic script feedback in Hindi and Tamil.",
    bullets: [
      "Designed multi-agent evaluation chain (Retrieval → Evaluator → Multilingual Feedback) with ChromaDB semantic search",
      "Enforced strict Pydantic v2 JSON schema contracts (EvaluatorOutput) on all LLM evaluator output, with automatic retry-and-repair on malformed responses and HTTP 429 circuit breaking",
      "Generated native-script feedback in Hindi and Tamil; verified by 27 pytest tests"
    ],
    tags: ["Multi-Agent System", "Pydantic v2 Contracts", "FastAPI", "ChromaDB", "SQLite", "Indic NLP (Hi/Ta)", "Docker"],
    metrics: [
      { label: "Schema Validation", value: "100% Pydantic v2" },
      { label: "Fallback Handling", value: "429 Circuit Breaker" },
      { label: "Pytest Suite", value: "27 Passed" }
    ],
    image: "/projects/superkalam.png",
    fallbackIcon: "📚",
    github: "https://github.com/jegadeesh17/SuperKalamProject",
    live: "https://superkalam-api-242711953247.asia-south1.run.app/app",
    docs: "https://superkalam-api-242711953247.asia-south1.run.app/docs",
    status: "Live on GCP Cloud Run",
    architecture: {
      overview: "Autonomous multi-agent evaluation pipeline with semantic PYQ retrieval, rubric-grounded scoring, and localized Indic mentor feedback.",
      pipeline: ["PYQ Retrieval (ChromaDB)", "Student Answer Submission", "Evaluator Agent with Schema Lock", "Indic Feedback Agent (EN/HI/TA)", "FastAPI REST API", "SQLite Attempt Store"],
      dataset: "UPSC Mains Previous Year Questions repository with official syllabus evaluation rubrics."
    }
  },
  {
    id: 'customer-support-analytics',
    title: "Autonomous Customer Support Analytics & Agentic Triage Engine",
    featured: true,
    category: "Machine Learning & NLP",
    tagline: "Multi-Task Classification & Agentic Escalation Triage Engine",
    description: "Production multi-task customer support intelligence platform with automated agentic escalation. Deployed a two-tier triage system achieving 82.1% priority accuracy and R² = 0.719 resolution-time regression with zero data leakage, coupled with an autonomous agentic escalation tier with Pydantic contracts and FastAPI microservice.",
    bullets: [
      "Engineered multi-task ML pipelines predicting priority, resolution time, and customer satisfaction (82.1% priority accuracy, R² = 0.719 resolution regression, zero data leakage)",
      "Built autonomous agentic triage engine with deterministic Pydantic schema validation and sentiment-based escalation routing",
      "Exposed FastAPI REST API microservice with containerized Docker deployment; validated by 17 automated pytest test cases"
    ],
    tags: ["Agentic Triage", "FastAPI", "scikit-learn", "Pydantic", "Docker", "pytest", "Multi-Task ML"],
    metrics: [
      { label: "Triage Accuracy", value: "82.1%" },
      { label: "Resolution Reg.", value: "R² = 0.719" },
      { label: "Pytest Suite", value: "17 Passed" }
    ],
    image: "/projects/support-analytics.png",
    fallbackIcon: "🎧",
    github: "https://github.com/jegadeesh17/customer-support-ticket-analytics",
    live: "https://support-ops-api-242711953247.asia-south1.run.app/app",
    docs: "https://support-ops-api-242711953247.asia-south1.run.app/docs",
    status: "Live on GCP Cloud Run",
    architecture: {
      overview: "Autonomous customer support platform combining multi-task machine learning inference with an agentic escalation tier and deterministic JSON contracts.",
      pipeline: ["Ticket Ingestion", "Text Preprocessing & TF-IDF", "Multi-Task ML Inference", "Agentic Escalation Router", "Pydantic Schema Validation", "FastAPI REST API"],
      dataset: "Customer support ticket interactions annotated with priority, sentiment, resolution time, and satisfaction."
    }
  },
  {
    id: 'marketing-campaign',
    title: "Multi-Brand Marketing Campaign Performance Analysis",
    featured: false,
    category: "Machine Learning & NLP",
    tagline: "Predictive Marketing Analytics · XGBoost Revenue & Profitability Engine",
    description: "End-to-end machine learning platform analyzing multi-brand digital marketing campaign streams (Nykaa, Purplle, Tira). Engineered cyclical time encodings, multi-channel CTR/CPL ratios, and deployed XGBoost models achieving R² = 0.72 revenue forecasting and F1 = 0.97 profitability classification.",
    bullets: [
      "Engineered leakage-safe feature pipelines with cyclical date transforms and brand performance ratios",
      "Trained XGBoost models achieving R² = 0.72 revenue prediction and weighted F1 = 0.97 for profitability",
      "Integrated PostgreSQL data warehouse, automated EDA generation, and interactive Streamlit forecasting simulator"
    ],
    tags: ["XGBoost", "PostgreSQL", "FastAPI", "Streamlit", "Feature Engineering", "scikit-learn"],
    metrics: [
      { label: "Profitability F1", value: "0.97" },
      { label: "Revenue Reg.", value: "R² = 0.72" },
      { label: "Data Warehouse", value: "PostgreSQL" }
    ],
    image: "/projects/marketing-campaign.png",
    fallbackIcon: "📈",
    github: "https://github.com/jegadeesh17/Marketing-Campaign-Performance-Analysis",
    live: null,
    status: "Complete Pipeline",
    architecture: {
      overview: "Predictive marketing performance engine combining data warehouse ETL, advanced tabular feature engineering, and dual regression/classification inference.",
      pipeline: ["Multi-Brand Data Ingestion", "PostgreSQL Staging", "Cyclical & Ratio Feature Engineering", "XGBoost Model Ensembles", "Streamlit ROI Simulator", "FastAPI Prediction Service"],
      dataset: "Multi-channel advertising campaign data across e-commerce beauty brands with impressions, clicks, spend, and conversion tracking."
    }
  },
  {
    id: 'deepfake-detection',
    title: "Deepfake Face Detection & Verification System",
    featured: false,
    category: "Computer Vision & DL",
    tagline: "Binary CNN Image Classifier · AI-Generated Face Detection & Grad-CAM XAI",
    description: "Binary image classification and explainability system distinguishing real human faces from AI-generated deepfakes using EfficientNet-B0 and ResNet transfer learning, with integrated Grad-CAM visual heatmaps for trustworthy forensic verification.",
    bullets: [
      "Evaluated EfficientNet-B0 and ResNet-50 architectures on high-resolution facial datasets",
      "Integrated Grad-CAM heatmaps highlighting artifact boundaries around eyes, hair, and facial textures",
      "Built Streamlit inspection dashboard for single-image and batch media forensic analysis"
    ],
    tags: ["Computer Vision", "Deep Learning", "Grad-CAM", "PyTorch", "Streamlit", "EfficientNet"],
    metrics: [
      { label: "Evaluation", value: "ROC-AUC Optimized" },
      { label: "Explainability", value: "Grad-CAM Saliency" },
      { label: "Inference", value: "CPU / GPU Ready" }
    ],
    image: "/projects/deepfake-detection.png",
    fallbackIcon: "👁️",
    github: "https://github.com/jegadeesh17/DeepfakeDetectionSystem",
    live: null,
    status: "Model + Demo UI",
    architecture: {
      overview: "Deepfake forensic analysis platform using transfer-learned CNNs to detect synthetic generative artifacts with visual explainability.",
      pipeline: ["Face Detection & Cropping", "Image Normalization", "CNN Feature Extraction", "Binary Sigmoid Classifier", "Grad-CAM Saliency Map Overlay", "Streamlit Forensic UI"],
      dataset: "Benchmark dataset of paired authentic and GAN/diffusion-generated human facial portraits."
    }
  },
  {
    id: 'clinical-trial-classifier',
    title: "Clinical Trial Disease Category Classification",
    featured: false,
    category: "Machine Learning & NLP",
    tagline: "Healthcare NLP · 8-Class Therapeutic Category Classifier with Explainability",
    description: "High-precision NLP classification pipeline categorizing 60,000+ medical clinical trial protocol summaries across 8 major therapeutic categories (Covid-19, Breast Cancer, Type 2 Diabetes, etc.) using TF-IDF (15,000 features, uni+bi grams) and class-balanced Logistic Regression.",
    bullets: [
      "Processed 60,000+ clinical trial protocol texts with medical NLTK tokenization and stop-word filtering",
      "Extracted 15,000 unigram/bigram TF-IDF features and achieved ~95% classification accuracy",
      "Developed interactive Streamlit dashboard displaying top predictive term coefficients per disease"
    ],
    tags: ["NLP", "scikit-learn", "TF-IDF", "Explainable AI", "Streamlit", "NLTK"],
    metrics: [
      { label: "Accuracy", value: "~95%" },
      { label: "Corpus Size", value: "60K+ Protocols" },
      { label: "Categories", value: "8 Disease Classes" }
    ],
    image: "/projects/clinical-trial.png",
    fallbackIcon: "🏥",
    github: "https://github.com/jegadeesh17/Clinical-Trial-Disease-Classification",
    live: null,
    status: "Complete Pipeline",
    architecture: {
      overview: "Biomedical text classification system automating clinical study categorization with interpretable feature importances.",
      pipeline: ["Protocol Text Preprocessing", "N-Gram TF-IDF Vectorization", "Class-Balanced Logistic Regression", "Feature Importance Extraction", "Streamlit Exploration Dashboard"],
      dataset: "60,000+ ClinicalTrials.gov protocol summaries labeled across 8 therapeutic disease categories."
    }
  },
  {
    id: 'forest-fire-intelligence',
    title: "Geospatial Forest Fire Risk Intelligence",
    featured: false,
    category: "Data Engineering & Analytics",
    tagline: "Satellite Remote Sensing · MODIS Wildfire Clustering & Hazard Mapping",
    description: "Geospatial wildfire hazard intelligence system utilizing NASA MODIS satellite thermal data across India. Features unsupervised KMeans hazard clustering, XGBoost fire intensity classification, Facebook Prophet seasonal time-series forecasting, and interactive Folium geospatial heatmaps.",
    bullets: [
      "Ingested and preprocessed NASA MODIS satellite thermal anomaly data with geospatial coordinate mapping",
      "Trained XGBoost fire severity models and clustered regional risk zones using KMeans",
      "Created interactive Folium geospatial mapping dashboard with historical seasonal Prophet forecasts"
    ],
    tags: ["Geospatial AI", "NASA MODIS", "XGBoost", "Folium", "Prophet", "KMeans", "Streamlit"],
    metrics: [
      { label: "Data Source", value: "NASA MODIS" },
      { label: "Clustering", value: "KMeans Hazard" },
      { label: "Visualization", value: "Folium GeoJSON" }
    ],
    image: "/projects/forest-fire.png",
    fallbackIcon: "🔥",
    github: "https://github.com/jegadeesh17/Forest-fire-risk-intelligence-modis",
    live: null,
    status: "Interactive Dashboard",
    architecture: {
      overview: "Spatial-temporal wildfire monitoring system integrating remote sensing satellite feeds with machine learning and interactive cartography.",
      pipeline: ["MODIS Satellite CSV Ingestion", "Coordinate & Radiance Preprocessing", "KMeans Spatial Clustering", "XGBoost Severity Prediction", "Prophet Trend Forecasting", "Folium Leaflet Map Rendering"],
      dataset: "NASA MODIS active fire and thermal anomaly satellite observation records across India."
    }
  },
  {
    id: 'rice-leaf-disease',
    title: "AI-Powered Rice Leaf Disease Detection System",
    featured: false,
    category: "Computer Vision & DL",
    tagline: "4-Class CNN Classifier · Precision Agriculture & Explainable AI",
    description: "Built a 4-class CNN image classifier using EfficientNetB0 transfer learning (Keras 3 + PyTorch) on the Mendeley rice leaf dataset, achieving 98.66% test accuracy across Bacterial Blight, Rice Blast, Brown Spot, and Tungro classes. Integrated Grad-CAM explainability to highlight disease-triggering leaf regions.",
    bullets: [
      "Built 4-class CNN image classifier using EfficientNetB0 transfer learning achieving 98.66% test accuracy",
      "Integrated Grad-CAM (Gradient-weighted Class Activation Mapping) to highlight disease-triggering leaf regions",
      "Deployed FastAPI inference API (POST /predict) to GCP Cloud Run, published to Hugging Face Hub, and automated CI/CD via GitHub Actions"
    ],
    tags: ["Computer Vision", "EfficientNetB0", "PyTorch", "Grad-CAM", "FastAPI", "GCP Cloud Run", "Hugging Face", "GitHub Actions"],
    metrics: [
      { label: "Test Accuracy", value: "98.66%" },
      { label: "Disease Classes", value: "4 Classes" },
      { label: "Inference API", value: "GCP Cloud Run" }
    ],
    image: "/projects/rice-disease.png",
    fallbackIcon: "🌾",
    github: "https://github.com/jegadeesh17/AI-powered-rice-leaf-detection-system",
    live: "https://rice-leaf-api-5obmkzpuaa-el.a.run.app/",
    status: "Live on GCP Cloud Run",
    architecture: {
      overview: "Deep learning computer vision system leveraging EfficientNetB0 transfer learning for multi-class foliar pathology diagnosis, combined with Grad-CAM saliency heatmaps for agronomic explainability.",
      pipeline: ["Deterministic Image Preprocessing (224x224)", "EfficientNetB0 Feature Backbone", "Fine-Tuned Dense Classification Head", "Grad-CAM Saliency Generator", "FastAPI POST /predict Endpoint", "Automated GitHub Actions CI/CD"],
      dataset: "Mendeley Rice Leaf Disease Image Dataset (Bacterial Blight, Rice Blast, Brown Spot, Tungro)."
    }
  },
  {
    id: 'covid-analytics',
    title: "Global COVID-19 Predictive Analytics & Trend Forecasting",
    featured: false,
    category: "Data Engineering & Analytics",
    tagline: "Epidemiological Data Science · Time-Series ML & Multi-Country Risk Forecasting",
    description: "Epidemiological analytics platform engineering longitudinal time-series features, mobility indices, and ensemble regression models (XGBoost, Random Forest) with dynamic Plotly visualizations for multi-country pandemic risk forecasting.",
    bullets: [
      "Engineered rolling statistical windows, lag features, and acceleration rates across global time-series data",
      "Trained multi-country forecasting models evaluating transmission trends and hospitalization trajectories",
      "Constructed multi-page analytical dashboard with interactive Plotly epidemiological charts"
    ],
    tags: ["Time-Series ML", "XGBoost", "Plotly", "Pandas", "Streamlit", "scikit-learn"],
    metrics: [
      { label: "Scope", value: "Global Countries" },
      { label: "Features", value: "Lag & Rolling Stats" },
      { label: "Charts", value: "Interactive Plotly" }
    ],
    image: "/projects/covid-analytics.png",
    fallbackIcon: "🌐",
    github: "https://github.com/jegadeesh17/COVID19-trend-forecasting-and-risk-analytics",
    live: null,
    status: "Complete Analytics",
    architecture: {
      overview: "Comprehensive public health forecasting pipeline transforming raw epidemiological metrics into actionable predictive trends.",
      pipeline: ["Global Time-Series ETL", "Lag & Rolling Feature Extraction", "Ensemble Regression Models", "Plotly Visualizations", "Streamlit Analytics Portal"],
      dataset: "Our World in Data (OWID) and Johns Hopkins global epidemiological records."
    }
  },
  {
    id: 'smartphone-addiction',
    title: "Smartphone Addiction Risk Prediction (Kaggle S6E8)",
    featured: false,
    category: "Machine Learning & NLP",
    tagline: "Competitive Machine Learning · Behavioral Analytics & Ensembles",
    description: "End-to-end competitive machine learning solution for Kaggle Playground Series (S6E8) predicting smartphone addiction probabilities from user behavioral patterns, screen time allocations, and application usage demographics.",
    bullets: [
      "Engineered behavioral ratio features (social vs productivity time, night usage intensity)",
      "Trained optimized LightGBM and CatBoost gradient boosted trees with 5-fold stratified cross-validation",
      "Optimized probability calibration for maximum ROC-AUC and holdout classification accuracy"
    ],
    tags: ["Kaggle ML", "LightGBM", "CatBoost", "Hyperparameter Tuning", "scikit-learn", "Optuna"],
    metrics: [
      { label: "Validation", value: "5-Fold Stratified" },
      { label: "Optimization", value: "Optuna Tuned" },
      { label: "Metric", value: "ROC-AUC Optimized" }
    ],
    image: "/projects/smartphone-addiction.png",
    fallbackIcon: "📱",
    github: "https://github.com/jegadeesh17/Smartphone-Addiction-Prediction",
    live: null,
    status: "Competitive ML",
    architecture: {
      overview: "High-performance tabular modeling pipeline optimized for competitive classification accuracy and discrimination ranking.",
      pipeline: ["Exploratory Behavioral Profiling", "Feature Transformation & Imputation", "Optuna Hyperparameter Search", "LightGBM / CatBoost Ensembling", "Probability Calibration"],
      dataset: "Kaggle Playground Series S6E8 Smartphone Addiction Dataset."
    }
  },
  {
    id: 'mobile-segmentation',
    title: "Mobile Product Segmentation & Recommendation Engine",
    featured: false,
    category: "Data Engineering & Analytics",
    tagline: "Unsupervised Clustering · Persona Profiling & Cosine Similarity Matcher",
    description: "Consumer electronics segmentation and recommendation system grouping smartphone hardware specifications into distinct market personas via KMeans clustering and pairing with cosine-similarity product recommendation.",
    bullets: [
      "Engineered normalized specification vectors across pricing, battery, camera, and RAM performance",
      "Discovered optimal 4-cluster market segmentation using Elbow method and Silhouette analysis",
      "Implemented nearest-neighbor cosine similarity engine to recommend comparable alternate devices"
    ],
    tags: ["Clustering", "KMeans", "Recommender Systems", "Streamlit", "scikit-learn", "Pandas"],
    metrics: [
      { label: "Clusters", value: "4 Distinct Segments" },
      { label: "Engine", value: "Cosine Similarity" },
      { label: "Interface", value: "Interactive Streamlit" }
    ],
    image: "/projects/mobile-segmentation.png",
    fallbackIcon: "🛍️",
    github: "https://github.com/jegadeesh17/Mobile-Product-Segmentation-and-Recommendation",
    live: null,
    status: "Recommender Engine",
    architecture: {
      overview: "Unsupervised clustering and content-based recommendation platform assisting product discovery.",
      pipeline: ["Hardware Spec Cleaning", "MinMax Feature Scaling", "KMeans Persona Clustering", "Cosine Similarity Matrix", "Streamlit Explorer UI"],
      dataset: "Smartphone hardware and market pricing catalogue across top global manufacturers."
    }
  },
  {
    id: 'sales-intelligence-hub',
    title: "Sales Intelligence Hub & RBAC Management Portal",
    featured: false,
    category: "Data Engineering & Analytics",
    tagline: "PostgreSQL Data Warehouse · PL/pgSQL Triggers & Executive Analytics",
    description: "Enterprise sales operations data warehouse on PostgreSQL featuring automated PL/pgSQL inventory triggers, generated financial columns, bcrypt-secured role-based access control (RBAC), and executive analytics dashboards.",
    bullets: [
      "Designed normalized PostgreSQL relational schema with foreign key integrity and audit logs",
      "Built PL/pgSQL automated triggers maintaining real-time stock levels and order status flows",
      "Implemented secure RBAC authentication portal with role-differentiated Streamlit executive views"
    ],
    tags: ["PostgreSQL", "SQL Triggers", "RBAC", "Streamlit", "Data Warehousing", "bcrypt"],
    metrics: [
      { label: "Database", value: "PostgreSQL" },
      { label: "Security", value: "bcrypt RBAC" },
      { label: "Automation", value: "PL/pgSQL Triggers" }
    ],
    image: "/projects/sales-intelligence.png",
    fallbackIcon: "🏢",
    github: "https://github.com/jegadeesh17/Sales-Intelligence-Hub",
    live: null,
    status: "DB Architecture",
    architecture: {
      overview: "Relational data warehousing and operations automation portal ensuring ACID transactions and role-based data visibility.",
      pipeline: ["Relational Schema Architecture", "PL/pgSQL Trigger Triggers", "RBAC Security Layer", "Streamlit Operational Portal"],
      dataset: "Multi-branch retail sales, inventory stock, transactions, and employee management records."
    }
  },
  {
    id: 'international-debt',
    title: "International Debt Analysis System",
    featured: false,
    category: "Data Engineering & Analytics",
    tagline: "World Bank Data Engineering · PostgreSQL Star Schema & Financial Insights",
    description: "Macroeconomic data engineering pipeline transforming World Bank international debt records into an optimized analytical star schema in PostgreSQL, supported by automated ETL scripts and multi-dimensional debt visualization dashboards.",
    bullets: [
      "Designed star schema data warehouse with dimension and fact tables for sovereign debt indicators",
      "Built automated Python/SQL ETL data cleansing and loading scripts",
      "Generated comparative regional visualizations identifying debt obligations and repayment risks"
    ],
    tags: ["Data Engineering", "PostgreSQL", "Star Schema", "ETL Pipelines", "Plotly", "Pandas"],
    metrics: [
      { label: "Data Source", value: "World Bank" },
      { label: "Schema", value: "Star Schema" },
      { label: "ETL", value: "Python + SQL" }
    ],
    image: "/projects/international-debt.png",
    fallbackIcon: "🌍",
    github: "https://github.com/jegadeesh17/International-Debt-Analysis-System",
    live: null,
    status: "ETL & Analytics",
    architecture: {
      overview: "Data warehousing system designed for high-performance OLAP analytical querying of global sovereign debt indicators.",
      pipeline: ["World Bank CSV Extraction", "Data Cleaning & Normalization", "Star Schema Loading", "OLAP SQL Queries", "Interactive Plotly Reports"],
      dataset: "World Bank International Debt Statistics covering developing country debt indicators across decades."
    }
  }
];


const categories = [
  "All Projects",
  "Featured (Resume)",
  "Generative AI & RAG",
  "Computer Vision & DL",
  "Machine Learning & NLP",
  "Data Engineering & Analytics"
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeModal, setActiveModal] = useState(null);

  const filteredProjects = projectsData.filter(project => {
    if (selectedCategory === "All Projects") return true;
    if (selectedCategory === "Featured (Resume)") return project.featured;
    return project.category === selectedCategory;
  });

  const openModal = (project) => {
    setActiveModal(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="projects container" id="projects">
      <div className="section-header">
        <div className="section-badge">Engineering Portfolio</div>
        <h2>Production AI & ML Deployments</h2>
        <p>End-to-end systems spanning Generative AI, RAG, Computer Vision, and Predictive MLOps.</p>
      </div>

      {/* Category Filter Tabs */}
      <div className="filter-tabs" role="tablist" aria-label="Project categories">
        {categories.map((cat) => {
          const count = projectsData.filter(p => {
            if (cat === "All Projects") return true;
            if (cat === "Featured (Resume)") return p.featured;
            return p.category === cat;
          }).length;

          return (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`filter-tab ${selectedCategory === cat ? 'filter-tab--active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
              <span className="tab-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            className={`project-card card ${project.featured ? 'project-card--featured' : ''}`}
            key={project.id}
          >
            {/* Visual Header / Preview */}
            <div className="project-image-wrapper">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title + ' preview'}
                  className="project-image"
                  loading="lazy"
                />
              ) : (
                <div className="project-placeholder-banner">
                  <div className="placeholder-pattern"></div>
                  <span className="placeholder-icon">{project.fallbackIcon}</span>
                  <span className="placeholder-category">{project.category}</span>
                </div>
              )}

              {/* Status Badge */}
              <span className={`project-status ${project.status.includes('Live') ? 'status--live' : ''}`}>
                {project.status.includes('Live') && <span className="status-dot"></span>}
                {project.status}
              </span>

              {project.featured && (
                <span className="featured-ribbon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Resume Highlight
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="project-body">
              <div className="project-category-label">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-desc">{project.description}</p>

              {/* Metrics Pill Grid */}
              {project.metrics && (
                <div className="project-metrics">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="metric-pill">
                      <span className="metric-val">{m.value}</span>
                      <span className="metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="project-tags">
                {project.tags.slice(0, 5).map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
                {project.tags.length > 5 && (
                  <span className="project-tag tag-more">+{project.tags.length - 5}</span>
                )}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="project-footer">
              <div className="action-buttons">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary-link"
                    title="Open Live Deployed Application"
                  >
                    Live Demo
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link ghost-link"
                    title="View Source Code on GitHub"
                  >
                    GitHub
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                )}
                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link ghost-link"
                    title="Interactive Swagger API Documentation"
                  >
                    API Docs
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                )}
                <button
                  type="button"
                  className="project-link info-link"
                  onClick={() => openModal(project)}
                  title="View Technical Details & Architecture"
                >
                  Architecture
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Architecture Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal-content card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-category">{activeModal.category}</span>
                <h2>{activeModal.title}</h2>
                <p className="modal-tagline">{activeModal.tagline}</p>
              </div>
              <button className="modal-close" onClick={closeModal} aria-label="Close dialog">✕</button>
            </div>

            <div className="modal-body">
              {/* Summary */}
              <div className="modal-section">
                <h4>System Architecture Overview</h4>
                <p>{activeModal.architecture?.overview || activeModal.description}</p>
              </div>

              {/* Key Resume Highlights */}
              <div className="modal-section">
                <h4>Key Technical Achievements</h4>
                <ul className="modal-bullets">
                  {activeModal.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              {/* Pipeline Flow */}
              {activeModal.architecture?.pipeline && (
                <div className="modal-section">
                  <h4>End-to-End Execution Pipeline</h4>
                  <div className="pipeline-flow">
                    {activeModal.architecture.pipeline.map((step, idx) => (
                      <div key={idx} className="pipeline-step">
                        <span className="step-num">{idx + 1}</span>
                        <span className="step-text">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dataset & Tools */}
              {activeModal.architecture?.dataset && (
                <div className="modal-section">
                  <h4>Data Engineering & Sources</h4>
                  <p className="dataset-text">{activeModal.architecture.dataset}</p>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="modal-section">
                <h4>Technologies & Frameworks</h4>
                <div className="modal-tags">
                  {activeModal.tags.map((t, idx) => (
                    <span key={idx} className="project-tag modal-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {activeModal.live && (
                <a href={activeModal.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Open Live Deployed Application →
                </a>
              )}
              {activeModal.docs && (
                <a href={activeModal.docs} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Interactive Swagger API Docs
                </a>
              )}
              {activeModal.github && (
                <a href={activeModal.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Explore GitHub Repository
                </a>
              )}
              <button className="btn btn-ghost" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
