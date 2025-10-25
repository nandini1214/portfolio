from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from . import models, schemas
from .database import SessionLocal, engine

# Create DB tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/projects", response_model=List[schemas.Project])
def get_projects(db: Session = Depends(get_db)):
    return db.query(models.Project).all()

@app.post("/projects", response_model=schemas.Project)
def create_project(project: schemas.ProjectCreate, db: Session = Depends(get_db)):
    new_project = models.Project(**project.dict())
    db.add(new_project)
    db.commit()
    db.refresh(new_project)
    return new_project

@app.delete("/projects/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(models.Project).filter(models.Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    db.delete(project)
    db.commit()
    return {"message": "Project deleted"}

# @app.put("/projects/{project_id}", response_model=schemas.Project)
# def update_project(project_id: int, project: schemas.ProjectCreate, db: Session = Depends(get_db)):    
#     db_project = db.query(models.Project).filter(models.Project.id == project_id).first()
#     if not db_project:        
#         raise HTTPException(status_code=404, detail="Project not found")
#     db_project.title = project.title
#     db_project.description = project.description
#     db_project.link = project.link
#     db_project.gihub_link = project.gihub_link
#     db_project.image = project.image
#     db.commit()
#     db.refresh(db_project)
#     return db_project   