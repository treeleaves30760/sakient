const deadline = '2021-5-14';
var countDown = document.getElementById("count");

async function getTimeRemaining(endtime){ 
    const total = Date.parse(endtime) - Date.parse(new Date()); 
    const seconds = Math.floor( (total/1000) % 60 ); 
    const minutes = Math.floor( (total/1000/60) % 60 ); 
    const hours = Math.floor( (total/(1000*60*60)) % 24 ); 
    const days = Math.floor( total/(1000*60*60*24) );
    countDown.innerText = `倒數${days}天${hours}小時${minutes}分鐘${seconds}秒` 
}

var run = setInterval("getTimeRemaining(deadline)", 1000);
