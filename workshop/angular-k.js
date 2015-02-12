angular.module("myApp", [])

  .controller('AnimalsCtrl', function($scope){
    $scope.animals = [
        {
            name: 'Pig',
            activity: 'hunting'
        },              
        {
            name: 'Cow',
            activity: 'sailing'
        },
        {
            name: 'Horse',
            activity: 'fishing'
        }
    ];
});