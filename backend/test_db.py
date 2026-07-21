import asyncio

from sqlalchemy import text
from app.core.database import engine


async def test_connection():
    async with engine.begin() as conn:

        result = await conn.execute(
            text("SELECT current_database();")
        )

        print(result.scalar())


asyncio.run(test_connection())