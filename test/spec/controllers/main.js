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

  it('last input 09', function () {

    scope.recordNumber("0");
    scope.recordNumber("9");
    expect(scope.lastInput).toBe("9");
  });

  it('last input 00', function () {

    scope.recordNumber("0");
    scope.recordNumber("0");
    expect(scope.lastInput).toBe("0");
  });

  it('last input 3+8=', function () {

    scope.recordNumber("3");
    scope.recordOperator("+");
    scope.recordNumber("8");
    scope.result();
    expect(scope.lastInput).toBe("11");
  });

  it('last input .', function () {

    scope.recordNumber(".");
    expect(scope.lastInput).toBe("0.");
  });
});
