$(document).ready(function(){
  $('.modal').modal();
});

const braidexample1 = {
  name: 'Devotional',
  desc: 'Read the Word every morning',
  freq: 'daily', // TODO: enum
  image: 'assets/images/braid.jpg'
};
const braidexample2 = {
  name: 'Prayer',
  desc: 'Pray everyday',
  freq: 'daily', // TODO: enum
  image: 'assets/images/braid.jpg'

};
const braidexample3 = {
  name: 'Workout',
  desc: 'Exercise once a day',
  freq: 'daily', // TODO: enum
  image: 'assets/images/braid.jpg'
};

var braidArr = [braidexample1, braidexample2, braidexample3]

if (braidArr != -1) {
  for (i in braidArr) {
    $("#braid").append("<div class='col s12 m4'><div class='card'><div class='card-image'><img src='" + braidArr[i].image +"'><span class='card-title'>" + braidArr[i].name + "</span></div><div class='card-content'><p>" + braidArr[i].desc + "</p></div><div class='card-action'><!-- Modal Trigger --><a class='waves-effect waves-light btn modal-trigger' href='#modal" + i + "'>Modal</a><!-- Modal Structure --><div id='modal" + i + "' class='modal modal-fixed-footer'><div class='modal-content'><h4>" + braidArr[i].name + "</h4><p>" + braidArr[i].desc + "</p></div><div class='modal-footer'><a href='#!' class='modal-close waves-effect waves-green btn-flat'>Close</a></div></div></div></div></div")
  }
}
else {
  $("#braid").hide()
}
