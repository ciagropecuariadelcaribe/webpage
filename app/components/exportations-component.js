import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.errors = [];

    window.onscroll = function() {
      var waves = document.getElementById("waves");
      var cloud = document.getElementById("cloud");
      var clouds = document.getElementById("clouds");
      var clouds2 = document.getElementById("clouds2");
      var sectionAbout = document.getElementById("AboutUs");

      if(window.visualViewport.pageTop >= 2250){
        waves.classList.add("visible");
        cloud.classList.add("visible");
        clouds.classList.add("visible");
        clouds2.classList.add("visible");
      } else {
        waves.classList.remove("visible");
        cloud.classList.remove("visible");
        clouds.classList.remove("visible");
        clouds2.classList.remove("visible");
      }

      if(window.visualViewport.pageTop >= 30){
        sectionAbout.classList.add("visible");
      } else {
        sectionAbout.classList.remove("visible");
      }
    };
  },
});
