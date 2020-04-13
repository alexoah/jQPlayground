/**
 *	from jQuery Events: Exercise 2 ( https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_events2 )
 *
 *	question:
 *	Use the correct event to hide all <p> elements with a "double-click".
 *
 *	$("p").________(function(){
 *		$(this).hide();
 *	});
 *
 */
$("p").dblclick(function(){
	$(this).hide();
});