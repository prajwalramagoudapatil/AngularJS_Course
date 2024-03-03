(

function () {

angular.module('LunchCheck', [])
.controller( 'LunchCheckController' , LunchCheckController );

LunchCheckController.$inject['$scope'];
function LunchCheckController($scope) {
    $scope.items="";
    $scope.msg='';
    

    $scope.changeMsg = function () {

        var count = $scope.items.split(',').length;
        
        if($scope.items == '' ) {
            $scope.msg = "Please enter data first";
        } else if(count <= 3) {
            $scope.msg = "Enjoy!";
        } else {
            $scope.msg = "Too much!";
        }
    
    };

    $scope.getMsg = function () {
        return $scope.msg;
    }
}

}
)();
