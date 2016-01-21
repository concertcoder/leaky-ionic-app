'use strict';

angular.module('leakyapp.core.playlist.service', [
    'ngStorage'
  ])
  .factory('playlistService',
    function ($localStorage) {
      var playlists = $localStorage.playlists || [];
      var playlistId = $localStorage.playlistId || 1;

      function saveToStorage() {
        $localStorage.playlists = playlists;
      }

      function saveIdCounterToStorage() {
        $localStorage.playlistId = playlistId;
      }

      function add(info){
        playlists.push(R.merge({
          id: playlistId++,
          created: moment().unix(),
          title: '',
          tracks: []
        }, info));
        saveIdCounterToStorage();
        saveToStorage();
      }

      function edit(playlistId, info){
        var editIndex = R.findIndex(propEq(playlistId,'id'),playlists);
        playlists[editIndex] = R.merge(playlists[editIndex], info);
        saveToStorage();
        return playlists[editIndex];
      }

      function getById(playlistId) {
        var getIndex = R.findIndex(R.propEq(playlistId,'id'),playlists);
        return playlists[getIndex];
      }

      function getAll() {
        return playlists;
      }

      function remove(playlistId) {
        playlists = R.reject(R.propEq(playlistId, 'id'), playlists);
        saveToStorage();
        return playlists;
      }

      function addTrack(playlistId, track) {
        var playlist = getById(playlistId);
        playlist.tracks.push(track);
        saveToStorage();
        return playlist;
      }

      function removeTrackByIndex(playlistId, index) {
        var playlist = getById(playlistId);
        playlist.tracks.splice(index, 1);
        saveToStorage();
        return playlist;
      }

      return {
        add: add,
        edit: edit,
        getById: getById,
        getAll: getAll,
        remove: remove,
        addTrack: addTrack,
        removeTrackByIndex: removeTrackByIndex
      }
    }
  );