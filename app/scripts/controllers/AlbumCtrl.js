(function() {
<<<<<<< HEAD
     function AlbumCtrl(Fixtures) {
         this.albumData = [];
         for (var i=0; i < 12; i++) {
             this.albumData = Fixtures.getAlbum();
             
=======
     function AlbumCtrl() {
         this.albumData = [];
         for (var i=0; i < 12; i++) {
             this.albumData.push(angular.copy(albumPicasso));
>>>>>>> fd93bea2f7cab3663bb1e5db106c7e262b3f00a4
         }
     }
 
     angular
         .module('blocJams')
<<<<<<< HEAD
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
=======
         .controller('AlbumCtrl', AlbumCtrl);
>>>>>>> fd93bea2f7cab3663bb1e5db106c7e262b3f00a4
 })();