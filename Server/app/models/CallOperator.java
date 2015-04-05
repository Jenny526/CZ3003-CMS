package models;


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
}

