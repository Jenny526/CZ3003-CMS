
package models;

import play.db.ebean.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by mersin on 5/4/15.
 */
public class Subscriber extends Model{
    @Id
    public int id;
    public String subscriberName;
    public String subscriberPhoneNumber;
    public String subscriberLocation;
    public String subscriberEmail;
    
    public void setId(){

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