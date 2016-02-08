(function() {
<<<<<<< HEAD
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
         
         var currentAlbum = Fixtures.getAlbum();
         
         var getSongIndex = function(song) {
         return currentAlbum.songs.indexOf(song);
     };
         
         SongPlayer.currentSong = null;
=======
     function SongPlayer() {
          var SongPlayer = {};
         
         var currentSong = null;
>>>>>>> 2c256100b0db5a1d6209023487ee91154eaa92b5
 /**
 * @desc Buzz object audio file
 * @type {Object}
 */
         var currentBuzzObject = null;
                
/**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */

         var setSong = function(song) {
    if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
    }
 
    currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });
 
    currentSong = song;
 };
         
        var playSong = function(){
        currentBuzzObject.play();
        song.playing = true;
    };
         
         SongPlayer.play = function(song) {
<<<<<<< HEAD
         song = song || SongPlayer.currentSong;    
=======
             
>>>>>>> 2c256100b0db5a1d6209023487ee91154eaa92b5
         if (currentSong !== song) {
             setSong(song);
             playSong();
         }
             else if (currentSong === song) {
         if (currentBuzzObject.isPaused()) {
             currentBuzzObject.play();
         }
     }    
     };
<<<<<<< HEAD
        /**
         * @function pause
         * @desc Pause current song
         * @param {Object} song
         */
         SongPlayer.pause = function(song) {
             song = song || SongPlayer.currentSong;
             currentBuzzObject.pause();
             song.playing = false;
         };

        SongPlayer.previous = function() {
             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
             currentSongIndex--;
            
            if (currentSongIndex < 0) {
                 currentBuzzObject.stop();
                 SongPlayer.currentSong.playing = null;
             } else {
                 var song = currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);
             }
            
         };
=======
>>>>>>> 2c256100b0db5a1d6209023487ee91154eaa92b5

         
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();