export interface FoodImpact {
  name: string;
  causesHunger: number;
  bloodSugarSpike: number;
  insulinSpike: number;
  spikeScore: number;
  SatietyIndexScore: number;
  helpLowerCortisol: number;
  description: string;
  measurement: string;
}

export interface FoodData {
  [key: string]: FoodImpact;
}