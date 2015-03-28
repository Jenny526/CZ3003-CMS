package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
/**
 * Created by Yiko on 2015-03-20.
 */
@Entity
public class Event extends Model {
    @Id
    public String id;
    public String reporterName;
    public String callerNumber;
    public String type;
    public String description;
    public int priority;
    public String callingTime;
    public String location;
    public String postalCode;
    public String serviceOperatorID;

    public void setId(){
        this.id= "1";
    }
    public void setReporterName(String name){
        this.reporterName = name;

    }

    public void setCallerNumber(String number){
        this.callerNumber = number;

    }
    public void setType(String type){
        this.type = type;

    }
    public void setDescription(String des){
        this.description = des;
    }

    public void setLocation(String location){
        this.location = location;
    }
}
