//COMPONENT CONTROLLER
app.controller("SassCtrl", function ($scope) {

    //VUEJS + VUEX + AXIOS CONTENTS
    $scope.sassContentA = true; //PREPROCESSING
    $scope.sassContentB = false; //VARIABLES
    $scope.sassContentC = false; //NESTING
    $scope.sassContentD = false; //PARTIALS
    $scope.sassContentE = false; //IMPORT
    $scope.sassContentF = false; //MIXINS
    $scope.sassContentG = false; //INHERETANCE
    $scope.sassContentH = false; //OPERATORS

    $scope.SassTab = function (tab) {
        if (tab == 'contentA') {
            $scope.sassContentA = true; //PREPROCESSING
            $scope.sassContentB = false; //VARIABLES
            $scope.sassContentC = false; //NESTING
            $scope.sassContentD = false; //PARTIALS
            $scope.sassContentE = false; //IMPORT
            $scope.sassContentF = false; //MIXINS
            $scope.sassContentG = false; //INHERETANCE
            $scope.sassContentH = false; //OPERATORS
        }
        else if (tab == 'contentB') {
            $scope.sassContentA = false; //PREPROCESSING
            $scope.sassContentB = true; //VARIABLES
            $scope.sassContentC = false; //NESTING
            $scope.sassContentD = false; //PARTIALS
            $scope.sassContentE = false; //IMPORT
            $scope.sassContentF = false; //MIXINS
            $scope.sassContentG = false; //INHERETANCE
            $scope.sassContentH = false; //OPERATORS
        }
        else if (tab == 'contentC') {
            $scope.sassContentA = false; //PREPROCESSING
            $scope.sassContentB = false; //VARIABLES
            $scope.sassContentC = true; //NESTING
            $scope.sassContentD = false; //PARTIALS
            $scope.sassContentE = false; //IMPORT
            $scope.sassContentF = false; //MIXINS
            $scope.sassContentG = false; //INHERETANCE
            $scope.sassContentH = false; //OPERATORS
        }
        else if (tab == 'contentD') {
            $scope.sassContentA = false; //PREPROCESSING
            $scope.sassContentB = false; //VARIABLES
            $scope.sassContentC = false; //NESTING
            $scope.sassContentD = true; //PARTIALS
            $scope.sassContentE = false; //IMPORT
            $scope.sassContentF = false; //MIXINS
            $scope.sassContentG = false; //INHERETANCE
            $scope.sassContentH = false; //OPERATORS
        }
        else if (tab == 'contentE') {
            $scope.sassContentA = false; //PREPROCESSING
            $scope.sassContentB = false; //VARIABLES
            $scope.sassContentC = false; //NESTING
            $scope.sassContentD = false; //PARTIALS
            $scope.sassContentE = true; //IMPORT
            $scope.sassContentF = false; //MIXINS
            $scope.sassContentG = false; //INHERETANCE
            $scope.sassContentH = false; //OPERATORS
        }
        else if (tab == 'contentF') {
            $scope.sassContentA = false; //PREPROCESSING
            $scope.sassContentB = false; //VARIABLES
            $scope.sassContentC = false; //NESTING
            $scope.sassContentD = false; //PARTIALS
            $scope.sassContentE = false; //IMPORT
            $scope.sassContentF = true; //MIXINS
            $scope.sassContentG = false; //INHERETANCE
            $scope.sassContentH = false; //OPERATORS
        }
        else if (tab == 'contentG') {
            $scope.sassContentA = false; //PREPROCESSING
            $scope.sassContentB = false; //VARIABLES
            $scope.sassContentC = false; //NESTING
            $scope.sassContentD = false; //PARTIALS
            $scope.sassContentE = false; //IMPORT
            $scope.sassContentF = false; //MIXINS
            $scope.sassContentG = true; //INHERETANCE
            $scope.sassContentH = false; //OPERATORS
        }
        else if (tab == 'contentH') {
            $scope.sassContentA = false; //PREPROCESSING
            $scope.sassContentB = false; //VARIABLES
            $scope.sassContentC = false; //NESTING
            $scope.sassContentD = false; //PARTIALS
            $scope.sassContentE = false; //IMPORT
            $scope.sassContentF = false; //MIXINS
            $scope.sassContentG = false; //INHERETANCE
            $scope.sassContentH = true; //OPERATORS
        }
    }

});