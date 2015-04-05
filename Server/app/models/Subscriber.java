package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by mersin on 5/4/15.
 */
@Entity
public class Subscriber extends Model{
    @Id
    public int id;
    public String subscriberName;
    public String subscriberPhoneNumber;
    public String subscriberLocation;
    public String subscriberEmail;
    
    public void setId(){
        this.id = 1;
    }
    public void setSubscriberName(String subscriberName){
        this.subscriberName = subscriberName;
    }
    
    public void setSubscriberPhoneNumber(String subscriberPhoneNumber){
        this.subscriberPhoneNumber = subscriberPhoneNumber;
    }
    
    public void setSubscriberLocation(String subscriberLocation){
        this.subscriberLocation = subscriberLocation;
    }
    
    public void setSubscriberEmail(String subscriberEmail){
        this.subscriberEmail = subscriberEmail;
    }
}