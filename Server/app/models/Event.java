package models;

import play.data.validation.Constraints;
import play.db.ebean.Model;
//import sun.util.calendar.BaseCalendar;


import javax.persistence.*;
import java.security.Timestamp;
import java.util.List;

/**
 * Created by Yiko on 2015-03-20.
 */
@Entity
@MappedSuperclass
public class Event extends Model {
    @Id
    @Column(name = "event_id")
    public Integer id;

   // @Column (name= "reporterName")
    //@Constraints.Required
    //public String reporterName;
    @Constraints.Required
    private String callerNumber;
    private String description;
    @Constraints.Required
    private int priority;
//    @Constraints.Required
//    private Timestamp callingTime;
    @Constraints.Required
    private String location;
    @Constraints.Required
    private String postalCode;
    private String status;
    @OneToOne
    @JoinColumn(name = "reporter_id")
    private Reporter reporter;
    @ManyToOne
    @JoinColumn(name="callOperator_id")
    private CallOperator callOperator;
    @ManyToOne
    @JoinColumn(name="eventType_id")
    private EventType eventType;

//    private String[] coords;
//    private Timestamp solvedTime;
    /*@OneToMany(mappedBy="event",cascade = CascadeType.REMOVE)
    private List<Dispatch> dispatches;

    @OneToMany(mappedBy="event", cascade = CascadeType.REMOVE)
    private List<Notification> notifications;*/

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public EventType getEventType() {
        return eventType;
    }
    public void setEventType(EventType eventType) {
        this.eventType = eventType;
    }

    public void setCallerNumber(String number){
        this.callerNumber = number;

    }

    public String getDescription() {
        return description;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPostalCode() {
        return postalCode;
    }
    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

//    public String[] getCoords() {
//        return coords;
//    }
//
//    public void setCoords(String coords) {
//        this.coords = coords.split(" ");
//    }
}


