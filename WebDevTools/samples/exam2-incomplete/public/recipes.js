"use strict";

(function iife() {
  // no service calls demonstrated here

    // redirect list links
    document.querySelectorAll('.recipes a').forEach( el => el.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('clickity');
    }));

  document.querySelector('.recipes').addEventListener('click', (e) => {
    if(e.target.attributes.href) {
      const [, id] = e.target.attributes.href.value.match(/\/recipe\?id=(\d*)/);
      console.log(id);
    } else {
      console.log('No!', e.target);
    }


  })();
