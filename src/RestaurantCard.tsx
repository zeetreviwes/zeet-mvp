import React from 'react';

type RestaurantCardProps = {
  restaurant: any;
};

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
      <h3 className="font-bold text-lg text-gray-900 truncate mb-1">
        {restaurant.Nombre}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {restaurant.Direccion}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
          {restaurant.TipoDeCocina}
        </span>
        <span className="font-bold text-lg text-emerald-600">
          {restaurant.RangoDePrecios}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;