package models;

import play.db.ebean.Model;

import javax.persistence.Column;
import javax.persistence.Id;


/**
 * Created by mersin on 5/4/15.
 */
public class Agency extends Model {
  @Id
  @Column(name = "agency_id")
  public int id;

  public String name;
  public String phone;
  public String mail;

}
