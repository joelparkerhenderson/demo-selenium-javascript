#!/usr/bin/env node

///
// Demo of Selenium browser automation with JavaScript
// Please see the file README.md for more information.
//
// ## Tracking
//
//   * Package: demo-selenium-javascript
//   * Version: 1.4.0
//   * Created: 2019-11-02T00:00:00Z
//   * Updated: 2025-04-24T13:58:02Z
//   * License: GPL-2.0-or-greater or for custom license contact us
//   * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
///

// Import Selenium Webdriver parts.
import { Browser, Builder, By, Key, Select, until } from 'selenium-webdriver';

/// Import chromedriver options that you can set as you wish.
import { Options } from "selenium-webdriver/chrome.js";
const options = new Options();
options.addArguments('--verbose'); // Enable verbose logging.
options.addArguments('--disable-notifications'); // Disable notifications such as popups.
options.setUserPreferences({ "profile.default_content_setting_values.cookies": 2 }); // Reject cookies.

// Import strict assert, renamed for convenience as assert, to avoid many of the
// problems using single module.exports CommonJS export and with default import.
// In TypeScript, --esmoduleinterop option was added to help with that.
import { strict as assert } from 'assert';
assert(true);

async function demo_with_google_search(){

    // Initialize the driver
    let driver = await new Builder()
    .forBrowser(Browser.CHROME) // Choose other browsers as you wish.
    .setChromeOptions(options) // Set options for other browsers as you wish.
    .build();

    try {

        // Navigate to a website
        await driver.get("https://google.com");

        // Do these links exist? This demonstrates `linkText`.
        await driver.findElement(By.linkText("About"));
        await driver.findElement(By.linkText("Privacy"));

        // Do these buttons exist? This demonstrates `xpath`.
        await driver.findElement(By.xpath("//input[@type='submit' and @name='btnK' and @value='Google Search']"));
        await driver.findElement(By.xpath("//input[@type='submit' and @name='btnI' and @value=\"I'm Feeling Lucky\"]"));

        // Search
        await driver.findElement(By.name("q")).sendKeys("kittens",Key.RETURN);
    
        // Output
        var title = await driver.getTitle();
        console.log('Title is:',title);

        // Example to wait for a button to be clickable
        // const button = await driver.wait(until.elementLocated(By.id('submit-button')), 10000);
        // await driver.wait(until.elementIsVisible(button), 5000);
        // await button.click();

        // Example to check the URL after clicking a button
        // const currentUrl = await driver.getCurrentUrl();
        // console.log('Current URL:', currentUrl);

        // Example to wait and accept an alert
        // await driver.wait(until.alertIsPresent(), 5000);
        // const alert = await driver.switchTo().alert();
        // console.log('Alert Text:', await alert.getText());
        // await alert.accept();

        // Example to take a screenshot and save it as 'screenshot.png'
        // const screenshot = await driver.takeScreenshot();
        // fs.writeFileSync('screenshot.png', screenshot, 'base64');

        // Example of using `wait` for an element to be clickable
        // const element = await driver.wait(until.elementLocated(By.id('example-element')), 10000);
        // await driver.wait(until.elementIsVisible(element), 5000);
        // console.log('Element is visible!');

    } finally {
        await driver.quit();
    }
 
}

demo_with_google_search().catch((err) => console.error(err));
