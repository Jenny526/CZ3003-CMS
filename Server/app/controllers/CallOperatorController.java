package controllers;

/**
 * Created by Yiko on 2015-03-17.
 */
import com.avaje.ebean.Ebean;
import com.sun.java.accessibility.util.EventID;
import play.*;
import play.data.DynamicForm;
import play.data.Form;
import play.mvc.*;

import java.security.*;

import play.mvc.Security;
import views.html.*;

import play.data.validation.Constraints;

public class CallOperatorController extends Controller{
    // Call Operator Log In Method
    /*public static Result LogIn(){
        DynamicForm requestData = Form.form().bindFromRequest();
        String ID = requestData.get("COID");
        String password = requestData.get("password");
        CallOperator callOperator = CallOperator.authenticate(COID, password); // method to be declared in Model CallOperator
        if (callOperator == null){
            session().clear();
            return ok("Login Failure: Call Operator ID or Password is not correct.");
        }
        session("connected","COID"); // create new session for call operator
        return ok("Logged in as Call Operator " + COID + "!");
    }


    @Security.Authenticated(CallOperatorSecured.class) //check whether a particular CO has logged in
    public static Result createEvent(){
        DynamicForm requestData = Form.form().bindFromRequest();

            EventType eventType = Ebean.find(EventType.class,Long.parseLong(requestData.get("ETID"))); //get event type ID

            CallOperator callOperator = Ebean.find(CallOperator.class,Long.parseLong(requestData.get("COID")));// get call operator ID

            String priority = requestData.get("priority");

            String postalCode = requestData.get("postalCode");

            String location = requestData.get("location");

            String callerPhone = requestData.get("callerPhone");

            String description = requestData.get("description");

            Event newEvent = new Event();

            newEvent.setId();// unfinished, to generate eventID
            newEvent.setEventType(eventType);
            newEvent.setCallOperator(callOperator);
            newEvent.setCallerPhone(callerPhone);
            newEvent.setCallingTime();// unfinished, to get current time
            newEvent.setDescription(description);
            newEvent.setLocation(location);
            newEvent.setPostalCode(postalCode);
            newEvent.setPriority(Integer.parseInt(priority));

        return ok("Uploading succeeded!");
    }

    @Security.Authenticated(CallOperatorSecured.class) //check whether a particular CO has logged in
    public static Result updateEvent(){
        DynamicForm requestData = Form.form().bindFromRequest();
            EventType eventType = Ebean.find(EventType.class,Long.parseLong(requestData.get("eventTypeID")));
            EventID eventID = Ebean.find(EventID.class, Long.parseLong(requestData.get("eventID")));
            CallOperator callOperator = Ebean.find(CallOperator.class,Long.parseLong(requestData.get("callOperatorID")));

            String status = requestData.get("status");
            String description = requestData.get("description");
            uploadedEvent.setStatus(Integer.parseInt(status));
            uploadedEvent.setDescription(description);
            if (status == "2"){
                createdEvent.setSolvedTime();// unfinished, to set solve time
            }

        return ok("Event " + eventID + " has been successfully updated.");
    }*/
}


