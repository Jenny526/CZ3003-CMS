// @SOURCE:C:/Users/Yiko/Documents/GitHub/CZ3003-CMS/Server/conf/routes
// @HASH:5ba872375c228c186c0117e4b7d5752d86048bf4
// @DATE:Tue Apr 14 01:31:37 SGT 2015

import Routes.{prefix => _prefix, defaultPrefix => _defaultPrefix}
import play.core._
import play.core.Router._
import play.core.Router.HandlerInvokerFactory._
import play.core.j._

import play.api.mvc._
import _root_.controllers.Assets.Asset
import _root_.play.libs.F

import Router.queryString


// @LINE:24
// @LINE:21
// @LINE:13
// @LINE:11
// @LINE:9
// @LINE:7
package controllers {

// @LINE:13
class ReversePublicViewController {


// @LINE:13
def postEvents(): Call = {
   import ReverseRouteContext.empty
   Call("GET", _prefix + { _defaultPrefix } + "events")
}
                        

}
                          

// @LINE:11
// @LINE:9
// @LINE:7
class ReverseCallOperatorController {


// @LINE:9
def LogIn(): Call = {
   import ReverseRouteContext.empty
   Call("GET", _prefix + { _defaultPrefix } + "calloperator/login")
}
                        

// @LINE:7
def index(): Call = {
   import ReverseRouteContext.empty
   Call("GET", _prefix)
}
                        

// @LINE:11
def addEvent(): Call = {
   import ReverseRouteContext.empty
   Call("POST", _prefix + { _defaultPrefix } + "event")
}
                        

}
                          

// @LINE:24
class ReverseAssets {


// @LINE:24
def at(file:String): Call = {
   implicit val _rrc = new ReverseRouteContext(Map(("path", "/public")))
   Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[PathBindable[String]].unbind("file", file))
}
                        

}
                          

// @LINE:21
class ReverseSubscribeController {


// @LINE:21
def addEvent(): Call = {
   import ReverseRouteContext.empty
   Call("POST", _prefix + { _defaultPrefix } + "subscribe")
}
                        

}
                          
}
                  


// @LINE:24
// @LINE:21
// @LINE:13
// @LINE:11
// @LINE:9
// @LINE:7
package controllers.javascript {
import ReverseRouteContext.empty

// @LINE:13
class ReversePublicViewController {


// @LINE:13
def postEvents : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.PublicViewController.postEvents",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "events"})
      }
   """
)
                        

}
              

// @LINE:11
// @LINE:9
// @LINE:7
class ReverseCallOperatorController {


// @LINE:9
def LogIn : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.CallOperatorController.LogIn",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "calloperator/login"})
      }
   """
)
                        

// @LINE:7
def index : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.CallOperatorController.index",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + """"})
      }
   """
)
                        

// @LINE:11
def addEvent : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.CallOperatorController.addEvent",
   """
      function() {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "event"})
      }
   """
)
                        

}
              

// @LINE:24
class ReverseAssets {


// @LINE:24
def at : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.Assets.at",
   """
      function(file) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "assets/" + (""" + implicitly[PathBindable[String]].javascriptUnbind + """)("file", file)})
      }
   """
)
                        

}
              

// @LINE:21
class ReverseSubscribeController {


// @LINE:21
def addEvent : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.SubscribeController.addEvent",
   """
      function() {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "subscribe"})
      }
   """
)
                        

}
              
}
        


// @LINE:24
// @LINE:21
// @LINE:13
// @LINE:11
// @LINE:9
// @LINE:7
package controllers.ref {


// @LINE:13
class ReversePublicViewController {


// @LINE:13
def postEvents(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.PublicViewController.postEvents(), HandlerDef(this.getClass.getClassLoader, "", "controllers.PublicViewController", "postEvents", Seq(), "GET", """""", _prefix + """events""")
)
                      

}
                          

// @LINE:11
// @LINE:9
// @LINE:7
class ReverseCallOperatorController {


// @LINE:9
def LogIn(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.CallOperatorController.LogIn(), HandlerDef(this.getClass.getClassLoader, "", "controllers.CallOperatorController", "LogIn", Seq(), "GET", """""", _prefix + """calloperator/login""")
)
                      

// @LINE:7
def index(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.CallOperatorController.index(), HandlerDef(this.getClass.getClassLoader, "", "controllers.CallOperatorController", "index", Seq(), "GET", """""", _prefix + """""")
)
                      

// @LINE:11
def addEvent(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.CallOperatorController.addEvent(), HandlerDef(this.getClass.getClassLoader, "", "controllers.CallOperatorController", "addEvent", Seq(), "POST", """""", _prefix + """event""")
)
                      

}
                          

// @LINE:24
class ReverseAssets {


// @LINE:24
def at(path:String, file:String): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.Assets.at(path, file), HandlerDef(this.getClass.getClassLoader, "", "controllers.Assets", "at", Seq(classOf[String], classOf[String]), "GET", """ Map static resources from the /public folder to the /assets URL path""", _prefix + """assets/$file<.+>""")
)
                      

}
                          

// @LINE:21
class ReverseSubscribeController {


// @LINE:21
def addEvent(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.SubscribeController.addEvent(), HandlerDef(this.getClass.getClassLoader, "", "controllers.SubscribeController", "addEvent", Seq(), "POST", """POST /api/weather controllers.WeatherController.addEvent()
POST /api/psi controllers.PSIController.addEvent()
POST /api/dengue controllers.DengueController.addEvent()""", _prefix + """subscribe""")
)
                      

}
                          
}
        
    