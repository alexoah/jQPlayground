/**
 *	from jQuery Events: Exercise 5 ( https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_events5 )
 *
 *	question:
 *	Use the on() method to attach a click event handler to all <p> elements.
 *
 *	$("_").on(_______, function(){
 *		$(this).hide();
 *	});
 *
 */
$("p").on("click", function(){
	$(this).hide();
});