from langchain_openai import AzureChatOpenAI
from app.core.config import settings
from langchain_core.output_parsers import StrOutputParser
from openai import BadRequestError
from fastapi import HTTPException

from app.prompts.linkedin_prompt import (
    STRATEGY_PROMPT,
    WRITER_PROMPT,
    EDITOR_PROMPT
)


class PostService:

    def __init__(self):
        self.llm = AzureChatOpenAI(
            azure_endpoint = settings.AZURE_OPENAI_ENDPOINT,
            api_key = settings.AZURE_OPENAI_API_KEY,
            deployment_name = settings.AZURE_OPENAI_DEPLOYMENT,
            api_version = "2024-02-01"
        )

        self.parser = StrOutputParser()

        self.strategy_chain = STRATEGY_PROMPT | self.llm | self.parser
        self.writer_chain = WRITER_PROMPT | self.llm | self.parser
        self.editor_chain = EDITOR_PROMPT | self.llm | self.parser

    def generate_post(
            self,
            topic: str,
            tone: str,
            audience: str,
            length: str
    ) -> str:
        
        try:
            tone_value = getattr(tone, "value", tone)
            length_value = getattr(length, "value", length)

            strategy = self.strategy_chain.invoke({
                "topic": topic,
                "tone": tone_value,
                "audience": audience,
                "length": length_value
            })

            draft = self.writer_chain.invoke({
                "topic": topic,
                "tone": tone_value,
                "audience": audience,
                "length":   length_value,
                "strategy": strategy
            })

            final_post = self.editor_chain.invoke({
                "draft":draft
            })

            return final_post.strip()
        
        except BadRequestError as ex:
            error_text = str(ex)

            if "content_filter" in error_text or "ResponsibleAIPolicyViolation" in error_text:
                raise HTTPException(
                    status_code=400,
                    detail="Azure OpenAI blocked this request due to content safety filtering. Please try a more professional Linkedin topic."
                )
            
            raise HTTPException(
                status_code = 400,
                detail="Azure OpenAI rejected the request. Please check your input."
            )
        
        except Exception as ex:
            print(ex)
            raise HTTPException(
                status_code=500,
                detail="Unable to generate Linkedin post."
            )
        
        