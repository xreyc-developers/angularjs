app.controller("ReactjsCtrl", function ($scope) {
    $scope.reactjsContentA = true; //TIMER
    $scope.reactjsContentB = false; //NAVIGATION MENU
    $scope.reactjsContentC = false; //REAL TIME SEARCH
    $scope.reactjsContentD = false; //ORDER FORM
    $scope.reactjsContentE = false; //IMAGE APP WITH AJAX
    $scope.reactjsContentF = false; //PROPS
    $scope.reactjsContentG = false; //MOUNTING
    $scope.reactjsContentH = false; //METHOD
    $scope.reactjsContentI = false; //ACTIONS
    $scope.reactjsContentJ = false; //REDUCERS
    $scope.reactjsContentK = false; //COMBINE REDUCERS
    $scope.reactjsContentL = false; //AUTHENTICATION

    $scope.ReactjsTab = function (tab) {
        if (tab == 'contentA') {
            $scope.reactjsContentA = true; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentB') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = true; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentC') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = true; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentD') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = true; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentE') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = true; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentF') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = true; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentG') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = true; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentH') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = true; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentI') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = true; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentJ') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = true; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentK') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = true; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
        else if (tab == 'contentL') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = true; //AUTHENTICATION
        }
        else if (tab == 'contentM') {
            $scope.reactjsContentA = false; //NAVIGATION MENU
            $scope.reactjsContentB = false; //INLINE EDITOR
            $scope.reactjsContentC = false; //ORDER FORM
            $scope.reactjsContentD = false; //INSTANT SEARCH
            $scope.reactjsContentE = false; //SWITCHABLE GRID
            $scope.reactjsContentF = false; //PROPS
            $scope.reactjsContentG = false; //MOUNTING
            $scope.reactjsContentH = false; //METHOD
            $scope.reactjsContentI = false; //ACTIONS
            $scope.reactjsContentJ = false; //REDUCERS
            $scope.reactjsContentK = false; //COMBINE REDUCERS
            $scope.reactjsContentL = false; //AUTHENTICATION
        }
    }

});