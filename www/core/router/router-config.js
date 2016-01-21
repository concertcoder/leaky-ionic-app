'use strict';

angular.module('leakyapp.core.router.config', [])
  .config(
    function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'sections/menu/menu.html',
          controller: 'menuCtrl as menuCtrl'
        })
        .state('app.search', {
          url: '/search',
          cache: false,
          views: {
            'menuContent': {
              controller: 'searchCtrl as searchCtrl',
              templateUrl: 'sections/search/search.html'
            }
          }
        })
        .state('app.playlists', {
          url: '/playlists',
          cache: false,
          views: {
            'menuContent': {
              controller: 'playlistsCtrl as playlistsCtrl',
              templateUrl: 'sections/playlists/playlists.html'
            }
          }
        })
        .state('app.playlistTracks', {
          url: '/playlist-tracks/:playlistId',
          cache: false,
          views: {
            'menuContent': {
              controller: 'playlistTracksCtrl as playlistTracksCtrl',
              templateUrl: 'sections/playlist-tracks/playlist-tracks.html'
            }
          }
        })
        .state('app.createPlaylist', {
          url: '/create-playlist',
          cache: false,
          views: {
            'menuContent': {
              controller: 'createPlaylistCtrl as createPlaylistCtrl',
              templateUrl: 'sections/create-playlist/create-playlist.html'
            }
          }
        })
        .state('app.home', {
          url: '/home',
          cache: false,
          views: {
            'menuContent': {
              controller: 'homeCtrl as homeCtrl',
              templateUrl: 'sections/home/home.html'
            }
          }
        })
        .state('app.artist', {
          url: '/artist/:artistId',
          cache: false,
          views: {
            'menuContent': {
              controller: 'artistCtrl as artistCtrl',
              templateUrl: 'sections/artist/artist.html'
            }
          }
        })
        .state('app.album', {
          url: '/artist/:artistId/album/:albumId',
          cache: false,
          views: {
            'menuContent': {
              controller: 'albumCtrl as albumCtrl',
              templateUrl: 'sections/album/album.html'
            }
          }
        });

      $urlRouterProvider.otherwise('/app/home');
    }
  );

