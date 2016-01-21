'use strict';

angular.module('leakyapp.core.ui.service', [])
  .factory('uiService',
    function ($ionicListDelegate, $ionicPopup) {

      function closeListButtons(handle){
        return function(){
          $ionicListDelegate.$getByHandle(handle);
          $ionicListDelegate.closeOptionButtons();
        }
      };

      function playTrack() {
        $ionicPopup.alert({
          title: 'Test App',
          template: 'This is a test app.  Music cannot actually be played.'
        });
      }

      return {
        closeListButtons: closeListButtons,
        playTrack: playTrack
      }
    }
  );