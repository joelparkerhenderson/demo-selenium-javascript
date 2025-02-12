#!/usr/bin/env ts-node

///
// Demo of Selenium browser automation with TypeScript
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
import { Builder, By, until } from 'selenium-webdriver';

// Initialize chromedriver, which connects to Google Chrome browser app
import chrome from 'selenium-webdriver/chrome';

async function demo(){

    // Initialize
    const driver = await new Builder()
    .forBrowser('chrome') // Choose 'firefox' or 'edge' as needed
    .build();

    try {
        // Navigate to a website
        await driver.get("https://google.com");
                
        // Search
        const searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('kittens');
        await searchBox.submit();
    
        // Output
        await driver.wait(until.titleContains('kittens'), 5000);
        var title = await driver.getTitle();
        console.log('Title is:',title);

    } finally {
        // Done
        await driver.quit();
    }
    
}

demo().catch((err) => console.error(err));
