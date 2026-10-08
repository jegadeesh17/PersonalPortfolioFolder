import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  // Ordered by fit for the target roles: AI agents, RAG and evals first, then ML and analytics.
  {
    id: 'toolkit-research',
    title: "Toolkit Buildability Research — Evidence-Grounded Research Agent",
    featured: true,
    category: "Generative AI & RAG",
    tagline: "Tool-Using Research Agent · Quote Grounding, Verification Loop & Reference-Labelled Eval",
    description: "Built a tool-using agent that assesses how buildable 100 SaaS apps are as AI-agent toolkits, recording how an agent would authenticate, what API exists and what blocks it, with a verbatim quote behind every answer. A verification pass (second model from a different family, a judge on disputed fields, capped re-research) was scored against blind reference labels for 20 apps.",
    bullets: [
      "Single chokepoints for LLM and tool calls (allow-listed Composio search/fetch), schema-bound extraction with up to 2 repair calls, deterministic verbatim-quote grounding, and a USD budget cap with a per-call JSONL run log",
      "Verification pass on a 20-app, 140-field reference set: field accuracy 0.743 to 0.779, verdict accuracy 14/20 to 17/20; quote grounding across all 100 apps 91.5% to 99.4%; the auth-method field regressed (0.55 to 0.40) and is reported as such",
      "All runs to date (pilot, both passes, judge, re-research): 567 LLM calls and 1,220 tool calls for $4.38; reference labels came from an independent agent and were hand spot-checked 10/10; 258 automated pytest tests"
    ],
    tags: ["Tool-Using Agent", "LLM Evaluation", "Quote Grounding", "Verification Loop", "Pydantic", "OpenRouter", "Composio"],
    metrics: [
      { label: "Verdict Accuracy (pass 1 to 2)", value: "14/20 → 17/20" },
      { label: "Quote Grounding", value: "91.5% → 99.4%" },
      { label: "Total Spend (all runs)", value: "$4.38" },
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
      "Exposed a FastAPI service with a model fallback chain, a low-confidence flag and page-level citations; 82 automated pytest tests (4 live-network integration tests excluded) with CI"
    ],
    tags: ["Hybrid RAG", "BM25", "ChromaDB", "RAGAS", "FastAPI", "Docker", "PyMuPDF"],
    metrics: [
      { label: "Retrieval MRR (hybrid)", value: "0.703" },
      { label: "RAGAS Faithfulness (n=10)", value: "0.788" },
      { label: "Pytest Suite", value: "82 Passed" }
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
    tagline: "Local-First Coaching App · Rule-Based Coordinator, Hybrid Memory & Fallbacks",
    description: "Built a local-first AI coaching app (React 18, FastAPI, SQLite FTS5, ChromaDB) with rule-based intent classification that pre-fetches matching data, plus a registry of 8 tools across 4 domain namespaces exercised by a direct-invocation benchmark, prompts grounded in retrieved user data, a persisted session blackboard and a 5-factor memory retrieval engine. Falls back to a deterministic rule engine, with a recorded reason, when offline, rate-limited or without user consent.",
    bullets: [
      "5-factor memory retrieval: SQLite FTS5 lexical search, ChromaDB cosine similarity, recency half-life decay, importance weighting and access frequency",
      "Coordinator classifies intent by keyword rules and pre-fetches matching data for one model call; a 9/9 direct-invocation benchmark covers the 8 registered tools plus a rejected unregistered-tool case (it does not measure LLM tool selection)",
      "Per-call telemetry, consent gating and CI (ruff, mypy, pytest, Docker build); 280 automated pytest tests"
    ],
    tags: ["Agent Runtime", "Tool Registry", "SQLite FTS5", "FastAPI", "React 18", "ChromaDB", "Docker"],
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
      overview: "Local-first agent runtime integrating cognitive long-term memory, SQLite FTS5 lexical indexing, and single-call LLM coaching over pre-fetched context.",
      pipeline: ["React 18 + Vite UI", "FastAPI Service Gateway", "5-Factor Cognitive Memory Engine", "SQLite FTS5 + ChromaDB", "Rule-Based Coordinator + Tool Registry", "Telemetry & Analytics"],
      dataset: "Structured multi-horizon personal goal hierarchy and journal vector database."
    }
  },
  {
    id: 'software-engineering-agents',
    title: "SoftwareEngineeringAgents — Multi-Agent Engineering Team",
    featured: false,
    category: "Generative AI & RAG",
    tagline: "Open-Source Multi-Agent Team for Claude Code & Google Antigravity",
    description: "Open-source (MIT) AI software-engineering team built from native sub-agents: an orchestrator that interviews the user and waits for approval, then delegates to product, architecture, planning, development, QA, review, security and platform specialists. Each failure mode of coding agents has a specific guard, and it runs on the Claude Code or Antigravity subscription the user already has, with no API keys.",
    bullets: [
      "12 roles (an orchestrator and 11 specialists) with least-privilege tools (planners have no shell; reviewers have no Write or Edit tool, only Bash for running tests); read-only adversarial and security reviewers return APPROVED or REJECTED, the security reviewer checking both the architecture and each milestone",
      "Approval gate before any build, bounded retries (3), and a task counts as done only when the orchestrator re-runs the recorded test command and sees exit code 0; the user tests and accepts every milestone before it counts as done",
      "Specialists register by workflow slot (design review, task owner, milestone review), so a new role is one prompt and one registry entry with no change to the orchestrator's workflow",
      "Existing-project mode: a codebase analyst maps the stack, conventions and a baseline test run first, work happens on its own branch, and reviewers check for regressions against the starting commit",
      "Built-in UI craft standard with a refuse list of AI-looking patterns, plus screenshot review at desktop and mobile widths; file-based hand-off through living documents in docs/ so any agent or person can resume; installer plus CI drift check on Linux and Windows"
    ],
    tags: ["Multi-Agent", "Claude Code", "Guardrails", "Security Review", "Python", "CI", "MIT License"],
    metrics: [
      { label: "Agent Roles", value: "12" },
      { label: "Retry Bound", value: "3 per task" },
      { label: "Pytest Suite", value: "69 Tests" }
    ],
    image: null,
    fallbackIcon: "🤖",
    github: "https://github.com/jegadeesh17/SoftwareEngineeringAgents",
    live: null,
    status: "Open Source",
    architecture: {
      overview: "Agent definitions generated from one role file into Claude Code and Antigravity formats; an orchestrator is the only agent that talks to the user and verifies every result itself.",
      pipeline: ["Interview + Scope Approval Gate", "Spec (product-analyst)", "Architecture + Decisions", "Security Design Review", "Task Plan (M1 to M3)", "Developer + QA per task", "Orchestrator re-runs tests", "Adversarial + Security Review per milestone"],
      dataset: "No dataset: the work product is the agent configuration, the installer and the generated agent files."
    }
  },
  {
    id: 'customer-support-analytics',
    title: "Autonomous Customer Support Analytics & Agentic Triage Engine",
    featured: true,
    category: "Machine Learning & NLP",
    tagline: "Multi-Task Classification & Agentic Escalation Triage Engine",
    description: "Built a two-tier triage system over ~200K support tickets: Tier 1 scikit-learn models (82.1% priority accuracy, R² = 0.7343 resolution-time regression) handled 69.7% of a 1,000-ticket benchmark without escalation. Tier 2 LLM escalation activates only for low confidence (< 0.67), predicted resolution above 185 h, or a high-risk Enterprise segment, using a Groq, OpenRouter, OpenAI provider chain with a deterministic heuristic fallback.",
    bullets: [
      "Multi-task ML pipelines predicting priority (82.1% accuracy) and resolution time (R² = 0.7343); local median inference about 18 ms for classification and 17 ms for regression",
      "Two-tier triage with Pydantic-validated JSON from the LLM tier, provider fallback chain and a heuristic fallback on any error; Tier 1 handled 69.7% of 1,000 benchmark tickets",
      "FastAPI service on Cloud Run with POST /predict_* and POST /triage_agent; 61 automated pytest tests with CI"
    ],
    tags: ["Agentic Triage", "FastAPI", "scikit-learn", "Pydantic", "Docker", "pytest", "Multi-Task ML"],
    metrics: [
      { label: "Priority Accuracy", value: "82.1%" },
      { label: "Resolution Reg.", value: "R² = 0.7343" },
      { label: "Tier 1 Handled (1,000 tickets)", value: "69.7%" },
      { label: "Pytest Suite", value: "61 Collected" }
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
      dataset: "60 seeded questions (40 real PYQs, 20 synthetic) with model answers and rubrics."
    }
  },
  {
    id: 'smartphone-addiction',
    title: "Smartphone Addiction Risk Prediction (Kaggle S6E8)",
    featured: false,
    category: "Machine Learning & NLP",
    tagline: "Competitive Machine Learning · Behavioral Analytics & Ensembles",
    description: "End-to-end competitive machine learning solution for Kaggle Playground Series S6E8, predicting smartphone addiction probability (ROC AUC). Four models are combined in a 74-feature SLSQP logit ensemble with stacking, reaching 0.964120+ out-of-fold ROC AUC under 5-fold stratified cross-validation, and the solution is served as a FastAPI dashboard on GCP Cloud Run.",
    bullets: [
      "74-column feature pipeline: missingness (_isna) flags for 12 raw variables, domain time-budget and saturation ratios, behavioral volatility features, cohort GroupBy z-scores on (Age, Gender) and (Stress Level, Academic Impact), and cross-product interaction terms",
      "Trained LightGBM, XGBoost, CatBoost and a PyTorch Tabular ResNet with 5-fold stratified CV, then combined them with an SLSQP logit ensemble and stacking for 0.964120+ out-of-fold ROC AUC",
      "FastAPI dashboard with four views (Individual Diagnostic, Population Cohort Analytics, What-If Simulation, Batch Diagnostics with CSV upload) in a multi-stage Docker image on GCP Cloud Run; GitHub Actions runs the fast test suite and deploys on pushes to main. The deployed image bundles a single LightGBM fold model, not the ensemble"
    ],
    tags: ["Kaggle ML", "LightGBM", "XGBoost", "CatBoost", "PyTorch", "FastAPI", "Docker", "GCP Cloud Run", "GitHub Actions"],
    metrics: [
      { label: "Validation", value: "5-Fold Stratified" },
      { label: "Best OOF ROC AUC", value: "0.964120+" },
      { label: "Training Rows", value: "691K" },
      { label: "Pytest Suite", value: "328 Collected" }
    ],
    image: "/projects/smartphone-addiction.png",
    fallbackIcon: "📱",
    github: "https://github.com/jegadeesh17/Smartphone-Addiction-Prediction",
    live: "https://smartphone-addiction-api-242711953247.asia-south1.run.app/app",
    docs: "https://smartphone-addiction-api-242711953247.asia-south1.run.app/docs",
    status: "Live on GCP Cloud Run",
    architecture: {
      overview: "High-performance tabular modeling pipeline optimized for competitive classification accuracy and discrimination ranking.",
      pipeline: ["74-Column Feature Pipeline", "5-Fold Stratified Training (4 Models)", "SLSQP Logit Ensemble + Stacking", "Threshold Tuning", "FastAPI Dashboard (4 Views)", "Multi-Stage Docker on GCP Cloud Run"],
      dataset: "Kaggle Playground Series S6E8 Smartphone Addiction Dataset."
    }
  },
  {
    id: 'marketing-campaign',
    title: "Multi-Brand Marketing Campaign Performance Analysis",
    featured: false,
    category: "Machine Learning & NLP",
    tagline: "Predictive Marketing Analytics · XGBoost Revenue & Profitability Engine",
    description: "End-to-end machine learning platform analyzing multi-brand digital marketing campaign streams (Nykaa, Purplle, Tira). Engineered cyclical time encodings, multi-channel CTR/CPL ratios, and served XGBoost models achieving R² = 0.72 revenue forecasting.",
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
      pipeline: ["Multi-Brand Data Ingestion", "PostgreSQL Staging", "Cyclical & Ratio Feature Engineering", "XGBoost Regressor and Classifier", "Streamlit Forecasting Dashboard", "FastAPI Prediction Service"],
      dataset: "Multi-channel advertising campaign data across e-commerce beauty brands with impressions, clicks, spend, and conversion tracking."
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
