package models;

import play.data.format.Formats;
import play.db.ebean.Model;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by mersin on 5/4/15.
 */
@Entity
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

    @ManyToOne
    @JoinColumn(name = "event_id")
    public int eventID;

    @ManyToOne
    @JoinColumn(name = "agency_id")
    public int agencyID;
}
