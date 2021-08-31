

$(".js-range-slider").ionRangeSlider();
let my_range = $(".js-range-slider").data("ionRangeSlider");
var lpf = document.getElementById("lbOff_On");
lpf.append("Off");

function toggleBilling() {
    if( $("input").is(':checked') )
    {
        $('label[id*="lbOff_On"]').text(""); // очистка label
        lpf.append("On"); //  label => On
        my_range.update({
            max:100,
            from: 50,
            prettify:"%",
            
            onStart: function(data) {              //}
                $input.prop("value", data.from);   //}
            },                                     //} = Вивод на нижній дачик
            onChange: function(data) {             //}
                $input.prop("value", data.from);   //}
            }
        });
        my_range.reset();
    }
    else{
        $('label[id*="lbOff_On"]').text("");
        $('input[id*="id_in_table"]'.valueOf="0"); // очистка label
        lpf.append("Off"); //  label => Off
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
