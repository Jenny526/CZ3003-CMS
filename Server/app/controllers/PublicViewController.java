package controllers;

/**
 * Created by Yiko on 2015-04-09.
 */

import play.mvc.*;
import models.Event;

import play.*;
import play.data.Form;
import play.db.ebean.Model;
import play.mvc.*;
import scala.util.parsing.json.JSON;
import views.html.*;
import java.util.List;

import static play.libs.Json.toJson;
import static play.mvc.Results.ok;

import java.io.FileWriter;
import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import play.mvc.Controller;

public class PublicViewController {
    public static Result getEvents() throws IOException {
        List<Event> events = new Model.Finder(String.class, Event.class).all();
        FileWriter file = new FileWriter("C:/Users/Yiko/Documents/GitHub/CZ3003-CMS/test.json");
        int i =0;
        file.write("[");
       while (i < events.size()) {

           file.write(ControllerUtil.getEventJsonNode(events.get(i)).toString());
           if (i<events.size()-1)
               file.write(",");
           System.out.println("Successfully Copied JSON Object to File...");
           System.out.println("\nJSON Object: " + events.get(i));
           i++;
       }
            file.write("]");
            file.flush();
            file.close();


        return ok(toJson(events));
    }
}
