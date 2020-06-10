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

INSERT INTO all_quotes
    (topic, body, author, work)
VALUES
    ('being', 'Our lives are not our own. We are bound to others, past and present, and by each crime and every kindness, we birth our future.', 'David Mitchell', 'Cloud Atlas'),
    ('being', 'We know the road to freedom has always been stalked by death.', 'Angela Davies', 'unknown');

SELECT * from all_quotes;