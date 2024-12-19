
create table if not exists guests (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(255) not null,
    email varchar(255) not null,
    phone varchar(255) not null,
    purposeOfVisit varchar(255) not null,
    address varchar(255) not null,
    idProofNo varchar(255) not null,
    stayFrom date not null,
    stayTo date not null,

    
    constraint stayFromBeforeStayTo check (stayFrom < stayTo),
   constraint purposeOfVisitCheck check (purposeOfVisit in ('Business', 'Personal', 'Tourist'))
 
);