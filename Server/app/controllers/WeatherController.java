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

public class WeatherController extends Controller {
    private static Result redirect;

    public static Result addEvent() {
        JsonNode json = request().body().asJson();

        String text = json.get("text").toString();
        String celsius = json.get("celsius").toString();

        Weather weather = new Weather();

        weather.setText(text);
        weather.setCelsius(celsius);

        weather.save();
       	return ok();
    }
}