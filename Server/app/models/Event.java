package models;

import play.data.validation.Constraints;
import play.db.ebean.Model;


import javax.persistence.*;

/**
 * Created by Yiko on 2015-03-20.
 */
@Entity
public class Event extends Model {
    @Id
    @Column(name = "event_id")
    public Integer id;

   // @Column (name= "reporterName")
    //@Constraints.Required
    //public String reporterName;
    @Constraints.Required
    public String callerNumber;
    public String description;
    @Constraints.Required
    public int priority;
    @Constraints.Required
    public String callingTime;
    @Constraints.Required
    public String location;
    @Constraints.Required
    public String postalCode;
    @OneToOne
    @JoinColumn(name = "reporter_id")
    public Reporter reporter;
    @ManyToOne
    @JoinColumn(name="callOperator_id")
    private CallOperator callOperator;
    @ManyToOne
    @JoinColumn(name="eventType_id")
    private EventType eventType;
    /*@OneToMany(mappedBy="event",cascade = CascadeType.REMOVE)
    private List<Dispatch> dispatches;

    @OneToMany(mappedBy="event", cascade = CascadeType.REMOVE)
    private List<Notification> notifications;*/



    public EventType getEventType() {
        return eventType;
    }
    public void setEventType(EventType eventType) {
        this.eventType = eventType;
    }

    public void setCallerNumber(String number){
        this.callerNumber = number;

    }
    public void setDescription(String des){
        this.description = des;
    }

    public void setLocation(String location){
        this.location = location;
    }

    public String getLocation(){
        return this.location;
    }
}


