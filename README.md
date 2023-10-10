# OctoFence Challenge Solver

This repository contains a simple yet effective snippet of code demonstrating the weak security measures deployed by OctoFence on Rome's official Colosseum ticketing website. The project structure and the code herein dissect the lackluster antibot protection measures, which were unraveled and bypassed in a mere span of four minutes.

Take a look into my [Medium Article](https://medium.com/@glizzykingdreko/the-irony-of-octofence-romes-colosseum-tickets-and-a-digital-mafia-fe2deba67c52) about it.

## Table of Contents
- [OctoFence Challenge Solver](#octofence-challenge-solver)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Quick Insight](#quick-insight)
  - [OctoFence protection](#octofence-protection)
    - [1. Chrome extension checks](#1-chrome-extension-checks)
    - [2. First cookie "challenge"](#2-first-cookie-challenge)
    - [3. The fingerprint generation](#3-the-fingerprint-generation)
  - [Usage](#usage)
    - [Steps](#steps)
  - [Final Thoughts](#final-thoughts)
  - [My links](#my-links)

## Project Structure
- `index.py`: A Python script utilized for making requests, chosen for its ease in implementing TLS.
- `solver/`
  - `main.js`: Core logic for solving the OctoFence "challenge."
  - `helpers/`
    - `fingerprint.js`: Simplistic fingerprint generation mimicking OctoFence's method.
    - `cookieExtractor.js`: Script to traverse and evaluate the necessary JSFuck parts from OctoFence's protection script.

## Quick Insight

The OctoFence protection measures were rapidly understood within 2 minutes, and the subsequent 2 minutes were spent crafting a basic traversal script to bypass their so-called antibot protection. This project, albeit quick and basic, glaringly showcases the inefficiency and superficiality of the security measures in place.

## OctoFence protection

### 1. Chrome extension checks
I never saw a check like that for a chrome extension. Other than the fact that you could easly edit the location or details of the extension, they don't even use captchas on the page...
```js

var is_extensions_installed = false;
function check_axiom() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'chrome-extension://cpgamigjcbffkaiciiepndmonbfdimbb/axiom-logo.png', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                is_extensions_installed = true;
            }
        }
    }
    xhr.send();
}

function check_2captcha() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'chrome-extension://ifibfemgeogfhoebkmokieepdoobkbpo/assets/images/logo.svg', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                is_extensions_installed = true;
            }
        }
    }
    xhr.send();
}

// NopeCHA chrome-extension://dknlfmjaanfblgfdfebhijalfmhmjjjo/popup.js
function check_nopecha() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'chrome-extension://dknlfmjaanfblgfdfebhijalfmhmjjjo/popup.js', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                is_extensions_installed = true;
            }
        }
    }
    xhr.send();
}

// CaptchaSolver chrome-extension://pgojnojmmhpofjgdmaebadhbocahppod/assets/images/logo.png
function check_captchasolver() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'chrome-extension://pgojnojmmhpofjgdmaebadhbocahppod/assets/images/logo.png', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                is_extensions_installed = true;
            }
        }
    }
    xhr.send();
}
```

### 2. First cookie "challenge"
Just a JSFuck that after beeing evaled will return you the value needed for `octofence_jslc` cookie
```js
var AILH24U5V73N92Y2Y0H7844EYOMK42UYW = ([][(!![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()+[])[!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+([][[]]+[])[!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+([][[]]+[])[!+[]+!+[]]+([][[]]+[])[!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+(![]+[])[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+(!![]+[])[!+[]+!+[]+!+[]]+[+[]]+[];var AVSFD9UT2U54LTJQKH33IIGR5QTOK6E3V = (![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+([][(!![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()+[])[!+[]+!+[]]+[+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+(![]+[])[+!+[]]+(![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[];var A1598O4PP6BIQOALBMT7SIKYJFSVRR9NP = (!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+(![]+[])[+!+[]]+[+[]]+[]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]]+[]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+([][[]]+[])[!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[+!+[]]+[]+(!![]+[])[!+[]+!+[]+!+[]];var ABMPGAWO30TO5WFDGWO0FHIVRBTTMR5XB = [!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+(![]+[])[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]]+[]+([][(!![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()+[])[!+[]+!+[]]+[!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+[!+[]+!+[]+!+[]]+[]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+([][(!![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()+[])[!+[]+!+[]]+(![]+[])[+!+[]]+[+[]]+[]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[];var octofence_token = AILH24U5V73N92Y2Y0H7844EYOMK42UYW+AVSFD9UT2U54LTJQKH33IIGR5QTOK6E3V+A1598O4PP6BIQOALBMT7SIKYJFSVRR9NP+ABMPGAWO30TO5WFDGWO0FHIVRBTTMR5XB;
        document.cookie=''+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[!+[]+!+[]]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]]+![]+(![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]])()[([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]])+[])[+!+[]]+[+!+[]]+[!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([][(!![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[!+[]+!+[]]])()+'=' + octofence_token + '; expires=' + (new Date(Date.now() + (86400*1000))).toUTCString() + '; SameSite=Lax; Secure; path=/';
```

### 3. The fingerprint generation
This is the `octofence_jslc_fp` cookie, fun fact they don't even check if the cookie is valid, they just check if it exists.
As well as the whole `fp.js` file not even obfuscated lol
```js
Fingerprint.prototype = {
        get: function () {
            var keys = [];
            keys.push(navigator.userAgent);
            keys.push(navigator.language);
            keys.push(screen.colorDepth);
            if (this.screen_resolution) {
                var resolution = this.getScreenResolution();
                if (typeof resolution !== 'undefined') {
                    keys.push(this.getScreenResolution().join('x'));
                }
            }
            keys.push(new Date().getTimezoneOffset());
            keys.push(this.hasSessionStorage());
            keys.push(this.hasLocalStorage());
            keys.push(!!window.indexedDB);
            if (document.body) {
                keys.push(typeof (document.body.addBehavior));
            } else {
                keys.push(typeof undefined);
            }
            keys.push(typeof (window.openDatabase));
            keys.push(navigator.cpuClass);
            keys.push(navigator.platform);
            keys.push(navigator.doNotTrack);
            keys.push(this.getPluginsString());
            if (this.canvas && this.isCanvasSupported()) {
                keys.push(this.getCanvasFingerprint()); // a simple static captcha
            }
            if (this.hasher) {
                return this.hasher(keys.join('###'), 31);
            } else {
                return this.murmurhash3_32_gc(keys.join('###'), 31);
            }
        },
        murmurhash3_32_gc: function (key, seed) {
            var remainder, bytes, h1, h1b, c1, c2, k1, i;
            remainder = key.length & 3;
            bytes = key.length - remainder;
            h1 = seed;
            c1 = 0xcc9e2d51;
            c2 = 0x1b873593;
            i = 0;
            while (i < bytes) {
                k1 = ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(++i) & 0xff) << 8) | ((key.charCodeAt(++i) & 0xff) << 16) | ((key.charCodeAt(++i) & 0xff) << 24);
                ++i;
                k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;
                h1 ^= k1;
                h1 = (h1 << 13) | (h1 >>> 19);
                h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
                h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
            }
            k1 = 0;
            switch (remainder) {
            case 3:
                k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
            case 2:
                k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
            case 1:
                k1 ^= (key.charCodeAt(i) & 0xff);
                k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
                h1 ^= k1;
            }
            h1 ^= key.length;
            h1 ^= h1 >>> 16;
            h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= h1 >>> 13;
            h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
            h1 ^= h1 >>> 16;
            return h1 >>> 0;
        },
    // ...
}
```


## Usage

For anyone looking to work on a website guarded by OctoFence's antibot, this repository serves as a perfect starting point to understand and bypass the protection. It's an educational tool showcasing a variety of vulnerabilities while offering a direct bypass method to overcome the rudimentary challenges posed by OctoFence.

### Steps
1. Run `index.py` to initiate the request to the targeted website.
2. `main.js` kicks in to solve the "challenge" posed by OctoFence.
3. Helper scripts in the `helpers/` directory, namely `fingerprint.js` and `cookieExtractor.js`, assist in generating the necessary values to bypass the antibot protection.

## Final Thoughts

This endeavor serves as a clear indicator of the superficial nature of OctoFence's security measures. It's a call to action for more robust and genuine cybersecurity implementations, especially when public systems and heritage sites are concerned. Moreover, it provides a learning platform for individuals to study and understand various types of vulnerabilities in a real-world scenario.

Feel free to fork, study, and expand upon this project to explore further into the world of cybersecurity and antibot protection systems.

## My links
- [GitHub](https://github.com/glizzykingdreko)
- [Twitter](https://mobile.twitter.com/glizzykingdreko)
- [Medium](https://medium.com/@glizzykingdreko)
- [Email](mailto:glizzykingdreko@protonmail.com)