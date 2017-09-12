angular.module('video-player')
.component('videoList', {

  controller: function() {
    // this.onClick = () => {
    // };
  },
  bindings: {
    videos: '<',
    handleclick: '<',
    current: '<'
  },
  
  templateUrl: 'src/templates/videoList.html'

});
