from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from . import models, utils, schemas, database

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)
    if not user or not utils.verify_password(password, user.hashed_password):
        return False
    return user
