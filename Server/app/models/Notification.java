package models;

import play.db.ebean.Model;
import javax.persistence.*;
import java.util.Date;
import play.data.format.*;

/**
 * Created by mersin on 5/4/15.
 */
public class Notification extends Model {
  @Id
  @Column(name = "notification_id")
  public int id;

  public String mediaType;

  @Formats.DateTime(pattern="dd/MM/yyyy")
  public Date sendTime;

  public int eventID;
}
