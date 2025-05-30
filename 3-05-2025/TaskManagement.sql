create database TaskManagement
use TaskManagement
--1. Roles Table
CREATE TABLE Roles (
    RoleId INT PRIMARY KEY IDENTITY(1,1),
    RoleName VARCHAR(50) NOT NULL UNIQUE CHECK (RoleName IN ('Site Admin', 'Project Manager', 'Developer', 'QA'))
);

--2. UserInfo Table
CREATE TABLE UserInfo (
    UserId INT PRIMARY KEY IDENTITY(1,1),
    UserName VARCHAR(100) NOT NULL,
    RoleId INT NOT NULL FOREIGN KEY REFERENCES Roles(RoleId),
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(10) NOT NULL,
    Phone VARCHAR(15) NOT NULL
);

--3. Project Table
CREATE TABLE Project (
    ProjId INT PRIMARY KEY IDENTITY(1,1),
    Title VARCHAR(100) NOT NULL UNIQUE,
    Description TEXT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NULL
);

--4. ProjectMember Bridge Table
CREATE TABLE ProjectMember (
    MemberId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT NOT NULL FOREIGN KEY REFERENCES UserInfo(UserId),
    ProjId INT NOT NULL FOREIGN KEY REFERENCES Project(ProjId),
    CONSTRAINT UQ_User_Project UNIQUE (UserId, ProjId)
);

--5. TaskTypeMaster Table
CREATE TABLE TaskTypeMaster (
    TaskTypeId INT PRIMARY KEY IDENTITY(1,1),
    TaskTypeName VARCHAR(50) NOT NULL UNIQUE CHECK (TaskTypeName IN ('OPEN', 'INPROGRESS', 'RESOLVED', 'CLOSED'))
);

--6. Task Table
CREATE TABLE Task (
    TaskId INT PRIMARY KEY IDENTITY(1,1),
    TaskTitle VARCHAR(100) NOT NULL,
    Description TEXT NULL,
    AssignedTo INT NOT NULL FOREIGN KEY REFERENCES ProjectMember(MemberId),
    TaskType VARCHAR(20) NOT NULL CHECK (TaskType IN ('Bug', 'New Feature')),
    StartDate DATE NULL,
    EndDate DATE NULL,
    TaskStatusId INT NOT NULL FOREIGN KEY REFERENCES TaskTypeMaster(TaskTypeId)
);

--7. Comment Table
CREATE TABLE Comment (
    CommentId INT PRIMARY KEY IDENTITY(1,1),
    Title VARCHAR(200) NOT NULL,
    ParentTaskId INT NOT NULL FOREIGN KEY REFERENCES Task(TaskId),
    TaskDescription TEXT NULL,
    CommentBy INT NOT NULL FOREIGN KEY REFERENCES ProjectMember(MemberId),
    CommentDate DATETIME NOT NULL DEFAULT GETDATE()
);

INSERT INTO Roles (RoleName) VALUES 
('Site Admin'),
('Project Manager'),
('Developer'),
('QA');

select *from Roles

INSERT INTO UserInfo (UserName, RoleId, Email, Password, Phone) VALUES
('Anjali', 1, 'anjali@taskapp.com', 'pass1234', '9876543210'),  -- Site Admin
('Bhavani', 2, 'bhavani@taskapp.com', 'manager1', '9876543211'), -- Project Manager
('Chandrika', 3, 'chandrika@taskapp.com', 'devpass1', '9876543212'), -- Developer
('Deepika', 4, 'deepika@taskapp.com', 'qapass123', '9876543213'), -- QA
('Eesha', 3, 'eesha@taskapp.com', 'dev123456', '9876543214'), -- Developer
('Farzana', 4, 'farzana@taskapp.com', 'qapass456', '9876543215'); -- QA

select *from UserInfo

INSERT INTO Project (Title, Description, StartDate, EndDate) VALUES
('TaskManager System', 'Project Management Tool for Developers and QA', '2025-04-01', NULL);

select *from Project

INSERT INTO ProjectMember (UserId, ProjId) VALUES
(2, 1), -- Bhavani - Project Manager
(3, 1), -- Chandrika - Developer
(4, 1), -- Deepika - QA
(5, 1), -- Eesha - Developer
(6, 1); -- Farzana - QA

select *from ProjectMember

INSERT INTO TaskTypeMaster (TaskTypeName) VALUES
('OPEN'),
('INPROGRESS'),
('RESOLVED'),
('CLOSED');

select *from TaskTypeMaster

INSERT INTO Task (TaskTitle, Description, AssignedTo, TaskType, StartDate, EndDate, TaskStatusId) VALUES
('Login Issue', 'Login fails with error', 3, 'Bug', '2025-04-05', NULL, 1),
('Add Notification Feature', 'Implement notification alerts', 5, 'New Feature', '2025-04-07', NULL, 1);

select *from Task

INSERT INTO Comment (Title, ParentTaskId, TaskDescription, CommentBy, CommentDate) VALUES
('comment1', 1, 'Checking the login service', 3, '2025-04-06'),
('comment2', 2, 'Setting up notification UI', 5, '2025-04-08'),
('comment3', 1, 'needs more logs', 4, '2025-04-09');

select *from Comment
