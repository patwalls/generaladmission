# Schema Information

## attendance
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, foreign key
artist_id       | integer   | not null, indexed, foreign key
venue_id        | integer   | not null, indexed, foreign key
text_review     | text      | 
rating          | integer   | not null
photo           | text      |  
date            | date      |  

## venues
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
photo           | text      |
genre           | text      |
description     | text      |
songkick_id     | integer   | not null, indexed, unique

## artists
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
photo           | text      |
genre           | text      |
description     | text      |
songkick_id     | integer   | not null, indexed, unique


## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, indexed, foreign key
friend_id   | integer   | not null, indexed, foreign key


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    | not null
photo           | text      | not null
