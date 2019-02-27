$("body").on("change", ".filter", function (e) {
	e.preventDefault();

	console.log("Hello, world!"); //this is just to make sure things are working in the console log on your page in inspect, you don't need it

	const $this_filter = $(this);

	const food_type = $this_filter.val(); //.val gets the value

	console.log("Food type " + food_type)
	$(".item.active").removeClass("active");
	$("." + food_type).addClass("active"); //"." + is cancatination (stringing strings together)


	console.log("We made it!"); //just another check in, doesn't change code

});