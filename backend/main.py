from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message":"LinkedIn Post Generator API is running!"
    }