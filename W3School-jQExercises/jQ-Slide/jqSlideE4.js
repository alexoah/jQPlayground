/**
 *	from jQuery Slide: Exercise 4 ( https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_slide4 )
 *
 *	question:
 *	Use a jQuery method to toggle between sliding up and down a <div> element, when clicking on a button.
 *
 *	$("button")._____(function(){
 *		$("div").___________();
 *	});
 *
 */
$("button").click(function(){
	$("div").slideToggle();
});