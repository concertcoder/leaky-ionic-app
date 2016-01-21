'use strict';

angular.module('leakyapp.sections.artist', [])
  .controller('artistCtrl', function artistCtrl(baseData, $state) {
    (function (vm) {
      vm.artist = R.find(R.propEq(+$state.params.artistId, 'id'), baseData.data);
      vm.albums = vm.artist.albums;
    })(this);
  });

