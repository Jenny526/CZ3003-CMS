/**
 * Created by Boss on 23/3/15.
 */

angular.module('components', [])
    .directive('helloWorld', function () {
        return {
            restrict: 'E',
            template: '<span> Hello World {{name}}</span>'
            //scope: {
            //    name: 'bind'
            //},
            //templateUrl: 'partial/hello.html'
        }
    })

angular.module('HelloApp', ['components'])