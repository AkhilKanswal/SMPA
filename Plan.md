# SeamlessleManageableProjectAssitant(SMPA)


## Plan of the things as we go about implementing them

I'll make an Project management cum Planner app that has badass GUI using React for frontend and Django for backend

I'll create an GUI and will implement an plan to CRUD operation in django using all the knowledge we have.

*C - create a new task/projects and account<br>*
*R - read/extract the list of task/projects/users as per request(with pervilages)<br>* 
*U - make changes to the task/projects and task/projects list<br>*
*D - delete the task(s)/projects(s) and account<br>*


* we'll keep track of the day,week and even month
* user can add tasks as per the timeline as well as implementing them using their specific needs 
* A system where users can create projects, add tasks, assign deadlines, and track progress.
* User can lable tasks as important ,urgent, completed, etc.
* Add tasks to projects with deadlines, priority, and status.
* we'll keep things seperate bases on a specific account giving users Roles such as: Admin, Project Manager, Team Member, giving them certain previlages and resericting some.

**
Authentication: JWT-based login/signup (Django REST + React frontend).

Projects & Tasks:

Create, update, delete projects.



Frontend: React dashboard with Kanban board or task list view.

Backend: Django REST API with endpoints for users, projects, tasks.**


## getting started with phases

PHASE 0: Groundwork (Setup & Planning)

Goal: Set up the environment and tools before writing serious code.

🔧 Tools / Tech Stack:

Frontend: React (with TailwindCSS or Material UI for good UX)

Backend: Django + Django REST Framework

Auth: JWT-based (SimpleJWT or Djoser)

DB: PostgreSQL (recommended), or SQLite (for dev)

Dev tools: Git + GitHub, VSCode, Postman, Insomnia

Checklist:

 Set up the Django project & app (django-admin startproject, startapp)

 Set up REST API (install DRF, create serializers & views)

 Set up React frontend (npx create-react-app)

 Set up Git & version control from the start

 Create a folder structure plan (backend + frontend separate)

🧱 PHASE 1: User Authentication & Roles

Goal: Users can register, log in, and access content based on roles (Admin, PM, Member).

Backend:

 Create User model (extend with custom roles if needed)

 Set up JWT auth (using SimpleJWT or Djoser)

 Create endpoints for register, login, logout, profile

 Assign roles to users (Admin, Manager, Member)

 Add permissions based on roles (DRF permissions system)

Frontend:

 Auth pages: Register, Login, Profile

 Store JWT in localStorage or httpOnly cookies

 Use React Context or Redux to manage auth state

 Protect routes (e.g., show dashboard only if logged in)

Checkpoint Activity:
Can the user:
✔ Register
✔ Login
✔ Be redirected to a dashboard
✔ Access only allowed features (based on role)

📁 PHASE 2: Projects & Tasks Models

Goal: Build the core models for Projects and Tasks, and make sure CRUD works.

Backend:

 Create models: Project, Task, Label, etc.

 Link projects to users (creator, team members)

 Link tasks to projects + assigned users

 Fields like: title, description, priority, status, deadline, etc.

 Create serializers & API views

 Add permissions (e.g., only project members can see/edit)

Frontend:

 Create forms to create/edit/delete projects & tasks

 Display lists of projects and tasks

 Use React hooks (useEffect, useState) to fetch API data

Checkpoint Activity:
Can a user:
✔ Create a new project
✔ Add tasks to it
✔ View their own tasks
✔ Assign team members
✔ Label tasks (urgent, completed, etc.)

📆 PHASE 3: Planner / Timeline Features

Goal: Help users plan by day, week, and month.

Backend:

 Add due_date, created_at, completed_at to tasks

 Create endpoints to filter tasks by:

Due today

Due this week

Overdue

Completed

Frontend:

 Calendar view (you can use FullCalendar or a React date-picker)

 Filter/sort tasks by timeline

 Highlight important/urgent tasks

 Optional: Gantt chart or simple timeline

📊 PHASE 4: Kanban & Dashboard

Goal: Make it visually intuitive to manage tasks

Frontend:

 Dashboard view with quick stats (e.g., # of tasks due today)

 Implement Kanban board (e.g., columns: To Do, In Progress, Done)

Use drag & drop (try react-beautiful-dnd)

 Allow status updates by drag/drop

Backend:

 Add API support to update task status (e.g., PATCH to change column)

🔐 PHASE 5: Roles, Permissions, Final Touches

Goal: Polish and finalize access control and UX

 Only admins can delete users or projects

 Only managers can assign tasks

 Team members can mark tasks complete but not reassign

 Add notifications (optional)

 Error handling and validations

🧪 PHASE 6: Testing & Deployment

 Write unit tests (especially for backend)

 Manual test all features

 Use tools like Postman to test all endpoints

 Deploy backend (e.g., Render, Railway, Heroku)

 Deploy frontend (e.g., Netlify, Vercel)

 Set up CI/CD (optional)

✅ Final Checklist
**Feature**	                    **Done?**
Auth & Roles	
Projects & Tasks	
Task Labels & Priorities	
Timeline filtering	
Kanban board	
User permissions	
Fully deployed app