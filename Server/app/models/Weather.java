package models;
import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by jintao on 5/4/15.
 */
@Entity
public class Weather extends Model{
    @Id
    public int id;
    public String text;
    public String celsius;

    public void setId(){

    }
    
    public void setText(String text){
        this.text = text;
    }    

    public void setCelsius(String celsius){
        this.celsius = celsius;
    }
}