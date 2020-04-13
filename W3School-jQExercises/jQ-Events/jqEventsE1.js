/**
 *	from jQuery Events: Exercise 1 ( https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_events1 )
 *
 *	question:
 *	Use the correct event to hide all <p> elements with a "click".
 *
 *	$("p")._____(function(){
 *		$(this).hide();
 *	});
 *
 */
$("p").click(function(){
	$(this).hide();
});