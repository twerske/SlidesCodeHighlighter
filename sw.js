/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "ace.js",
    "revision": "e1ec2dda9ad25e3e4005b01372210e84"
  },
  {
    "url": "index.css",
    "revision": "9e1a7c5d64f1371ac0144b9f4b6fe81e"
  },
  {
    "url": "index.html",
    "revision": "ffef444766a11fc7378595bff9b35e7a"
  },
  {
    "url": "index.js",
    "revision": "3c97191d31fc315681a2ce6d1165fd9b"
  },
  {
    "url": "jquery.min.js",
    "revision": "12108007906290015100837a6a61e9f4"
  },
  {
    "url": "material-colors.js",
    "revision": "62d4d679092da70d66e51aa2752aa17f"
  },
  {
    "url": "mode-text.js",
    "revision": "c01becee0a5e9e847c9dd4a789761925"
  },
  {
    "url": "prism.js",
    "revision": "0c68eddb0964928d00b37decc6d22ecb"
  },
  {
    "url": "theme-chrome.js",
    "revision": "52a070e8c00b6a9ef1137c1d7f9ecd97"
  },
  {
    "url": "themes.js",
    "revision": "a8f5c7878fe62fe299a1cbf53d1dc605"
  },
  {
    "url": "webfontloader.js",
    "revision": "7e2893ef542a12a5c7207d438bfa87d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
