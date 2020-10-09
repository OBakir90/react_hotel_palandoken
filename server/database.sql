CREATE DATABASE hotel_app;

CREATE TABLE rooms (
    id SERIAL PRIMARY KEY not null,
    room_type VARCHAR(255) not null,
    price INTEGER not null
)