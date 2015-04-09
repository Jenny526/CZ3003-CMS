package models;

import play.data.validation.Constraints;
import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.*;

/**
 * Created by Yiko on 2015-03-27.
 */

@Entity
public class EventType extends Model{
    @Id
    @Column(name = "eventType_id")
    public Integer id;

    public String eventName;
    public String description;

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
