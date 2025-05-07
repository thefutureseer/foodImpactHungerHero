import { NextApiRequest, NextApiResponse } from 'next';

const foodData = {
  apple: {
    name: "Apple",
    hunger: 200,
    bloodSugar: 300,
    insulin: 100,
    spikeScore: 500,
    duration: "2 hours",
    SatietyIndexScore: 60
  },
  chocolate: {
    name: "chocolate",
    hunger: 800,
    bloodSugar: 700,
    insulin: 900,
    spikeScore: 950,
    duration: "3 hours",
    SatietyIndexScore: 0 
  },
  cinnamon: {
    name: "cinnamon",
    hunger: 100,
    bloodSugar: 300,
    insulin: 100,
    spikeScore: 300,
    duration: "2 hours",
    SatietyIndexScore: 84 
  },
  paprika: {
    name: "paprika",
    hunger: 700,
    bloodSugar: 500,
    insulin: 100,
    spikeScore: 800,
    duration: "short-term",
    SatietyIndexScore: 24 
  },
  oatmeal: {
    name: "oatmeal", 
    hunger: 300, 
    bloodSugar: 400, 
    insulin: 200, 
    spikeScore: 600, 
    duration: "2 hours", 
    SatietyIndexScore: 0 
  },
  brownPasta: {
    name: "brownPasta",
    hunger: 250, 
    bloodSugar: 350, 
    insulin: 150, 
    spikeScore: 450, 
    duration: "2 hours",
    SatietyIndexScore: 0
  },
  preservatives: {
    name: "preservatives",
    hunger: 800,
    bloodSugar: 700,
    insulin: 900,
    spikeScore: 950,
    duration: "short-term",
    SatietyIndexScore: 14 
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Check if foodData exists
    if (!foodData) {
      throw new Error("Food data not found");
    }

    // Return the foodData as JSON
    res.status(200).json(foodData);
  } catch (error: any) {
    // Handle errors
    console.error("Error fetching food data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
