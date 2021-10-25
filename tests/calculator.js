let homepage = require('../pages/homepage')
describe('Calculator Demo', function () {

    it('Addition Calculator', function () {
        // browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/')
        // element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('3');
        // element(by.model('second')).sendKeys('5');
        homepage.enterSecondNumber('8');
        //  element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();
       // var result = element(by.cssContainingText('.ng-binding', '7'));
        homepage.verifyResult('11')
        // expect(result.getText()).toEqual('7');
        browser.sleep(2000);
    })

    it('Subtraction Calculator', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber('10');
        homepage.enterSecondNumber('8');
        homepage.clickGo2();
        homepage.verifyResult('3')
        browser.sleep(2000);
    })

})