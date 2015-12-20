'use strict';

/**
 * @ngdoc function
 * @name calculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calculatorApp
 */

var app = angular.module('calculatorApp');

app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.expressionState = "";
    $scope.lastInput = "";
    $scope.calculated = false;

    $scope.record = function(a) {
        if($scope.calculated===true) {
            $scope.expressionState = a;
            $scope.calculated = false;
        } else {
            $scope.expressionState += a;
        }
    }

    $scope.result = function() {
        $scope.expressionState = eval($scope.expressionState);
        $scope.calculated = true;
    }

    $scope.clear = function() {
        $scope.expressionState = "";
        $scope.calculated = false;
    }
}]);
