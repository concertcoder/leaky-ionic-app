'use strict';

angular.module('leakyapp.sections.createPlaylist', [])
  .controller('createPlaylistCtrl', function createPlaylistCtrl(playlistService) {
    (function (vm) {
      vm.createPlaylist = playlistService.add;
    })(this);
  });

