/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 
From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.
  Animals that eat only plants are called herbivores
  Animals that eat only other animals are called carnivores
  Animals that eat both plants and animals are called omnivores
 * 
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsPlants && eatsAnimals ? "omnivore": ((eatsPlants ? "herbivore" : (eatsAnimals ? "carnivore" : undefined))));

console.log(category);