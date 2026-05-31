from langchain_openai import AzureChatOpenAI
from dotenv import load_dotenv
import os

load_dotenv()

llm = AzureChatOpenAI(
    azure_endpoint = os.getenv("AZURE_OPENAI_ENDPOINT"),
    api_key = os.getenv("AZURE_OPENAI_API_KEY"),
    deployment_name = os.getenv("AZURE_OPENAI_DEPLOYMENT"),
    api_version="2024-02-01"
)

response = llm.invoke("Generate a LinkedIn post of about the benefits of using Azure OpenAI for developers.")

print(response.content)