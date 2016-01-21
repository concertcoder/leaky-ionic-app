'use strict';

angular.module('leakyapp.sections.search', [])
  .controller('searchCtrl', function searchCtrl($q, baseData, $timeout) {
    (function (vm) {
      var previousTimeout = null;
      vm.searchResults = [];
      vm.search = '';
      vm.searching = false;

      function addToSearchResultsIfMatching(search, display, type){
        if (display.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
          vm.searchResults.push({
            display: display,
            type: type
          });
          return true;
        }

        return false;
      }

      vm.getSearchResultsInAFewSeconds = function(search){
        vm.searchResults = [];

        if (previousTimeout) {
          $timeout.cancel(previousTimeout);
        }

        if (search.length < 3) {
          vm.searching = false;
          return;
        }

        vm.searching = true;

        previousTimeout = $timeout(function(){
          R.map(function(artistData){
            addToSearchResultsIfMatching(search, artistData.artist, 'Artist');

            R.map(function(albumData){
              addToSearchResultsIfMatching(search, albumData.album, 'Album');

              R.map(function(trackData){
                addToSearchResultsIfMatching(search, trackData.track, 'Track');
              }, albumData.tracks);
            }, artistData.albums);
          }, baseData.data);

          vm.searching = false;
        }, 1000);
      };
    })(this);
  });

