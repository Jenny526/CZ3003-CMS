package controllers;

/**
 * Created by Jintao on 2015-04-05.
 */

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ArrayNode;
import models.*;

import play.data.DynamicForm;
import play.data.Form;
import play.db.ebean.Model;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

import java.util.List;

import static play.libs.Json.toJson;

public class DengueController extends Controller {
    private static Result redirect;

    public static Result addEvent() {
        JsonNode json = request().body().asJson();
        ArrayNode dengueList = (ArrayNode)json;

        Iterator<JsonNode> it = dengueList.iterator();

        while(it.hasNext()){
            JsonNode dengueData = it.next();
            Dengue dengue = new Dengue();

            dengue.setCallingNumber(dengueData.get("callingNumber"));
            dengue.setDescription(dengueData.get("description"));
            dengue.setPriority(dengueData.get("priority"));
            dengue.setCallingTime(dengueData.get("callingTime"));
            dengue.setLocation(dengueData.get("location"));
            dengue.setPostalCode(dengueData.get("postalCode"));
            dengue.setReporter(dengueData.get("reporter"));
            JsonNode eventType = dengueData.get("eventType");
            dengue.setEventName(eventType.get("eventName"));
            JsonNode coords = dengueData.get("coords");
            dengue.setLat(coords.get("lat"));
            dengue.setLng(coords.get("lng"));
            dengue.setShowWindow(dengueData.get("showWindow"));
            JsonNode options = dengueData.get("options");
            dengue.setDraggable(options.get("draggable"));
            dengue.setIconUrl(dengueData.get("iconUrl"));

            dengue.save();
            
        }

        return ok();
    }
}