package models;

/**
 * Created by Yiko on 2015-03-17.
 */

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Person extends Model{
    @Id
    public String id;
    public String name;
}
