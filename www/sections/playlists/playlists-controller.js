'use strict';

angular.module('leakyapp.sections.playlists', [])
  .controller('playlistsCtrl', function playlistsCtrl(playlistService) {
    (function (vm) {
      vm.playlists = playlistService.getAll();
      vm.removePlaylist = function vmRemovePlaylist(playlistId) {
        vm.playlists = playlistService.remove(playlistId);
      };
    })(this);
  });

