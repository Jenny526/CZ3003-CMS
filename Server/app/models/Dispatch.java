package models;

import play.db.ebean.Model;
import javax.persistence.*;
import java.util.Date;
import play.data.format.*;

/**
 * Created by mersin on 5/4/15.
 */
public class Dispatch extends Model {
  @Id
  @Column(name = "dispatch_id")
  public int id;

  public String status;

  @Formats.DateTime(pattern = "dd/MM/yyyy")
  public Date dispatchTime;

  @Formats.DateTime(pattern = "dd/MM/yyyy")
  public Date readTime;

  @Formats.DateTime(pattern = "dd/MM/yyyy")
  public Date solveTime;

  public int eventID;
  public int agencyID;
}
