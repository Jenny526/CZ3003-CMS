package resources;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Timer;
import java.util.TimerTask;
import resources.EmailSender;
//import resources.pdfGenerate;

//import java.sql.Time;
//import java.sql.Timestamp;
//import Resource.ResourceGenerator;
//import models.Agency;
//import models.Event;

/**
 * TimerSendEmail is a timertask that email to Prime Minister Office, 
 * every five minutes. 
 *
 */

public class TimerSendEmail {
	
	private final int PERIOD_IN_MIN = 1;
	Timer timer;
	
	public TimerSendEmail(){
		timer = new Timer();
		timer.schedule(new RemindTask(), 0, PERIOD_IN_MIN*60*1000);
	}
	
	class RemindTask extends TimerTask{
		
		private EmailSender emailSender = new EmailSender();
		String reportPath = System.getProperty("user.dir");
	//	private pdfGenerate PDFGenerator = new pdfGenerate(reportPath);
	
		public void run() {
			System.out.println(reportPath);
			System.out.println("Sending Report...");
			
			DateFormat dateFormat = new SimpleDateFormat("dd-MM-yy_hh:mm",Locale.US);
			Date date = new Date();
			String time = dateFormat.format(date);
			
			List<String> email = new ArrayList<String>();
			  email.add("yangzihe93070516@gmail.com");
			  email.add("ya0002he@e.ntu.edu.sg");
			  
			  
			String subject = "Summary Report";
			String text = "Dear Prime Minister, \nThis is a summary event at " + time 
						+ ". Refer to the attachment for details."; 
			
			String reportName = "SummaryReportAt" + time + ".pdf";
		//	File report = PDFGenerator.generateReport(reportName);
		//	String reportFilePath = PDFGenerator.getReportDirectory() + File.separator + report.getName();
			
			
//			if(emailSender.sendMail(email,subject,text,reportFilePath)){
//				System.out.println("Sending succeeded...");
//			}else{
//				System.out.println("Sending failed...");
//
//			}
		}
		
	}
	
	public static void main(String[] args){
//		File report = new File("SRS.pdf"); 
//		String path = report.getAbsolutePath();
//		String path2 = report.getPath();
//		System.out.println(path);
//		System.out.println(path2);
		
		System.out.println("About to schedule task.");
	    new TimerSendEmail();
	    System.out.println("Task scheduled.");
		
	}

	
}



