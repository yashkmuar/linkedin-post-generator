from fastapi import FastAPI

from app.api.post_routes import router as post_router

app = FastAPI(
    title="LinkedIn Post Generator API"
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