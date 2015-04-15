
package views.html

import play.twirl.api._
import play.twirl.api.TemplateMagic._

import play.api.templates.PlayMagic._
import models._
import controllers._
import java.lang._
import java.util._
import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import play.api.i18n._
import play.core.j.PlayMagicForJava._
import play.mvc._
import play.data._
import play.api.data.Field
import play.mvc.Http.Context.Implicit._
import views.html._

/**/
object index extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[String,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(message: String):play.twirl.api.HtmlFormat.Appendable = {
      _display_ {

Seq[Any](format.raw/*1.19*/("""
"""),format.raw/*2.1*/("""{"""),format.raw/*2.2*/("""

"""),format.raw/*4.1*/("""<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <title>New Event</title>
    <link rel="stylesheet" href="assets/CSS/Main.css" type="text/css" />


    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
</head>

<body>
<br/>
<div id="sitename">
    <h1>Crisis Management System</h1>
</div>
<section id="body" class="width">
    <aside id="sidebar" class="column-left">


        <header>

            <h1>CMS</h1>

            <h2>Call Center</h2>

        </header>


        <nav id="mainnav">

            <ul>
                <li class="selected-item"><a href="new_event.html">New Event</a></li>
                <li><a href="event_list.html">Current Event</a></li>
                <li><a href="history.html">History Event</a></li>
                <li><a href="login.html" onCLick="return confirm('Confirm LOGOUT?')">Logout</a></li>

            </ul>

        </nav>

    </aside>
    <section id="content" class="column-right">
        <h3>Create New Event</h3>
        <fieldset>
            <legend>Crisis Information:</legend>

            <form action=""""),_display_(/*51.28*/routes/*51.34*/.CallOperatorController.addEvent()),format.raw/*51.68*/("""" method="post" >
                <p><label for="name">Reporter Name:</label>
                    <input type="text" name="name" id="name" placeholder="eg: John Lee (Last name)" value="" /><br /></p>

                <p><label for="NRIC">NRIC:</label>
                    <input type="text" name="NRIC" id="NRIC" placeholder="eg: S1111111A" value="" /><br /></p>

                <p><label for="number">Contact Number:</label>
                    <input type="text" name="contactNumber" id="contactNumber" placeholder="eg: 88888888" value="" /><br /></p>

                <p><label for="location">Location:</label>
                    <input type="text" name="location" id="location" placeholder="eg: Jurong Point" value="" /><br /></p>

                <p><label for="postalCode">Postal Code:</label>
                    <input type="text" name="postalCode" id="postalCode" placeholder="eg: 666666" value="" /><br /></p>

                <p><label for="type">Type:</label>
                    <select class="form-control" name = "ETID">
                        <option value = "" selected="selected">Select Event Type</option>
                        <option value = "1">Emergency Ambulance</option>
                        <option value = "2">Rescue and Evacuation</option>
                        <option value = "Fire-Fighting">Fire-Fighting</option>
                        <option value = "Gas Leak Control">Gas Leak Control</option>
                    </select><br />

                <p><label for="description">Description:</label>
                    <textarea cols="60" rows="11" name="description" id="description"></textarea><br /></p>
                <p><input type="submit" name="submit" class="formbutton" value="Submit" onclick='return window.confirm("Confirm submit?");'/></p>

            </form>

        </fieldset>

        <br/>
        <footer class="clear">

            <p>&copy; 2015 CZ3003. by <a href="http://zypopwebtemplates.com/">Lemon Tea</a></p>
        </footer>

    </section>


    <div class="clear"></div>


</section>
<br/>
</body>
</html>





"""),format.raw/*105.1*/("""}"""),format.raw/*105.2*/("""
"""))}
  }

  def render(message:String): play.twirl.api.HtmlFormat.Appendable = apply(message)

  def f:((String) => play.twirl.api.HtmlFormat.Appendable) = (message) => apply(message)

  def ref: this.type = this

}
              /*
                  -- GENERATED --
                  DATE: Mon Apr 13 18:56:47 SGT 2015
                  SOURCE: C:/Users/Yiko/Documents/GitHub/CZ3003-CMS/Server/app/views/index.scala.html
                  HASH: f9d441048f27ebc067bf24ce9a7eb8cd98b8bf23
                  MATRIX: 723->1|828->18|856->20|883->21|913->25|2156->1241|2171->1247|2226->1281|4395->3422|4424->3423
                  LINES: 26->1|29->1|30->2|30->2|32->4|79->51|79->51|79->51|133->105|133->105
                  -- GENERATED --
              */
          