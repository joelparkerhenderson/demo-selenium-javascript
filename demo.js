#!/usr/bin/env node

///
// Demo of Selenium browser automation with JavaScript
// Please see the file README.md for more information.
//
// ## Tracking
//
//   * Package: demo-selenium-javascript
//   * Version: 1.2.0
//   * Created: 2019-11-02T00:00:00Z
//   * Updated: 2025-02-12T04:10:01Z
//   * License: GPL-2.0-or-greater or for custom license contact us
//   * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
///

// Initialize Selenium Webdriver, which is the manager
const {By,Key,Builder} = require("selenium-webdriver");

// Initialize chromedriver, which connects to Google Chrome browser app
require("chromedriver");

async function demo(){

    // Initialize
    let driver = await new Builder().forBrowser("chrome").build();

    // Navigate to a website
    await driver.get("https://google.com");
            
    // Search
    await driver.findElement(By.name("q")).sendKeys("kittens",Key.RETURN);
 
    // Output
    var title = await driver.getTitle();
    console.log('Title is:',title);

    // Done
    await driver.quit();
 
}

demo();
