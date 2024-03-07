// Import the FoodImpact interface and food data
import { FoodImpact } from '../interfaces/FoodImpact';
import { foodData } from '../data/foodData';

// Define the FoodImpactAPI class
export class FoodImpactAPI {
    private foodData: { [foodName: string]: FoodImpact };

    constructor() {
        // Initialize the food impact data from the imported foodData
        this.foodData = foodData;
    }

    // Method to get the impact of a specific food item
    getFoodImpact(foodName: string): FoodImpact | null {
        return this.foodData[foodName.toLowerCase()] || null;
    }
}