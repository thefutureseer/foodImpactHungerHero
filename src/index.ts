import { FoodImpactAPI } from './foodImpactApi/foodImpactAPI';

// Example usage
const api = new FoodImpactAPI();

// Get impact data for an apple
const appleImpact = api.getFoodImpact("apple");
if (appleImpact) {
    console.log(`Apple impact:`, appleImpact);
} else {
    console.log("Food not found in the database.");
}

// Get impact data for cinnamon
const cinnamonImpact = api.getFoodImpact("cinnamon");
if (cinnamonImpact) {
    console.log(`Cinnamon impact:`, cinnamonImpact);
} else {
    console.log("Food not found in the database.");
}

// Get impact data for paprika
const paprikaImpact = api.getFoodImpact("paprika");
if (paprikaImpact) {
    console.log(`Paprika impact:`, paprikaImpact);
} else {
    console.log("Food not found in the database.");
}

// Get impact data for preservatives
const preservativesImpact = api.getFoodImpact("preservatives");
if (preservativesImpact) {
    console.log(`Preservatives impact:`, preservativesImpact);
} else {
    console.log("Food not found in the database.");
}