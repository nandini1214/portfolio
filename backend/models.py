from sqlalchemy import Column, Integer, String
from .database import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    link = Column(String)
    github_link = Column(String)
    image = Column(String)  
