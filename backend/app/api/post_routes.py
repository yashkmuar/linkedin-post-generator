from fastapi import APIRouter

from app.models.post_models import (
    PostGeneratorRequest,
    PostGeneratorResponse
)

router = APIRouter()

@router.get("/health")
def health_check():
    return {
        "status":"success",
        "message":"Post API is working!!"
    }


@router.post(
    "/generate",
    response_model=PostGeneratorResponse
)
def generate_post(
    request: PostGeneratorRequest
):
    return PostGeneratorResponse(
        post = f"LinkedIn post about: {request.topic}"
    )
