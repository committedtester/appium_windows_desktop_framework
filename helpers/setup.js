var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();
//enable chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;