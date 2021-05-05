
describe("protractor Alert steps!", function()
{
    
    it("Open Non-Angular js website Alerts",function(){
        
        browser.waitForAngularEnabled(false);
        browser.get("http://qaclickacademy.com/practice.php");

        element(by.id("confirmbtn")).click();

        //clicking the ok from the alert.. if we want to cancle instead of accept use "dismiss"
        browser.switchTo().alert().accept().then(function()
        {
            browser.sleep(2000);
        })
    })
})