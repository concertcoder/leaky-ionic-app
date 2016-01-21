'use strict';

angular.module('leakyapp.sections.album', [])
  .controller('albumCtrl', function albumCtrl(
      $scope,
      baseData,
      $state,
      $ionicModal,
      playlistService,
      $ionicPopup,
      $ionicListDelegate,
      uiService
    ) {
    (function (vm) {
      vm.artist = R.find(R.propEq(+$state.params.artistId, 'id'), baseData.data);
      vm.album = R.find(R.propEq(+$state.params.albumId, 'id'), vm.artist.albums);
      vm.tracks = vm.album.tracks;
      vm.playTrack = uiService.playTrack;

      // $scope is used to put data onto the ionicModal
      $ionicModal.fromTemplateUrl('add-to-playlist.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        vm.modal = modal;
      });

      vm.openModalForTrack = function(track) {
        $scope.track = track;
        uiService.closeListButtons('album-tracks')();
        vm.modal.show();
      };

      $scope.playlistOptions = playlistService.getAll();

      $scope.addToPlaylist = function(playlistId, track) {
        playlistService.addTrack(playlistId, track);
        vm.modal.hide();
      };

      $scope.closePlaylistModal = function() {
        vm.modal.hide();
      };
    })(this);
  });

