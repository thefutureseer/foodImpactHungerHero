// Import the necessary modules and interfaces
import { NextApiRequest, NextApiResponse } from 'next';
import FoodModel from '../../../lib/models/FoodModel';
import { FoodImpact } from '../interfaces/FoodImpact';

// Define the controller class
export default class FoodController {
    // Declare a private property to hold the FoodModel instance
    private foodModel: FoodModel;

    // Constructor to initialize the FoodController with a FoodModel instance
    constructor(foodModel: FoodModel) {
        this.foodModel = foodModel;
    }

    // Method to handle GET requests and retrieve food impact data
    async getFoodImpact(req: NextApiRequest, res: NextApiResponse) {
        try {
            // Extract the foodName from the request query parameters
            const { foodName } = req.query;

            // Check if the foodName parameter is provided
            if (!foodName || typeof foodName !== 'string') {
                // If not provided or invalid, send a 400 Bad Request response
                return res.status(400).json({ error: 'Invalid food name' });
            }

            // Retrieve the food impact data for the specified foodName
            const foodImpact: FoodImpact | null = this.foodModel.getFoodImpact(foodName);

            // Check if the food impact data is found
            if (!foodImpact) {
                // If not found, send a 404 Not Found response
                return res.status(404).json({ error: 'Food not found in the database' });
            }

            // If found, send the food impact data in the response
            res.status(200).json(foodImpact);
        } catch (error) {
            // If an error occurs, send a 500 Internal Server Error response
            console.error('Error retrieving food impact:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
