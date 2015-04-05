package models;

<<<<<<< HEAD
import play.data.validation.Constraints;

import javax.persistence.CascadeType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

/**
 * Created by Yiko on 2015-04-05.
 */
public class CallOperator {
    @Id
    public String id;
    @Constraints.Required
    public String name;
    @Constraints.Required
    public String password;
    public String phone;
    @OneToMany(mappedBy = "callOperator",cascade = CascadeType.PERSIST)
    private List<Event> events;

