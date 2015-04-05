# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table event (
  id                        integer auto_increment not null,
<<<<<<< Updated upstream
=======
  reporter_name             varchar(255),
>>>>>>> Stashed changes
  caller_number             varchar(255),
  type                      varchar(255),
  description               varchar(255),
  priority                  integer,
  calling_time              varchar(255),
  location                  varchar(255),
  postal_code               varchar(255),
  call_operator_id          varchar(255),
  reporter_id               integer,
  constraint pk_event primary key (id))
;

create table event_type (
  id                        varchar(255) not null,
  event_name                varchar(255),
  description               varchar(255),
  constraint pk_event_type primary key (id))
;

create table person (
  id                        varchar(255) not null,
  name                      varchar(255),
  constraint pk_person primary key (id))
;

create table reporter (
  reporter_id               integer auto_increment not null,
  name                      varchar(255),
  contact_number            varchar(255),
  nric                      varchar(255),
  constraint pk_reporter primary key (reporter_id))
;

<<<<<<< Updated upstream
alter table event add constraint fk_event_reporter_1 foreign key (reporter_id) references reporter (reporter_id) on delete restrict on update restrict;
create index ix_event_reporter_1 on event (reporter_id);
=======
>>>>>>> Stashed changes



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table event;

drop table event_type;

drop table person;

drop table reporter;

SET FOREIGN_KEY_CHECKS=1;

