function TodoCtrl($scope) {

    $scope.todos = [
        {text: 'Fire @Jurong Point', done: false},
        {text: 'Air Polution@Pungle', done: false}
    ];
    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.formTodoText, done: false});
        $scope.formTodoText = '';
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        })
    };
    //$scope.map = {center:{latitude:45,longitude:-73}, zoom:8};
}


//gapi.load('auth:client,drive-realtime,drive-share',function(){
//    //Runs once the Realtime API is loaded
//    wireUpUi();
//})
//var bindString = gapi.drive.realtime.databinding.bindString;
//bindString(root.get('TopText'),document.getElementById('TopText'));
//bindString(root.get('MiddleText'),document.getElementById('MiddleText'));
//bindString(root.get('ButtomText'),document.getElementById('ButtomText'));
//
//root.addEventListener(gapi.drive.realtime.EventType.Object.update);
