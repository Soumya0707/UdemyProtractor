describe('protractor element demo', function(){
    it('Locators',function(){
         browser.get('http://juliemr.github.io/protractor-demo/');
         
         element(by.model("first")).sendKeys("5");
         element(by.model("second")).sendKeys("7")
         element(by.id("gobutton")).click();
         //browser.sleep(1000);

         element(by.model("first")).sendKeys("50");
         element(by.model("second")).sendKeys("10")
         element(by.id("gobutton")).click();

         element(by.model("first")).sendKeys("25");
         element(by.model("second")).sendKeys("25")
         element(by.id("gobutton")).click();

         element(by.model("first")).sendKeys("20");
         element(by.model("second")).sendKeys("10")
         element(by.id("gobutton")).click();
         // to print all the history of the calculation
         // multiple objects of repeater we use elements.all.
         element.all(by.repeater("result in memory")).count().then(function(text){
             console.log(text);
         })
         //extracting the all the  results
         element.all(by.repeater("result in memory")).each(function(item){
             item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                 console.log(text);
             })
             // shopping the items cards and checking the value update on checkout
             element(by.linkText("Shop")).click();
             //taking all 4 cards into the list and traverse through each index of list
             //if h4 repeated by.css("h4[class='card-title'] a") else if its only one time than directly use only "h4"
             element.all(by.tagName("app-card")).each(function(item)
             {
                item.element(by.css("h4 a")).getText().then(function(text)
                {
                    if(text == "Samsung Note 8"){
                        // clicking on add button
                        item.element(by.css("button[class*='btn-info']")).click();
                    }
                })
             })



         })
    }) 
 })