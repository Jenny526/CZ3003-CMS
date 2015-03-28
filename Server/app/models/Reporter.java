package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by Yiko on 2015-03-28.
 */

@Entity
public class Reporter extends Model{
    @Id

    public String id;
    public String name;
    public String contactNumber;
    public String NRIC;
}
