describe('protractor element demo', function(){
   it('Locators',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("7")
        element(by.id("gobutton")).click();
        browser.sleep(1000);
        //real o/p is displayed only when we resolve promise
       // comparing the actual res and res we got is correct or not
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("12");
        element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log(text);
        })
   }) 
})