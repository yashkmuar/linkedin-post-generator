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