/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package resources;

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
public class FacebookSender {
  /**
   * RestFB Graph API client.
   */
  private FacebookClient facebookClient;
  /**=
   * Entry point. You must provide a single argument on the command line: a valid Graph API access token. In order for
   * publishing to succeed, you must use an access token for an application that has been granted stream_publish and
   * create_event rights.
   * 
   * @param args
   *          Command-line arguments.
   * @throws IllegalArgumentException
   *           If no command-line arguments are provided.
   */
  public FacebookSender(String accessToken) {
      facebookClient = new DefaultFacebookClient(accessToken);
  }
  public void makeTestPost(String message) {
        facebookClient.publish("/feed", FacebookType.class, Parameter.with("message", message));
        System.out.println("Post Successful");
    }

 }
