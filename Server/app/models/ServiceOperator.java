package models;

import play.db.ebean.Model;
import javax.persistence.*;


/**
 * Created by mersin on 5/4/15.
 */
public class ServiceOperator extends Model {
  @Id
  public int id;
  public String name;
  public String password;
  public String phone;
}
