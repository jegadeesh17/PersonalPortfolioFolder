import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  // ─── RESUME FEATURED PROJECTS (1-3) ───
  {
    id: 'financial-copilot',
    title: "Financial Intelligence Copilot",
    featured: true,
    category: "Generative AI & RAG",
    tagline: "Enterprise Dual-Domain RAG · BFSI Regulatory Compliance & Annual Reports",
    description: "Architected a dual-domain RAG pipeline over RBI/SEBI regulatory PDFs and HDFC annual reports, chunking 3,459 semantic segments via PyMuPDF with paragraph-aware splitting (800-char / 100-char overlap). Engineered vector search using Sentence Transformers (MiniLM) + ChromaDB, achieving 90% top-5 retrieval hit rate against a ≥70% benchmark.",
    bullets: [
      "Chunked 3,459 semantic segments via PyMuPDF with paragraph-aware splitting (800-char / 100-char overlap)",
      "Engineered vector search using Sentence Transformers (MiniLM) + ChromaDB, achieving 90% top-5 retrieval hit rate",
      "Exposed production FastAPI endpoint (POST /ask) with confidence gating and page-level citations; packaged with Docker and 76 pytest test cases"
    ],
    tags: ["RAG", "Sentence Transformers", "ChromaDB", "FastAPI", "Docker", "OpenRouter API", "PyMuPDF"],
    metrics: [
      { label: "Top-5 Hit Rate", value: "90%" },
      { label: "Indexed Chunks", value: "3,459" },
      { label: "Pytest Suite", value: "76 Passed" }
    ],
    image: "/projects/financial-copilot.png",
    fallbackIcon: "📊",
    github: "https://github.com/jegadeesh17/FinancialIntelligenceCopilot",
    live: "https://financialintelligencecopilot.streamlit.app/",
    status: "Live on Streamlit",
    architecture: {
      overview: "Dual-domain PDF ingestion pipeline extracting page-level metadata, generating dense vector embeddings via all-MiniLM-L6-v2, indexing into ChromaDB, and providing auditable answers with exact page citations and confidence scoring.",
      pipeline: ["PDF Ingestion (PyMuPDF)", "Paragraph-aware Chunking", "MiniLM Embeddings", "ChromaDB Vector Store", "Top-5 Similarity Retriever", "OpenRouter LLM Synthesis", "Streamlit UI + FastAPI /ask"],
      dataset: "Curated BFSI regulatory PDFs (RBI KYC, SEBI guidelines, HDFC quarterly & annual filings)."
    }
  },
  {
    id: 'rice-leaf-disease',
    title: "AI-Powered Rice Leaf Disease Detection System",
    featured: true,
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
    id: 'support-analytics',
    title: "Customer Support Tickets Analytics",
    featured: true,
    category: "Machine Learning & NLP",
    tagline: "3-Task ML Data Pipeline · Support Ops Intelligence & Real-Time SLAs",
    description: "Designed a 3-task ML data pipeline over ~200K support tickets combining TF-IDF text features with structured metadata via scikit-learn ColumnTransformer; achieved 82.1% priority classification accuracy and R² = 0.72 for resolution time regression with class-imbalance handling and holdout validation.",
    bullets: [
      "Designed 3-task ML pipeline over ~200K support tickets combining TF-IDF text features with structured metadata",
      "Achieved 82.1% priority classification accuracy and R² = 0.72 for resolution time regression",
      "Deployed FastAPI endpoints (POST /predict_priority) with PostgreSQL backend, multi-page Streamlit ops dashboard, and pytest API tests"
    ],
    tags: ["scikit-learn", "TF-IDF NLP", "PostgreSQL", "FastAPI", "Streamlit", "Gradient Boosting", "Docker"],
    metrics: [
      { label: "Priority Accuracy", value: "82.1%" },
      { label: "Resolution Reg.", value: "R² = 0.72" },
      { label: "Data Volume", value: "200K+ Tickets" }
    ],
    image: "/projects/support-analytics.png",
    fallbackIcon: "🎧",
    github: "https://github.com/jegadeesh17/customer-support-ticket-analytics",
    live: "https://support-ops-api-242711953247.asia-south1.run.app/app",
    status: "Live on GCP Cloud Run",
    architecture: {
      overview: "Enterprise customer support triage and resolution platform integrating NLP text features, tabular customer metadata, PostgreSQL data warehouse, and multi-model inference pipelines.",
      pipeline: ["PostgreSQL ETL Ingestion", "TF-IDF + ColumnTransformer Feature Union", "Class-Balanced Gradient Boosting Classifier", "Log-Transformed Resolution Regressor", "Streamlit Ops Dashboard", "FastAPI Production Endpoints"],
      dataset: "200,000+ support tickets with multi-channel attributes, text descriptions, urgency metrics, and resolution logs."
    }
  },

  // ─── EXTENDED AI & ML PORTFOLIO PROJECTS (4-14) ───
  {
    id: 'goalos',
    title: "GoalOS — Personal AI Executive Life Operating System",
    featured: false,
    category: "Generative AI & RAG",
    tagline: "Agentic AI · Multi-Horizon Goal Alignment & Long-Term Vector Memory",
    description: "Privacy-first agentic life operating system combining SQLite structured tracking with ChromaDB vector memory, composite retrieval ranking (semantic + recency decay + importance weighting), and tool-calling LLM coach agents via FastAPI and React/Streamlit.",
    bullets: [
      "Composite memory retrieval algorithm (40% semantic, 30% importance, 20% recency decay, 10% frequency)",
      "Agentic LLM coaching pipelines with tool-calling for morning alignment, evening reviews, and weekly retrospectives",
      "Validated with 70+ automated pytest test cases across memory services and coaching APIs"
    ],
    tags: ["Agentic AI", "ChromaDB", "FastAPI", "React", "SQLite", "OpenRouter", "pytest"],
    metrics: [
      { label: "Retrieval Algo", value: "Composite 4-Factor" },
      { label: "Test Suite", value: "70+ Tests" },
      { label: "Architecture", value: "Local-First" }
    ],
    image: null,
    fallbackIcon: "🧠",
    github: "https://github.com/jegadeesh17/GoalOS",
    live: null,
    status: "Production Ready",
    architecture: {
      overview: "Agentic coaching system featuring persistent cognitive memory retrieval, structured goal graphs, and tool-calling LLM workflows.",
      pipeline: ["User Interaction / Daily Check-in", "Memory Extraction & Embedding", "ChromaDB + SQLite Persistence", "Composite Relevance Ranking", "OpenRouter LLM Synthesis", "FastAPI /coach Endpoints"],
      dataset: "Structured multi-horizon personal goal hierarchy and journal vector database."
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
    image: null,
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
    image: null,
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
    image: null,
    fallbackIcon: "🏥",
    github: "https://github.com/jegadeesh17/ClinicalTrialClassification",
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
    image: null,
    fallbackIcon: "🔥",
    github: "https://github.com/jegadeesh17/ForestFireIntelligence",
    live: null,
    status: "Interactive Dashboard",
    architecture: {
      overview: "Spatial-temporal wildfire monitoring system integrating remote sensing satellite feeds with machine learning and interactive cartography.",
      pipeline: ["MODIS Satellite CSV Ingestion", "Coordinate & Radiance Preprocessing", "KMeans Spatial Clustering", "XGBoost Severity Prediction", "Prophet Trend Forecasting", "Folium Leaflet Map Rendering"],
      dataset: "NASA MODIS active fire and thermal anomaly satellite observation records across India."
    }
  },
  {
    id: 'superkalam-upsc',
    title: "SuperKalam — Agentic UPSC Mains Mock Test Platform",
    featured: false,
    category: "Generative AI & RAG",
    tagline: "Multi-Lingual Agentic AI · Automated Mains Answer Writing Evaluation",
    description: "Agentic AI educational platform providing timed civil services mock tests with random Previous Year Questions (PYQs). Employs a multi-agent LLM chain and ChromaDB RAG to evaluate student answers against rigorous UPSC scoring rubrics with feedback in English, Hindi, and Tamil.",
    bullets: [
      "Built multi-agent evaluation chain combining rubric retrieval, semantic alignment, and score breakdown",
      "Integrated ChromaDB RAG for standard model answers and official syllabus keyword matching",
      "Supported multi-lingual mentor feedback output across English, Hindi, and Tamil"
    ],
    tags: ["Agentic AI", "RAG", "LLMs", "Multi-Lingual", "FastAPI", "ChromaDB"],
    metrics: [
      { label: "Languages", value: "EN / HI / TA" },
      { label: "Evaluation", value: "Rubric-Guided" },
      { label: "Engine", value: "Agent Chains" }
    ],
    image: null,
    fallbackIcon: "📚",
    github: "https://github.com/jegadeesh17/SuperKalamProject",
    live: null,
    status: "Agent System",
    architecture: {
      overview: "Autonomous evaluation pipeline simulating senior UPSC mentors using multi-step agent reasoning and rubric retrieval.",
      pipeline: ["PYQ Question Retrieval", "Student Answer Submission", "ChromaDB Rubric Context Extraction", "Multi-Agent Scoring LLM Chain", "Multi-Lingual Mentor Feedback Synthesis"],
      dataset: "UPSC Mains Previous Year Questions repository and official syllabus scoring rubrics."
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
    image: null,
    fallbackIcon: "🌐",
    github: "https://github.com/jegadeesh17/CovidPredictiveAnalytics",
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
    image: null,
    fallbackIcon: "📱",
    github: "https://github.com/jegadeesh17/SmartphoneAddictionPrediction",
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
    image: null,
    fallbackIcon: "🛍️",
    github: "https://github.com/jegadeesh17/MobileProductSegmentation",
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
    image: null,
    fallbackIcon: "🏢",
    github: "https://github.com/jegadeesh17/SalesIntelligenceHub",
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
    image: null,
    fallbackIcon: "🌍",
    github: "https://github.com/jegadeesh17/InternationalDebtAnalysis",
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
