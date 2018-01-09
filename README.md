# To replicate locally (with command line appium)
* Install node.js* 
* npm install -g appium as an administrator
* Run Appium from the command line as an administrator
* npm install (based on the package.json)

# To replicate locally with nicer Appium Desktop Experience (once bug is fixed)
* Install node.js
* Install https://github.com/Microsoft/WinAppDriver (version 0.9 only, but 1.0 is faster)
  (This is because of https://github.com/appium/appium-desktop/issues/250)
* Install Appium Desktop (v1.2.7) as an administrator
* Run Appium Desktop as an administrator

# Performance
  I'm hoping that the Appium package can be updated with a newer version of WinAppDriver because performance is terrible...

# To Execute
* Run 'mocha' from the terminal or npm test

# UI Automation (using inspect.exe)
| Client API                   | Locator Strategy | Matched Attribute in inspect.exe        | Example       |
|------------------------------|------------------|-----------------------------------------|---------------|
| FindElementByAccessibilityId | accessibility id | AutomationId                            | AppNameTitle  |
| FindElementByClassName       | class name       | ClassName                               | TextBlock     |
| FindElementById              | id               | RuntimeId (decimal)                     | 42.333896.3.1 |
| FindElementByName            | name             | Name                                    | Calculator    |
| FindElementByTagName         | tag name         | LocalizedControlType (upper camel case) | Text          |
| FindElementByXPath           | xpath            | Any                                     | //Button[0]   |