#!/usr/bin/env node

///
// Demo of Selenium browser automation with JavaScript
// Please see the file README.md for more information.
//
// This file demonstrates end-to-end (e2e) tests using assertions,
// such as testing a typical website home page and a search page.
///

// Initialize Selenium Webdriver, which is the manager
const {By,Key,Builder} = require("selenium-webdriver");

// Initialize chromedriver, which connects to Google Chrome browser app
require("chromedriver");

// Node.js comes with an assert class as part of its core modules set.
// When an assert fails, then an AssertionError indicates what went wrong.
//
// Syntax examples:
// ```js
// assert.ok(value, [message]);
// assert.equal(actual, expected[, message]);
// ```
//
const assert = require('assert');
const AssertionError = require('assert').AssertionError;

async function test(){
    let driver = await new Builder().forBrowser("chrome").build();
    await test_home_page(driver);
    await test_search_query(driver);
    await driver.quit(); 
}

async function test_home_page(driver){
    console.info("test home page");
    await driver.get("https://google.com");

    // Is the title correct?
    let title = await driver.getTitle();
    assert.equal(title, "Google", "home page title");

    // Do these links exist? This demonstrates `linkText`.
    await driver.findElement(By.linkText("About"));
    await driver.findElement(By.linkText("Store"));
    await driver.findElement(By.linkText("Gmail"));
    await driver.findElement(By.linkText("Images"));

    // Do these buttons exist? This demonstrates `xpath`.
    await driver.findElement(By.xpath("//input[@type='submit' and @name='btnK' and @value='Google Search']"));
    await driver.findElement(By.xpath("//input[@type='submit' and @name='btnI' and @value=\"I'm Feeling Lucky\"]"));
}

async function test_search_query(driver){
    console.info("test search query");
    await driver.get("https://google.com");

    // Find the search box, then type "kittens", then press return.
    await driver.findElement(By.name("q")).sendKeys("kittens",Key.RETURN);

    // Is the results page title correct?
    let title = await driver.getTitle();
    assert.equal(title, "kittens - Google Search", "search query results page title")
}

test();
