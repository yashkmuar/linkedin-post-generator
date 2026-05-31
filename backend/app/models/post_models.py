from pydantic import BaseModel

class PostGeneratorRequest(BaseModel):
    topic: str

class PostGeneratorResponse(BaseModel):
    post: str