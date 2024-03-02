(

function () {


angular.module('myModel', [])
.controller( 'Ctrlr' , Ctrlr );


Ctrlr.$inject['$scope'];
function Ctrlr($scope) {
    $scope.items="";
    $scope.msg='';
    $scope.c = 12


    $scope.dispMsg = function () {

        var count = $scope.items.split(',').length;
        $scope.c = count;
        if($scope.items == '' ) {
            $scope.msg = "Please enter data first";
        } else if(count <= 3) {
            $scope.msg = "Enjoy!";
        } else {
            $scope.msg = "Too much!";
        }
    
    };
}



}
)();