/**
 *	from jQuery Events: Exercise 4 ( https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_events4 )
 *
 *	question:
 *	If you press a keyboard key inside an <input> element, it should be hidden. Use the correct event to do so.
 *
 *	$("input").________(function(){
 *		$(this).hide();
 *	});
 *
 */
$("input").keypress(function(){
	$(this).hide();
});