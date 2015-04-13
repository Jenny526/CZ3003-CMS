import com.sun.deploy.net.HttpResponse;
import org.omg.CORBA.NameValuePair;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import org.apache.http.*;

import java.util.List;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.Timestamp;
import java.util.ArrayList;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONArray;
import org.json.JSONObject;
/**
 * Created by Yiko on 2015-04-13.
 */
public class Test {
    public void getSentEvents() {
        String loginURL = getUrl("/agency/login");
        //POST request with parameters id and password;
        HttpPost httppost = new HttpPost(loginURL);

        List<NameValuePair> params = new ArrayList<NameValuePair>(2);
        params.add(new BasicNameValuePair("id", this.getId()));
        params.add(new BasicNameValuePair("password", this.getPassword()));
        httppost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));

        HttpResponse response = httpclient.execute(httppost);
        HttpEntity entity = response.getEntity();
        //If login is unsuccessful,
        //Server returns a json object with two nodes
        //{"error": 1
        //"message": *****		(The message explaining the reason)
        //}
        //
        InputStream instream = entity.getContent();
        String result = getStringFromInputStream(instream);
        JSONObject jsonObj = new JSONObject(result);

    }
}
