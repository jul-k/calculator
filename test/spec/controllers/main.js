'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('calculatorApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('last input 356', function () {

    scope.recordNumber("3");
    scope.recordNumber("5");
    scope.recordNumber("6");
    expect(scope.lastInput).toBe("356");
  });

  it('last input 3+56', function () {

    scope.recordNumber("3");
    scope.recordOperator("+");
    scope.recordNumber("5");
    scope.recordNumber("6");
    expect(scope.lastInput).toBe("56");
  });

  it('last input 096', function () {

    scope.recordNumber("0");
    scope.recordNumber("9");
    scope.recordNumber("6");
    expect(scope.lastInput).toBe("96");
  });

  it('last input 0.55', function () {

    scope.recordNumber("0");
    scope.recordNumber(".");
    scope.recordNumber("5");
    scope.recordNumber("5");
    expect(scope.lastInput).toBe("0.55");
  });
});
