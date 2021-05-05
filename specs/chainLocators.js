describe('protractor element demo', function(){
    
    it('Locators',function(){
        //browser.length('https://angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/');
        // repeater, chain locator, and css for identical tags
        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("7")
        element(by.id("gobutton")).click();
        element(by.repeater("result in memory")).element(by.css("td:nth-child(1)")).getText().then(function(text){
            browser.sleep(2000);
            console.log(text);
        })
        element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText().then(function(text){
            browser.sleep(2000);
            console.log(text);
        })
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            browser.sleep(2000);
            console.log(text);
        })

    })
})
