
var today = new Date();
var worstcity=0;
var Cities =['Kumanovo', 'Skopje','Ohri','Tetovo', 'Gostivar','Bitola','Gevgelija','Veles','Kavadartsi','Kochani','Kichevo']
var CitiesQuality ={
    Kumanovo:{
        quality:100
    },
    Skopje:{
        quality:200
    },
    Ohri:{
        quality:100
    },
    Tetovo:{
        quality:110
    },
    Gostivar:{
        quality:130
    },
    Bitola:{
        quality:103
    },
    Gevgelija:{
        quality:200
    },
    Veles:{
        quality:200
    },
    Kavadartsi:{
        quality:200
    },
    Kochani:{
        quality:140
    },
    Kichevo:{
        quality:130
    }
}

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'  &nbsp &nbsp '+today.getHours()+':'+today.getMinutes();
document.getElementById('date1').innerHTML=date;

$(document).ready(function(){

    $('#airquality').hide()

    $( "#search" ).autocomplete({
      source: Cities
    });

    $('[id^="dot-"]').click(function(){
        $('#airquality').toggle();
    })

    $('#change_date, image-change').click(function(){
       $('#change_date').datepicker()
    })

    worstcity=CitiesQuality[0].quality;

    for(var i=0;i<CitiesQuality.length;i++){
        
        if(CitiesQuality[i].quality>worstcity.quality)
        {
            worstcity=CitiesQuality[i];
        }
    }
  console.log(worstcity.constructor.name)  

})




 