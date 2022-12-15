$(window).on('load', function() {

// INITIALIZE DRAG AND DROP ITEMS/AREAS
  $('.gallery').draggable();
  $('#background').droppable();

  $(function() {
    $('#background').droppable('enable');
    $('.gallery').draggable({
      containment:'#background'       
    });
  })

// CREATE ARRAY FOR BACKGROUND IMAGES TO CYCLE THROUGH CSS CLASSES WHEN BUTTON IS CLICKED

  var backgroundImg = ["one","two","three","four"];
  var imgIndex=-1;

// ITERATE THROUGH EACH BG IMAGE CLASS ON CLICK

  $('#bg-change').on('click', function() {
    imgIndex ++;

    if (imgIndex > (backgroundImg.length)) {
      imgIndex = 0;
    }
      $('#background').toggleClass(backgroundImg[imgIndex]);
  });

  // HERE IS SOME TESTING FOR A RESET BUTTON THAT UNFORTUNATELY WAS NOT SUCCESSFUL!

  // $('#reset').on('click', function() {
    
  //   $('#background').droppable('disable');
  //   $('#background').droppable({
  //     out: function(){
  //       $('#image-collection').nextAll('div').toggleClass('.gallery-revert');
  //     }
  //   });
  // })

});
