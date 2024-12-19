drop table if exists hotel_guest cascade;
create table  if not exists hotel_guest (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel uuid references hotels(id) on delete cascade,
    guest uuid references guests(id) on delete cascade

);