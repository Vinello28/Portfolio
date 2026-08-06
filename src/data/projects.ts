import { Project, Skill, Education } from '../types';

export const projects: Project[] = [
    {
        title: "Graphagate",
        category: "Security",
        role: "AI Engineer & ML Researcher",
        description: "Temporal Graph Network for unsupervised anomaly detection on Zero-Trust access streams. Trained on benign traffic only via negative sampling, it scores every access event in real time and catches contextual, policy, lateral-movement and credential-theft anomalies. Served as a REST inference microservice with anti-poisoning memory gating and dynamic node admission.",
        technologies: ["PyTorch", "PyTorch Geometric", "FastAPI", "Docker", "CUDA", "Python"],
        teamProject: false,
        featured: true
    },
    {
        title: "ZTALeaks",
        category: "Security",
        role: "Security & AI Engineer",
        description: "Microservices reference implementation of a NIST SP 800-207 Zero Trust Architecture, simulating the control system of a nuclear power plant. Strict PEP/PDP separation across isolated network segments (nftables, Envoy with JA3 fingerprinting, Snort NIDS) with access decisions combining OPA Rego policies and real-time AI risk scores.",
        technologies: ["Go", "OPA", "Envoy", "MongoDB", "Docker", "Snort", "Splunk"],
        teamProject: true,
        featured: true
    },
    {
        title: "synThor",
        category: "Data",
        role: "Data Engineer & ML Engineer",
        description: "Synthetic dataset generator for fine-tuning Vision-Language Models on document extraction. Produces perfectly aligned image and JSON ground-truth pairs across four document types and 11 Mediterranean languages, keeping the extraction schema fixed regardless of the language — exactly the signal a real extractor needs.",
        technologies: ["Python", "PyMuPDF", "ReportLab", "Faker", "Unsloth"],
        teamProject: false,
        featured: true
    },
    {
        title: "Charge-a-Sloth",
        category: "AI/ML",
        role: "AI Engineer",
        description: "Optimized pipeline for fine-tuning multimodal vision-language models with Unsloth and QLoRA. Formats local parquet image/instruction datasets into chat templates and runs 4-bit PEFT training on Blackwell-class GPUs, exporting to GGUF and MXFP4.",
        technologies: ["PyTorch", "Unsloth", "QLoRA", "Hugging Face", "CUDA"],
        teamProject: false
    },
    {
        title: "Pack-a-Mail",
        category: "Software",
        role: "Backend Engineer",
        description: "High-throughput bulk email service written entirely in Go, shipping as a single static binary with an embedded web dashboard and a CGO-free SQLite backend. Clean Architecture (ports & adapters), Argon2id hashing, API-key CLI tooling and native Windows Service installation.",
        technologies: ["Go", "SQLite", "HTMX", "Clean Architecture"],
        teamProject: false
    },
    {
        title: "Bandolero",
        category: "AI/ML",
        role: "AI Engineer & Software Architect",
        description: "RAG (Retrieval-Augmented Generation) system using Small Language Models (SLM) for QA on PDF documents. Implemented vector store and retrieval logic for multi-user environment.",
        technologies: ["TypeScript", "Golang", "Qdrant", "Docker", "Ollama"],
        teamProject: false
    },
    {
        title: "Open-Data-Chunker",
        category: "Data",
        role: "Data Engineer",
        description: "Optimized ETL pipeline for processing massive OpenData XML files. Focus on algorithmic efficiency, memory management, and parallelization.",
        technologies: ["Python", "Docker", "DuckDB", "Parquet"],
        teamProject: false
    },
    {
        title: "Uncounsciously-Sincere-Bot",
        category: "NLP",
        role: "NLP Engineer & Backend Developer",
        description: "Intelligent virtual assistant based on RASA Open Source. Custom NLU for intent extraction, story-based dialogue management, and Python custom actions. Containerized with Docker.",
        technologies: ["RASA", "Python", "Docker", "NLP"],
        teamProject: true
    },
    {
        title: "ASP.NET Enterprise Solutions",
        category: "Software",
        role: "Lead Developer & Software Architect",
        description: "Development of enterprise and web solutions using .NET stack, focusing on robust architectures, data security, and document automation.",
        technologies: ["C#", ".NET", "MAUI", "Syncfusion"],
        teamProject: true
    },
    {
        title: "Pack-a-Punch",
        category: "AI/ML",
        role: "AI Engineer",
        description: "Binary classifier telling AI-generated from human-written Italian text, fine-tuned on bert-base-italian-xxl-cased. ONNX Runtime inference pipeline with CUDA and Metal acceleration (~110 req/s on consumer GPUs), knowledge distillation from large LLMs, and a fully containerized FastAPI service.",
        technologies: ["Python", "PyTorch", "ONNX Runtime", "FastAPI", "CUDA", "Docker"],
        teamProject: false
    },
    {
        title: "Dora-the-Data-Explorer",
        category: "Data",
        role: "Data Scientist & ML Engineer",
        description: "Complete ML pipeline for complex classification problems. From Data Ingestion and Advanced EDA to Feature Engineering and Model Selection (Random Forest, XGBoost). Optimized performance metrics (Accuracy, F1-Score, ROC-AUC) via rigorous hyperparameter tuning.",
        technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
        teamProject: true
    },
    {
        title: "GoldenHour",
        category: "Data",
        role: "Data Scientist",
        description: "Financial time series forecasting for precious metal values. Implemented statistical models (ARIMA/SARIMA) and Deep Learning (LSTM) with stationarity tests and decomposition. Validated via backtesting and RMSE/MAE evaluation.",
        technologies: ["Python", "TensorFlow/Keras", "ARIMA", "Time Series Analysis"],
        teamProject: true
    },
    {
        title: "Perk-a-Cola",
        category: "Data",
        role: "Data Engineer",
        description: "Graphical application to easily classify data using local LLM thanks to LM Studio server mode.",
        technologies: ["Python", "LM Studio", "Streamlit", "Qwen3"],
        teamProject: false
    },
    {
        title: "Boost-a-Model",
        category: "AI/ML",
        role: "AI Engineer",
        description: "Focused on training, fine-tuning, and comparative validation of Transformer and CNN architectures for Visual Servoing tasks. Extensive use of PyTorch/TensorFlow for GPU training.",
        technologies: ["PyTorch", "TensorFlow", "Computer Vision", "Deep Learning"],
        teamProject: true
    },
    {
        title: "ALLMond",
        category: "NLP",
        role: "AI Engineer & Full Stack Developer",
        description: "Modular end-to-end NLP pipeline. Orchestrates preprocessing (tokenization, lemmatization) and specific tasks (Sentiment Analysis, NER). Hybrid architecture with Python backend and Web interface.",
        technologies: ["Python", "NLP", "Spacy", "Web Dev"],
        teamProject: true
    },
    {
        title: "Graph-of-America",
        category: "Data",
        role: "Data Scientist (Graph Analytics)",
        description: "Network Science application for analyzing complex relational structures using NetworkX. Implemented centrality algorithms (PageRank, Betweenness) and Community Detection.",
        technologies: ["Python", "NetworkX", "Graph Theory"],
        teamProject: true
    },
    {
        title: "Faboulous-Interpretr",
        category: "NLP",
        role: "AI Engineer",
        description: "Experimental NLP application focused on semantic text interpretation. Rapid prototyping of text mining algorithms using Jupyter Notebooks.",
        technologies: ["Python", "Jupyter", "Text Mining"],
        teamProject: true
    },
    {
        title: "teampa-25/core",
        category: "Software",
        role: "Software Engineer",
        description: "Backend solution for an AI inference platform for Computer Vision models.",
        technologies: ["TypeScript", "Python", "Docker", "FastAPI", "BullMQ"],
        teamProject: true
    },
    {
        title: "Algorithms & Data Structures",
        category: "Software",
        role: "Developer",
        description: "Implementation of complex algorithms and data structures in pure C with advanced memory management.",
        technologies: ["C", "CMake"],
        teamProject: false
    }
];

