package models;


import com.avaje.ebean.Ebean;
import play.data.validation.Constraints;

import javax.persistence.*;
import java.util.List;



/**
 * Created by Yiko on 2015-04-05.
 */
@Entity
public class CallOperator {
    @Id
    @Column(name = "callOperator_id")
    public String id;

    @Constraints.Required
    public String name;

    @Constraints.Required
    public String password;

    public String phone;

    @OneToMany(mappedBy = "callOperator", cascade = CascadeType.PERSIST)
    private List<Event> events;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public CallOperator authenticate(String id, String password){
        CallOperator callOperator = Ebean.find(CallOperator.class, id);
        if (callOperator.getPassword() == password){
            return callOperator;
        }
        else return null;
    }

}


