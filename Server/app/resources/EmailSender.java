package resources;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
/**
 * This class is intended for sending email
 */
public class EmailSender {

	private String account = "3003CMS2015@gmail.com";
	private String pwd = "20153003";
/**
 * Construct an EmailSender
 * @param account the Gmail Address
 * @param pwd  password for this Gmail account
 */
	public EmailSender(String account, String pwd) {
		super();
		this.account = account;
		this.pwd = pwd;
	}

	public EmailSender() {
	}


	public boolean sendMail(List<String> destinations, String subject,
			String text, String file) {
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class",
				"javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		Session session = Session.getDefaultInstance(props,
				new javax.mail.Authenticator() {
					protected PasswordAuthentication getPasswordAuthentication() {
						return new PasswordAuthentication(account, pwd);
					}
				});
		for (int i = 0; i < destinations.size(); i++) {

			String ToEmail = destinations.get(i);

			try {

				Message message = new MimeMessage(session);
				message.setFrom(new InternetAddress("3003CMS2015@gmail.com"));
				message.setRecipients(Message.RecipientType.TO,
						InternetAddress.parse(ToEmail));
				message.setSubject(subject);
				message.setText(text); // message body
				Multipart multipart = new MimeMultipart();
				 BodyPart messageBody = new MimeBodyPart();
		         messageBody.setText(text);
				MimeBodyPart messageBodyPart = new MimeBodyPart();
				String filename = file; // file must be in the workspace
				DataSource source = new FileDataSource(filename);
				messageBodyPart.setDataHandler(new DataHandler(source));
				messageBodyPart.setFileName(filename);
				multipart.addBodyPart(messageBody);
				multipart.addBodyPart(messageBodyPart);

				// Send the complete message parts
				message.setContent(multipart);

				Transport.send(message);

				System.out.println("Done");

			} catch (MessagingException e) {
				e.printStackTrace();
				return false;
			} catch (RuntimeException e) {
				e.printStackTrace();
				return false;
			}
		}

		// Return whether the transission is successful
		return true;
	}
	
//	public static void main(String[] args) {
//		
//		 List<String> email = new ArrayList<String>();
//		  email.add("yangzihe93070516@gmail.com");
//		  email.add("ya0002he@e.ntu.edu.sg");
//		  email.add("yangzihe93070516@gmail.com");
//		  
//		String subject = "Status Report";
//		String text = "Dear Prime Minster's Office, \n\nThe status report summarizes key indicators and trends at present.\n\n\nCrisis Management System";
//		
//				
//		EmailSender email1 = new EmailSender();
//		email1.sendMail(email,subject,text, "SRS.pdf");
//		
////		for (int i = 0; i < 1; i++){
////			email1.sendMail(email.get(i));
////			System.out.println(email.get(i));
////		}
//		
//
//        }

}
