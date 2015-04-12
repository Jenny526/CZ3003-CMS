//package controllers;
//
//import java.util.Map;
//import client.CMSServerInterface.CMSServerException;
//import java.io.BufferedReader;
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.Iterator;
//import java.util.List;
//import java.io.InputStream;
//import java.io.InputStreamReader;
//import java.io.UnsupportedEncodingException;
//import java.util.HashMap;
//
//import com.sun.deploy.net.HttpResponse;
//import org.apache.http.NameValuePair;
//import org.apache.http.client.methods.HttpPost;
//import org.apache.http.client.methods.HttpGet;
//import org.apache.http.message.BasicNameValuePair;
//import org.apache.http.client.entity.UrlEncodedFormEntity;
//import org.apache.http.HttpResponse;
//import org.apache.http.HttpEntity;
//import org.apache.http.client.HttpClient;
//import org.apache.http.impl.client.DefaultHttpClient;
//import org.json.JSONObject;
//import org.json.JSONArray;
////public class CallOperatorServerInterface extends CMSServerInterface {
////    //Return CallOperator instance for successful login
////    public CallOperator login() throws CMSServerException{
////
////        try{
////            String loginURL = getUrl("/calloperator/login");
////            //POST request with parameters id and password;
////            HttpPost httppost = new HttpPost(loginURL);
////
////            List<NameValuePair> params = new ArrayList<NameValuePair>(2);
////            params.add(new BasicNameValuePair("id", this.getId()));
//            params.add(new BasicNameValuePair("password", this.getPassword()));
////            httppost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));
////
////            HttpResponse response = this.httpclient.execute(httppost);
////            HttpEntity entity = response.getEntity();
////            //If login is unsuccessful,
////            //Server returns a json object with two nodes
////            //{"error": 1
////            //"message": *****		(The message explaining the reason)
////            //}
////            //
////            if (entity != null){
////                InputStream instream = entity.getContent();
////                String result = getStringFromInputStream(instream);
////                JSONObject jsonObj = new JSONObject(result);
////                String errorCode = jsonObj.get("error").toString();
////                switch (errorCode) {
////                    case "0":
////                        CallOperator newCallOperator = new CallOperator(jsonObj.get("id").toString(),jsonObj.get("name").toString(),jsonObj.get("phone").toString());
////                        return newCallOperator;
////                    case "1":
////                        String msg = jsonObj.get("message").toString();
////                        throw new Exception (msg);
////                }
////
////            }
////            return null;
////        }catch (Exception e){
////            //If login is successful
////            //Server returns a json object with four nodes:
////            //{"error":0
////            //	"id": *** (callOperator userID)
////            //  "name": *** (callOperator Name)
////            //   "phone": *** (callOperator's phone)
////            //}
////            e.printStackTrace();
////            throw new CMSServerException (2,e.getMessage());
////            //if error = 1 or any exception thrown during the http connection
////            //Then throw CMSServerException with (id = 2,message)
////        }
////    }
////
////    //return whether the event report to server is successful or not
////    public boolean report(String eventTypeID,
////                          String priority,
////                          String callOperatorID,
////                          String postalCode,
////                          String location,
////                          String callerPhone,
////                          String description) throws CMSServerException, UnsupportedEncodingException, IOException{
////
////        try{
////            String url = getUrl("/calloperator/report");
////            //POST request with above parameters in the method arguments;
////            //The server will return a json object with two nodes.
////            //POST request with parameters id and password;
////            HttpPost httppost = new HttpPost(url);
////
////            List<NameValuePair> params = new ArrayList<NameValuePair>(7);
////            params.add(new BasicNameValuePair("eventTypeID",eventTypeID ));
////            params.add(new BasicNameValuePair("priority", priority));
////            params.add(new BasicNameValuePair("callOperatorID", callOperatorID));
////            params.add(new BasicNameValuePair("postalCode", postalCode));
////            params.add(new BasicNameValuePair("location", location));
////            params.add(new BasicNameValuePair("callerPhone", callerPhone));
////            params.add(new BasicNameValuePair("description", description));
////            httppost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));
////
////            HttpResponse response = httpclient.execute(httppost);
////            HttpEntity entity = response.getEntity();
////            //{"error": 0/1 (error = 0 if successful, 1 if not)
////            //"message": *****		(The message explaining the reason)
////            //}
////            if (entity != null){
////                InputStream instream = entity.getContent();
////                String result = getStringFromInputStream(instream);
////                return parseErrorMessage(result);
////
////            }
////        }catch (Exception e){
////            throw new CMSServerException (2,e.getMessage());
////        }
////        //if error = 1 or any exception thrown during the http connection
////        //Then throw CMSServerException with (id = 2,message)
////        return false;
////
////    }
//
//    public Event getNewEvent(){
//        String url = getUrl("/getNewEvent");
//        HttpGet httpget = new HttpGet(url);
//        HttpResponse response = httpclient.execute(httpget);
//        HttpEntity entity = response.getEntity();
//        if entity != null{
//            String result = getStringFromInputStream(instream);
//            JSONObject jsonObj = new JSONObject(result);
//            System.out.println("get new event from Call Operator");
//            JSONObject item = jsonEventType.getJSONObject;
//            Event event = new Event(jsonObj.get("id").toString(),jsonObj.get("name").toString(),jsonObj.get("description").toString());
//;
//            }
//            return event;
//        }
//
//    }
//
//
//    //return a list of eventType's id and eventType's name key pair Map
//    //return null for unsuccessful request or an exception has been thrown
//    public Map<String,String> getEventTypes() throws CMSServerException, IOException{
//        String url = getUrl("/getEventTypes");
//        //GET request with no parameters;
//        HttpGet httpget = new HttpGet(url);
//        HttpResponse response = httpclient.execute(httpget);
//        HttpEntity entity = response.getEntity();
//
//        if (entity != null){
//            try(InputStream instream = entity.getContent()) {
//                String result = getStringFromInputStream(instream);
//                JSONObject jsonObj = new JSONObject(result);
//                String errorCode = jsonObj.get("error").toString();
//                switch (errorCode) {
//                    case "0":
//                        System.out.println("get eventType successfully!");
//                        Map<String,String> map = new HashMap<String,String>();
//                        JSONArray jsonEventType = (JSONArray) jsonObj.get("eventTypes");
//                        for (int i = 0 ; i<jsonEventType.length(); i++){
//                            JSONObject item = jsonEventType.getJSONObject(i);
//                            String id = item.get("id").toString();
//                            String name = item.get("name").toString();
//                            map.put(id,name);
//                        }
//                        return map;
//                    case "1":
//                        System.out.println("report sent unsuccessfully!");
//                        String msg = jsonObj.get("message").toString();
//                        throw new Exception (msg);
//                }
//            }catch (Exception e){
//                throw new CMSServerException (2,e.getMessage());
//            }
//        }
//        //If not successful,
//        //Server returns a json object with two nodes
//        //{"error": 1
//        //"message": *****		(The message explaining the reason)
//        //}
//        //
//
//        //if error = 1 or any exception thrown during the http connection
//        //Then throw CMSServerException with (id = 2,message)
//        return null;
//    }
//
//
//}
