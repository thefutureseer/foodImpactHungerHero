import { Dialog } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { FoodData, FoodImpact } from '@/lib/interfaces/FoodImpact';

export default function Home() {
  const [foodData, setFoodData] = useState<FoodData>({});
  const [selectedFood, setSelectedFood] = useState<FoodImpact | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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

  const handleFoodClick = (foodName: string) => {
    setSelectedFood(foodData[foodName]);
    setIsOpen(true);
  };

  return (
    <>
      {/* Food item buttons */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {Object.keys(foodData).map((foodName) => (
            <button
              key={foodName}
              onClick={() => handleFoodClick(foodName)}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                {foodName.charAt(0).toUpperCase() + foodName.slice(1)}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Click to see details
              </p>
            </button>
          ))}
        </div>
      </main>

      {/* Modal dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-white/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 text-white">
          <Dialog.Panel className="w-full max-w-md rounded bg-black p-6">
            <Dialog.Title className="text-xl font-bold">
              {selectedFood?.name}
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500 mb-4">
              Detailed nutritional and metabolic impact
            </Dialog.Description>
            {selectedFood &&
              Object.entries(selectedFood).map(([key, value]) => (
                <p key={key} className="text-sm">
                  <strong>{key}:</strong> {String(value)}
                </p>
              ))}
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};