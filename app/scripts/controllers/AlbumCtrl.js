(function() {
     function AlbumCtrl(Fixtures, SongPlayer) {
         this.albumData = [];
         for (var i=0; i < 12; i++) {
             this.albumData = Fixtures.getAlbum();
             this.songPlayer = SongPlayer;
             

     function AlbumCtrl() {
         this.albumData = [];
         for (var i=0; i < 12; i++) {
             this.albumData.push(angular.copy(albumPicasso));
         }
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();