#!/usr/bin/env node

///
// Demo of Selenium browser automation with JavaScript
// Please see the file README.md for more information.
//
// ## Tracking
//
//   * Package: demo-selenium-javasript
//   * Version: 1.1.0
//   * Created: 2019-11-02T00:00:00Z
//   * Updated: 2021-10-01T13:05:10Z
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

    // Fetch
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
