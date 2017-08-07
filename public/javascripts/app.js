//var app = angular.module('myApp',[]);
//app.controller('myController', function($scope, $http) {
//    $scope.data = [];
//    var request = $http.get('/data');
//    request.success(function(data) {
//        $scope.data = data;
//    });
//    request.error(function(data){
//        console.log('Error: ' + data);
//    });
//});

//openweatherapi

var myApp=angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope,$http,$filter){
        $scope.cityList=[
                {name:'Ho Chi Minh City'},
                     {name:'Singapore'},
             {name:'Mumbai'},
                     {name:'Kuala Lumpur'},
                     {name:'Tokyo'},
                     {name:'Athens'}
    ];
   $scope.display=false;
    $scope.cityChanged=function(x){
            $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+x+'&cnt=4&units=metric&appid=d3859dd451c0be5635fa459c469021df')
            .then(function(res){
                $scope.cityForecast=res.data;

             $scope.display=true;

            });

    };
});

