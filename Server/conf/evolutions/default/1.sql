# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table event (
  id                        varchar(255) not null,
  reporter_name             varchar(255),
  mobile_number             varchar(255),
  type                      varchar(255),
  description               varchar(255),
  priority                  integer,
  calling_time              varchar(255),
  location                  varchar(255),
  postal_code               varchar(255),
  service_operator_id       varchar(255),
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

create sequence event_seq;

create sequence event_type_seq;

create sequence person_seq;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists event;

drop table if exists event_type;

drop table if exists person;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists event_seq;

drop sequence if exists event_type_seq;

drop sequence if exists person_seq;

