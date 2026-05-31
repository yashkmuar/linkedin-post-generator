from enum import Enum
from pydantic import BaseModel

class ToneEnum(str, Enum):
    PROFESSIONAL = "Professional"
    GEN_Z="Gen-Z"
    FOUNDER="Founder"
    CORPORATE="Corporate"
    MOTIVATIONAL="Motivational" 

class PostGeneratorRequest(BaseModel):
    topic: str
    tone: str
    audience: str
    length: str

class PostGeneratorResponse(BaseModel):
    post: str