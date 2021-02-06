CREATE EXTENSION IF NOT EXISTS postgres_fdw;

GRANT USAGE ON
FOREIGN DATA WRAPPER postgres_fdw to aemiej;


CREATE SERVER IF NOT EXISTS shard1
FOREIGN DATA WRAPPER postgres_fdw OPTIONS (dbname 'shard1',
                                                  host '127.0.0.1',
                                                       port '5432');


CREATE USER MAPPING IF NOT EXISTS
for "aemiej" SERVER shard1 OPTIONS (user 'aemiej',
                                         password '******');


CREATE USER MAPPING IF NOT EXISTS
for "postgres" SERVER shard1 OPTIONS (user 'postgres',
                                           password '******');


CREATE SERVER IF NOT EXISTS shard2
FOREIGN DATA WRAPPER postgres_fdw OPTIONS (dbname 'shard2',
                                                  host '127.0.0.1',
                                                       port '5432');


CREATE USER MAPPING IF NOT EXISTS
for "aemiej" SERVER shard2 OPTIONS (user 'aemiej',
                                         password '******');


CREATE USER MAPPING IF NOT EXISTS
for "postgres" SERVER shard2 OPTIONS (user 'postgres',
                                         password '******');

