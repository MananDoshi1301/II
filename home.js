// $('.count').each(function () {
//   $(this).prop('Counter',0).animate({
//       Counter: $(this).text()
//   }, {
//       duration: 4000,
//       easing: 'swing',
//       step: function (now) {
//           $(this).text(Math.ceil(now));
//       }
//   });
// });


// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }


$("i").click(function () {
        // over
        $(this).css("background-color","pink")
    }, function () {
        // out
    }
);


