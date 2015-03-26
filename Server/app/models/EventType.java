package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by Yiko on 2015-03-27.
 */

@Entity
public class EventType extends Model{
    @Id
    public String id;
    public String eventName;
    public String description;
}