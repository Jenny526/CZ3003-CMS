package models;

import play.data.format.Formats;
import play.db.ebean.Model;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by mersin on 5/4/15.
 */
@Entity
public class Notification extends Model {
    @Id
    @Column(name = "notification_id")
    public int id;

    public String mediaType;

    @Formats.DateTime(pattern="dd/MM/yyyy")
    public Date sendTime;

    @ManyToOne
    @JoinColumn(name ="event_id")
    public int eventID;
}
