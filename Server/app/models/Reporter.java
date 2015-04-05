package models;

import play.data.validation.Constraints;
import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.Constraint;

/**
 * Created by Yiko on 2015-03-28.
 */

@Entity
public class Reporter extends Model{
    @Id
    public int id;

    @Constraints.Required
    public String contactNumber;
    @Constraints.Required
    public String name;
    @Constraints.Required
    public String NRIC;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getNRIC() {
        return NRIC;
    }

    public void setNRIC(String NRIC) {
        this.NRIC = NRIC;
    }
}
