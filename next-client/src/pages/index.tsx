import { useState, useEffect } from 'react';
import { FoodData, FoodImpact } from '@/lib/interfaces/FoodImpact';

export default function Home() {
  const [foodData, setFoodData] = useState<FoodData>({});
  const [selectedFood, setSelectedFood] = useState<FoodImpact | null>(null);

  useEffect(() => {
    // Fetch food data from the API endpoint
    const fetchFoodData = async () => {
      try {
        const response = await fetch('/api/food');
        if (!response.ok) {
          throw new Error('Failed to fetch food data');
        }
        const data = await response.json();
        setFoodData(data);
      } catch (error: any) {
        console.error('Error fetching food data:', error.message);
      }
    };

    fetchFoodData();
  }, []);

  const handleFoodClick = (foodName: any) => {
    console.log("Clicked on food:", foodName , " & ", foodData[foodName]);
    setSelectedFood(foodData[foodName]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Display buttons for each food item */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {Object.keys(foodData).map((foodName) => (
          <button
            key={foodName}
            onClick={() => handleFoodClick(foodName)}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {foodName.charAt(0).toUpperCase() + foodName.slice(1)}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Click to see details
            </p>
          </button>
        ))}
      </div>
      {/* // Display selected food details */}
      {selectedFood && (
        <div>
          {/* Loop through each property of the selected food */}
          {Object.entries(selectedFood).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      )}

    </main>
  );
}
