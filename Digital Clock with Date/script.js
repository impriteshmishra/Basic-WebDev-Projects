function updateClock(){
  var now=new Date();
  var dayName=now.getDay(),
      month=now.getMonth(),
      dayNum=now.getDate(),
      year=now.getFullYear(),
      hour=now.getHours(),
      min=now.getMinutes(),
      sec=now.getSeconds(),
      ss="AM";

      if(hour>12){
        hour=hour-12;
        ss="PM";
      }
      if(hour==0){
        hour=12;
      }
 
      Number.prototype.pad=function(digits){
        for(var n=this.toString();n.length<digits;n=0+n);
        return n;
      }

      var months=["January","Febraury","March","April","May","June","July","August","September","October","November","December"];
      var week =["Monday","Tuesday","Wednsday","Thursday","Friday","Sunday"];
      var ids=["day"," month","daynum","year","hour","minute","second","AMPM"];
      var values=[ week[dayName], months[month],dayNum.pad(2) ,year,hour.pad(5), min.pad(2), sec.pad(2),ss];

      for(var i=0;i<ids.length;i++){
    document.getElementById(ids[i]).firstChild.nodeValue=values[i];
      }
};
function initClock(){
   updateClock();
   window.setInterval("updateClock()",1);
};