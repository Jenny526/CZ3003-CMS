package models;
import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by jintao on 5/4/15.
 */
@Entity
public class PSI extends Model{
    @Id
    public int id;
    public String hour;
    public String value;
    public String descriptor;
    
    public void setId(){

    }

    public void setHour(String hour){
        this.hour = hour;
    }
    
    public void setValue(String value){
        this.value = value;
    }
    
    public void setDescriptor(String descriptor){
        this.descriptor = descriptor;
    }
}