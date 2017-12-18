# To replicate locally
* Install node.js
* Install https://github.com/Microsoft/WinAppDriver (version 0.9 only)
  (This is because of https://github.com/appium/appium-desktop/issues/250)
* Install Appium Desktop (v1.2.7) and start server
* Run Appium as an administrator
* npm install (based on the package.json)

# Performance
  I'm hoping that the Appium package can be updated with a newer version of WinAppDriver because performance is terrible...

# Alternatively
* You can install an npm package of appium, but you need to do it globally and then run appium from an commmand prompt as an administrator.

# To Execute
* Run 'mocha' from the terminal

# UI Automation (using inspect.exe)
| Client API                   | Locator Strategy | Matched Attribute in inspect.exe        | Example       |
|------------------------------|------------------|-----------------------------------------|---------------|
| FindElementByAccessibilityId | accessibility id | AutomationId                            | AppNameTitle  |
| FindElementByClassName       | class name       | ClassName                               | TextBlock     |
| FindElementById              | id               | RuntimeId (decimal)                     | 42.333896.3.1 |
| FindElementByName            | name             | Name                                    | Calculator    |
| FindElementByTagName         | tag name         | LocalizedControlType (upper camel case) | Text          |
| FindElementByXPath           | xpath            | Any                                     | //Button[0]   |