import React from 'react';
import logo from "../../assets/catimage.png";

const UnderMaintenancePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">

            <div className="relative mb-8">
                <div className="w-36 h-36 sm:w-48 sm:h-48 mx-auto bg-navy-600 rounded-full"></div>
                <img
                    src={logo}
                    className="w-80 h-auto"
                    alt='Pocket profit'
                />

            </div>
            <h1 className="text-2xl sm:text-3xl text-center font-bold text-yellow-400 mb-4">Under Maintenance</h1>
            <p className="text-sm sm:text-base text-center text-gray-600 mb-8 mx-4 sm:mx-8">
                Sorry, the page you're looking for is currently u
                <br className="hidden sm:inline"/>
                nder maintenance and will be back soon.
            </p>

        </div>
    );
};

export default UnderMaintenancePage;