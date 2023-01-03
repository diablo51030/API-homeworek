  
  $.ajax({
    type: "GET",
    url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-031?Authorization=CWB-C08355AD-B2AB-4370-B360-4053113ABA43&format=JSON&elementName=T",
    dataType: "json",

    success: function (res) {
        console.log(res);
        console.log(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value);
        $('#city_name').html(res.records.locations[0].locationsName);
        $('#district').html(res.records.locations[0].location[0].locationName);
        $('#tempture').html(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176");
        
        let week = ["MON", "TUE", "WED", "THU", "FRI"];
        //拆解HTML架構
        const html1 = `<div class="d-flex flex-column block first-block"><small class="text-muted mb-0">`;
        const html2 = `</small><div class="text-center"><img class="symbol-img" src="`;
        const html3 = `"></div><h6><strong>`;
        const html4 = `&#176;</strong></h6></div>`;
        let weather_html = ""; //儲存所有迴圈html
        let j = 0; //星期 陣列的索引
        let img = '';//天氣圖案變數
        for( let i = 1; i < 10; i += 2){
            let tempture = res.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
            if(tempture >18){
                img = "https://i.imgur.com/Shrg84B.png";
            }else{
                img = "https://i.imgur.com/BeWfUuG.png";
            }
            weather_html = weather_html + html1 + week[j] + html2 + img + html3 + tempture + html4;
            j++
        }
        console.log(weather_html);
        $('#weekday').html(weather_html);
    },
    error: function (err) {
      console.log(err);
    }
  });