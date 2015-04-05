package controllers;

/**
 * Created by Yiko on 2015-03-17.
 */

import com.itextpdf.text.Document;
import com.avaje.ebean.Ebean;
import models.Event;
import models.EventType;
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

public class SubscribeController extends Controller{
    private static Result redirect;

    public static Result index() {
        return ok(index.render("yes"));
    }


    public static Result addEvent(){
        DynamicForm requestData = Form.form().bindFromRequest();

        String subscriberName = requestData.get("subscriberName");
        String subscriberPhoneNumber = requestData.get("subscriberMobileNumber");
        String subscriberLocation = requestData.get("subscriberLocation");
        String subscriberEmail = requestData.get("subscriberEmail");

        Event newEvent = new Event();

        newEvent.setId();// unfinished, to generate eventID

        newEvent.setSubscriberName(subscriberName);
        newEvent.setSubscriberPhoneNumber(subscriberPhoneNumber);
        newEvent.setSubscriberLocation(subscriberLocation);
        newEvent.setSubscriberEmail(subscriberEmail);
        newEvent.save();

        return redirect(routes.SubscribeController.index());

    }

    //get event
    public static Result getEvents(){
        List<Event> events = new Model.Finder(String.class, Event.class).all();
        return ok(toJson(events));
    }
}