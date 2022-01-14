# Sci Hub Injector

Adds SciHub links to popular publisher websites to make accessing science even easier!

Inject freedom into science publisher websites, with style.

Please contribute new websites!

## Supported sites

- PubMed
- Nature

## Screenshots

![PubMed Screenshot](.github/pubmed.png)
![Nature Screenshot](.github/nature.png)

## Installation

1. Visit `chrome://extensions` (via omnibox or menu -> Tools -> Extensions).
2. Enable Developer mode by ticking the checkbox in the upper-right corner.
3. Click on the "Load unpacked extension..." button.
4. Select the directory containing your unpacked extension.

Copied from:
https://stackoverflow.com/questions/24577024/install-chrome-extension-form-outside-the-chrome-web-store

## Contributing

1. Add link to `manifest.json`.
2. Add a function to `inject.js`.
   2.1. Extract DOI from website.
   2.2. Add element with link to SciHub to DOM. Use the same classes and structure as the website, for niceness.
3. Add `else if` clause if statement in the `addSciHubLink` function in `inject.js`.
4. Test to make sure it works.

Thanks!
