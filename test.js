var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();
//enable chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var serverConfig = {
    host:'127.0.0.1',
    port:4723,

};

var capabilities = {
    app:'C:\\Windows\\System32\\notepad.exe',
    platformName:'Windows',
    deviceName:'WindowsPC'
};

var driver;

describe('test notepad',function(){
it('test launch notepad',function(done){

  driver = wd.promiseChainRemote(serverConfig);
  console.log(driver)
  this.timeout(10000);
    var cap=driver.init(capabilities);
    console.log(cap)
         done();
})
});