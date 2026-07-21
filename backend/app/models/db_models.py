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
    