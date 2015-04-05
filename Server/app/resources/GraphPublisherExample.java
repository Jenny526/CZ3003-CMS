/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facebookpublish;

import static java.lang.String.format;
import static java.lang.System.currentTimeMillis;
import static java.lang.System.out;

import java.util.Date;

import com.restfb.BinaryAttachment;
import com.restfb.DefaultFacebookClient;
import com.restfb.FacebookClient;
import com.restfb.Parameter;
import com.restfb.types.FacebookType;

/**
 * Examples of RestFB's Graph API functionality.
 * 
 * @author <a href="http://restfb.com">Mark Allen</a>
 */
public class GraphPublisherExample {
  /**
   * RestFB Graph API client.
   */
  private final FacebookClient facebookClient;
  private int counter = 0;
  private static String arg = "CAACEdEose0cBALvvTQ8qoBBW4bTyC0p0FvT3oecfMsHW1zDLQGyfrC4mJUWvIY9wwrGi9CZCMOxHOyrGZATsKFi5GQfDlcnKFw74rt6uZAZBT5kwYwSswjdaYNN6wuy4t3BmU0m0p8wrHt2hcZChuSJzcovPE8zG2zJbjOG6cI9ZBFP3JOMezAlR0ZA5hZAWs3GngIGwiIaVyAZDZD";
  /**
   * Entry point. You must provide a single argument on the command line: a valid Graph API access token. In order for
   * publishing to succeed, you must use an access token for an application that has been granted stream_publish and
   * create_event rights.
   * 
   * @param args
   *          Command-line arguments.
   * @throws IllegalArgumentException
   *           If no command-line arguments are provided.
   */
  public static void main(String[] args) {
//    if (args.length == 0)
//      throw new IllegalArgumentException("You must provide an OAuth access token parameter. "
//          + "See README for more information.");

    new GraphPublisherExample(arg).runEverything();
  }

  GraphPublisherExample(String accessToken) {
    facebookClient = new DefaultFacebookClient(accessToken);
  }

  void runEverything() {
    makeTestPost();
  }
  public void makeTestPost() {
        facebookClient.publish("/feed", FacebookType.class, Parameter.with("message", " 你好啊哥们"));
        counter++;
    }

 }
