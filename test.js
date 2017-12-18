require("./helpers/setup");
serverConfig = require('./helpers/appium-servers');
var serverConfig = serverConfig.local;
var wd = require("wd");
var calculator = require('./helpers/capabilities');

describe('test calculator',function(){
    var driver;

it('test launch calculator',function(done){

  driver = wd.promiseChainRemote(serverConfig);
  console.log(driver)
  //this.timeout(10000);
    var cap=driver.init(calculator);
    console.log(cap);
    driver.elementByName("Edit").click();
    driver.elementByXPath("//MenuItem[starts-with(@Name, \"Time/Date\")]").click();

         done();
})
});