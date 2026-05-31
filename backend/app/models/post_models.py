from pydantic import BaseModel

class PostGeneratorRequest(BaseModel):
    topic: str
    tone: str
    audience: str
    length: str

class PostGeneratorResponse(BaseModel):
    post: str