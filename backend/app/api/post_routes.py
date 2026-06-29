from fastapi import APIRouter

from app.services.post_service import PostService

from app.models.post_models import (
    PostGeneratorRequest,
    PostGeneratorResponse
)

router = APIRouter()

post_service = PostService()

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
    
    generated_post = post_service.generate_post(
        request.topic,
        request.tone.value,
        request.audience,
        request.length.value
    )

    return PostGeneratorResponse(
        post = generated_post
    )
