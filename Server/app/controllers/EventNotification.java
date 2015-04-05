package controllers;


import resources.*;

/**
 * Created by Yiko on 2015-04-05.
 */
public class EventNotification {
    public static final String arg = "CAACEdEose0cBALvvTQ8qoBBW4bTyC0p0FvT3oecfMsHW1zDLQGyfrC4mJUWvIY9wwrGi9CZCMOxHOyrGZATsKFi5GQfDlcnKFw74rt6uZAZBT5kwYwSswjdaYNN6wuy4t3BmU0m0p8wrHt2hcZChuSJzcovPE8zG2zJbjOG6cI9ZBFP3JOMezAlR0ZA5hZAWs3GngIGwiIaVyAZDZD";
    FacebookSender newFacebook = new FacebookSender(arg);
    TwitterSender newTwitter = new TwitterSender();
    public void run(String message){

        newFacebook.makeTestPost(message);
        newTwitter.postMessage(message);
    }
}
