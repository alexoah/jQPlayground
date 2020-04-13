/**
 *	from jQuery CSS Classes: Exercise 4 ( https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_css_classes4 )
 *
 *	question:
 *	Use a jQuery method to toggle between adding and removing the "important" class from the <p> element on click.
 *
 *	$("p")._____(function(){
 *		$(this).___________("_________");
 *	});
 *
 */
$("p").click(function(){
	$(this).toggleClass("important");
});