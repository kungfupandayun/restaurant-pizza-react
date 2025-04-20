import React from 'react';

const MenuCard = ({ image, title, description, price, enableAdd,onAdd }) => {
    return (
        <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <h2 className="text-lg font-bold mt-4">{title}</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>
            <div className="flex items-center justify-between w-full mt-4">
                <span className="text-green-600 font-bold">S${price}</span>
                {enableAdd && (
                    <button
                        onClick={onAdd}
                        className="px-4 py-2 rounded text-white bg-green-500 hover:bg-green-600"
                    >
                        Add
                    </button>
                )}
            </div>
        </div>
    );
};

export default MenuCard;