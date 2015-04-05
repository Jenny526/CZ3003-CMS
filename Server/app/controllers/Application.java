package controllers;


import play.mvc.*;
import models.Event;

import play.*;
import play.data.Form;
import play.db.ebean.Model;
import play.mvc.*;
import views.html.*;



import java.util.List;

import static play.libs.Json.toJson;
import play.mvc.Controller;

public class Application extends Controller {
/*
    public static Result index() {
        return ok(index.render("Hello World."));
    }
    public static Result addPerson(){
        Person person = Form.form(Person.class).bindFromRequest().get();
        person.save();
        return redirect(routes.Application.index());
    }

    public static Result getPersons(){
        List<Person> persons = new Model.Finder(String.class, Person.class).all();
        return ok(toJson(persons));
    }
    //add event
    public static Result addEvent(){
        Event postedEvent = Form.form(Event.class).bindFromRequest().get();
        postedEvent.save();
        return redirect(routes.Application.index());
    }
    //get event
    public static Result getEvents(){
        List<Event> events = new Model.Finder(String.class, Event.class).all();
        return ok(toJson(events));
    }*/

}
