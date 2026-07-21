from sqlalchemy.ext.asyncio import create_async_engine

DATABASE_URL = (
    "postgresql+asyncpg://linkedin_app:"
    "linkedin_app_password@localhost:5432/"
    "linkedin_post_generator"
)

engine = create_async_engine(
    DATABASE_URL,
    echo=True
)