'use strict';

angular.module('leakyapp.sections.playlistTracks', [])
  .controller('playlistTracksCtrl', function playlistTracksCtrl(
    playlistService,
    $state,
    $ionicListDelegate,
    $ionicPopup,
    uiService
    ) {
    (function (vm) {
      vm.playlist = playlistService.getById(+$state.params.playlistId);
      vm.removeTrackByIndex = playlistService.removeTrackByIndex;
      vm.closeOptionButtons = uiService.closeListButtons('playlist-tracks');
      vm.playTrack = uiService.playTrack;
    })(this);
  });

