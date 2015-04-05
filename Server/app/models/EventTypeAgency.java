package models;

import play.db.ebean.Model;
import javax.persistence.*;


/**
 * Created by mersin on 5/4/15.
 */
@Entity
public class EventTypeAgency extends Model {
  @Id
  @Column(name = "eventTypeAgency_id")
  public int id;


  public int agencyID;

  public int eventTypeID;
}
