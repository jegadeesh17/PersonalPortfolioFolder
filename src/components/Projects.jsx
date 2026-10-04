import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  // ─── FEATURED: RESUME PROJECTS (1-4) ───
  {
    id: 'toolkit-research',
    title: "Toolkit Buildability Research — Evidence-Grounded Research Agent",
    featured: true,
    category: "Generative AI & RAG",
    tagline: "Tool-Using Research Agent · Quote Grounding, Verification Loop & Reference-Labelled Eval",
    description: "Built a tool-using agent that assesses how buildable 100 SaaS apps are as AI-agent toolkits, recording how an agent would authenticate, what API exists and what blocks it, with a verbatim quote behind every answer. A verification pass (second model from a different family, a judge on disputed fields, capped re-research) was scored against blind reference labels for 20 apps.",
    bullets: [
      "Single chokepoints for LLM and tool calls (allow-listed Composio search/fetch), schema-bound extraction with up to 2 repair calls, deterministic verbatim-quote grounding, and a USD budget cap with a per-call JSONL run log",
      "Verification pass on a 20-app, 140-field reference set: field accuracy 0.743 to 0.779, verdict accuracy 14/20 to 17/20, quote grounding 91.5% to 99.4%; the auth-method field regressed (0.55 to 0.40) and is reported as such",
      "Full run: 567 LLM calls and 1,220 tool calls for $4.38; reference labels came from an independent agent and were hand spot-checked 10/10; 258 automated pytest tests"
    ],
    tags: ["Tool-Using Agent", "LLM Evaluation", "Quote Grounding", "Verification Loop", "Pydantic", "OpenRouter", "Composio"],
    metrics: [
      { label: "Verdict Accuracy (pass 1 to 2)", value: "14/20 → 17/20" },
      { label: "Quote Grounding", value: "91.5% → 99.4%" },
      { label: "Full Run Cost", value: "$4.38" },
      { label: "Pytest Suite", value: "258 Collected" }
    ],
    image: "/projects/toolkit-research.png",
    fallbackIcon: "🔎",
    github: "https://github.com/jegadeesh17/ToolkitBuildabilityResearch",
    live: "https://jegadeesh17.github.io/ToolkitBuildabilityResearch/",
    status: "Live report on GitHub Pages",
    architecture: {
      overview: "Two-pass research agent: pass 1 searches, fetches and extracts per app with quote grounding; pass 2 re-checks answers with a second model, a judge on disputed fields and capped re-research, then scores agreement with blind reference labels.",
      pipeline: ["App List (100 apps, 10 categories)", "Search + Fetch (allow-listed tools)", "Schema-Bound Extraction + Repair", "Quote Grounding Check", "Pass 2: Second Model + Judge + Re-research", "Scoring vs Reference Labels", "Static Report Page"],
      dataset: "100 SaaS apps across 10 categories; 20-app sample (140 fields) labelled blind by an independent agent and spot-checked by a person."
    }
  },
  {
    id: 'financial-copilot',
    title: "Financial Intelligence Copilot",
    featured: true,
    category: "Generative AI & RAG",
    tagline: "Hybrid RAG · Regulatory & Financial Filings Retrieval with Measured Answer Quality",
    description: "Architected a hybrid RAG system over 12 BFSI PDFs (RBI, SEBI and IRDAI documents, five annual reports, an exam workbook), fusing dense MiniLM embeddings (ChromaDB) with BM25 via Reciprocal Rank Fusion (RRF). Measured retrieval offline (MRR 0.678 dense, 0.703 hybrid on 10 labelled questions) and answer quality with RAGAS (faithfulness 0.744 to 0.788), including the trade-off that hybrid lowered context precision.",
    bullets: [
      "Chunked 12,075 segments with paragraph-aware splitting (800-char / 100-char overlap) and fused dense and BM25 rankings with RRF (k = 60)",
      "Built retrieval and RAGAS evaluation harnesses (10 labelled questions, separate judge model): MRR 0.678 to 0.703, faithfulness 0.744 to 0.788, response relevancy 0.509 to 0.541, context precision 0.470 to 0.287 (dense to hybrid)",
      "Exposed a FastAPI service with a model fallback chain, low-confidence gating and page-level citations; 86 automated pytest tests with CI"
    ],
    tags: ["Hybrid RAG", "BM25", "ChromaDB", "RAGAS", "FastAPI", "Docker", "PyMuPDF"],
    metrics: [
      { label: "Retrieval MRR (hybrid)", value: "0.703" },
      { label: "RAGAS Faithfulness (n=10)", value: "0.788" },
      { label: "Pytest Suite", value: "86 Collected" }
    ],
    image: "/projects/financial-copilot.png",
    fallbackIcon: "📊",
    github: "https://github.com/jegadeesh17/FinancialIntelligenceCopilot",
    live: "https://financial-copilot-api-242711953247.asia-south1.run.app/app",
    docs: "https://financial-copilot-api-242711953247.asia-south1.run.app/docs",
    status: "Live on GCP Cloud Run",
    architecture: {
      overview: "Multi-document PDF ingestion pipeline extracting page-level metadata, generating dense vector embeddings via all-MiniLM-L6-v2 + BM25 sparse index, and providing auditable answers with exact page citations and confidence scoring.",
      pipeline: ["PDF Ingestion (PyMuPDF)", "Paragraph-aware Chunking", "Hybrid BM25 + Dense Retrieval", "ChromaDB Vector Store", "Model Fallback Chain (OpenRouter)", "Streamlit UI + FastAPI REST API"],
      dataset: "12 PDFs: five annual reports (HDFC Bank, ICICI Bank, Reliance, Tata Consumer, TCS), four RBI/SEBI regulatory documents, two IRDAI circulars and the NISM Series XV workbook."
    }
  },
  {
    id: 'goalos',
    title: "GoalOS — Personal AI Executive Life Operating System",
    featured: true,
    category: "Generative AI & RAG",
    tagline: "Local-First Coaching App · Rule-Routed Tool Registry, Hybrid Memory & Fallbacks",
    description: "Built a local-first AI coaching app (React 18, FastAPI, SQLite FTS5, ChromaDB) with rule-based intent routing to 8 schema-validated tools across 4 domain namespaces, prompts grounded in retrieved user data, a persisted session blackboard and a 5-factor memory retrieval engine. Falls back to a deterministic rule engine, with a recorded reason, when offline, rate-limited or without user consent.",
    bullets: [
      "5-factor memory retrieval: SQLite FTS5 lexical search, ChromaDB cosine similarity, recency half-life decay, importance weighting and access frequency",
      "Coordinator classifies intent by rules, routes to 8 tools in 4 namespaces, and rejects unregistered tools; a 9/9 direct-invocation benchmark covers every tool plus the rejection case (it does not measure LLM tool selection)",
      "Per-call telemetry, consent gating and CI (ruff, mypy, pytest, Docker build); 280 automated pytest tests"
    ],
    tags: ["Agent Runtime", "Tool Calling", "SQLite FTS5", "FastAPI", "React 18", "ChromaDB", "Docker"],
    metrics: [
      { label: "Tool Benchmark (direct invocation)", value: "9/9" },
      { label: "Memory Retrieval", value: "5-Factor Composite" },
      { label: "Pytest Suite", value: "280 Collected" }
    ],
    image: "/projects/goalos.png",
    fallbackIcon: "🧠",
    github: "https://github.com/jegadeesh17/GoalOS",
    live: "https://goalos-api-242711953247.asia-south1.run.app/app",
    docs: "https://goalos-api-242711953247.asia-south1.run.app/docs",
    status: "Live on GCP Cloud Run",
    architecture: {
      overview: "Local-first agent runtime integrating cognitive long-term memory, SQLite FTS5 lexical indexing, and multi-turn tool-calling LLM workflows.",
      pipeline: ["React 18 + Vite UI", "FastAPI Service Gateway", "5-Factor Cognitive Memory Engine", "SQLite FTS5 + ChromaDB", "Rule-Based Coordinator + Tool Registry", "Telemetry & Analytics"],
      dataset: "Structured multi-horizon personal goal hierarchy and journal vector database."
    }
  },
  {
    id: 'customer-support-analytics',
    title: "Autonomous Customer Support Analytics & Agentic Triage Engine",
    featured: true,
    category: "Machine Learning & NLP",
    tagline: "Multi-Task Classification & Agentic Escalation Triage Engine",
    description: "Built a two-tier triage system over ~200K support tickets: Tier 1 scikit-learn models (82.1% priority accuracy, R² = 0.7185 resolution-time regression) handled 69.5% of a 1,000-ticket benchmark without escalation. Tier 2 LLM escalation activates only for low confidence (< 0.67), predicted resolution above 185 h, or a high-risk Enterprise segment, using a Groq, OpenRouter, OpenAI provider chain with a deterministic heuristic fallback.",
    bullets: [
      "Multi-task ML pipelines predicting priority (82.1% accuracy) and resolution time (R² = 0.7185); local median inference about 24 ms for classification and 50 ms for regression",
      "Two-tier triage with Pydantic-validated JSON from the LLM tier, provider fallback chain and a heuristic fallback on any error; Tier 1 handled 69.5% of 1,000 benchmark tickets",
      "FastAPI service on Cloud Run with POST /predict_* and POST /triage_agent; 36 automated pytest tests with CI"
    ],
    tags: ["Agentic Triage", "FastAPI", "scikit-learn", "Pydantic", "Docker", "pytest", "Multi-Task ML"],
    metrics: [
      { label: "Priority Accuracy", value: "82.1%" },
      { label: "Resolution Reg.", value: "R² = 0.7185" },
      { label: "Tier 1 Handled (1,000 tickets)", value: "69.5%" },
      { label: "Pytest Suite", value: "36 Collected" }
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
  // ─── MORE PROJECTS ───
  {
    id: 'software-engineering-agents',
    title: "SoftwareEngineeringAgents — Multi-Agent Engineering Team",
    featured: false,
    category: "Generative AI & RAG",
    tagline: "Open-Source Multi-Agent Team for Claude Code & Google Antigravity",
    description: "Open-source (MIT) AI software-engineering team built from native sub-agents: an orchestrator that interviews the user and waits for approval, then delegates to product, architecture, planning, development, QA, review and git specialists. Each failure mode of coding agents has a specific guard.",
    bullets: [
      "9 roles with least-privilege tools (planners have no shell, the reviewer cannot edit files) and a read-only adversarial reviewer that returns APPROVED or REJECTED per milestone",
      "Approval gate before any build, bounded retries (3), and a task counts as done only when the orchestrator re-runs the recorded test command and sees exit code 0",
      "File-based hand-off through living documents in docs/ so any agent or person can resume; installer plus CI drift check on Linux and Windows"
    ],
    tags: ["Multi-Agent", "Claude Code", "Guardrails", "Python", "CI", "MIT License"],
    metrics: [
      { label: "Agent Roles", value: "9" },
      { label: "Retry Bound", value: "3 per task" },
      { label: "Pytest Suite", value: "37 Tests" }
    ],
    image: null,
    fallbackIcon: "🤖",
    github: "https://github.com/jegadeesh17/SoftwareEngineeringAgents",
    live: null,
    status: "Open Source",
    architecture: {
      overview: "Agent definitions generated from one role file into Claude Code and Antigravity formats; an orchestrator is the only agent that talks to the user and verifies every result itself.",
      pipeline: ["Interview + Scope Approval Gate", "Spec (product-analyst)", "Architecture + Decisions", "Task Plan (M1 to M3)", "Developer + QA per task", "Orchestrator re-runs tests", "Adversarial Review per milestone"],
      dataset: "No dataset: the work product is the agent configuration, the installer and the generated agent files."
    }
  },
  {
    id: 'superkalam-upsc',
    title: "SuperKalam — Agentic UPSC Mains Evaluator Platform",
    featured: false,
    category: "Generative AI & RAG",
    tagline: "LLM Rubric Scoring & Multilingual Feedback · Schema-Validated Outputs",
    description: "Built a UPSC Mains mock-test platform: a Retrieval, Evaluator and Feedback agent chain scores answers on four rubric dimensions and writes mentor-style feedback in English, Hindi and Tamil. Evaluator output is locked to a Pydantic v2 schema with one retry on invalid JSON and a fallback on HTTP 429. The included calibration script checks a keyword heuristic against synthetic labels; it is not a measure of the LLM evaluator's agreement with human graders.",
    bullets: [
      "Multi-agent chain (Retrieval, Evaluator, Multilingual Feedback) with ChromaDB semantic matching of pasted questions to known previous-year questions",
      "Strict Pydantic v2 JSON contract on evaluator output, one stricter-prompt retry on invalid JSON, and a mock-score fallback on HTTP 429",
      "Native-script feedback in Hindi and Tamil; 27 automated pytest tests"
    ],
    tags: ["Multi-Agent System", "Pydantic v2 Contracts", "FastAPI", "ChromaDB", "SQLite", "Indic NLP (Hi/Ta)", "Docker"],
    metrics: [
      { label: "Output Contract", value: "Pydantic v2" },
      { label: "Retry on Invalid JSON", value: "1 retry" },
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
      dataset: "Seed set of UPSC-style previous-year questions with model answers and rubrics."
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
    id: 'marketing-campaign',
    title: "Multi-Brand Marketing Campaign Performance Analysis",
    featured: false,
    category: "Machine Learning & NLP",
    tagline: "Predictive Marketing Analytics · XGBoost Revenue & Profitability Engine",
    description: "End-to-end machine learning platform analyzing multi-brand digital marketing campaign streams (Nykaa, Purplle, Tira). Engineered cyclical time encodings, multi-channel CTR/CPL ratios, and deployed XGBoost models achieving R² = 0.72 revenue forecasting.",
    bullets: [
      "Engineered feature pipelines with cyclical date transforms and brand performance ratios",
      "Trained an XGBoost revenue regressor (R² = 0.72 on an 80/20 holdout)",
      "Integrated PostgreSQL data warehouse, automated EDA generation, and interactive Streamlit forecasting simulator"
    ],
    tags: ["XGBoost", "PostgreSQL", "FastAPI", "Streamlit", "Feature Engineering", "scikit-learn"],
    metrics: [
      { label: "Holdout Split", value: "80 / 20" },
      { label: "Revenue Reg.", value: "R² = 0.72" },
      { label: "Data Warehouse", value: "PostgreSQL" }
    ],
    image: "/projects/marketing-campaign.png",
    fallbackIcon: "📈",
    github: "https://github.com/jegadeesh17/Marketing-Campaign-Performance-Analysis",
    live: null,
    status: "Complete Pipeline",
    architecture: {
      overview: "Predictive marketing performance engine combining data warehouse ETL, advanced tabular feature engineering, and regression inference.",
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
      { label: "Pytest Suite", value: "3 Passed" },
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
      { label: "Training Rows", value: "691K" }
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
  }
];


const categories = [
  "All Projects",
  "Featured (Resume)",
  "Generative AI & RAG",
  "Computer Vision & DL",
  "Machine Learning & NLP",
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
