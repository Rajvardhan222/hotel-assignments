drop table if exists hotels cascade;
create table  if not exists hotels (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(255) not null,
    address varchar(255) not null,
    logo varchar(255) not null,
    qr_code varchar(255) not null,
    
    userid uuid not null,
    foreign key (userid) references user_hotel_admin(id) on delete cascade
    
);