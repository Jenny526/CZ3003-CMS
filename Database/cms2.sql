-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015-04-17 18:18:10
-- 服务器版本： 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cms2`
--

-- --------------------------------------------------------

--
-- 表的结构 `agency`
--

CREATE TABLE IF NOT EXISTS `agency` (
  `agency_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `agency`
--

INSERT INTO `agency` (`agency_id`, `name`, `phone`, `mail`) VALUES
(1, 'Singapore Civil Defence Force (SCDF)', '83420050', 'yikolyk@gmail.com'),
(2, 'Singapore Power', '84036721', 'qiyiru@gmail.com');

-- --------------------------------------------------------

--
-- 表的结构 `call_operator`
--

CREATE TABLE IF NOT EXISTS `call_operator` (
  `callOperator_id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `event`
--

CREATE TABLE IF NOT EXISTS `event` (
`event_id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `reporter_id` varchar(11) DEFAULT NULL,
  `event_Type` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `show_window` varchar(255) DEFAULT NULL,
  `draggable` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `event`
--

INSERT INTO `event` (`event_id`, `description`, `priority`, `location`, `status`, `reporter_id`, `event_Type`, `latitude`, `longitude`, `show_window`, `draggable`) VALUES
(1, 'A furious fire', 1, 'NTU', 'resolved', '1', 'fire', '1.348310', '103.683135', 'false', 'false'),
(2, 'Dengue bursts out', 2, 'Changi Airport', 'pending', '0', 'dengue', '1.364420', '103.991531', 'false', 'false'),
(3, 'Fire discovered yesterday.', 3, 'ION orchard ', 'resolved', '1', 'fire', 'undefined', 'undefined', 'false', 'false'),
(4, '5 people were affected.', 3, 'Chinatown', 'pending', '2', 'flu', '1.284440', '103.843376', 'false', 'false'),
(5, '2 people were affected.', 5, 'The Fullerton Hotel Singapore', 'pending', '0', 'flu', 'undefined', 'undefined', 'false', 'false'),
(6, '2 people were affected.', 1, 'Raffles Place ', 'pending', '2', 'dengue', '1.283931', '103.851461', 'false', 'false'),
(8, 'Rescue is needed.', 2, '639810', 'pending', '3', 'gas', 'undefined', 'undefined', 'false', 'false'),
(9, 'Gas Leak.', 3, '119077', 'pending', '3', 'gas', 'undefined', 'undefined', 'false', 'false'),
(10, 'fire detected.', 1, '639812', 'pending', '10', 'fire', '1.350801', '103.685113', 'false', 'false'),
(11, '100 students were affected.', 1, 'Ngee Ann Polytechnic', 'pending', '11', 'fire', 'undefined', 'undefined', 'false', 'false'),
(12, 'flu test', 3, '238801', 'pending', '0', 'flu', '1.304052', '103.831767', 'false', 'false'),
(13, 'fire solved', 3, '238801', 'resolved', '0', 'fire', 'undefined', 'undefined', 'false', 'false'),
(14, 'Rescue needed.', 1, '609430', 'resolved', '0', 'rescue', 'undefined', 'undefined', 'false', 'false'),
(15, 'Severe gas leak detected.', 2, '098585', 'resolved', '0', 'gas', 'undefined', 'undefined', 'false', 'false'),
(16, 'flu fb test', 3, '639811', 'pending', '0', 'flu', '1.351952', '103.685702', 'false', 'false'),
(19, 'Testing', 1, '639810', 'pending', 'undefined', 'flu', '1.354297', '103.685623', 'false', 'false'),
(20, 'Testing 2', 3, '639811', 'pending', 'undefined', 'fire', '1.351952', '103.685702', 'false', 'false');

-- --------------------------------------------------------

--
-- 表的结构 `event_type`
--

CREATE TABLE IF NOT EXISTS `event_type` (
  `eventType_id` int(11) NOT NULL,
  `event_Type` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `event_type`
--

INSERT INTO `event_type` (`eventType_id`, `event_Type`, `description`) VALUES
(1, 'dengue', 'Dengue fever also known as breakbone fever, is a mosquito-borne tropical disease caused by the dengue virus. '),
(2, 'fire', NULL),
(3, 'flu', NULL),
(4, 'rescue', NULL),
(5, 'gas', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `haze`
--

CREATE TABLE IF NOT EXISTS `haze` (
  `id` int(11) NOT NULL,
  `current_hour` varchar(255) DEFAULT NULL,
  `has_haze` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `play_evolutions`
--

CREATE TABLE IF NOT EXISTS `play_evolutions` (
  `id` int(11) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `applied_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `apply_script` text,
  `revert_script` text,
  `state` varchar(255) DEFAULT NULL,
  `last_problem` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `play_evolutions`
--

INSERT INTO `play_evolutions` (`id`, `hash`, `applied_at`, `apply_script`, `revert_script`, `state`, `last_problem`) VALUES
(1, '69ef56009031412b0977ed85bdb652e7ddca5919', '2015-04-13 06:01:04', 'create table agency (\nagency_id                 integer auto_increment not null,\nname                      varchar(255),\nphone                     varchar(255),\nmail                      varchar(255),\nconstraint pk_agency primary key (agency_id))\n;\n\ncreate table call_operator (\ncallOperator_id           varchar(255) not null,\nname                      varchar(255),\npassword                  varchar(255),\nphone                     varchar(255),\nconstraint pk_call_operator primary key (callOperator_id))\n;\n\ncreate table dengue (\nid                        integer auto_increment not null,\ncalling_number            varchar(255),\ndescription               varchar(255),\npriority                  varchar(255),\ncalling_time              varchar(255),\nlocation                  varchar(255),\npostal_code               varchar(255),\nreporter                  varchar(255),\nevent_name                varchar(255),\nlat                       varchar(255),\nlng                       varchar(255),\nshow_window               varchar(255),\ndraggable                 varchar(255),\nicon_url                  varchar(255),\nconstraint pk_dengue primary key (id))\n;\n\ncreate table dispatch (\ndispatch_id               integer auto_increment not null,\nstatus                    varchar(255),\ndispatch_time             datetime,\nread_time                 datetime,\nsolve_time                datetime,\nevent_id                  integer,\nagency_id                 integer,\nconstraint pk_dispatch primary key (dispatch_id))\n;\n\ncreate table event (\nevent_id                  integer auto_increment not null,\ncaller_number             varchar(255),\ndescription               varchar(255),\npriority                  integer,\nlocation                  varchar(255),\npostal_code               varchar(255),\nstatus                    varchar(255),\nreporter_id               integer,\ncallOperator_id           varchar(255),\neventType_id              integer,\ncoords                    varchar(255),\nlantitude                 varchar(255),\nlongtitude                varchar(255),\nconstraint pk_event primary key (event_id))\n;\n\ncreate table event_type (\neventType_id              integer auto_increment not null,\nevent_name                varchar(255),\ndescription               varchar(255),\nconstraint pk_event_type primary key (eventType_id))\n;\n\ncreate table haze (\nid                        integer auto_increment not null,\nhour                      varchar(255),\nhas_haze                  tinyint(1) default 0,\nconstraint pk_haze primary key (id))\n;\n\ncreate table notification (\nnotification_id           integer auto_increment not null,\nmedia_type                varchar(255),\nsend_time                 datetime,\nevent_id                  integer,\nconstraint pk_notification primary key (notification_id))\n;\n\ncreate table psi (\nid                        integer auto_increment not null,\nhour                      varchar(255),\nvalue                     varchar(255),\ndescriptor                varchar(255),\nconstraint pk_psi primary key (id))\n;\n\ncreate table reporter (\nreporter_id               integer auto_increment not null,\ncontact_number            varchar(255),\nname                      varchar(255),\nnric                      varchar(255),\nconstraint pk_reporter primary key (reporter_id))\n;\n\ncreate table service_operator (\nserviceOperator_id        integer auto_increment not null,\nname                      varchar(255),\npassword                  varchar(255),\nphone                     varchar(255),\nconstraint pk_service_operator primary key (serviceOperator_id))\n;\n\ncreate table subscriber (\nid                        integer auto_increment not null,\nsubscriber_name           varchar(255),\nsubscriber_phone_number   varchar(255),\nsubscriber_location       varchar(255),\nsubscriber_email          varchar(255),\nconstraint pk_subscriber primary key (id))\n;\n\ncreate table weather (\nid                        integer auto_increment not null,\ntext                      varchar(255),\ncelsius                   varchar(255),\nconstraint pk_weather primary key (id))\n;\n\nalter table event add constraint fk_event_reporter_1 foreign key (reporter_id) references reporter (reporter_id) on delete restrict on update restrict;\ncreate index ix_event_reporter_1 on event (reporter_id);\nalter table event add constraint fk_event_callOperator_2 foreign key (callOperator_id) references call_operator (callOperator_id) on delete restrict on update restrict;\ncreate index ix_event_callOperator_2 on event (callOperator_id);\nalter table event add constraint fk_event_eventType_3 foreign key (eventType_id) references event_type (eventType_id) on delete restrict on update restrict;\ncreate index ix_event_eventType_3 on event (eventType_id);', 'SET FOREIGN_KEY_CHECKS=0;\n\ndrop table agency;\n\ndrop table call_operator;\n\ndrop table dengue;\n\ndrop table dispatch;\n\ndrop table event;\n\ndrop table event_type;\n\ndrop table haze;\n\ndrop table notification;\n\ndrop table psi;\n\ndrop table reporter;\n\ndrop table service_operator;\n\ndrop table subscriber;\n\ndrop table weather;\n\nSET FOREIGN_KEY_CHECKS=1;', 'applied', ''),
(1, '69ef56009031412b0977ed85bdb652e7ddca5919', '2015-04-13 06:01:04', 'create table agency (\nagency_id                 integer auto_increment not null,\nname                      varchar(255),\nphone                     varchar(255),\nmail                      varchar(255),\nconstraint pk_agency primary key (agency_id))\n;\n\ncreate table call_operator (\ncallOperator_id           varchar(255) not null,\nname                      varchar(255),\npassword                  varchar(255),\nphone                     varchar(255),\nconstraint pk_call_operator primary key (callOperator_id))\n;\n\ncreate table dengue (\nid                        integer auto_increment not null,\ncalling_number            varchar(255),\ndescription               varchar(255),\npriority                  varchar(255),\ncalling_time              varchar(255),\nlocation                  varchar(255),\npostal_code               varchar(255),\nreporter                  varchar(255),\nevent_name                varchar(255),\nlat                       varchar(255),\nlng                       varchar(255),\nshow_window               varchar(255),\ndraggable                 varchar(255),\nicon_url                  varchar(255),\nconstraint pk_dengue primary key (id))\n;\n\ncreate table dispatch (\ndispatch_id               integer auto_increment not null,\nstatus                    varchar(255),\ndispatch_time             datetime,\nread_time                 datetime,\nsolve_time                datetime,\nevent_id                  integer,\nagency_id                 integer,\nconstraint pk_dispatch primary key (dispatch_id))\n;\n\ncreate table event (\nevent_id                  integer auto_increment not null,\ncaller_number             varchar(255),\ndescription               varchar(255),\npriority                  integer,\nlocation                  varchar(255),\npostal_code               varchar(255),\nstatus                    varchar(255),\nreporter_id               integer,\ncallOperator_id           varchar(255),\neventType_id              integer,\ncoords                    varchar(255),\nlantitude                 varchar(255),\nlongtitude                varchar(255),\nconstraint pk_event primary key (event_id))\n;\n\ncreate table event_type (\neventType_id              integer auto_increment not null,\nevent_name                varchar(255),\ndescription               varchar(255),\nconstraint pk_event_type primary key (eventType_id))\n;\n\ncreate table haze (\nid                        integer auto_increment not null,\nhour                      varchar(255),\nhas_haze                  tinyint(1) default 0,\nconstraint pk_haze primary key (id))\n;\n\ncreate table notification (\nnotification_id           integer auto_increment not null,\nmedia_type                varchar(255),\nsend_time                 datetime,\nevent_id                  integer,\nconstraint pk_notification primary key (notification_id))\n;\n\ncreate table psi (\nid                        integer auto_increment not null,\nhour                      varchar(255),\nvalue                     varchar(255),\ndescriptor                varchar(255),\nconstraint pk_psi primary key (id))\n;\n\ncreate table reporter (\nreporter_id               integer auto_increment not null,\ncontact_number            varchar(255),\nname                      varchar(255),\nnric                      varchar(255),\nconstraint pk_reporter primary key (reporter_id))\n;\n\ncreate table service_operator (\nserviceOperator_id        integer auto_increment not null,\nname                      varchar(255),\npassword                  varchar(255),\nphone                     varchar(255),\nconstraint pk_service_operator primary key (serviceOperator_id))\n;\n\ncreate table subscriber (\nid                        integer auto_increment not null,\nsubscriber_name           varchar(255),\nsubscriber_phone_number   varchar(255),\nsubscriber_location       varchar(255),\nsubscriber_email          varchar(255),\nconstraint pk_subscriber primary key (id))\n;\n\ncreate table weather (\nid                        integer auto_increment not null,\ntext                      varchar(255),\ncelsius                   varchar(255),\nconstraint pk_weather primary key (id))\n;\n\nalter table event add constraint fk_event_reporter_1 foreign key (reporter_id) references reporter (reporter_id) on delete restrict on update restrict;\ncreate index ix_event_reporter_1 on event (reporter_id);\nalter table event add constraint fk_event_callOperator_2 foreign key (callOperator_id) references call_operator (callOperator_id) on delete restrict on update restrict;\ncreate index ix_event_callOperator_2 on event (callOperator_id);\nalter table event add constraint fk_event_eventType_3 foreign key (eventType_id) references event_type (eventType_id) on delete restrict on update restrict;\ncreate index ix_event_eventType_3 on event (eventType_id);', 'SET FOREIGN_KEY_CHECKS=0;\n\ndrop table agency;\n\ndrop table call_operator;\n\ndrop table dengue;\n\ndrop table dispatch;\n\ndrop table event;\n\ndrop table event_type;\n\ndrop table haze;\n\ndrop table notification;\n\ndrop table psi;\n\ndrop table reporter;\n\ndrop table service_operator;\n\ndrop table subscriber;\n\ndrop table weather;\n\nSET FOREIGN_KEY_CHECKS=1;', 'applied', '');

-- --------------------------------------------------------

--
-- 表的结构 `psi`
--

CREATE TABLE IF NOT EXISTS `psi` (
`id` int(11) NOT NULL,
  `current_hour` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `descriptor` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `psi`
--

INSERT INTO `psi` (`id`, `current_hour`, `value`, `descriptor`) VALUES
(1, 'baby', 'Come', 'test me'),
(2, 'bbb', 'b', 'b'),
(3, '9', '34-44', 'good');

-- --------------------------------------------------------

--
-- 表的结构 `reporter`
--

CREATE TABLE IF NOT EXISTS `reporter` (
  `reporter_id` varchar(11) NOT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nric` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `reporter`
--

INSERT INTO `reporter` (`reporter_id`, `contact_number`, `name`, `nric`) VALUES
('0', '12345678', 'name', 'nricnric'),
('0', '12345678', 'fb', 'fbfbfbfbf'),
('0', '93875844', 'haha', '123'),
('0', 'undefined', 'undefined', 'undefined'),
('0', 'undefined', 'undefined', 'undefined'),
('0', 'undefined', 'undefined', 'undefined'),
('123', 'undefined', 'undefined', 'undefined'),
('5000', 'undefined', 'undefined', 'undefined'),
('1000', 'undefined', 'undefined', 'undefined'),
('3', 'undefined', 'undefined', 'undefined'),
('0', 'undefined', 'undefined', 'undefined'),
('404', 'undefined', 'undefined', 'undefined'),
('4', 'undefined', 'undefined', 'undefined'),
('U122222', 'undefined', 'undefined', 'undefined'),
('U1220769H', 'undefined', 'undefined', 'undefined'),
('U122', 'undefined', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- 表的结构 `service_operator`
--

CREATE TABLE IF NOT EXISTS `service_operator` (
  `serviceOperator_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `subscriber`
--

CREATE TABLE IF NOT EXISTS `subscriber` (
`id` int(11) NOT NULL,
  `subscriber_name` varchar(255) DEFAULT NULL,
  `subscriber_phone_number` varchar(255) DEFAULT NULL,
  `subscriber_location` varchar(255) DEFAULT NULL,
  `subscriber_email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `subscriber`
--

INSERT INTO `subscriber` (`id`, `subscriber_name`, `subscriber_phone_number`, `subscriber_location`, `subscriber_email`) VALUES
(3, 'LIU YIKUN', '97374214', 'NTU', 'yikolyk@gmail.com');

-- --------------------------------------------------------

--
-- 表的结构 `weather`
--

CREATE TABLE IF NOT EXISTS `weather` (
`id` int(11) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `celsius` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `weather`
--

INSERT INTO `weather` (`id`, `text`, `celsius`) VALUES
(3, 'Mostly Cloudy', '29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agency`
--
ALTER TABLE `agency`
 ADD PRIMARY KEY (`agency_id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
 ADD PRIMARY KEY (`event_id`), ADD KEY `ix_event_reporter_1` (`reporter_id`);

--
-- Indexes for table `event_type`
--
ALTER TABLE `event_type`
 ADD PRIMARY KEY (`eventType_id`);

--
-- Indexes for table `haze`
--
ALTER TABLE `haze`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `psi`
--
ALTER TABLE `psi`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriber`
--
ALTER TABLE `subscriber`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `weather`
--
ALTER TABLE `weather`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `psi`
--
ALTER TABLE `psi`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `subscriber`
--
ALTER TABLE `subscriber`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `weather`
--
ALTER TABLE `weather`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
