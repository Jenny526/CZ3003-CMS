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

public class PSIController extends Controller {
    private static Result redirect;

    public static Result addEvent() {
        JsonNode json = request().body().asJson();

        JsonNode PSI = json.get("PSI");
        JsonNode hazeData = json.get("haze");
        
        boolean hasHaze = hazeData.get("hasHaze").booleanValue();

        String hour = PSI.get("hour").toString();
        String value = PSI.get("PSIValue").toString();
        String descriptor = PSI.get("descriptor").toString();

        PSI psi = new PSI();
        Haze haze = new Haze();

        psi.setHour(hour);
        psi.setValue(value);
        psi.setDescriptor(descriptor);

        haze.setHour(hour);
        haze.setHasHaze(hasHaze);

        psi.save();
        haze.save();

       	return ok();
    }
}