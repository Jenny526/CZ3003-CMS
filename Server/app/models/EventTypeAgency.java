package models;

import play.db.ebean.Model;
import javax.persistence.*;


/**
 * Created by mersin on 5/4/15.
 */
public class EventTypeAgency extends Model {
  @Id
  public int agencyID;

  public int eventTypeID;
}
