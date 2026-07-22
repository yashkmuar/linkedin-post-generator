from datetime import datetime
from uuid import UUID

from sqlalchemy import TIMESTAMP
from sqlalchemy import ForeignKey
from sqlalchemy import Text
from sqlalchemy import VARCHAR

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from app.core.database import Base

class UserSession(Base):
    __tablename__ = "user_sessions"

    id: Mapped[UUID] = mapped_column(
        primary_key=True
    )

    created_at: Mapped[datetime] = mapped_column(
        TIMESTAMP
    )

    last_seen_at: Mapped[datetime] = mapped_column(
        TIMESTAMP
    )

class PostGeneration(Base):

    __tablename__ = "post_generations"

    id: Mapped[UUID] = mapped_column(
        primary_key=True
    )

    session_id: Mapped[UUID] = mapped_column(
        ForeignKey("user_sessions.id")
    )

    topic: Mapped[str] = mapped_column(
        Text
    )

    audience: Mapped[str] = mapped_column(
        Text
    )

    tone: Mapped[str] = mapped_column(
        VARCHAR(50)
    )

    length: Mapped[str] = mapped_column(
        VARCHAR(20)
    )

    generated_post: Mapped[str] = mapped_column(
        Text
    )

    created_at: Mapped[datetime] = mapped_column(
        TIMESTAMP
    )


class UserPreference(Base):
    __tablename__ = "user_preferences"

    id: Mapped[UUID] = mapped_column(
        primary_key=True
    )

    session_id: Mapped[UUID] = mapped_column(
        ForeignKey("user_sessions.id"),
        unique=True
    )

    preferred_tone: Mapped[str | None] = mapped_column(
        VARCHAR(50)
    )

    preferred_length: Mapped[str | None] = mapped_column(
        VARCHAR(20)
    )

    preferred_audience: Mapped[str | None] = mapped_column(
        Text
    )

    style_summary: Mapped[str | None] = mapped_column(
        Text
    )

    updated_at: Mapped[datetime] = mapped_column(
        TIMESTAMP
    )
