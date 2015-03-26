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
    public String mobileNumber;
    public String type;
    public String description;
    public int priority;
    public String callingTime;
    public String location;
    public String postalCode;
    public String serviceOperatorID;


}
