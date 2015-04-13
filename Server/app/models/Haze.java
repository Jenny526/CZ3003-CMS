package models;
import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by jintao on 5/4/15.
 */
@Entity
public class Haze extends Model{
    @Id
    public int id;
    public String hour;
    public boolean hasHaze;
    
    public void setId(){

    }

    public void setHour(String hour){
        this.hour = hour;
    }
    
    public void setHasHaze(boolean hasHaze){
        this.hasHaze = hasHaze;
    }
}