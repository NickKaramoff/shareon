# shareon [![build status](https://badgen.net/travis/NickKaramoff/shareon/master)](https://travis-ci.com/NickKaramoff/shareon) [![install size](https://badgen.net/bundlephobia/minzip/shareon)](https://bundlephobia.com/result?p=shareon) [![npm package version](https://badgen.net/npm/v/shareon)](https://npm.im/shareon) [![github license](https://badgen.net/github/license/NickKaramoff/shareon)](https://github.com/NickKaramoff/shareon/blob/master/LICENSE)

<img src="https://raw.githubusercontent.com/googlefonts/noto-emoji/master/png/128/emoji_u1f4ef.png" align="right" alt="Postal Horn emoji" width="96" height="96">

Lightweight, stylish and ethical share buttons.

- **Small.** Dependency-free. CSS+JS bundle is only 6 KB minified and gzipped.
- **Stylish.** Uses official vector logos and colors with no visual mess.
- **Ethical.** Embeds no tracking code. JS is required only for the setup.

<img src="https://raw.githubusercontent.com/NickKaramoff/shareon/master/docs/screen01@2x.png" height="156" width="416" alt="shareon example">

----
Observe the live demo here: [shareon.js.org](https://shareon.js.org)

## Install

Include the link to shareon's JS and CSS in your website:

```html
<link href="https://cdn.jsdelivr.net/npm/shareon@1.2.1/dist/shareon.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/shareon@1.2.1/dist/shareon.min.js" type="text/javascript"></script>
```

or install it via NPM use it in a JS file that you will bundle:

```sh
npm install shareon
# or
yarn add shareon
```

```js
require('shareon');
```

## Usage

> shareon was heavily inspired by [Likely](https://ilyabirman.net/projects/likely/),
  and has a backwards-compatible API (excluding themes and sizes).

Create a container with class `shareon` and populate it with elements, whose
classes match the names of social networks:

```html
<div class="shareon">
    <a class="facebook"></a>
    <a class="linkedin"></a>
    <a class="messenger"></a>
    <a class="odnoklassniki"></a>
    <a class="pinterest"></a>
    <a class="pocket"></a>
    <button class="reddit"></button>
    <button class="telegram"></button>
    <button class="twitter"></button>
    <button class="viber"></button>
    <button class="vkontakte"></button>
    <button class="whatsapp"></button>
</div>
```

If you use `<a>`, the buttons will get a `href`-attribute to them. In other cases
they will get a listener on `click` event, so you can use `<button>`s if you wish.

By default, the URL and the title of the page will be used in sharing dialogs.
To change this, you can use the `data-url` and `data-title` attributes. Use them
on the whole container or on the specific buttons:

```html
<div class="shareon" data-url="https://example.com">
    <a class="facebook" data-title="Custom Facebook title"></a>
    <a class="twitter" data-title="Custom Twitter title"></a>
</div>
```

Apart from the URL and title, some networks support extra parameters:

- add `data-media` to an Odnoklassniki, Pinterest, or VK button to customize the pinned picture
- add `data-text` to a WhatsApp, Telegram or Viber button to add custom message text
- add `data-via` to a Twitter button to mention a user

Here are all the custom parameters in their glory:

```html
<div class="shareon" data-url="https://example.com/custom-url">
    <a class="facebook" data-title="Custom Facebook title"></a>
    <a class="messenger" data-url="https://my-cool-website.com"></a>
    <a class="pinterest" data-media="https://picsum.photos/500">Pin</a>
    <a class="telegram" data-text="Check this out!"></a>
    <a class="twitter" data-via="MyNickname"></a>
    <a class="whatsapp">Send</a>
</div>
```
