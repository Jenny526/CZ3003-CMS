package models;
import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by jintao on 5/4/15.
 */
@Entity
public class Dengue extends Model{
    @Id
    public int id;
    public String callingNumber;
    public String description;
    public String priority;
    public String callingTime;
    public String location;
    public String postalCode;
    public String reporter;
    public String eventName;
    public String lat;
    public String lng;
    public String showWindow;
    public String draggable;
    public String iconUrl;
    
    public void setId(){

    }
    public void setCallingNumber(String callingNumber){
        this.callingNumber = callingNumber;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setPriority(String priority){
        this.priority = priority;
    }

    public void setCallingTime(String callingTime){
        this.callingTime = callingTime;
    }

    public void setLocation(String location){
        this.location = location;
    }

    public void setPostalCode(String postalCode){
        this.postalCode = postalCode;
    }

    public void setReporter(String reporter){
        this.reporter = reporter;
    }

    public void setEventName(String eventName){
        this.eventName = eventName;
    }

    public void setLat(String lat){
        this.lat = lat;
    }

    public void setLng(String lng){
        this.lng = lng;
    }

    public void setShowWindow(String showWindow){
        this.showWindow = showWindow;
    }

    public void setDraggable(String draggable){
        this.draggable = draggable;
    }

    public void setIconUrl(String iconUrl){
        this.iconUrl = iconUrl;
    }
}