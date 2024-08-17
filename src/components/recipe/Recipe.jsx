import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`/recipes/${id}`);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50">
                <p className="text-center text-gray-600 text-xl font-semibold font-sans">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50">
                <p className="text-center text-red-600 text-xl font-semibold font-sans">Error: {error}</p>
            </div>
        );
    }

    return (
        <section className="bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50 py-16 font-sans">
            <div className="container mx-auto max-w-4xl p-6">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-102 transition-transform duration-500">
                    <img
                        className="w-full h-72 md:h-80 object-cover object-center transition-transform duration-500 transform hover:scale-110"
                        src={data.image}
                        alt={data.name}
                    />
                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">{data.name}</h1>

                        <div className="text-center mb-6">
                            <p className="text-lg md:text-xl text-gray-700 mb-2"><span className="font-semibold text-gray-900">Cuisine:</span> {data.cuisine}</p>
                            <p className="text-lg md:text-xl text-gray-700 mb-2"><span className="font-semibold text-gray-900">Rating:</span> {data.rating}</p>
                            <p className="text-lg md:text-xl text-gray-700 mb-2"><span className="font-semibold text-gray-900">Calories:</span> {data.caloriesPerServing} kcal</p>
                        </div>

                        <div className="text-center mb-6">
                            <p className="text-lg md:text-xl text-gray-700 mb-2"><span className="font-semibold text-gray-900">Difficulty:</span> {data.difficulty}</p>
                            <p className="text-lg md:text-xl text-gray-700 mb-2"><span className="font-semibold text-gray-900">Prep Time:</span> {data.prepTimeMinutes} min</p>
                            <p className="text-lg md:text-xl text-gray-700 mb-2"><span className="font-semibold text-gray-900">Cook Time:</span> {data.cookTimeMinutes} min</p>
                            <p className="text-lg md:text-xl text-gray-700 mb-2"><span className="font-semibold text-gray-900">Servings:</span> {data.servings}</p>
                        </div>

                        <div className="flex flex-wrap justify-center mb-6">
                            {data.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white text-sm font-semibold px-4 py-2 rounded-full mr-2 mb-2 transform hover:scale-105 transition-transform duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recipe;
