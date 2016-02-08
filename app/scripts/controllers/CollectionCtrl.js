(function() {
<<<<<<< HEAD
     function CollectionCtrl(Fixtures) {
         this.albums = Fixtures.getCollection(12);
=======
<<<<<<< HEAD
     function CollectionCtrl(Fixtures) {
         this.albums = Fixtures.getCollection(12);
=======
     function CollectionCtrl() {
         this.albums = [];
         for (var i=0; i < 12; i++) {
             this.albums.push(angular.copy(albumPicasso));
         }
>>>>>>> fd93bea2f7cab3663bb1e5db106c7e262b3f00a4
>>>>>>> 2c256100b0db5a1d6209023487ee91154eaa92b5
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();