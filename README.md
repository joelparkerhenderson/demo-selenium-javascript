# Demo Selenium JavaScript & TypeScript


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

```
npm -v
```

```stdout
11.1.0
```


### Install Selenium

Install Selenium WebDriver:

```sh
npm install --save selenium-webdriver
```


### Install chromedriver

Install Google chromedriver:

```sh
npm install --save chromedriver
```


## Install TypeScript (optional)

Run:

```sh
npm install typescript ts-node -g
npm install @types/selenium-webdriver
```

Create a file `tsconfig.json` for TypeScript configuration:

```sh
npx tsc --init
```

## Run

Run:

```sh
./demo.ts
```

Or you can run with Node explicitly:

```sh
ts-node demo.ts
```

The script will launch your local Chrome web browser,
connect to Google, and send a query for kittens.


## Troubleshooting


### Troubleshooting “chromedriver” Not Opened 

If you get this error message:

```
Apple could not verify “chromedriver” is free of malware 
that may harm your Mac or compromise your privacy.
```

Then you need to adjust your system settings:

* Apple menu -> Settings -> Security & Privacy -> General

* See the entry that says: "chromedriver" was blocked to protect your Mac.

* Click the button "Allow Anyway".


### Troubleshooting "This version of ChromeDriver …"

If you get this error message:

```
UnhandledPromiseRejectionWarning: 
SessionNotCreatedError: session not created: 
This version of ChromeDriver only supports Chrome version …
```

Then you may need to harmonize your Chrome browser app and your Chrome webdriver.

To update your Chrome browser app:

* On your computer, open Chrome.

* At top right, tap the "More" icon, which is 3 vertical dots.

* You see the "More" menu. If you see a menu item "Update", then choose it. If you don't see a menu item "Update", then  you're on the current version.

To update your Chrome webdriver:

* Go to https://chromedriver.chromium.org/downloads

* Download the version that matches your Chrome browser app.


## Tracking

  * Package: demo-selenium-javascript
  * Version: 1.2.0
  * Created: 2019-11-02T00:00:00Z
  * Updated: 2025-02-12T04:10:01Z
  * License: GPL-2.0-or-greater or for custom license contact us
  * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
