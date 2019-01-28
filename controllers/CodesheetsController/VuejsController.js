app.controller("VuejsCtrl", function ($scope) {
    //VUEJS + VUEX + AXIOS CONTENTS
    $scope.vuejsContentA = true; //NAVIGATION MENU
    $scope.vuejsContentB = false; //INLINE EDITOR
    $scope.vuejsContentC = false; //ORDER FORM
    $scope.vuejsContentD = false; //INSTANT SEARCH
    $scope.vuejsContentE = false; //SWITCHABLE GRID
    $scope.vuejsContentF = false; //PROPS
    $scope.vuejsContentG = false; //MOUNTING
    $scope.vuejsContentH = false; //METHOD
    $scope.vuejsContentI = false; //ACTIONS
    $scope.vuejsContentJ = false; //MUTATIONS
    $scope.vuejsContentK = false; //STATES
    $scope.vuejsContentL = false; //GETTERS
    $scope.vuejsContentM = false; //AUTHENTICATION
    $scope.vuejsContentN = false; //GUARDS

    $scope.VuejsTab = function (tab) {
        if (tab == 'contentA') {
            $scope.vuejsContentA = true; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentB') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = true; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentC') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = true; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentD') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = true; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentE') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = true; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentF') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = true; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentG') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = true; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentH') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = true; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentI') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = true; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentJ') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = true; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentK') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = true; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentL') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = true; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentM') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = true; //AUTHENTICATION
            $scope.vuejsContentN = false; //GUARDS
        }
        else if (tab == 'contentN') {
            $scope.vuejsContentA = false; //NAVIGATION MENU
            $scope.vuejsContentB = false; //INLINE EDITOR
            $scope.vuejsContentC = false; //ORDER FORM
            $scope.vuejsContentD = false; //INSTANT SEARCH
            $scope.vuejsContentE = false; //SWITCHABLE GRID
            $scope.vuejsContentF = false; //PROPS
            $scope.vuejsContentG = false; //MOUNTING
            $scope.vuejsContentH = false; //METHOD
            $scope.vuejsContentI = false; //ACTIONS
            $scope.vuejsContentJ = false; //MUTATIONS
            $scope.vuejsContentK = false; //STATES
            $scope.vuejsContentL = false; //GETTERS
            $scope.vuejsContentM = false; //AUTHENTICATION
            $scope.vuejsContentN = true; //GUARDS
        }
    }

});