-- migrate:up

create table announcements (
  id serial primary key,
  message varchar(255) not null,
  button varchar(255) not null,
  link varchar(255) not null,
  priority int not null,
  isActive bit not null default (1),
  created_at datetime not null default now(),
  updated_at datetime not null default now(),
);

-- migrate:down
drop table announcements

