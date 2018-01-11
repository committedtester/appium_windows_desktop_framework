require("./helpers/setup");
serverConfig = require('./helpers/appium-servers');
var serverConfig = serverConfig.local;
var wd = require("wd");

var calcDialog = require('../Appium_Windows/pages/calcDialog.js') 
var apps = require('../Appium_Windows/helpers/capabilities.js')


describe('test calculator',function(){
    var driver;

    driver = wd.promiseChainRemote(serverConfig);
  //console.log(driver)
  this.timeout(10000);
    var cap=driver.init(apps.Calculator);
    //console.log(cap);
    var window = cap.elementByName("Calculator");

    it('test launch calculator using async and await', async function(){    
      //await window.calcDialog.clickMenuBar();  
      //DOES NOT WORK BUT NON-PAGE MODEL DOES
      await window.elementByAccessibilityId("MenuBar").elementByName("View").click();
      await window.elementByAccessibilityId("MenuBar").elementByName("Standard	Alt+1").click();
      await window.elementByName("2").click();
      await window.elementByName("Add").click();
      await window.elementByName("2").click();
      await window.elementByName("Equals").click();      
  })  

  it('test launch calculator using promise chains',function(done){
    window.elementByAccessibilityId("MenuBar").elementByName("View").click()
    .elementByAccessibilityId("MenuBar").elementByName("Standard	Alt+1").click()
    .elementByName("2").click()
    .elementByName("Add").click()
    .elementByName("2").click()
    .elementByName("Equals").click()
    ;
    done();
})






});