describe('protractor element demo', function(){
    
    function Calculator(a,b,c)
    {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(value){
                if(value == c){
                    item.click();
                }
            })
        })
        element(by.id("gobutton")).click();
    }
    
    it('Locators',function(){
         browser.get('http://juliemr.github.io/protractor-demo/');
         
         Calculator(20,10,"ADDITION");
         Calculator(100,25,"DIVISION");
         Calculator(85,9,"MODULO");
         Calculator(12,8,"MULTIPLICATION");
         Calculator(234,76,"SUBSTRACTION");

         element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text);
            })
        })
    }) 
 })