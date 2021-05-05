
describe("protractor Alert steps!", function()
{
    
    it("Open Non-Angular js website Alerts",function(){
        
        browser.waitForAngularEnabled(false);
        //maximize browser
        browser.driver.manage().window().maximize();
        browser.get("http://qaclickacademy.com/practice.php");
        
        // switching from browser to frame
        browser.switchTo().frame("courses-iframe");
        // to next web page
        element(by.css("a[href*='sign_in']")).getText().then(function(text)
        {
            console.log(text);
        })
        
    })
})