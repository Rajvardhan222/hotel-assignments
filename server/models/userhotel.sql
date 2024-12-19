drop table if exists user_hotel_admin cascade;
create table  if not exists user_hotel_admin (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username varchar(255) not null,
    password varchar(255) not null,
    

    constraint unique_username unique(username)

);