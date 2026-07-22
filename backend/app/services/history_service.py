from uuid import UUID

from sqlalchemy import select

from app.core.database import SessionLocal
from app.models.db_models import PostGeneration

class HistoryService:

    async def get_history(
            self,
            session_id: UUID
    ):
        
        async with SessionLocal() as session:

            result = await session.execute(
                select(PostGeneration)
                .where(
                    PostGeneration.session_id == session_id
                )
                .order_by(
                    PostGeneration.created_at.desc()
                )
            )

            return result.scalars().all()