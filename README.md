# LinkedIn Post Generator

A full-stack AI-powered LinkedIn post generator built with **Angular** on the frontend and **FastAPI** on the backend. The application takes a topic, tone, target audience, and desired length, then generates a professional LinkedIn post using **Azure OpenAI** through LangChain.

---

## 🚀 Project Overview

LinkedIn Post Generator helps users quickly create engaging LinkedIn posts from a simple idea or topic. The user enters the post topic, selects a tone, defines the audience, chooses the length, and the backend generates a polished post using Azure OpenAI.

This project is useful as a portfolio project because it demonstrates:

- Angular frontend development
- FastAPI backend development
- Azure OpenAI integration
- LangChain prompt usage
- REST API communication between frontend and backend
- Environment-based secret handling
- CORS configuration for local development

---

## ✨ Features

- Generate LinkedIn posts from a topic
- Select post tone:
  - Professional
  - Gen-Z
  - Founder
  - Corporate
  - Motivational
- Select post length:
  - Short
  - Medium
  - Long
- Define target audience
- Copy generated post
- FastAPI backend with Swagger documentation
- Azure OpenAI integration using LangChain
- Environment variable based API key configuration
- CORS enabled for Angular local development

---

## 🧱 Tech Stack

### Frontend

- Angular
- TypeScript
- Angular Material
- HTML
- CSS / SCSS

### Backend

- Python
- FastAPI
- LangChain
- Azure OpenAI
- Pydantic
- python-dotenv
- Uvicorn

---

## 🏗️ Architecture

```text
Angular Frontend
      |
      | HTTP POST
      v
FastAPI Backend
      |
      | LangChain PromptTemplate
      v
Azure OpenAI Deployment
      |
      v
Generated LinkedIn Post
```

---

## 📁 Project Structure

Based on the current files shared, the project structure is:

```text
linkedin-post-generator/
├── backend/
│   ├── main.py
│   ├── app/
│   │   ├── api/
│   │   │   └── post_routes.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── rate_limiter.py
│   │   ├── models/
│   │   │   └── post_models.py
│   │   ├── prompts/
│   │   │   └── linkedin_prompt.py
│   │   └── services/
│   │       └── post_service.py
│   ├── requirements.txt
│   └── .env
│
├── src/
│   └── app/
│       ├── components/
│       │   └── post-generator/
│       ├── models/
│       │   └── post.model.ts
│       └── services/
│           └── post.ts
│
├── angular.json
├── package.json
├── package-lock.json
└── README.md
```

> Note: The `.env` file should stay local and must not be committed to GitHub.

---

## ⚙️ Backend Setup

### 1. Go to the backend folder

```bash
cd backend
```

### 2. Create and activate a virtual environment

#### Windows

```bash
python -m venv .venv
.venv\Scripts\activate
```

#### macOS / Linux

```bash
python -m venv .venv
source .venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Create `.env` file

Create a `.env` file inside the `backend/` folder:

```env
AZURE_OPENAI_API_KEY=your_azure_openai_api_key
AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com/
AZURE_OPENAI_DEPLOYMENT=your_deployment_name
```

### 5. Run the backend

```bash
uvicorn main:app --reload
```

Backend will run at:

```text
http://127.0.0.1:8000
```

Swagger API documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 🅰️ Frontend Setup

### 1. Go to the project root

```bash
cd linkedin-post-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run Angular development server

```bash
ng serve
```

Frontend will run at:

```text
http://localhost:4200
```

---

## 🔌 API Endpoint

### Generate LinkedIn Post

```http
POST /api/posts/generate
```

### Request Body

```json
{
  "topic": "My learning from building an AI project",
  "tone": "Professional",
  "audience": "Software developers",
  "length": "Medium"
}
```

### Response Body

```json
{
  "post": "Generated LinkedIn post content here..."
}
```

---

## 🔐 Environment Variables

The backend reads Azure OpenAI configuration from environment variables using `python-dotenv`.

Required variables:

| Variable | Description |
|---|---|
| `AZURE_OPENAI_API_KEY` | Azure OpenAI API key |
| `AZURE_OPENAI_ENDPOINT` | Azure OpenAI endpoint URL |
| `AZURE_OPENAI_DEPLOYMENT` | Azure OpenAI deployment name |

Recommended `.gitignore` entries:

```gitignore
.env
backend/.env
.venv/
__pycache__/
node_modules/
dist/
```

---

## 🌐 CORS Configuration

The backend allows requests from the Angular development server:

```python
allow_origins=[
    "http://localhost:4200",
    "http://127.0.0.1:4200",
]
```

This allows the frontend running locally to call the FastAPI backend.

---

## 🧠 Prompt Design

The backend uses LangChain `PromptTemplate` to create the final prompt for Azure OpenAI.

The prompt uses these user inputs:

- Topic
- Tone
- Target audience
- Length

The generated output is returned as a final LinkedIn post.

---

## ⚠️ Important Notes

- Do not commit `.env` or API keys to GitHub.
- If an Azure OpenAI content filter error occurs, revise the prompt or input topic to be more professional and policy-safe.
- If CORS shows in the browser but backend logs show `POST /api/posts/generate 500`, the issue is usually backend or Azure OpenAI, not CORS.
- Always test the backend first using Swagger at `/docs` before debugging the frontend.

---

## 🧪 Local Testing Flow

1. Start backend:

```bash
cd backend
uvicorn main:app --reload
```

2. Start frontend:

```bash
ng serve
```

3. Open the frontend:

```text
http://localhost:4200
```

4. Enter sample values:

```text
Topic: My learning from building an AI-powered LinkedIn post generator
Tone: Professional
Audience: Software developers
Length: Medium
```

5. Click generate.

---

## 🛣️ Future Improvements

Planned improvements for the project:

- Better prompt safety handling
- User-friendly backend error responses
- Loading states and improved UI feedback
- Post history using local storage
- Hashtag suggestions
- Multiple post variations
- Engagement score for generated posts
- Docker support
- GitHub Actions CI/CD
- Azure deployment
- Agentic AI workflow using LangGraph

---

## 👤 Author

**Yash Kumar**

GitHub: [yashkmuar](https://github.com/yashkmuar)

---

## 📄 License

This project can be licensed under the MIT License.

---

## ⭐ Repository

If this project is useful, consider adding a star to the GitHub repository.
