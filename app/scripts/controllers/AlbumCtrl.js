(function() {
     function AlbumCtrl(Fixtures, SongPlayer) {
         this.albumData = [];
         for (var i=0; i < 12; i++) {
<<<<<<< HEAD
             this.albumData = Fixtures.getAlbum();
             this.songPlayer = SongPlayer;
             
=======
             this.songPlayer = SongPlayer;
             

     function AlbumCtrl() {
         this.albumData = [];
         for (var i=0; i < 12; i++) {
             this.albumData.push(angular.copy(albumPicasso));
>>>>>>> 2c256100b0db5a1d6209023487ee91154eaa92b5
         }
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();