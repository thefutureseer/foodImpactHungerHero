import { FoodImpact } from '../interfaces/FoodImpact';

export default class FoodModel {
    private foodData: { [foodName: string]: FoodImpact };

    constructor(foodData: { [foodName: string]: FoodImpact }) {
        this.foodData = foodData;
    }

    getFoodImpact(foodName: string): FoodImpact | null {
        return this.foodData[foodName.toLowerCase()] || null;
    }
}
