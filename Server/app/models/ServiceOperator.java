package models;

import play.db.ebean.Model;
import javax.persistence.*;


/**
 * Created by mersin on 5/4/15.
 */
@Entity
public class ServiceOperator extends Model {
  @Id
  @Column(name = "serviceOperator_id")
  public int id;

  public String name;
  public String password;
  public String phone;
}
