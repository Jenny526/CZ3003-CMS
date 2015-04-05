package controllers;

/**
 * Created by Yiko on 2015-03-17.
 */


import com.avaje.ebean.Ebean;
import models.*;
import play.*;
import play.data.DynamicForm;
import play.data.Form;
import play.db.ebean.Model;
import play.mvc.*;

import java.security.*;
import java.util.List;

import play.mvc.Security;
import views.html.*;

import play.data.validation.Constraints;

import static play.libs.Json.toJson;

public class  CallOperatorController extends Controller{
    public static Result login(){
        return ok(views.html.login.render("ok"));
    };
    // Call Operator Log In Method
    public static Result LogIn(){
        DynamicForm requestData = Form.form().bindFromRequest();
        String id = requestData.get("COID");
        String password = requestData.get("password");
        CallOperator callOperator = CallOperator.authenticate(id, password); // method to be declared in Model CallOperator
        if (callOperator == null){
            session().clear();
            return ok("Login Failure: Call Operator ID or Password is not correct.");
        }
        session("connected","COID"); // create new session for call operator
        return ok("Logged in as Call Operator " + id + "!");
    }
    public static Result index() {return ok(index.render("yes"));}


    public static Result addEvent(){
       // Event postedEvent = Form.form(Event.class).bindFromRequest().get();

        DynamicForm requestData = Form.form().bindFromRequest();

        EventType eventType = Ebean.find(EventType.class,Integer.parseInt(requestData.get("ETID"))); //get event type ID

        //CallOperator callOperator = Ebean.find(CallOperator.class,Long.parseLong(requestData.get("COID")));// get call operator ID

       String reporterName = requestData.get("reporterName");
        //String priority = requestData.get("priority");

        String postalCode = requestData.get("postalCode");

        String location = requestData.get("location");

        String callerPhone = requestData.get("mobileNumber");

        String description = requestData.get("description");
        String NRIC = requestData.get("NRIC");

        Event newEvent = new Event();
        Reporter reporter =  new Reporter();

        newEvent.setEventType(eventType);

        reporter.setContactNumber(callerPhone);
        reporter.setName(reporterName);
        reporter.setNRIC(NRIC);


        //newEvent.setId();// unfinished, to generate eventID
        newEvent.setEventType(eventType);
        //newEvent.setCallOperator(callOperator);

        //newEvent.setCallerNumber(callerPhone);
        //newEvent.setCallingTime();// unfinished, to get current time
        newEvent.setDescription(description);
        newEvent.setLocation(location);
       // newEvent.setPostalCode(postalCode);
        //newEvent.setPriority(Integer.parseInt(priority));
        newEvent.save();
        reporter.save();
       // return ok(newEvent.size());
        return redirect(routes.CallOperatorController.index());

    }

    //get event
    public static Result getEvents(){
        List<Event> events = new Model.Finder(String.class, Event.class).all();
        return ok(toJson(events));
    }

   /*@Security.Authenticated(CallOperatorSecured.class) //check whether a particular CO has logged in
    public static Result addEvent(){
        DynamicForm requestData = Form.form().bindFromRequest();

            EventType eventType = Ebean.find(EventType.class,Long.parseLong(requestData.get("ETID"))); //get event type ID

            //CallOperator callOperator = Ebean.find(CallOperator.class,Long.parseLong(requestData.get("COID")));// get call operator ID

            String priority = requestData.get("priority");

            String postalCode = requestData.get("postalCode");

            String location = requestData.get("location");

            String callerPhone = requestData.get("callerPhone");

            String description = requestData.get("description");

            Event newEvent = new Event();

           // newEvent.setId();// unfinished, to generate eventID
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


