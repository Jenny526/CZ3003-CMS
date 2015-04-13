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
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import views.html.index;
import play.mvc.BodyParser.Json;

import java.util.List;
import java.util.Map;

import static play.libs.Json.toJson;


public class SubscribeController extends Controller{

    private static Result redirect;
    public static Result check() {
        response().setHeader("Access-Control-Allow-Origin", "*");
        response().setHeader("Allow", "*");
        response().setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
        response().setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Referer, User-Agent");
        return ok();
    }



    @BodyParser.Of(BodyParser.Json.class)
    public static Result addEvent() {
        //DynamicForm form = Form.form().bindFromRequest();
      // Map<String,String[]> paras= request().body().asFormUrlEncoded();

       Http.RequestBody body = request().body();

//        DynamicForm requestDate = Form.form().bindFromRequest();
  //      String name = requestDate.get("name");
        System.out.println("request_data: " + body.asText());

       // System.out.println(paras);
//        System.out.println("test connection");
//        String name = json.findPath("name").textValue();
       // System.out.println(body);
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
       // response().setHeader("Access-Control-Allow-Origin", "*");
       	return ok(body.asText());
    }
}
