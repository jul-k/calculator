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
    $scope.inputReset = false;

    $scope.recordOperator = function (operator) {
        $scope.inputReset = true;

        $scope.record(operator);
    }

    $scope.recordNumber = function (number) {
        if ($scope.inputReset) {
            $scope.lastInput = "";
            $scope.inputReset = false;
        }

        if ($scope.lastInput.charAt(0)==="0" && $scope.lastInput.charAt(1) !=="." && $scope.lastInput.length > 1) {
            $scope.lastInput = $scope.lastInput.substring(1);
        }

        $scope.lastInput += number;
        $scope.record(number);
    }

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
