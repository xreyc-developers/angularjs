var app = angular.module("xreycApp", ["ngRoute"]);


//ROUTES
app.config(function ($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "pages/home.html",
      controller: "HomeController"
    })

    .when("/profile", {
      templateUrl: "pages/profile.html",
      controller: "ProfileController"
    })

    .when("/education", {
      templateUrl: "pages/education.html",
      controller: "EducationController"
    })

    .when("/skills", {
      templateUrl: "pages/skills.html",
      controller: "SkillsController"
    })

    .when("/code_sheets", {
      templateUrl: "pages/code_sheets.html",
      controller: "CodeSheetsController"
    })

    .when("/about", {
      templateUrl: "pages/about.html",
      controller: "AboutController"
    })

    .when("/contact", {
      templateUrl: "pages/contact.html",
      controller: "ContactController"
    })
    .otherwise({ redirectTo: "/" });
});



///////////////////////////////CONTROLLERS///////////////////////////////
//MAIN CONTROLLER
app.controller('MainCtrl', function ($scope) {
  $scope.home = true;
  $scope.profile = false;
  $scope.education = false;
  $scope.skills = false;
  $scope.code_sheets = false;
  $scope.about = false;
  $scope.contact = false;

  $scope.changeView = function (val) {
    if (val == 'home') {
      $scope.home = true;
      $scope.profile = false;
      $scope.education = false;
      $scope.skills = false;
      $scope.code_sheets = false;
      $scope.about = false;
      $scope.contact = false;
    }
    else if (val == 'profile') {
      $scope.home = false;
      $scope.profile = true;
      $scope.education = false;
      $scope.skills = false;
      $scope.code_sheets = false;
      $scope.about = false;
      $scope.contact = false;
    }
    else if (val == 'education') {
      $scope.home = false;
      $scope.profile = false;
      $scope.education = true;
      $scope.skills = false;
      $scope.code_sheets = false;
      $scope.about = false;
      $scope.contact = false;
    }
    else if (val == 'skills') {
      $scope.home = false;
      $scope.profile = false;
      $scope.education = false;
      $scope.skills = true;
      $scope.code_sheets = false;
      $scope.about = false;
      $scope.contact = false;
    }
    else if (val == 'code_sheets') {
      $scope.home = false;
      $scope.profile = false;
      $scope.education = false;
      $scope.skills = false;
      $scope.code_sheets = true;
      $scope.about = false;
      $scope.contact = false;
    }
    else if (val == 'about') {
      $scope.home = false;
      $scope.profile = false;
      $scope.education = false;
      $scope.skills = false;
      $scope.code_sheets = false;
      $scope.about = true;
      $scope.contact = false;
    }
    else if (val == 'contact') {
      $scope.home = false;
      $scope.profile = false;
      $scope.education = false;
      $scope.skills = false;
      $scope.code_sheets = false;
      $scope.about = false;
      $scope.contact = true;
    }
  }
});


//ROUTE CONTROLLER
app.controller("HomeController", function ($scope) {
  $scope.title = "Home";
});

app.controller("ProfileController", function ($scope) {
  $scope.title = "Profile";
});

app.controller("EducationController", function ($scope) {
  $scope.title = "Education";
});

app.controller("SkillsController", function ($scope) {
  $scope.title = "Skills";
});

app.controller("CodeSheetsController", function ($scope) {
  $scope.title = "Code Sheets";
});

app.controller("AboutController", function ($scope) {
  $scope.title = "About";
});

app.controller("ContactController", function ($scope, $http) {
  $scope.postData = function () {

    var request = $http({
      method: "post",
      url: "database/insert.php",
      data: {
        subject: $scope.subject,
        email: $scope.email,
        message: $scope.message,
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    console.log(request);

  }
});
