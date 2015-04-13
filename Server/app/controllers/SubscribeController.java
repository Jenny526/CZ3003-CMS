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

        System.out.println(json.toString());
        return ok();
    }
}
//    public boolean report(){
//
//            String url = getUrl("/calloperator/report");
//            //POST request with above parameters in the method arguments;
//            //The server will return a json object with two nodes.
//            //POST request with parameters id and password;
//            HttpPost httppost = new HttpPost(url);
//
//            List<NameValuePair> params = new ArrayList<NameValuePair>(1);
//            params.add(new BasicNameValuePair("subscriberMobileNumber",name ));
//            httppost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));
//
//            HttpResponse response = httpclient.execute(httppost);
//            HttpEntity entity = response.getEntity();
//            //{"error": 0/1 (error = 0 if successful, 1 if not)
//            //"message": *****		(The message explaining the reason)
//            //}
//            if (entity != null){
//                InputStream instream = entity.getContent();
//                String result = getStringFromInputStream(instream);
//                return parseErrorMessage(result);
//
//            }



