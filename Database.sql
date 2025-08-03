
CREATE DATABASE task_manager_api;
USE task_manager_api;
create table users (
id int auto_increment primary key,
name varchar(100),
email varchar(100) unique,
password varchar(255),
created_at timestamp default current_timestamp
);


create table tasks (
id int auto_increment primary key,
user_id int,
title varchar(200),
description text,
status enum('pending','completed') default 'pending',
priority enum('low','medium','high') default 'medium',
due_date date,
created_at timestamp default current_timestamp,
foreign key (user_id) references users(id) on delete cascade
);