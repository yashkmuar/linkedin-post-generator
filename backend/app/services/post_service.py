from langchain_openai import AzureChatOpenAI
from app.core.config import settings
from app.prompts.linkedin_prompt import (
    LINKEDIN_POST_PROMPT
)


class PostService:

    def __init__(self):
        self.llm = AzureChatOpenAI(
            azure_endpoint = settings.AZURE_OPENAI_ENDPOINT,
            api_key = settings.AZURE_OPENAI_API_KEY,
            deployment_name = settings.AZURE_OPENAI_DEPLOYMENT,
            api_version = "2024-02-01"
        )

    def generate_post(
            self,
            topic: str
    ) -> str:
        
        prompt = LINKEDIN_POST_PROMPT.format(topic = topic)

        response = self.llm.invoke(
            prompt
        )

        return response.content