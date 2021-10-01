# Demo Selenium JavaScript


## Install 


### Install Node and NPM

Install Node and NPM from https://nodejs.org/

Confirm:

```sh
$ node -v
```

Output example:

```sh
v16.10.0
```

Confirm:

```
npm -v
```

Output example:

```sh
7.24.1
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


## Run

Run:

```sh
./demo.js
```

Or you can run with Node explicity:

```sh
node demo.js
```

The script will launch your local Chrome web browser,
connect to Google, and send a query for kittens.


## Troubleshooting


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

  * Package: demo-selenium-javasript
  * Version: 1.1.0
  * Created: 2019-11-02T00:00:00Z
  * Updated: 2021-10-01T13:05:10Z
  * License: GPL-2.0-or-greater or for custom license contact us
  * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
