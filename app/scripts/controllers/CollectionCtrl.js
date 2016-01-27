(function() {
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
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();