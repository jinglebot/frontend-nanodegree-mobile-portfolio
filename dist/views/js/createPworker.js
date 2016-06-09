importScripts('main.js');

onmessage = function (e) {
	console.log('Message received from main.js');

	var numberOfMeats = e.data[0];
	var numberOfNonMeats = e.data[1];
	var numberOfCheeses = e.data[2];

	var pizza = "";


	// Here are arrays of all possible pizza ingredients.
	var pizzaIngredients = {};
	pizzaIngredients.meats = [
	  "Pepperoni",
	  "Sausage",
	  "Fennel Sausage",
	  "Spicy Sausage",
	  "Chicken",
	  "BBQ Chicken",
	  "Chorizo",
	  "Chicken Andouille",
	  "Salami",
	  "Tofu",
	  "Bacon",
	  "Canadian Bacon",
	  "Proscuitto",
	  "Italian Sausage",
	  "Ground Beef",
	  "Anchovies",
	  "Turkey",
	  "Ham",
	  "Venison",
	  "Lamb",
	  "Duck",
	  "Soylent Green",
	  "Carne Asada",
	  "Soppressata Picante",
	  "Coppa",
	  "Pancetta",
	  "Bresola",
	  "Lox",
	  "Guanciale",
	  "Chili",
	  "Beef Jerky",
	  "Pastrami",
	  "Kielbasa",
	  "Scallops",
	  "Filet Mignon"
	];
	pizzaIngredients.nonMeats = [
	  "White Onions",
	  "Red Onions",
	  "Sauteed Onions",
	  "Green Peppers",
	  "Red Peppers",
	  "Banana Peppers",
	  "Ghost Peppers",
	  "Habanero Peppers",
	  "Jalapeno Peppers",
	  "Stuffed Peppers",
	  "Spinach",
	  "Tomatoes",
	  "Pineapple",
	  "Pear Slices",
	  "Apple Slices",
	  "Mushrooms",
	  "Arugula",
	  "Basil",
	  "Fennel",
	  "Rosemary",
	  "Cilantro",
	  "Avocado",
	  "Guacamole",
	  "Salsa",
	  "Swiss Chard",
	  "Kale",
	  "Sun Dried Tomatoes",
	  "Walnuts",
	  "Artichoke",
	  "Asparagus",
	  "Caramelized Onions",
	  "Mango",
	  "Garlic",
	  "Olives",
	  "Cauliflower",
	  "Polenta",
	  "Fried Egg",
	  "Zucchini",
	  "Hummus"
	];
	pizzaIngredients.cheeses = [
	  "American Cheese",
	  "Swiss Cheese",
	  "Goat Cheese",
	  "Mozzarella Cheese",
	  "Parmesean Cheese",
	  "Velveeta Cheese",
	  "Gouda Cheese",
	  "Muenster Cheese",
	  "Applewood Cheese",
	  "Asiago Cheese",
	  "Bleu Cheese",
	  "Boursin Cheese",
	  "Brie Cheese",
	  "Cheddar Cheese",
	  "Chevre Cheese",
	  "Havarti Cheese",
	  "Jack Cheese",
	  "Pepper Jack Cheese",
	  "Gruyere Cheese",
	  "Limberger Cheese",
	  "Manchego Cheese",
	  "Marscapone Cheese",
	  "Pecorino Cheese",
	  "Provolone Cheese",
	  "Queso Cheese",
	  "Roquefort Cheese",
	  "Romano Cheese",
	  "Ricotta Cheese",
	  "Smoked Gouda"
	];
	pizzaIngredients.sauces = [
	  "Red Sauce",
	  "Marinara",
	  "BBQ Sauce",
	  "No Sauce",
	  "Hot Sauce"
	];
	pizzaIngredients.crusts = [
	  "White Crust",
	  "Whole Wheat Crust",
	  "Flatbread Crust",
	  "Stuffed Crust"
	];

	// These functions return a string of a random ingredient from each respective category of ingredients.
	var selectRandomMeat = function() {
	  var randomMeat = pizzaIngredients.meats[Math.floor((Math.random() * pizzaIngredients.meats.length))];
	  return randomMeat;
	};

	var selectRandomNonMeat = function() {
	  var randomNonMeat = pizzaIngredients.nonMeats[Math.floor((Math.random() * pizzaIngredients.nonMeats.length))];
	  return randomNonMeat;
	};

	var selectRandomCheese = function() {
	  var randomCheese = pizzaIngredients.cheeses[Math.floor((Math.random() * pizzaIngredients.cheeses.length))];
	  return randomCheese;
	};

	var selectRandomSauce = function() {
	  var randomSauce = pizzaIngredients.sauces[Math.floor((Math.random() * pizzaIngredients.sauces.length))];
	  return randomSauce;
	};

	var selectRandomCrust = function() {
	  var randomCrust = pizzaIngredients.crusts[Math.floor((Math.random() * pizzaIngredients.crusts.length))];
	  return randomCrust;
	};

	var ingredientItemizer = function(string) {
	  return "<li>" + string + "</li>";
	};

	for (var i = 0; i < numberOfMeats; i++) {
		pizza = pizza + ingredientItemizer(selectRandomMeat());
	}

	for (var j = 0; j < numberOfNonMeats; j++) {
		pizza = pizza + ingredientItemizer(selectRandomNonMeat());
	}

	for (var k = 0; k < numberOfCheeses; k++) {
		pizza = pizza + ingredientItemizer(selectRandomCheese());
	}

	pizza = pizza + ingredientItemizer(selectRandomSauce());
	pizza = pizza + ingredientItemizer(selectRandomCrust());

	console.log('Posting message back to main.js');

	postMessage(pizza);

}