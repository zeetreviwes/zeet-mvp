import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import RestaurantCard from './RestaurantCard';
import './index.css';

function App() {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function getRestaurants() {
      const { data, error } = await supabase
        .from('Restaurantes')
        .select('*');

      if (error) {
        setError(error);
        console.error(error);
      } else {
        setRestaurants(data);
      }
    }

    getRestaurants();
  }, []);

  if (error) {
    return <div className="p-8 text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Restaurantes de Zeet
      </h1>

      {restaurants.length === 0 ? (
        <div className="text-center text-gray-500">Cargando restaurantes...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;