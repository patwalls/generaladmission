# Schema Information

## notes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
notebook_id | integer   | not null, foreign key (references notebooks), indexed
archived    | boolean   | not null, default: false

## notebooks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## reminders
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
note_id     | string    | not null, foreign key (references notes), indexed
date        | datetime  | not null
type        | string    | not null
prev_id     | integer   | foreign key (references reminders), indexed

## attendance
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
artist_id   | integer   | not null, foreign key
user_id     | integer   | not null, indexed
user_id     | integer   | not null, indexed
user_id     | integer   | not null, indexed

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
