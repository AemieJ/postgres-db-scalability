CREATE SCHEMA IF NOT EXISTS parts;
SET SEARCH_PATH=parts,public;

CREATE TABLE issues_0
(
    project_id integer,
    "title" character varying(20)
);


CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
CREATE INDEX ON issues_0(project_id);

--- 

CREATE SCHEMA IF NOT EXISTS parts;
SET SEARCH_PATH=parts,public;

CREATE TABLE issues_2
(
    project_id integer,
    "title" character varying(20)
);


CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
CREATE INDEX ON issues_2(project_id);

---

CREATE SCHEMA IF NOT EXISTS parts;
SET SEARCH_PATH=parts,public;

CREATE TABLE issues_4
(
    project_id integer,
    "title" character varying(20)
);


CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
CREATE INDEX ON issues_4(project_id);

---

CREATE SCHEMA IF NOT EXISTS parts;
SET SEARCH_PATH=parts,public;

CREATE TABLE issues_6
(
    project_id integer,
    "title" character varying(20)
);


CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
CREATE INDEX ON issues_6(project_id);