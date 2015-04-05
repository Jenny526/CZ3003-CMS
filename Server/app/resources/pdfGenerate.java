/**
 * Created by fanzhou on 4/4/15.
 */

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.Font.FontFamily;
import com.itextpdf.text.pdf.PdfWriter;

import java.io.FileOutputStream;
import java.io.FileNotFoundException;
import java.io.File;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.sql.Timestamp;

import com.itextpdf.text.pdf.draw.LineSeparator;
import org.joda.time.DateTime;

public class pdfGenerate {
/*
*  //now write the PDF content to the output stream
    outputStream = new ByteArrayOutputStream();
    writePdf(outputStream);
    byte[] bytes = outputStream.toByteArray();

    //construct the pdf body part
    DataSource dataSource = new ByteArrayDataSource(bytes, "application/pdf");
    MimeBodyPart pdfBodyPart = new MimeBodyPart();
    pdfBodyPart.setDataHandler(new DataHandler(dataSource));
    pdfBodyPart.setFileName("test.pdf");
* */

    /**
     * This class writes the content of PDF file (itext API)
     * input: outputstream
     * output: outputstream
     * throws Exception
     */

    private String reportDirectory;

    /**
     * Constructor for PDFGenerator
     *
     * @param reportDirectory the local path of directory storing the reports
     */
    public pdfGenerate(String reportDirectory) {
        super();
        this.reportDirectory = reportDirectory;
    }

    /**
     * The getter of attribute reportDirectory
     *
     * @return the path of directory storing the reports
     */
    public String getReportDirectory() {
        return reportDirectory;
    }

