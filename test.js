require("./helpers/setup");
serverConfig = require('./helpers/appium-servers');
var serverConfig = serverConfig.local;
var wd = require("wd");

var calculator = {
    app:'C:\\windows\\system32\\calc1.exe',
    platformName:'Windows',
    deviceName:'WindowsPC'
    };

describe('test calculator',function(){
    var driver;

it('test launch calculator',function(done){

  driver = wd.promiseChainRemote(serverConfig);
  console.log(driver)
  this.timeout(10000);
    var cap=driver.init(calculator);
    console.log(cap);
    var window = cap.elementByName("Calculator");

    window.elementByAccessibilityId("MenuBar").elementByName("View").click()
    .elementByAccessibilityId("MenuBar").elementByName("Standard").click()
    .elementByName("2").click()
    .elementByName("Add").click()
    .elementByName("2").click()
    .elementByName("Equals").click()
    ;
    done();
})
});