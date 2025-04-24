# Demo Selenium JavaScript & TypeScript

Demonstration of:

* [Selenium](https://www.selenium.dev/) browser automation testing
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
* [TypeScript](https://en.wikipedia.org/wiki/TypeScript)
* [Node](https://nodejs.org/)
* [ChromeDriver](https://developer.chrome.com/docs/chromedriver)

Many more examples are here:

* [SeleniumHQ examples](https://github.com/SeleniumHQ/seleniumhq.github.io/tree/trunk/examples)

## Install

### Install Node and NPM

Install Node and NPM from https://nodejs.org/

Confirm:

```sh
node -v
```

```stdout
v23.6.1
```

Confirm:

```sh
npm -v
```

```stdout
11.2.0
```

### Install Selenium

Install Selenium WebDriver:

```sh
npm install --save selenium-webdriver@latest
```

### Install chromedriver

Install Google chromedriver:

```sh
npm install --save chromedriver@latest  
```

### Update

Run:

```sh
npm install npm@latest
npm upgrade    
npm audit fix
```

## Install TypeScript (optional)

Run:

```sh
npm install typescript@latest 
npm install ts-node@latest
npm install --save-dev @types/node 
npm install --save-dev @types/selenium-webdriver
```

Create a file `tsconfig.json` for TypeScript configuration:

```sh
npx tsc --init
```

## Run

Run:

```sh
./src/demo.ts
```

The script will launch your local Chrome web browser,
connect to Google, and send a query for kittens.

If you prefer, you can run with Node explicitly:

```sh
ts-node src/demo.ts
```

### Troubleshooting “chromedriver” Not Opened 

If you get this kind of error message:

```txt
“chromedriver” Not Opened. Apple could not verify “chromedriver” 
is free of malware that may harm your Mac or compromise your privacy.
```

Or this kind of error message:

```txt
Apple is not able to verify that it is free from malware that could harm your
Mac or compromise your privacy. Don’t open this unless you are certain it is
from a trustworthy source.
```

Then click "Done".

Try this command line solution:

```sh
xattr -d com.apple.quarantine $(which chromedriver) 2>/dev/null
```

Try adjusting your system settings:

* Apple menu -> Settings -> Security & Privacy -> General

* See the entry that says: "chromedriver" was blocked to protect your Mac.

* Click the button "Allow Anyway".

### Troubleshooting "This version of ChromeDriver …"

If you get this kind of error message:

```txt
UnhandledPromiseRejectionWarning: 
SessionNotCreatedError: session not created: 
This version of ChromeDriver only supports Chrome version …
```

Then you may need to harmonize your Chrome browser app and your Chrome webdriver.

If you use macOS brew, then upgrade chromedriver:

```sh
brew upgrade chromedriver 
```

To update your Chrome browser app:

* On your computer, open Chrome.

* Find your current Chrome version by typing in the URL bar: `chrome://version/`.

* You should see a web page with many details, and you should see the first line with the version number, such as: "Google Chrome 135.0.7049.86 (Official Build)".

* At top right, tap the "More" icon, which is 3 vertical dots.

* You see the "More" menu. If you see a menu item "Update", then choose it. If you don't see a menu item "Update", then  you're on the current version.

To update your Chrome webdriver:

* Go to https://chromedriver.chromium.org/downloads

* Download the version that matches your Chrome browser app.


## Tracking

* Package: demo-selenium-javascript
* Version: 1.3.0
* Created: 2019-11-02T00:00:00Z
* Updated: 2025-04-19T12:50:49Z
* License: GPL-2.0-or-greater or for custom license contact us
* Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
