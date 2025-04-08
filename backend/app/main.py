 
from fastapi import FastAPI
from . import models, database
from .routes import auth_routes

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()
app.include_router(auth_routes.router)
