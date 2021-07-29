# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **POTENTIALLY BREAKING:** licence changed to BSD 3-Clause License
- **BREAKING:** main format is ESM, for browsers as well

### Removed

- **BREAKING:** removed `noinit` variants
- **BREAKING:** IE 11 is not supported anymore

## [1.6.2] - 2021-06-29

### Security

- updated build dependencies

## [1.6.1] - 2021-01-17

### Added

- Add CHANGELOG as file

### Fixed

- Fix LinkedIn URL

## [1.6.0] - 2020-09-28

### Changed

- Add parameter for App ID for Messenger button (#17, #29)
  - now you **have to** include `data-fb-app-id` to your Messenger buttons

## [1.5.0] - 2020-09-24

### Added

- Add Mastodon button (#23, #27)

## [1.4.5] - 2020-09-22

> Version 1.4.3 was skipped due to an error in the deployment process
> Version 1.4.4 is deprecated due to non-minified build files

### Fixed

- Fix transpilation for legacy browsers (#19, #21)
- Fix `<button>`s not behaving correctly if there are `<a>`s further on the page
- Fix PostCSS not applying any plugins (#22)

## [1.4.2] - 2020-09-18

### Fixed

- Fix WhatsApp button on desktop (#18, #20)

## [1.4.1] - 2020-08-01

### Changed

- move codebase from TypeScript to JavaScript+JSDoc
- replace Sass with CSS+PostCSS

## [1.4.0] - 2020-07-30

### Changed

- Optimise code
  - package size got reduced down to 937 kb (.min.js) / 840 kb (.cjs/.mjs)
  - `for` loops were optimised to cut down execution time

## [1.3.1] - 2020-07-30

### Fixed

- Fix documentation

## [1.3.0] - 2020-07-26

### Added

- Add `init()` function to shareon (#11, #13)
  - this allows not only to postpone the initialization of shareon but also to re-run it

## [1.2.1] - 2020-07-12

### Changed

- Optimize icon SVG files to match one standard (#8)

## [1.2.0] - 2020-07-04

### Added

- Add LinkedIn button (#5)
- Add Pocket button
- Add Reddit button
- Add Viber button

## [1.1.5] - 2020-06-26

### Added

- Add building to ESM

### Changed

- Update README and docs

### Fixed

- Fix unwanted border on `<button>` hover

## [1.1.4] - 2020-06-26

### Changed

- Rearrange fields in package.json
- Change `node-sass` to `sass`
- Update Rollup config
- Update ESLint config

## [1.1.3] - 2020-06-25

### Changed

- Update dependencies

## [1.1.2] - 2020-03-30

### Changed

- Shorten the banner in JS and CSS files

### Fixed

- Fix inconsistent spacing between buttons

## [1.1.1] - 2020-03-27

### Fixed

- Fix incorrect spacing between button rows when wrapped

## [1.1.0] - 2020-03-27

### Added

- Add Odnoklassniki button
- Add VK button

## [1.0.0] - 2020-03-26

### Added

- Add install instructions to README
- Add usage instructions to README

## [1.0.0-beta.3] - 2020-03-26

### Added

- Add Facebook button
- Add Messenger button
- Add Pinterest button
- Add WhatsApp button

### Changed

- Update colour of Telegram button
- Rename `shareon.css` to `shareon.min.css`

### Removed

- Remove building to ESM

## [1.0.0-beta.2] - 2020-03-26

### Fixed

- Fix package files not being published to NPM

## [1.0.0-beta.1] - 2020-03-26

Initial release of shareon

### Added

- Add Telegram button
- Add Twitter button

[Unreleased]: https://github.com/NickKaramoff/shareon/compare/v1.6.2...HEAD
[1.6.2]: https://github.com/NickKaramoff/shareon/compare/v1.6.1...v1.6.2
[1.6.1]: https://github.com/NickKaramoff/shareon/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/NickKaramoff/shareon/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/NickKaramoff/shareon/compare/v1.4.5...v1.5.0
[1.4.5]: https://github.com/NickKaramoff/shareon/compare/v1.4.2...v1.4.5
[1.4.2]: https://github.com/NickKaramoff/shareon/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/NickKaramoff/shareon/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/NickKaramoff/shareon/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/NickKaramoff/shareon/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/NickKaramoff/shareon/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/NickKaramoff/shareon/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/NickKaramoff/shareon/compare/v1.1.5...v1.2.0
[1.1.5]: https://github.com/NickKaramoff/shareon/compare/v1.1.4...v1.1.5
[1.1.4]: https://github.com/NickKaramoff/shareon/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/NickKaramoff/shareon/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/NickKaramoff/shareon/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/NickKaramoff/shareon/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/NickKaramoff/shareon/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/NickKaramoff/shareon/compare/v1.0.0-beta.3...v1.0.0
[1.0.0-beta.3]: https://github.com/NickKaramoff/shareon/compare/v1.0.0-beta.2...v1.0.0-beta.3
[1.0.0-beta.2]: https://github.com/NickKaramoff/shareon/compare/v1.0.0-beta.1...v1.0.0-beta.2
[1.0.0-beta.1]: https://github.com/NickKaramoff/shareon/compare/3722ada1da60abb768e00621e66b269f8fa60689...v1.0.0-beta.1
