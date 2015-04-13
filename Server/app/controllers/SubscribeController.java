package controllers;

/**
 * Created by Jintao on 2015-04-05.
 */

import com.fasterxml.jackson.databind.JsonNode;
import models.*;

import play.data.DynamicForm;
import play.data.Form;
import play.db.ebean.Model;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

import java.util.List;

import static play.libs.Json.toJson;

public class SubscribeController extends Controller {
    private static Result redirect;

    public static Result addEvent() {

        response().setHeader("Access-Control-Allow-Origin", "*");
        response().setHeader("Allow", "*");
        response().setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        response().setHeader("Access-Control-Allow-Methods", "POST, GET");
        JsonNode json = request().body().asJson();

        String name = json.get("name");
        String mobile = json.get("mobile");
        String location = json.get("location");
        String email = json.get("email");

        Subscriber subscriber =  new Subscriber();

        subscriber.setSubscriberName(name);
        subscriber.setSubscriberPhoneNumber(mobile);
        subscriber.setSubscriberLocation(location);
        subscriber.setSubscriberEmail(email);

        subscriber.save();

       	return ok();
    }
}
