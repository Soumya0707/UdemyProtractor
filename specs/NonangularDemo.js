describe('protractor element demo', function(){
    it('Locators',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://google.com');// non angular apps. 
        browser.sleep(2000);

        browser.get('https://facebook.com');
        browser.sleep(2000);
    }) 
 })