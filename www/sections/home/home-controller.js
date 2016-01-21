'use strict';

angular.module('leakyapp.sections.home', [])
  .controller('homeCtrl', function homeCtrl(baseData) {
    (function (vm) {
      vm.artists = baseData.data;
    })(this);
  });

