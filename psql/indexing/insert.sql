insert into employees (
    "firstName", "lastName"
)
select
    left(md5(i::text), 20),
    left(md5(i::text), 20)
from generate_series(1, 1000000) s(i)