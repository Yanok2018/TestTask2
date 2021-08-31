

$(".js-range-slider").ionRangeSlider();
let my_range = $(".js-range-slider").data("ionRangeSlider");
var lpf = document.getElementById("lbOff_On");//lbOff_On  
lpf.append("Off");

function toggleBilling() {
    if( $("input").is(':checked') )
    {
        $('label[id*="lbOff_On"]').text("");
        lpf.append("On"); //  label => On
        my_range.update({
            max:100,
            from: 50,
            prettify:"%",
            
            onStart: function(data) {              //}
                $input.prop("value", data.from);   //}
            },                                     //} print on down
            onChange: function(data) {             //}
                $input.prop("value", data.from);   //}
            }
        });
        my_range.reset();
    }
    else{
        $('label[id*="lbOff_On"]').text("");
        $('input[id*="id_in_table"]'.valueOf="0"); 
        lpf.append("Devise is Off"); //  label => Off
        my_range.update({
            max:0,
            from: 0,
            prettify:"%",
        });
        my_range.reset();
    }
}

var $range = $(".js-range-slider"),
 $input = $(".js-input"),
 instance;

 $range.ionRangeSlider({
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

 instance = $range.data("ionRangeSlider");

 $input.on("change keyup", function() {
     
     var val = $(this).prop("value");
     
     if (val < min) {
         val = min;
     } else if (val > max) {
         val = max;
     }
     
     instance.update({
         from: val,
        
     });
});



 //var mysql = require("mysql2");
 //import mysql from 'mysql2';
  


// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "usersdb",
//   password: "1234"
// }); 
// //testing conection
// connection.connect(function(err){
//     if (err) {
//       return console.error("Ошибка: " + err.message);
//     }
//     else{
//       console.log("Подключение к серверу MySQL успешно установлено");
//     }
//  });


// // close connection
// connection.end(function(err) {
//     if (err) {
//       return console.log("Ошибка: " + err.message);
//     }
//     console.log("Подключение закрыто");
//   });
