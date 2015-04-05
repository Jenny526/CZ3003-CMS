package controllers;

/**
 * Created by Jintao on 2015-04-05.
 */


import models.*;

import play.data.DynamicForm;
import play.data.Form;
import play.db.ebean.Model;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

import java.util.List;

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

        Subscriber newSubscriber = new Subscriber();

        newSubscriber.setId();// unfinished, to generate eventID

        newSubscriber.setSubscriberName(subscriberName);
        newSubscriber.setSubscriberPhoneNumber(subscriberPhoneNumber);
        newSubscriber.setSubscriberLocation(subscriberLocation);
        newSubscriber.setSubscriberEmail(subscriberEmail);
        newSubscriber.save();

        return redirect(routes.CallOperatorController.index());

    }

    //get event
    public static Result getEvents(){
        List<Event> events = new Model.Finder(String.class, Event.class).all();
        return ok(toJson(events));
    }
}