# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table agency (
  agency_id                 integer auto_increment not null,
  name                      varchar(255),
  phone                     varchar(255),
  mail                      varchar(255),
  constraint pk_agency primary key (agency_id))
;

create table call_operator (
  callOperator_id           varchar(255) not null,
  name                      varchar(255),
  password                  varchar(255),
  phone                     varchar(255),
  constraint pk_call_operator primary key (callOperator_id))
;

create table dispatch (
  dispatch_id               integer auto_increment not null,
  status                    varchar(255),
  dispatch_time             datetime,
  read_time                 datetime,
  solve_time                datetime,
  event_id                  integer,
  agency_id                 integer,
  constraint pk_dispatch primary key (dispatch_id))
;

create table event (
  event_id                  integer auto_increment not null,
  caller_number             varchar(255),
  description               varchar(255),
  priority                  integer,
  location                  varchar(255),
  postal_code               varchar(255),
  status                    varchar(255),
  reporter_id               integer,
  callOperator_id           varchar(255),
  eventType_id              integer,
  constraint pk_event primary key (event_id))
;

create table event_type (
  eventType_id              integer auto_increment not null,
  event_name                varchar(255),
  description               varchar(255),
  constraint pk_event_type primary key (eventType_id))
;

create table notification (
  notification_id           integer auto_increment not null,
  media_type                varchar(255),
  send_time                 datetime,
  event_id                  integer,
  constraint pk_notification primary key (notification_id))
;

create table reporter (
  reporter_id               integer auto_increment not null,
  contact_number            varchar(255),
  name                      varchar(255),
  nric                      varchar(255),
  constraint pk_reporter primary key (reporter_id))
;

create table service_operator (
  serviceOperator_id        integer auto_increment not null,
  name                      varchar(255),
  password                  varchar(255),
  phone                     varchar(255),
  constraint pk_service_operator primary key (serviceOperator_id))
;

create table subscriber (
  id                        integer auto_increment not null,
  subscriber_name           varchar(255),
  subscriber_phone_number   varchar(255),
  subscriber_location       varchar(255),
  subscriber_email          varchar(255),
  constraint pk_subscriber primary key (id))
;

alter table event add constraint fk_event_reporter_1 foreign key (reporter_id) references reporter (reporter_id) on delete restrict on update restrict;
create index ix_event_reporter_1 on event (reporter_id);
alter table event add constraint fk_event_callOperator_2 foreign key (callOperator_id) references call_operator (callOperator_id) on delete restrict on update restrict;
create index ix_event_callOperator_2 on event (callOperator_id);
alter table event add constraint fk_event_eventType_3 foreign key (eventType_id) references event_type (eventType_id) on delete restrict on update restrict;
create index ix_event_eventType_3 on event (eventType_id);



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table agency;

drop table call_operator;

drop table dispatch;

drop table event;

drop table event_type;

drop table notification;

drop table reporter;

drop table service_operator;

drop table subscriber;

SET FOREIGN_KEY_CHECKS=1;

