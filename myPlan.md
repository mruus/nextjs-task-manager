# Task Manager Applcation

> This task management application will be a basic, and it will cover the usage of prisma with nextJs

## Languages am going to build with this project

1. NextJs
2. Tailwind CSS
3. Prisma


## Database structure
```python
# Database structure for the task management application

class User:
    id: int # auto_increment primary_key
    username: str # unique
    email: str # unique
    password: str # hashed password
    created_at: datetime # auto-generated
    updated_at: datetime # auto-generated


class Task:
    id: int # auto_increment primary_key
    title: str
    description: str
    status: int
    dueData: datetime
    user: int # foreign key refrencing 'User'
    created_at: datetime # auto-generated
    updated_at: datetime # auto-generated


# This model is for access token
class AccessToken:
    id: int # auto_increment primary_key
    token: str # unique
    user: int # foreign_key
    created_at: datetime # auto-generated
    expired_at: datetime # auto-generated

# Roles and permissions
class GroupPermission:
    id: int # auto_increment primary_key
    name: str

class Permission:
    id: int # aut_increment primary_key
    name: str # unique
    
```

