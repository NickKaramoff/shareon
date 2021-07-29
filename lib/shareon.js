/*! shareon
 *  (c) 2020, Nikita Karamov
 *  SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Social networks with their URL building functions.
 *
 * The format of this object is a map of strings (social networks' names) to the
 * respective URL building functions. Such functions takes an object with the
 * metadata of the page and returns the built URL.
 *
 * @type {{ [network: string]: (d: {
 *   url: string,
 *   title?: string,
 *   media?: string,
 *   text?: string,
 *   via?: string,
 *   fbAppId?: string
 * }) => string}}
 */
const URL_BUILDERS = {
  facebook: (d) => `https://www.facebook.com/sharer/sharer.php?u=${d.url}`,
  linkedin: (d) => `https://www.linkedin.com/sharing/share-offsite/?url=${d.url}`,
  mastodon: (d) => `https://toot.karamoff.dev/?text=${d.title}%0D%0A${d.url}${d.text ? `%0D%0A%0D%0A${d.text}` : ''}${d.via ? `%0D%0A%0D%0A${d.via}` : ''}`,
  messenger: (d) => `https://www.facebook.com/dialog/send?app_id=${d.fbAppId}&link=${d.url}&redirect_uri=${d.url}`,
  odnoklassniki: (d) => `https://connect.ok.ru/offer?url=${d.url}&title=${d.title}${d.media ? `&imageUrl=${d.media}` : ''}`,
  pinterest: (d) => `https://pinterest.com/pin/create/button/?url=${d.url}&description=${d.title}${d.media ? `&media=${d.media}` : ''}`,
  pocket: (d) => `https://getpocket.com/edit.php?url=${d.url}`,
  reddit: (d) => `https://www.reddit.com/submit?title=${d.title}&url=${d.url}`,
  telegram: (d) => `https://telegram.me/share/url?url=${d.url}${d.text ? `&text=${d.text}` : ''}`,
  twitter: (d) => `https://twitter.com/intent/tweet?url=${d.url}&text=${d.title}${d.via ? `&via=${d.via}` : ''}`,
  viber: (d) => `viber://forward?text=${d.title}%0D%0A${d.url}${d.text ? `%0D%0A%0D%0A${d.text}` : ''}`,
  vkontakte: (d) => `https://vk.com/share.php?url=${d.url}&title=${d.title}${d.media ? `&image=${d.media}` : ''}`,
  whatsapp: (d) => `https://wa.me/?text=${d.title}%0D%0A${d.url}${d.text ? `%0D%0A%0D%0A${d.text}` : ''}`,
};

/**
 * Populates shareon buttons with correct URLs.
 *
 * This function generates the sharing URL for every share button and embeds
 * them into the elements. For <a> elements, it updates the "href" attribute.
 * For others, it sets a "click" listener.
 */
const shareon = () => {
  const shareonContainers = document.getElementsByClassName('shareon');

  // iterate over <div class="shareon">
  for (let i = 0; i < shareonContainers.length; i += 1) {
    /** @type Element */
    const container = shareonContainers[i];

    // iterate over children of <div class="shareon">
    for (let j = 0; j < container.children.length; j += 1) {
      /** @type Element */
      const child = container.children[j];

      if (child) {
        const classListLength = child.classList.length;

        // iterate over classes of the child element
        for (let k = 0; k < classListLength; k += 1) {
          const cls = child.classList.item(k);

          // if it's one of the networks
          if (Object.prototype.hasOwnProperty.call(URL_BUILDERS, cls)) {
            const preset = {
              url: encodeURIComponent(
                child.dataset.url
                || container.dataset.url
                || window.location.href,
              ),
              title: encodeURIComponent(
                child.dataset.title
                || container.dataset.title
                || document.title,
              ),
              media: encodeURIComponent(
                child.dataset.media
                || container.dataset.media
                || '',
              ),
              text: encodeURIComponent(
                child.dataset.text
                || container.dataset.text
                || '',
              ),
              via: encodeURIComponent(
                child.dataset.via
                || container.dataset.via
                || '',
              ),
              fbAppId: encodeURIComponent(
                child.dataset.fbAppId
                || container.dataset.fbAppId
                || '',
              ),
            };
            const url = URL_BUILDERS[cls](preset);

            if (child.tagName.toLowerCase() === 'a') {
              child.setAttribute('href', url);
              child.setAttribute('rel', 'noopener noreferrer');
              child.setAttribute('target', '_blank');
            } else {
              child.onclick = () => {
                window.open(url, '_blank', 'noopener,noreferrer');
              };
            }

            break; // once a network is detected we don't want to check further
          }
        }
      }
    }
  }
};

window.addEventListener('load', shareon);

export default shareon;
