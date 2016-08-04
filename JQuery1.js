$(function() {
  $(`ul.mainFiles > li`).hover(function() {
      $(this).find(`ul.subFiles`).show(500);
   }, function() {
      $(this).find(`ul.subFiles`).hide(500);
  });
});
