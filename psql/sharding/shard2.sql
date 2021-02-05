CREATE SCHEMA IF NOT EXISTS parts;
SET SEARCH_PATH=parts,public;

CREATE TABLE issues_1
(
    project_id integer,
    "title" character varying(20)
);


CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
CREATE INDEX ON issues_1(project_id);

--- 

CREATE SCHEMA IF NOT EXISTS parts;
SET SEARCH_PATH=parts,public;

CREATE TABLE issues_3
(
    project_id integer,
    "title" character varying(20)
);


CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
CREATE INDEX ON issues_3(project_id);

---

CREATE SCHEMA IF NOT EXISTS parts;
SET SEARCH_PATH=parts,public;

CREATE TABLE issues_5
(
    project_id integer,
    "title" character varying(20)
);


CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
CREATE INDEX ON issues_5(project_id);

---

CREATE SCHEMA IF NOT EXISTS parts;
SET SEARCH_PATH=parts,public;

CREATE TABLE issues_7
(
    project_id integer,
    "title" character varying(20)
);


CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
CREATE INDEX ON issues_7(project_id);