

describe('protractor element demo', function(){
    var obj = require("./pomDemo1.js");
    // prerequisites i.e. Setup
    beforeEach(function()
    {
       obj.getURL();
    });
    
    it('Testing Calculator functionalities',function(){
         
         obj.firstinput.sendKeys("5");
         obj.secondinput.sendKeys("7")
         obj.goButton.click();

         browser.sleep(1000);
         //real o/p is displayed only when we resolve promise
        // comparing the actual res and res we got is correct or not

         expect(obj.result.getText()).toBe("12");

         obj.result.getText().then(function(text){
             console.log(text);
         })

    }) 
    // teardown method
    afterEach(function()
    {
        console.log("Test is completed");
    })
 })