#!/usr/bin/env ts-node

///
// Demo of Selenium browser automation with TypeScript
// Please see the file README.md for more information.
//
// ## Tracking
//
//   * Package: demo-selenium-javascript
//   * Version: 1.3.0
//   * Created: 2019-11-02T00:00:00Z
//   * Updated: 2025-04-19T12:50:49Z
//   * License: GPL-2.0-or-greater or for custom license contact us
//   * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
///

// Import Selenium Webdriver parts.
import { Browser, Builder, By, Key, until } from 'selenium-webdriver';

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

async function demo(){

    // Initialize
    const driver = await new Builder()
    .forBrowser(Browser.CHROME) // Choose other browsers as you wish.
    .setChromeOptions(options) // Set options for other browsers as you wish.
    .build();

    try {
        // Navigate to a website
        await driver.get("https://testingexamples.github.io");

        ///
        // Find elements in various ways.
        ///

        // Find an element by id. 
        //
        // This demonstrates `By.id`.
        //
        // Example HTML: 
        //
        //      <p id="id-example-1">Lorem Ipsum</p>
        //
        let elementById = await driver.findElement(By.id("id-example-1"));

        // Find an element by name . 
        //
        // This demonstrates `By.name`.
        //
        // Example HTML:
        //
        //     <p name="name-example-1">Lorem Ipsum</p>
        //
        let elementByName = await driver.findElement(By.name("name-example-1"));

        // File an element by cascading style sheet (CSS) class.
        //
        // This demonstrates `By.css`.
        //
        // Example HTML:
        //
        //     <p name="name-example-1">Lorem Ipsum</p>
        //
        let elementByClass = await driver.findElement(By.css("class-example-1"));
        
        // Find an element that is a link by it's text.
        // 
        // This demonstrates `By.linkText`.
        //
        // Example HTML:
        //
        //     <a href="https://example.com">Link Example 1</a>
        //
        let elementByLinkText = await driver.findElement(By.linkText("Link Example 1"));

        // Find an element by XPath query.
        //        
        // This demonstrates `By.xpath`.
        //
        // Example HTML:
        //
        //     <input type=submit>
        //
        let elementByXPath = await driver.findElement(By.xpath("//input[@type='submit']"));

        ///
        // Interact with form inputs in various ways.
        ///

        // Type in a text input.
        //
        // Example HTML:
        //
        //     <input type="text" id="text-example-1">
        //
        const text = await driver.findElement(By.id('text-example-1-id'));
        await text.sendKeys('hello');

        // Click a checkbox input.
        //
        // Example HTML:
        //
        //     <input type="checkbox" id="checkbox-example-1-id">
        //
        const checkbox = await driver.findElement(By.name('checkbox-example-1'));
        checkbox.click();

        // Click a radio input.
        //
        // Example HTML:
        //
        //     <input type="radio" id="radio-example-1-id">
        //
        const radio = await driver.findElement(By.name('radio-example-1-id'));
        radio.click();

        // Choose a select input
        //
        // Example HTML:
        //
        //     <select id="select-example-1-id">
        //       <option>alfa</option>
        //       <option>bravo</option>
        //       <option>charlie</option>
        //      </select>
        //
        const select = new Select(await driver.findElement(By.name('select-example-1-id')));
        await select.selectByVisibleText("alfa");

    } finally {
        await driver.quit();
    }
    
}

async function demo_of_google(){

    // Initialize
    const driver = await new Builder()
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
        const searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('kittens');
        await searchBox.submit();
    
        // Output
        await driver.wait(until.titleContains('kittens'), 5000);
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

demo().catch((err) => console.error(err));
demo_of_google().catch((err) => console.error(err));
