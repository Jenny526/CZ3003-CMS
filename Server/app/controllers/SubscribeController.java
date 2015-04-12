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

    public static Result addEvent(){
       JsonNode json = request().body().asJson();
       

    }
}