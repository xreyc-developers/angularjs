app.controller("AngularCtrl", function ($scope) {
    $scope.angularContentA = true; //API SERVICE
    $scope.angularContentB = false; //INTERCEPTOR
    $scope.angularContentC = false; //MODEL
    $scope.angularContentD = false; //CREATE
    $scope.angularContentE = false; //READ
    $scope.angularContentF = false; //UPDATE
    $scope.angularContentG = false; //LOGIN
    $scope.angularContentH = false; //ROUTING

    $scope.AngularTab = function (tab) {
        if (tab == 'contentA') {
            $scope.angularContentA = true; //API SERVICE
            $scope.angularContentB = false; //INTERCEPTOR
            $scope.angularContentC = false; //MODEL
            $scope.angularContentD = false; //CREATE
            $scope.angularContentE = false; //READ
            $scope.angularContentF = false; //UPDATE
            $scope.angularContentG = false; //LOGIN
            $scope.angularContentH = false; //ROUTING
        }
        else if (tab == 'contentB') {
            $scope.angularContentA = false; //API SERVICE
            $scope.angularContentB = true; //INTERCEPTOR
            $scope.angularContentC = false; //MODEL
            $scope.angularContentD = false; //CREATE
            $scope.angularContentE = false; //READ
            $scope.angularContentF = false; //UPDATE
            $scope.angularContentG = false; //LOGIN
            $scope.angularContentH = false; //ROUTING
        }
        else if (tab == 'contentC') {
            $scope.angularContentA = false; //API SERVICE
            $scope.angularContentB = false; //INTERCEPTOR
            $scope.angularContentC = true; //MODEL
            $scope.angularContentD = false; //CREATE
            $scope.angularContentE = false; //READ
            $scope.angularContentF = false; //UPDATE
            $scope.angularContentG = false; //LOGIN
            $scope.angularContentH = false; //ROUTING
        }
        else if (tab == 'contentD') {
            $scope.angularContentA = false; //API SERVICE
            $scope.angularContentB = false; //INTERCEPTOR
            $scope.angularContentC = false; //MODEL
            $scope.angularContentD = true; //CREATE
            $scope.angularContentE = false; //READ
            $scope.angularContentF = false; //UPDATE
            $scope.angularContentG = false; //LOGIN
            $scope.angularContentH = false; //ROUTING
        }
        else if (tab == 'contentE') {
            $scope.angularContentA = false; //API SERVICE
            $scope.angularContentB = false; //INTERCEPTOR
            $scope.angularContentC = false; //MODEL
            $scope.angularContentD = false; //CREATE
            $scope.angularContentE = true; //READ
            $scope.angularContentF = false; //UPDATE
            $scope.angularContentG = false; //LOGIN
            $scope.angularContentH = false; //ROUTING
        }
        else if (tab == 'contentF') {
            $scope.angularContentA = false; //API SERVICE
            $scope.angularContentB = false; //INTERCEPTOR
            $scope.angularContentC = false; //MODEL
            $scope.angularContentD = false; //CREATE
            $scope.angularContentE = false; //READ
            $scope.angularContentF = true; //UPDATE
            $scope.angularContentG = false; //LOGIN
            $scope.angularContentH = false; //ROUTING
        }
        else if (tab == 'contentG') {
            $scope.angularContentA = false; //API SERVICE
            $scope.angularContentB = false; //INTERCEPTOR
            $scope.angularContentC = false; //MODEL
            $scope.angularContentD = false; //CREATE
            $scope.angularContentE = false; //READ
            $scope.angularContentF = false; //UPDATE
            $scope.angularContentG = true; //LOGIN
            $scope.angularContentH = false; //ROUTING
        }
        else if (tab == 'contentH') {
            $scope.angularContentA = false; //API SERVICE
            $scope.angularContentB = false; //INTERCEPTOR
            $scope.angularContentC = false; //MODEL
            $scope.angularContentD = false; //CREATE
            $scope.angularContentE = false; //READ
            $scope.angularContentF = false; //UPDATE
            $scope.angularContentG = false; //LOGIN
            $scope.angularContentH = true; //ROUTING
        }

    }

});