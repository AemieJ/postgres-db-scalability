CREATE SCHEMA IF NOT EXISTS parts;

CREATE FOREIGN TABLE IF NOT EXISTS parts.issues_1 PARTITION OF public.issues
FOR VALUES FROM ('500') TO ('1000') SERVER shard2;


CREATE FOREIGN TABLE IF NOT EXISTS parts.issues_3 PARTITION OF public.issues
FOR VALUES FROM ('1500') TO ('2000') SERVER shard2;


CREATE FOREIGN TABLE IF NOT EXISTS parts.issues_5 PARTITION OF public.issues
FOR VALUES FROM ('2500') TO ('3000')  SERVER shard2;


CREATE FOREIGN TABLE IF NOT EXISTS parts.issues_7 PARTITION OF public.issues
FOR VALUES FROM ('3500') TO ('4000')  SERVER shard2;

