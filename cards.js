$(document).ready(function(){
  $('.modal').modal();
});

const braidexample1 = {
  braidId: 1,
  name: 'Devotional',
  desc: 'Read the Word every morning',
  freq: 'daily', // TODO: enum
  image: 'assets/images/braid.jpg'
};
const braidexample2 = {
  braidId: 2,
  name: 'Prayer',
  desc: 'Pray everyday',
  freq: 'daily', // TODO: enum
  image: 'assets/images/braid.jpg'

};
const braidexample3 = {
  braidId: 3,
  name: 'Workout',
  desc: 'Exercise once a day',
  freq: 'daily', // TODO: enum
  image: 'assets/images/braid.jpg'
};

var braidArr = [braidexample1, braidexample2, braidexample3]

// TODO: remove hard-coded stuff above. Do an actual PactList() API call instead.

const renderBraidCard = (braid, i) => {
  // TODO: use a templating library like Closure or Jinga
  const dataAttribute = "data-braid-id='" 
    // encode the Braid ID into the DOM to be used for looking up details (current status of all participants, history/streaks).
    + braid.braidId + "'";

  const modalTriggerHtml = "<!-- Modal Trigger --><a class='waves-effect waves-light btn modal-trigger' href='#modal" 
    + i + "'" + dataAttribute +">See More</a>";

  const modalContentHtml = "<!-- Modal Structure --><div id='modal" 
    + i + "' class='modal modal-fixed-footer'><div class='modal-content'><h4>" 
    + braid.name + "</h4><p>" + braid.desc + "</p></div><div class='modal-footer'><a href='#!' class='modal-close waves-effect waves-green btn-flat'>Close</a></div></div></div>";

  const renderCardHtml = (modalTriggerHtml, modalContentHtml) => {
    return "<div class='col s12 m4'><div class='card'><div class='card-image'><img src='" 
    + braid.image +"'><span class='card-title'>" 
    + braid.name + "</span></div><div class='card-content'><p>" 
    + braid.desc + "</p></div><div class='card-action'>" 
    + modalTriggerHtml + modalContentHtml + "</div></div";
  };

  $("#braid").append(renderCardHtml(modalTriggerHtml, modalContentHtml));
}

if (braidArr != -1) {
  for (i in braidArr) {
    renderBraidCard(braidArr[i], i);
  }
}
else {
  $("#braid").hide();
}

// TODO: import request service instead of having everything global
// event handler for loading braid details
$('.modal-trigger').click((e) => {
  const braidId = e.target.getAttribute('data-braid-id');
  // Get braid details and render.
  requestService.getBraid(braidId).then(braid => {
    print(' got braid by id: ' + braid);
    // TODO: render braid details inside modal.
  });
});

