/**
 *	from jQuery Fade: Exercise 4 ( https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_fade4 )
 *
 *	question:
 *	Use a jQuery method to toggle between fading in and out a <div> element, when clicking on a button.
 *	Note: The duration of the effect should be 1000 milliseconds.
 *
 *	$("button")._____(function(){
 *		$("div").__________(____);
 *	});
 *
 */
$("button").click(function(){
	$("div").fadeToggle(1000);
});