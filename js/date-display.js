$(document).ready(function() {
(function update_time() {
    var now = moment().utc('Europe/London').format('h:mm:ss a');
    $('.time-container').text(now);
    setTimeout(update_time, 1000);
})
});