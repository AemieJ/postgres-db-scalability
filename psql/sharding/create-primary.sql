CREATE TABLE IF NOT EXISTS issues
(
    project_id integer,
    "title" character varying(20)
) PARTITION BY RANGE (project_id);

ALTER TABLE issues OWNER to aemiej;

ALTER TABLE issues
    ALTER COLUMN project_id SET DEFAULT nextval('issue'::regclass);