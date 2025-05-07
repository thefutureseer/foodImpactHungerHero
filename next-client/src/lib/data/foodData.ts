// Import the FoodImpact interface
import { FoodImpact } from '../interfaces/FoodImpact';

// Define the food data
export const foodData: { [foodName: string]: FoodImpact } = {
    apple: {
        name: "apple",
        hunger: 200,
        bloodSugar: 300,
        insulin: 100,
        spikeScore: 500,
        duration: "2 hours",
        SatietyIndexScore: 60
     },

    // Define other food items similarly
};
