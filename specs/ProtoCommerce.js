describe("Protractor form Exercise steps",function()
{
    function selectProduct(product)
    {
        //taking all the cards and going through the index and get the title and select
        element.all(by.tagName("app-card")).each(function(item)
        {
            item.element(by.css("h4 a")).getText().then(function(text)
            {
                if(text == product){
                    // clicking on add button
                    item.element(By.css("button[class*='btn-info']")).click();
                }
            })
        })
    }
    
    it("open angular application form", function()
    {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.name("name")).sendKeys("Soumya");
        element(by.css("input[name='email']")).sendKeys("skb@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("password1");
        element(by.css("input[type='checkbox']")).click();
        // locators for identifying multiple elem having same tagname default it takes male and to select female we use below method
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.name("bday")).sendKeys("07-07-1998");
        element(by.buttonText("Submit")).click().then(function()
        {
            element(by.css("div[class*='success']")).getText().then(function(text)
            {
                browser.sleep(2000);
                console.log(text);
            })
            // validating the alert messages
            element(by.name("name")).clear();
            element(by.name("name")).sendKeys("S").then(function()
            {
                element(by.css("[class='alert alert-danger']")).getText().then(function(text)
                {
                   console.log(text); 
                })
            })

            selectProduct("Samsung Note 8");
            selectProduct("Nokia Edge");
            element(by.linkText("Shop")).click();
            browser.sleep(5000);
            
            element(by.partialLinkText("Checkout")).getText().then(function(text)
            {
                var res = text.split("(");
                var x = Number(res[1] = trim().charAt(0));

                var y = x+1;
                console.log(y); //2 o/p

                expect(res[1] = trim().charAt(0)).toBe(y); // prints => 1, 2 for selecting 2 items
                
            })
        })
    })
})