export const skills: Skill[] = [
    {
        category: "AI & Data Science",
        icon: "brain",
        accent: "red",
        items: ["PyTorch", "TensorFlow", "PyTorch Geometric", "Hugging Face", "Unsloth", "Scikit-learn", "Pandas", "RASA", "NetworkX"]
    },
    {
        category: "Programming",
        icon: "code",
        accent: "yellow",
        items: ["Python", "C#", "TypeScript", "Go", "C", "SQL", "VB.NET"]
    },
    {
        category: "Serving & DevOps",
        icon: "server",
        accent: "green",
        items: ["vLLM", "ONNX Runtime", "Ollama", "FastAPI", "Docker", ".NET Core", "MongoDB", "PostgreSQL", "DuckDB", "Qdrant", "BullMQ", "GitHub Actions"]
    },
    {
        category: "Frontend",
        icon: "palette",
        accent: "blue",
        items: ["React", "Vite", "TailwindCSS", "Framer Motion", "Syncfusion", "HTMX"]
    }
];

export const education: Education[] = [
    {
        degree: "MSc in Computer Engineering (AI & Data Science)",
        institution: "Università Politecnica delle Marche",
        period: "Current",
        description: "Specialization in Artificial Intelligence and Data Science."
    },
    {
        degree: "BSc in Engineering of Computing Systems",
        institution: "Politecnico di Milano",
        period: "Completed",
        description: "Foundational Computer Engineering degree."
    },
    {
        degree: "High School Diploma",
        institution: "Istituto Tecnico Industriale V. Volterra",
        period: "Completed",
        description: "Information and Telecommunication diploma, specialization in Computer Science."
    }
];
