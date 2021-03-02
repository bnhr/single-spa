## Add Shared Dependencies

**note: single-spa is required, React is required, other lib that used globally also required**

look inside index.ejs line 18

## Import other microfrontends

use format like I did on index.ejs line 39

## Register your microfrontend

Inside `<template id="single-spa-layout">`, register your app with `<application name="@prefix/yourmfname"></application>`

Wrap your microfrontend with `<route path="mfname">` if you use different routes

## Global style

use `System.import('@bnhr/styleguide');` inside script tag, then wrap it on file: bnhr.root-config.js line 31
