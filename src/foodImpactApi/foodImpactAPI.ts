import { FoodImpact } from './foodImpactInterface';

export class FoodImpactAPI {
    private foodData: { [foodName: string]: FoodImpact };

    constructor() {
        // Initialize the food impact data (you can replace this with a database)
        this.foodData = {
            apple: {
                hunger: 200,
                bloodSugar: 300,
                insulin: 100,
                spikeScore: 500,
                duration: "2 hours",
                SatietyIndexScore: 60
            },
            chocolate: {
                hunger: 800,
                bloodSugar: 700,
                insulin: 900,
                spikeScore: 950,
                duration: "3 hours",
                SatietyIndexScore: 0 
            },
            cinnamon: {
                hunger: 100,
                bloodSugar: 300,
                insulin: 100,
                spikeScore: 300,
                duration: "2 hours",
                SatietyIndexScore: 84 
            },
            paprika: {
                hunger: 700,
                bloodSugar: 500,
                insulin: 100,
                spikeScore: 800,
                duration: "short-term",
                SatietyIndexScore: 24 
            },
            oatmeal: { 
                hunger: 300, 
                bloodSugar: 400, 
                insulin: 200, 
                spikeScore: 600, 
                duration: "2 hours", 
                SatietyIndexScore: 0 
            },
            brownPasta: {
                hunger: 250, 
                bloodSugar: 350, 
                insulin: 150, 
                spikeScore: 450, 
                duration: "2 hours",
                SatietyIndexScore: 0
        },
            preservatives: {
                hunger: 800,
                bloodSugar: 700,
                insulin: 900,
                spikeScore: 950,
                duration: "short-term",
                SatietyIndexScore: 14 
            }
        };
    }

    getFoodImpact(foodName: string): FoodImpact | null {
        /**
         * Get the impact of a specific food item.
         *
         * @param foodName - Name of the food item.
         * @returns Food impact data (hunger, blood sugar, insulin, spike score, duration, SatietyIndexScore).
         */
        return this.foodData[foodName.toLowerCase()] || null;
    }
}