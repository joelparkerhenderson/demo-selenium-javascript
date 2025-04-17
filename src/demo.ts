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
        // Done
        await driver.quit();
    }
    
}

demo().catch((err) => console.error(err));
