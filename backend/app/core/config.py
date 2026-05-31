from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    AZURE_OPENAI_API_KEY = os.getenv(
        "AZURE_OPENAI_API_KEY"
    )

    AZURE_OPENAI_ENDPOINT = os.getenv(
        "AZURE_OPENAI_ENDPOINT"
    )


settings = Settings()