angular.module('leakyapp', [
  'ionic',
  'ui.router',
  'leakyapp.core.router.config',
  'leakyapp.core.playlist.service',
  'leakyapp.core.baseData',
  'leakyapp.core.ui.service',
  'leakyapp.sections.search',
  'leakyapp.sections.createPlaylist',
  'leakyapp.sections.playlistTracks',
  'leakyapp.sections.playlists',
  'leakyapp.sections.menu',
  'leakyapp.sections.home',
  'leakyapp.sections.artist',
  'leakyapp.sections.album'
  ])
.config(
  function ($ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
  }
)
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
