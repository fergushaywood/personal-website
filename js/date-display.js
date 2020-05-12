let date = new Date(); 
let now_utc = 'LONDON' +  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
 date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

 return new Date(now_utc);

const dateDisplay = document.body.innerHTML;

dateDisplay = '<h4>' + now_utc + '</h4>';