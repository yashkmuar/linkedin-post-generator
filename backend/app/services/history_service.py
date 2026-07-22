from uuid import UUID

from datetime import datetime
from uuid import uuid4

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
        

    async def save_generation(
            self,
            session_id,
            topic,
            audience,
            tone,
            length,
            generated_post
    ):
        
        async with SessionLocal() as session:

            post = PostGeneration(
                id=uuid4(),
                session_id=session_id,
                topic=topic,
                audience=audience,
                tone=tone,
                length=length,
                generated_post=generated_post,
                created_at=datetime.now()
            )

            session.add(post)

            await session.commit()

            return post