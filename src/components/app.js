angular.module('video-player')

.component('app', {
  controller: function() {

    this.videos = window.exampleVideoData;
    //this.index = 0;
    this.current = window.exampleVideoData[0];
    //this.handleclick.bind(this);
    this.handleclick = (index) => {
      console.log(this);
      console.log(index);
      this.current = exampleVideoData[index];
    };
  },
  
  templateUrl: 'src/templates/app.html'
  // we need to pass the data from example video - we will use a one way binding
  // how will i render this to the DOM
  
});
