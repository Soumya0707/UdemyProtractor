describe('protractor element demo', function(){
    
    function Add(a,b)
    {
        element(by.model("first")).sendKeys(a);
         element(by.model("second")).sendKeys(b);
         element(by.id("gobutton")).click();
    }
    
    it('Locators',function(){
         browser.get('http://juliemr.github.io/protractor-demo/');
         
         Add(20,10);
         Add(10,78);
         Add(5,7);
         Add(12,8);

         
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
         })
    }) 
 })