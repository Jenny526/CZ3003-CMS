package models;

import java.util.Date;

/**
 * Created by mersin on 5/4/15.
 */
public class Dispatch {
  public int id;
  public String status;
  public Date dispatchTime;
  public Date readTime;
  public Date solveTime;
  public int eventID;
  public int agencyID;
}
