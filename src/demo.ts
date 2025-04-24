#!/usr/bin/env ts-node

///
// Demo of Selenium browser automation with TypeScript
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
import { Browser, Builder, By, Key, Select, until, WebElement } from 'selenium-webdriver';

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
        const elementById:WebElement = await driver.findElement(By.id("id-example-1"));
        console.log(await elementById.getAttribute('outerHTML'));

        // Find an element by name . 
        //
        // This demonstrates `By.name`.
        //
        // Example HTML:
        //
        //     <p name="name-example-1">Lorem Ipsum</p>
        //
        const elementByName:WebElement = await driver.findElement(By.name("name-example-1"));
        console.log(await elementByName.getAttribute('outerHTML'));

        // File an element by class name.
        //
        // This demonstrates `By.className`.
        //
        // Example HTML:
        //
        //     <p name="name-example-1">Lorem Ipsum</p>
        //
        const elementByClassName:WebElement = await driver.findElement(By.className("class-example-1"));
        console.log(await elementByClassName.getAttribute('outerHTML'));

        // Find an element that is a link by it's text.
        // 
        // This demonstrates `By.linkText`.
        //
        // Example HTML:
        //
        //     <a href="https://example.com">Link Example 1</a>
        //
        const elementByLinkText:WebElement = await driver.findElement(By.linkText("Link Example 1"));
        console.log(await elementByLinkText.getAttribute('outerHTML'));

        // Find an element by XPath query.
        //        
        // This demonstrates `By.xpath`.
        //
        // Example HTML:
        //
        //     <input type=submit>
        //
        const elementByXPath:WebElement = await driver.findElement(By.xpath("//input[@type='submit']"));
        console.log(await elementByXPath.getAttribute('outerHTML'));

        ///
        // Interact with form inputs in various ways.
        ///

        // Type in a text input.
        //
        // Example HTML:
        //
        //     <input type="text" id="text-example-1">
        //
        const text:WebElement = await driver.findElement(By.id('text-example-1-id'));
        console.log(await text.getAttribute('outerHTML'));
        await text.sendKeys('hello');

        // Click a checkbox input.
        //
        // Example HTML:
        //
        //     <input type="checkbox" id="checkbox-example-1-id">
        //
        const checkbox:WebElement = await driver.findElement(By.id('checkbox-example-1-id'));
        console.log(await checkbox.getAttribute('outerHTML'));
        await checkbox.click();

        // Click a radio input.
        //
        // Example HTML:
        //
        //     <input type="radio" id="radio-example-1-id-option-1-id">
        //
        const radio:WebElement = await driver.findElement(By.id('radio-example-1-option-1-id'));
        console.log(await radio.getAttribute('outerHTML'));
        await radio.click();

        // Choose a select input
        //
        // Example HTML:
        //
        //     <select id="select-example-1-id">
        //       <option>alfa</option>
        //       <option>bravo</option>
        //       <option>charlie</option>
        //     </select>
        //
        const selectElement:WebElement = await driver.findElement(By.id('select-example-1-id'));
        console.log(await selectElement.getAttribute('outerHTML'));
        const select = await new Select(selectElement);
        await select.selectByIndex(0);
        const option = await select.getFirstSelectedOption();
        console.log(await option.getAttribute('outerHTML'));
    }
    catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
            console.log(err.stack);
        }
    } 
    finally {
        await driver.quit();
    }
    
}

demo().catch((err) => console.error(err));
