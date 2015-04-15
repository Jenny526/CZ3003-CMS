// @SOURCE:C:/Users/Yiko/Documents/GitHub/CZ3003-CMS/Server/conf/routes
// @HASH:5ba872375c228c186c0117e4b7d5752d86048bf4
// @DATE:Tue Apr 14 01:31:37 SGT 2015


import play.core._
import play.core.Router._
import play.core.Router.HandlerInvokerFactory._
import play.core.j._

import play.api.mvc._
import _root_.controllers.Assets.Asset
import _root_.play.libs.F

import Router.queryString

object Routes extends Router.Routes {

import ReverseRouteContext.empty

private var _prefix = "/"

def setPrefix(prefix: String): Unit = {
  _prefix = prefix
  List[(String,Routes)]().foreach {
    case (p, router) => router.setPrefix(prefix + (if(prefix.endsWith("/")) "" else "/") + p)
  }
}

def prefix = _prefix

lazy val defaultPrefix = { if(Routes.prefix.endsWith("/")) "" else "/" }


// @LINE:7
private[this] lazy val controllers_CallOperatorController_index0_route = Route("GET", PathPattern(List(StaticPart(Routes.prefix))))
private[this] lazy val controllers_CallOperatorController_index0_invoker = createInvoker(
controllers.CallOperatorController.index(),
HandlerDef(this.getClass.getClassLoader, "", "controllers.CallOperatorController", "index", Nil,"GET", """""", Routes.prefix + """"""))
        

// @LINE:9
private[this] lazy val controllers_CallOperatorController_LogIn1_route = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("calloperator/login"))))
private[this] lazy val controllers_CallOperatorController_LogIn1_invoker = createInvoker(
controllers.CallOperatorController.LogIn(),
HandlerDef(this.getClass.getClassLoader, "", "controllers.CallOperatorController", "LogIn", Nil,"GET", """""", Routes.prefix + """calloperator/login"""))
        

// @LINE:11
private[this] lazy val controllers_CallOperatorController_addEvent2_route = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("event"))))
private[this] lazy val controllers_CallOperatorController_addEvent2_invoker = createInvoker(
controllers.CallOperatorController.addEvent(),
HandlerDef(this.getClass.getClassLoader, "", "controllers.CallOperatorController", "addEvent", Nil,"POST", """""", Routes.prefix + """event"""))
        

// @LINE:13
private[this] lazy val controllers_PublicViewController_postEvents3_route = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("events"))))
private[this] lazy val controllers_PublicViewController_postEvents3_invoker = createInvoker(
controllers.PublicViewController.postEvents(),
HandlerDef(this.getClass.getClassLoader, "", "controllers.PublicViewController", "postEvents", Nil,"GET", """""", Routes.prefix + """events"""))
        

// @LINE:21
private[this] lazy val controllers_SubscribeController_addEvent4_route = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("subscribe"))))
private[this] lazy val controllers_SubscribeController_addEvent4_invoker = createInvoker(
controllers.SubscribeController.addEvent(),
HandlerDef(this.getClass.getClassLoader, "", "controllers.SubscribeController", "addEvent", Nil,"POST", """POST /api/weather controllers.WeatherController.addEvent()
POST /api/psi controllers.PSIController.addEvent()
POST /api/dengue controllers.DengueController.addEvent()""", Routes.prefix + """subscribe"""))
        

// @LINE:24
private[this] lazy val controllers_Assets_at5_route = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("assets/"),DynamicPart("file", """.+""",false))))
private[this] lazy val controllers_Assets_at5_invoker = createInvoker(
controllers.Assets.at(fakeValue[String], fakeValue[String]),
HandlerDef(this.getClass.getClassLoader, "", "controllers.Assets", "at", Seq(classOf[String], classOf[String]),"GET", """ Map static resources from the /public folder to the /assets URL path""", Routes.prefix + """assets/$file<.+>"""))
        
def documentation = List(("""GET""", prefix,"""controllers.CallOperatorController.index()"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """calloperator/login""","""controllers.CallOperatorController.LogIn()"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """event""","""controllers.CallOperatorController.addEvent()"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """events""","""controllers.PublicViewController.postEvents()"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """subscribe""","""controllers.SubscribeController.addEvent()"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """assets/$file<.+>""","""controllers.Assets.at(path:String = "/public", file:String)""")).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
  case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
  case l => s ++ l.asInstanceOf[List[(String,String,String)]]
}}
      

def routes:PartialFunction[RequestHeader,Handler] = {

// @LINE:7
case controllers_CallOperatorController_index0_route(params) => {
   call { 
        controllers_CallOperatorController_index0_invoker.call(controllers.CallOperatorController.index())
   }
}
        

// @LINE:9
case controllers_CallOperatorController_LogIn1_route(params) => {
   call { 
        controllers_CallOperatorController_LogIn1_invoker.call(controllers.CallOperatorController.LogIn())
   }
}
        

// @LINE:11
case controllers_CallOperatorController_addEvent2_route(params) => {
   call { 
        controllers_CallOperatorController_addEvent2_invoker.call(controllers.CallOperatorController.addEvent())
   }
}
        

// @LINE:13
case controllers_PublicViewController_postEvents3_route(params) => {
   call { 
        controllers_PublicViewController_postEvents3_invoker.call(controllers.PublicViewController.postEvents())
   }
}
        

// @LINE:21
case controllers_SubscribeController_addEvent4_route(params) => {
   call { 
        controllers_SubscribeController_addEvent4_invoker.call(controllers.SubscribeController.addEvent())
   }
}
        

// @LINE:24
case controllers_Assets_at5_route(params) => {
   call(Param[String]("path", Right("/public")), params.fromPath[String]("file", None)) { (path, file) =>
        controllers_Assets_at5_invoker.call(controllers.Assets.at(path, file))
   }
}
        
}

}
     