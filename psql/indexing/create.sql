CREATE TABLE IF NOT EXISTS employees
(
    id bigint,
    "firstName" character varying(20),
    "lastName" character varying(20),
    PRIMARY KEY (id)
);

ALTER TABLE employees OWNER to aemiej;

ALTER TABLE employees
    ALTER COLUMN id SET DEFAULT nextval('indexing'::regclass);