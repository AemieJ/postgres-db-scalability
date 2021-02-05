CREATE TABLE IF NOT EXISTS car
(
    id bigint not null,
    "carName" character varying(10),
    PRIMARY KEY (id)
) PARTITION BY RANGE (id);

CREATE TABLE car_cmodel01 PARTITION OF car 
    FOR VALUES FROM ('1') TO ('50000');

CREATE TABLE car_cmodel02 PARTITION OF car 
    FOR VALUES FROM ('50000') TO ('100000');

CREATE TABLE car_cmodel03 PARTITION OF car 
    FOR VALUES FROM ('100000') TO ('500000');

CREATE TABLE car_cmodel04 PARTITION OF car 
    FOR VALUES FROM ('500000') TO ('1000000');

ALTER TABLE car OWNER to aemiej;

ALTER TABLE car
    ALTER COLUMN id SET DEFAULT nextval('partition'::regclass);