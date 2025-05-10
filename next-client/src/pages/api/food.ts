import { NextApiRequest, NextApiResponse } from 'next';
import { FoodData } from '@/lib/interfaces/FoodImpact';
import foodData from '@/lib/data/foodData';

export default function handler(req: NextApiRequest, res: NextApiResponse<FoodData | {error:string}>) {
  try {
    // Check if foodData exists
    if (!foodData) {
      throw new Error("Food data not found");
    };
    const data:FoodData = foodData;
    // Return the foodData as JSON
    res.status(200).json(data);
  } catch (error: any) {
    // Handle errors
    console.error("Error fetching food data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}