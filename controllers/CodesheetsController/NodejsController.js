app.controller("NodejsCtrl", function ($scope) {
    $scope.nodejsContentA = true; //INDEX
    $scope.nodejsContentB = false; //STARTUP
    $scope.nodejsContentC = false; //ROUTES
    $scope.nodejsContentD = false; //MODELS
    $scope.nodejsContentE = false; //MIDDLEWARE
    $scope.nodejsContentF = false; //CONFIG

    $scope.NodejsTab = function (tab) {
        if (tab == 'contentA') {
            $scope.nodejsContentA = true; //INDEX
            $scope.nodejsContentB = false; //STARTUP
            $scope.nodejsContentC = false; //ROUTES
            $scope.nodejsContentD = false; //MODELS
            $scope.nodejsContentE = false; //MIDDLEWARE
            $scope.nodejsContentF = false; //CONFIG
        }
        else if (tab == 'contentB') {
            $scope.nodejsContentA = false; //INDEX
            $scope.nodejsContentB = true; //STARTUP
            $scope.nodejsContentC = false; //ROUTES
            $scope.nodejsContentD = false; //MODELS
            $scope.nodejsContentE = false; //MIDDLEWARE
            $scope.nodejsContentF = false; //CONFIG
        }
        else if (tab == 'contentC') {
            $scope.nodejsContentA = false; //INDEX
            $scope.nodejsContentB = false; //STARTUP
            $scope.nodejsContentC = true; //ROUTES
            $scope.nodejsContentD = false; //MODELS
            $scope.nodejsContentE = false; //MIDDLEWARE
            $scope.nodejsContentF = false; //CONFIG
        }
        else if (tab == 'contentD') {
            $scope.nodejsContentA = false; //INDEX
            $scope.nodejsContentB = false; //STARTUP
            $scope.nodejsContentC = false; //ROUTES
            $scope.nodejsContentD = true; //MODELS
            $scope.nodejsContentE = false; //MIDDLEWARE
            $scope.nodejsContentF = false; //CONFIG
        }
        else if (tab == 'contentE') {
            $scope.nodejsContentA = false; //INDEX
            $scope.nodejsContentB = false; //STARTUP
            $scope.nodejsContentC = false; //ROUTES
            $scope.nodejsContentD = false; //MODELS
            $scope.nodejsContentE = true; //MIDDLEWARE
            $scope.nodejsContentF = false; //CONFIG
        }
        else if (tab == 'contentF') {
            $scope.nodejsContentA = false; //INDEX
            $scope.nodejsContentB = false; //STARTUP
            $scope.nodejsContentC = false; //ROUTES
            $scope.nodejsContentD = false; //MODELS
            $scope.nodejsContentE = false; //MIDDLEWARE
            $scope.nodejsContentF = true; //CONFIG
        }
    }

});