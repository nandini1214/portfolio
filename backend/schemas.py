from pydantic import BaseModel

class ProjectBase(BaseModel):
    title: str
    description: str
    link: str

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int

    class Config:
        orm_mode = True
