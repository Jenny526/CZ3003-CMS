package controllers;

/**
 * Created by Jintao on 2015-04-05.
 */

import com.fasterxml.jackson.databind.JsonNode;
import com.restfb.json.JsonObject;
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

      JsonNode json = request().body().asJson();
        System.out.println(json);
        System.out.println("test connection");
//        String name = json.get("name").toString();
//        String mobile = json.get("mobile").toString();
//        String location = json.get("location").toString();
//        String email = json.get("email").toString();
//
//        Subscriber subscriber =  new Subscriber();
//
//        subscriber.setSubscriberName(name);
//        subscriber.setSubscriberPhoneNumber(mobile);
//        subscriber.setSubscriberLocation(location);
//        subscriber.setSubscriberEmail(email);
//
//        subscriber.save();
        //response().setHeader("Access-Control-Allow-Origin", "*");
       	return ok("true");
    }
}
