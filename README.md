📯 shareon
==========

> Lightweight, stylish and ethical share buttons for popular social networks

<img src="assets/demo@2x.png" height="90" width="395" alt="demo: shareon buttons for various popular social networks">

- **Small.** Dependency-free. CSS+JS bundle is uner 7 KB, minified and gzipped.
- **Stylish.** Uses official colours and vector logos with no visual mess.
- **Ethical.** Embeds no tracking code. JS is required only for the setup.

Observe the live demo at [shareon.js.org](https://shareon.js.org/)!

Install
-------

### Modern browsers

shareon ships as an ES6 module.
[Most modern browsers](https://caniuse.com/es6-module) support this format.

Include the link to shareon's JS and CSS in your website:

```html
<link href="https://cdn.jsdelivr.net/npm/shareon@2/shareon.css" rel="stylesheet">
<script type="module" src="https://cdn.jsdelivr.net/npm/shareon@2"></script>
```

### Older browsers

If for some reason you don't want to use the ESM format, you can include the
Legacy (IIFE) version of the package

```html
<link href="https://cdn.jsdelivr.net/npm/shareon@2/shareon.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/shareon@2/shareon.legacy.js" type="text/javascript"></script>
```

### Node.js

If you build a web app using Node.js, you can install shareon as a package:

```sh
npm install shareon
```

```sh
yarn add shareon
```

Then, import it in your code:

```js
import shareon from 'shareon';
```

> **💡 Tip!** Modern browsers and some bundlers support importing directly from
> URL:
>
> ```js
> import shareon from 'https://cdn.jsdelivr.net/npm/shareon@2';
> ```

CommonJS' `require()` [**is not supported**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

Initialization
--------------

By default, shareon will initialize every button after page load. It also
exports the `shareon` function, that will let you repopulate your buttons with
updated information (for example, if you changed the page title):

```js
import shareon from 'shareon';
// shareon auto-initializes

window.title = "Cool new window title";
shareon();
```

If you use the IIFE version, `shareon()` is available as a global function:

```html
<script>
  window.title = "Cool new window title";
  window.shareon();
</script>
```

Usage
-----

> shareon was heavily inspired by
> [Likely](https://ilyabirman.net/projects/likely/),
> and has backwards-compatible networks' names

Create a container with class `shareon` and populate it with elements, whose
classes match the names of social networks:

```html
<div class="shareon">
    <a class="facebook"></a>
    <a class="linkedin"></a>
    <a class="mastodon"></a>

    <!-- App ID is required for the Messenger button to function -->
    <a class="messenger" data-fb-app-id="0123456789012345"></a>

    <a class="odnoklassniki"></a>
    <a class="pinterest"></a>
    <a class="pocket"></a>
    <a class="reddit"></a>
    <a class="telegram"></a>
    <a class="twitter"></a>
    <a class="viber"></a>
    <a class="vkontakte"></a>
    <a class="whatsapp"></a>
</div>
```

> The elements don't have to be `<a>`s — if you use a different tag (for example,
`<button>`), shareon will use event listeners instead of `href`. Note that this
is not the intended use case and is slower.

By default, the URL and the title of the page will be used in sharing dialogs.
To change this, you can use the `data-url` and `data-title` attributes. Use them
on the whole container or on the specific buttons:

```html
<div class="shareon" data-url="https://custom.url.com">
    <a class="facebook" data-title="Custom title for Facebook"></a>
    <a class="twitter" data-title="Custom title for Twitter"></a>
</div>
```

Apart from the URL and title, some social networks support extra parameters:

- you **MUST** add `data-fb-app-id` to the FB Messenger button to make
  sharing possible
- add `data-media` to an Odnoklassniki, Pinterest, or VK buttons to customize
  the pinned picture
- add `data-text` to a WhatsApp, Mastodon, Telegram, or Viber button to add
  custom message text
- add `data-via` to a Twitter or Mastodon button to mention a user

Here are all the custom parameters in their glory:

```html
<div class="shareon" data-url="https://example.com/custom-url">
    <a class="facebook" data-title="Custom Facebook title"></a>
    <a class="messenger" data-fb-app-id="0123456789012345"></a>
    <a class="pinterest" data-media="https://picsum.photos/500">Pin</a>
    <a class="telegram" data-text="Check this out!"></a>
    <a class="twitter" data-via="MyNickname"></a>
    <a class="mastodon" data-via="@MyNickname@myserver.social"></a>
    <a class="whatsapp" data-url="https://my-cool-website.com">Send</a>
</div>
```

FAQ
---

### Can I customize the buttons?

Of course! Just add the styles you want to the `.shareon` selector. For example,
to make buttons round:

```css
.shareon > * {
  border-radius: 36px;
}
```

### How do I add my own buttons?

You can
[create an issue on GitHub](https://github.com/NickKaramoff/shareon/issues/new)
with an icon request. Note, that I only accept icons of social networks, also
those, where it is possible to _share_ something.

If you want, you can use the shareon's "backend" to create the buttons yourself.
See
[this guide](https://github.com/NickKaramoff/shareon/issues/6#issuecomment-657222019)
for reference.

### An ad blocker is hiding my buttons!

Sorry pal, but that's the purpose of ad (or in this case, social) blockers.
shareon strives to be ethical by respecting the user's choices. If the user
chooses to hide the social buttons, let it be.

Other versions
--------------

- [**WordPress version**](https://wordpress.org/plugins/shareon/) by [Gareth](https://github.com/gareth-gillman)

Licence
-------

[BSD-3-Clause](https://spdx.org/licenses/BSD-3-Clause.html) © 2020, Nikita Karamov

shareon logo is the
[Postal Horn emoji](https://github.com/googlefonts/noto-emoji/blob/v2020-09-16-unicode13_1/svg/emoji_u1f4ef.svg)
from
[Noto Emoji](https://github.com/googlefonts/noto-emoji/tree/v2020-09-16-unicode13_1),
which is licensed under the
[Apache License v2.0](https://github.com/googlefonts/noto-emoji/blob/v2020-09-16-unicode13_1/LICENSE).

Includes a modified version of the
[Mastodon logo](https://commons.wikimedia.org/wiki/File:Mastodon_Logotype_%28Simple%29.svg),
which is licensed under the
[APGLv3 license](https://www.gnu.org/licenses/agpl.html) or later.

----

The source code is being hosted
on [GitHub](https://github.com/NickKaramoff/shareon) with mirrors
on [GitLab](https://gitlab.com/NickKaramoff/shareon)
and [Codeberg](https://codeberg.org/NickKaramoff/shareon).
