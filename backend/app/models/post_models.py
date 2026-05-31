from enum import Enum
from pydantic import BaseModel

class ToneEnum(str, Enum):
    PROFESSIONAL = "Professional"
    GEN_Z="Gen-Z"
    FOUNDER="Founder"
    CORPORATE="Corporate"
    MOTIVATIONAL="Motivational" 

class LengthEnum(str, Enum):
    SHORT = "Short"
    MEDIUM = "Medium"
    LONG = "Long"

class PostGeneratorRequest(BaseModel):
    topic: str
    tone: ToneEnum
    audience: str
    length: LengthEnum

class PostGeneratorResponse(BaseModel):
    post: str