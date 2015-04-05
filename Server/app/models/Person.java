package models;

/**
 * Created by Yiko on 2015-03-17.
 */

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.*;
@Entity
public class Person extends Model{
    @Id
    @Column(name = "person_id")
    public String id;

    public String name;
}
