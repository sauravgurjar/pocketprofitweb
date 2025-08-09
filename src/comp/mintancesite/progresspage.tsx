import React from 'react';
import { Clock } from 'lucide-react';

export default function PageInProgress() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="text-center max-w-md mx-auto">
                {/* Simple icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-blue-600" />
                </div>

                {/* Main heading */}
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Page Under Construction
                </h1>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    We're working hard to bring you something amazing.
                    Please check back soon!
                </p>

                {/* Simple progress bar */}
                <div className="bg-gray-200 rounded-full h-2 mb-6">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                </div>

                {/* Progress text */}
                <p className="text-sm text-gray-500 mb-8">
                    Progress: 75% Complete
                </p>

                {/* Simple button */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    Notify Me When Ready
                </button>

                {/* Contact info */}
                <p className="text-sm text-gray-400 mt-8">
                    Questions? Contact us at hello@example.com
                </p>
            </div>
        </div>
    );
}