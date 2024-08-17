import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const { data: recipes, loading, error } = useFetch('/recipes', searchText);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <>
            <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 shadow-lg py-16">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">
                        Recipe Finder
                    </h1>
                    <div className="relative w-full max-w-md mt-8 md:mt-0">
                        <form className="flex items-center">
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleSearchChange}
                                className="w-full py-4 pl-12 pr-4 text-gray-800 bg-white border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-transform duration-300"
                                placeholder="Search for delicious recipes..."
                            />
                            <svg
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M13.293 14.707a1 1 0 011.414-1.414l3.586 3.586a1 1 0 01-1.414 1.414l-3.586-3.586zM11 2a7 7 0 100 14 7 7 0 000-14zm-5 7a5 5 0 1110 0 5 5 0 01-10 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </form>
                    </div>
                </div>
            </header>

            <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {loading ? (
                            <div className="col-span-full text-center text-gray-700 text-lg font-bold mt-10">
                                <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-purple-600 mx-auto"></div>
                                <p className="mt-4 text-xl">Loading...</p>
                            </div>
                        ) : error ? (
                            <p className="col-span-full text-center text-red-600 text-lg font-bold mt-10">
                                Error: {error}
                            </p>
                        ) : recipes && recipes.length > 0 ? (
                            recipes.map((recipe) => (
                                <Link
                                    key={recipe.id}
                                    to={`/recipe/${recipe.id}`}
                                    className="block bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                                >
                                    <div className="relative h-60 md:h-72">
                                        <img
                                            className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
                                            src={recipe.image}
                                            alt={recipe.name}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-center items-center p-4 transition-opacity duration-300 opacity-0 hover:opacity-90">
                                            <h2 className="text-xl md:text-2xl font-bold text-white text-center px-4 py-2">{recipe.name}</h2>
                                            <p className="text-md md:text-lg text-white mt-2">{recipe.cuisine}</p>
                                        </div>
                                    </div>
                                    <div className="p-4 md:p-6">
                                        <p className="text-sm text-gray-700 mb-1">Cuisine: <span className="font-medium">{recipe.cuisine}</span></p>
                                        <p className="text-lg text-yellow-600 font-semibold">Rating: <span className="font-bold">{recipe.rating}</span></p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-700 text-lg font-bold mt-10">
                                No recipes found. Try another search!
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
