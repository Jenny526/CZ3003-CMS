/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package twitter;

import static java.lang.System.out;
import twitter4j.Status;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.conf.ConfigurationBuilder;
/**An concrete class of SocialMediaSender
 * Can post message to a specific twitter account
 */
public class TwitterSender {
	
	private  TwitterFactory tf;

	public TwitterSender() {
		// TODO Auto-generated constructor stub
		
        ConfigurationBuilder cb = new ConfigurationBuilder();
		
		cb.setDebugEnabled(true)
		.setOAuthConsumerKey("xbcBplidsJnh9Rugl1b4Lp9M5")
		.setOAuthConsumerSecret("XK0Uhp4EHFCr49CxU2Da6MMMbyiABYlZ4mTd7zV2EdL2Ev12Tc")
		.setOAuthAccessToken("3096290168-Ip8gyaniTV4KRLjAzg1aLyWxRyT4SKPctyZjBkM")
		.setOAuthAccessTokenSecret("ceNl1BZUj3Qk6IKKRs5HYUrVVoQEmxIrYjPosc5flAR5N");
		
		this.tf = new TwitterFactory(cb.build());
		
		
	}
	/**
	 * This method will post the message into facebook account
	 * @param message The content to be posted
	 * @return boolean whether the operation is successful or not
	 */
	public boolean postMessage(String message) {
		// TODO Auto-generated method stub
		twitter4j.Twitter tw = tf.getInstance();
		try {
			Status st = tw.updateStatus(message);
		} catch (TwitterException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}			
		System.out.println("Twitter updated");
		return true;
	}
        
        public static void main(String[] args) {
              TwitterSender twitt = new TwitterSender();
              out.println("this");
              twitt.postMessage("你好，这是一个测试。");
              out.println("New test post");
              return;
       }
}
