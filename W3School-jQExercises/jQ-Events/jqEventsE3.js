/**
 *	from jQuery Events: Exercise 3 ( https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_events3 )
 *
 *	question:
 *	When the mouse pointer enters a <p> element, it should be hidden. Use the correct event to do so.
 *
 *	$("p").__________(function(){
 *		$(this).hide();
 *	});
 *
 */
$("p").mouseenter(function(){
	$(this).hide();
});