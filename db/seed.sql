DROP DATABASE IF EXISTS quotes;
CREATE DATABASE quotes;

\c quotes;

CREATE TABLE all_quotes
    (
        quote_id SERIAL PRIMARY KEY,
        topic VARCHAR(40),
        body 
    )
