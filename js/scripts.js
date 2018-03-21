$(document).ready(function(){
    $('.lookup').submit(function(e){
        e.preventDefault();
        var username = $(this).find('#username').val();
        var target_level = $(this).find('#target_level').val();
        var target_xp = calc_level_xp(target_level);
        var endpoint = 'https://cors-anywhere.herokuapp.com/http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player='+username;
        $.ajax({
            url: endpoint,
            type: 'GET',
            success: function (result) {
                var rc_stats_string = result.split("\n");
                var rc_stats_array = rc_stats_string[21].split(",");
                var the_diff = target_xp - rc_stats_array[2];
                $('#lookup_result').html("Level: " + rc_stats_array[1] + "("+ rc_stats_array[2] +"xp)<br>Target XP: " + target_xp + "<br>Essence required: " + calc_ess(the_diff)+ "<br>Binding necklaces: "+calc_binding(the_diff));
            },
            error: function (result) {
                console.log(result);
            }
        })
    })
});

function calc_level_xp(level){
    total = 0;
    for (i = 1; i < level; i++){
        total += Math.floor(i + 300 * Math.pow(2, i / 7.0));
    }
    return Math.floor(total / 4);
}

function calc_ess(diff){
    return Math.ceil(diff / 10.5);
}

function calc_binding(diff){
    ess = calc_ess(diff);
    return Math.ceil((ess/31.5)/16);
}
