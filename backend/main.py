from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.post_routes import router as post_router

app = FastAPI(
    title="LinkedIn Post Generator API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",
        "http://127.0.0.1:4200",
        "https://gentle-ocean-0baa5030f.7.azurestaticapps.net/" #static web app url

        ## Azure production frontend domains

        "https://yaslinkedpostgenerator.com",
        "https://www.yaslinkedpostgenerator.com",

        ## Temporary URLs
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    post_router,
    prefix="/api/posts",
    tags=["Posts"]
)

@app.get("/")
def home():
    return {
        "message":"LinkedIn Post Generator API is running!"
    }

@app.get("/healthz")
def healthz():
    return {
        "status":"ok"
    }