
describe('protractor Synchronization steps', function()
{
    it("open non-angular js website sync", function()
    {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");

        element(by.css("a[href*='loadAjax']")).click();
        var EC = protractor.ExpectedConditions;
        // waiting for the loader to load than display the result
        browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);
        element(by.id("results")).getText().then(function(text)
        {
            console.log(text);
        })


    })
})