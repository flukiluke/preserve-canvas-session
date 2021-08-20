function immortaliseCookie(cookie) {
  let newCookie = cookie;
  newCookie.url = "https://" + cookie.domain + cookie.path;
  newCookie.expirationDate = Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60;
  delete newCookie.hostOnly;
  delete newCookie.session;
  browser.cookies.remove({
    name: cookie.name,
    firstPartyDomain: cookie.firstPartyDomain,
    storeId: cookie.storeId,
    url: newCookie.url
  }).then(() => {
      browser.cookies.set(newCookie).then(console.log);
  });
}

browser.cookies.onChanged.addListener((changeInfo) => {
  if (changeInfo.cookie.name == 'canvas_session' &&
      changeInfo.cookie.domain.startsWith('canvas.') &&
      changeInfo.cookie.session &&
      !changeInfo.removed) {
    console.log("Changing " + JSON.stringify(changeInfo));
    immortaliseCookie(changeInfo.cookie);
  }
});
