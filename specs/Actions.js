describe('Actions Demo',function(){
	
    it('open posse website',function(){
		
		browser.get('https://posse.com/');
        element(by.model("userInputQuery")).sendKeys("river");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform()
        
        // to get the arrow down the popped list form keyboard
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        
        // to enter/select the choice from the keyboard
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
            browser.sleep(2000);
            
            // to count the available rivers in uk is equal to 7 or not
            expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
            
            // displaying the contents of 1st river info.
            element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
           
            element(by.css("a[ng-href*='London/River Island']")).click().then(function()
            {
                
                browser.getTitle().then(function(title)
                    {
                        console.log(title + " title of the page before switching");
                    })
                
                    //changing the scope of the window
                browser.getAllWindowHandles().then(function(handles)
                {
                    //focusing of the 1st child window!
                    browser.switchTo().window(handles[1]);
                    // getting the title of the window
                    browser.getTitle().then(function(title)
                    {
                        console.log(title + " title of the page after switching");
                    })

                    //switching back to parent window
                    browser.switchTo().window(handles[0]);
                    browser.getTitle().then(function(title)
                    {
                        console.log(title + " title of the page switching at 3rd time");
                    })

                })
            })
        })
	})
})