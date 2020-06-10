DROP DATABASE IF EXISTS quotes;
CREATE DATABASE quotes;

\c quotes;

CREATE TABLE all_quotes (
    quote_id SERIAL PRIMARY KEY,
    topic VARCHAR(40) NOT NULL,
    body VARCHAR(500) NOT NULL,
    author VARCHAR(40),
    work VARCHAR(40)
);