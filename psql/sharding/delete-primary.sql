-- delete foreign tables
DROP
FOREIGN TABLE IF EXISTS parts.issues_0,
               parts.issues_1,
               parts.issues_2,
               parts.issues_3,
               parts.issues_4,
               parts.issues_5,
               parts.issues_6,
               parts.issues_7;

-- delete user mappings and the foreign servers
DROP USER MAPPING IF EXISTS
for "aemiej" SERVER shard1;

DROP USER MAPPING IF EXISTS
for "postgres" SERVER shard1;

DROP USER MAPPING IF EXISTS
for "aemiej" SERVER shard2;

DROP USER MAPPING IF EXISTS
for "postgres" SERVER shard2;

DROP SERVER IF EXISTS shard1;

DROP SERVER IF EXISTS shard2;

DROP EXTENSION IF EXISTS postgres_fdw;

-- drop table and the sequence 
DROP TABLE IF EXISTS issues;
DROP SEQUENCE IF EXISTS issue;
DROP SCHEMA IF EXISTS parts;