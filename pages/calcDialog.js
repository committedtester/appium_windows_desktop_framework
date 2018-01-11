/*
let objects = {
    calculatorDialog: element(by.name('Calculator')), 
    menuBar: elementByAccessibilityId("MenuBar"),
    };
*/
let clickMenuBar= function() {
    elementByAccessibilityId("MenuBar").elementByName("View").click();
}; 

let clickMenuBarUsingObjects= function() {
    objects.menuBar.click();
}; 


module.exports = {
    clickMenuBar
};


