# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table call_operator (
  id                        varchar(255) not null,
  name                      varchar(255),
  password                  varchar(255),
  phone                     varchar(255),
  constraint pk_call_operator primary key (id))
;

create table event (
  id                        integer auto_increment not null,
  caller_number             varchar(255),
  description               varchar(255),
  priority                  integer,
  calling_time              varchar(255),
  location                  varchar(255),
  postal_code               varchar(255),
  reporter_id               varchar(255),
  callOperator_id           varchar(255),
  eventType_id              integer,
  constraint pk_event primary key (id))
;

create table event_type (
  id                        integer auto_increment not null,
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
  contact_number            varchar(255) not null,
  name                      varchar(255),
  nric                      varchar(255),
  constraint pk_reporter primary key (contact_number))
;

alter table event add constraint fk_event_reporter_1 foreign key (reporter_id) references reporter (contact_number) on delete restrict on update restrict;
create index ix_event_reporter_1 on event (reporter_id);
alter table event add constraint fk_event_callOperator_2 foreign key (callOperator_id) references call_operator (id) on delete restrict on update restrict;
create index ix_event_callOperator_2 on event (callOperator_id);
alter table event add constraint fk_event_eventType_3 foreign key (eventType_id) references event_type (id) on delete restrict on update restrict;
create index ix_event_eventType_3 on event (eventType_id);



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table call_operator;

drop table event;

drop table event_type;

drop table person;

drop table reporter;

SET FOREIGN_KEY_CHECKS=1;