    public File generateReport(String reportName) {


        File file = null;
        Document document = new Document();

        try {
            String date_test = "2014-01-01";
            String time_test = "12:00 pm";
            String event_type = "Weather";
            String description = "Weather is hot";
            String location = "Jurong West Street";
            String postal_code = "640852";

            PdfWriter.getInstance(document,
                    new FileOutputStream(reportDirectory + File.separator + reportName));

            System.out.println("Opening Document to prepare for writing");
            document.open();

            Font titleFont = new Font(FontFamily.HELVETICA, 16, Font.BOLD, BaseColor.WHITE);
            Font subTitleFont = new Font(FontFamily.HELVETICA, 10, Font.ITALIC, BaseColor.WHITE);
            Font introFont = new Font(FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(127, 191, 208));
            Font highLightFont = new Font(FontFamily.HELVETICA, 16, Font.BOLD, new BaseColor(60,106,186));
            Font highLightContentFont = new Font(FontFamily.HELVETICA, 11, Font.NORMAL, BaseColor.BLACK);
            Font summaryFont = new Font(FontFamily.HELVETICA, 16, Font.BOLD, new BaseColor(60,106,186));
            Font summaryContentFont = new Font(FontFamily.HELVETICA, 11, Font.NORMAL, BaseColor.BLACK);
            Font endFont1 = new Font(FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(127, 191, 208));
            Font endFont2 = new Font(FontFamily.HELVETICA, 10, Font.NORMAL, BaseColor.LIGHT_GRAY);

            //Title
            PdfPTable titleTable = new PdfPTable(1);
            titleTable.setWidthPercentage(100);
            PdfPCell titleCell = new PdfPCell();
            titleCell.addElement(new Paragraph("CRISIS REPORT", titleFont));
            titleCell.addElement(new Paragraph("Season Report Issue 144, December 2014 – January 2015", subTitleFont));
            titleCell.setBorder(Rectangle.NO_BORDER);
            titleCell.setHorizontalAlignment(Element.ALIGN_LEFT);
            titleCell.setBackgroundColor(new BaseColor(63, 108, 193));
            titleTable.addCell(titleCell);
            titleTable.completeRow();

            //Intro paragraph
            Paragraph introParagraph = new Paragraph("This is a computer-generated report on recent crisis happening in Singapore. The report will be released every half an hour.", introFont);

            //Highlishts - title
            PdfPTable highlightTable = new PdfPTable(1);
            highlightTable.setWidthPercentage(100);
            PdfPCell highlightCell = new PdfPCell(new Paragraph("Highlights", highLightFont));
            highlightCell.setBorder(Rectangle.BOTTOM);
            highlightCell.setBorderColor(BaseColor.LIGHT_GRAY);
            highlightCell.setHorizontalAlignment(Element.ALIGN_LEFT);
            highlightTable.addCell(highlightCell);
            highlightTable.completeRow();

            //Highlights - content
            com.itextpdf.text.List highLightContent = new com.itextpdf.text.List();
            highLightContent.add(new ListItem("Total number of events happened:    52", highLightContentFont));
            highLightContent.add(new ListItem("Fire events happened:   12  ", highLightContentFont));
            highLightContent.add(new ListItem("....", highLightContentFont));

            //Summary - title
            PdfPTable summaryTitleTable = new PdfPTable(1);
            summaryTitleTable.setWidthPercentage(100);
            PdfPCell summaryTitleCell = new PdfPCell(new Paragraph("Summary", summaryFont));
            summaryTitleCell.setBorder(Rectangle.BOTTOM);
            summaryTitleCell.setBorderColor(BaseColor.LIGHT_GRAY);
            summaryTitleCell.setHorizontalAlignment(Element.ALIGN_LEFT);
            summaryTitleTable.addCell(summaryTitleCell);
            summaryTitleTable.completeRow();

            document.add(titleTable);
            document.add(Chunk.NEWLINE);
            document.add(introParagraph);
            document.add(Chunk.NEWLINE);
            document.add(highlightTable);
            document.add(Chunk.NEWLINE);
            document.add(highLightContent);
            document.add(Chunk.NEWLINE);
            document.add(summaryTitleTable);
            document.add(Chunk.NEWLINE);

            for (int i = 0; i < 10; i++) {
                //Summary - content
                //Firt Line - EventType
                PdfPTable summaryTable = new PdfPTable(5);
                summaryTable.setWidthPercentage(100);
                BaseColor tableBorderColor = BaseColor.LIGHT_GRAY;
                PdfPCell topCell = new PdfPCell(new Paragraph(event_type, summaryContentFont));
                topCell.setColspan(5);
                topCell.setBackgroundColor(new BaseColor(210, 222, 237));
                topCell.setBorderColor(tableBorderColor);
                summaryTable.addCell(topCell);
                summaryTable.completeRow();

                //Second Line - Categories
                PdfPCell cell1 = new PdfPCell(new Paragraph("Date", summaryContentFont));
                PdfPCell cell2 = new PdfPCell(new Paragraph("Time", summaryContentFont));
                PdfPCell cell3 = new PdfPCell(new Paragraph("Description", summaryContentFont));
                PdfPCell cell4 = new PdfPCell(new Paragraph("Location", summaryContentFont));
                PdfPCell cell5 = new PdfPCell(new Paragraph("Postal Code", summaryContentFont));
                cell1.setBorder(Rectangle.LEFT | Rectangle.BOTTOM);
                cell2.setBorder(Rectangle.BOTTOM);
                cell3.setBorder(Rectangle.BOTTOM);
                cell4.setBorder(Rectangle.BOTTOM);
                cell5.setBorder(Rectangle.RIGHT | Rectangle.BOTTOM);
                cell1.setBorderColor(tableBorderColor);
                cell2.setBorderColor(tableBorderColor);
                cell3.setBorderColor(tableBorderColor);
                cell4.setBorderColor(tableBorderColor);
                cell5.setBorderColor(tableBorderColor);
                summaryTable.addCell(cell1);
                summaryTable.addCell(cell2);
                summaryTable.addCell(cell3);
                summaryTable.addCell(cell4);
                summaryTable.addCell(cell5);
                summaryTable.completeRow();

                //Third Line and on - Data
                cell1 = new PdfPCell(new Paragraph(date_test, summaryContentFont));
                cell2 = new PdfPCell(new Paragraph(time_test, summaryContentFont));
                cell3 = new PdfPCell(new Paragraph(description, summaryContentFont));
                cell4 = new PdfPCell(new Paragraph(location, summaryContentFont));
                cell5 = new PdfPCell(new Paragraph(postal_code, summaryContentFont));
                cell1.setBorder(Rectangle.LEFT | Rectangle.BOTTOM);
                cell2.setBorder(Rectangle.BOTTOM);
                cell3.setBorder(Rectangle.BOTTOM);
                cell4.setBorder(Rectangle.BOTTOM);
                cell5.setBorder(Rectangle.RIGHT | Rectangle.BOTTOM);
                cell1.setBorderColor(tableBorderColor);
                cell2.setBorderColor(tableBorderColor);
                cell3.setBorderColor(tableBorderColor);
                cell4.setBorderColor(tableBorderColor);
                cell5.setBorderColor(tableBorderColor);
                summaryTable.addCell(cell1);
                summaryTable.addCell(cell2);
                summaryTable.addCell(cell3);
                summaryTable.addCell(cell4);
                summaryTable.addCell(cell5);
                summaryTable.completeRow();

                document.add(summaryTable);
                document.add(Chunk.NEWLINE);
            }

            //end of report
            PdfPTable endTable = new PdfPTable(1);
            endTable.setWidthPercentage(100);
            PdfPCell endCell = new PdfPCell();
            endCell.setBorder(Rectangle.BOTTOM);
            endCell.setBorderColor(BaseColor.LIGHT_GRAY);
            endTable.addCell(endCell);
            endTable.completeRow();
            document.add(endTable);
            Paragraph endText1 = new Paragraph("This is end of the report", endFont1);
            Paragraph endText2 = new Paragraph("For futher enquiries, please contact us via hotline XXXX or email XXXX", endFont2);
            Paragraph endText3 = new Paragraph("Lemon Tea Presents ®", endFont1);
            endText1.setAlignment(Element.ALIGN_CENTER);
            endText2.setAlignment(Element.ALIGN_CENTER);
            endText3.setAlignment(Element.ALIGN_CENTER);

            document.add(endText1);
            document.add(endText2);
            document.add(endText3);
            document.add(Chunk.NEWLINE);

            document.close();
            System.out.println("Finish writing document \"Report.pdf\"");

        } catch (DocumentException | FileNotFoundException e) {
            e.printStackTrace();
        }

        file = new File(reportDirectory + File.separator + reportName);

        System.out.println("Saving to : " + file.getAbsolutePath());

        return file;
    }


}
