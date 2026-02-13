import { Project, Skill, Education } from '../types';

export const projects: Project[] = [
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
        description: "Semantic classification microservice, with easy and dockerized training pipeline and inference server (in PyTorch).",
        technologies: ["CUDA", "Python", "Torch", "Docker", "ONNX"],
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
        items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "RASA", "Ollama", "NetworkX"]
    },
    {
        category: "Programming",
        items: ["Python", "C#", "TypeScript", "Go", "C", "SQL", "VB.NET"]
    },
    {
        category: "Backend & DevOps",
        items: ["FastAPI", ".NET Core", "Docker", "PostgreSQL", "DuckDB", "GitHub Actions", "BullMQ"]
    },
    {
        category: "Frontend",
        items: ["React", "Vite", "TailwindCSS", "Framer Motion", "Syncfusion"]
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
