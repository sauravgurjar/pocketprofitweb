import React from 'react';
import Stats from "./static_deatisl";

const WhyUsSection: React.FC = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
            <div className="flex items-center justify-center mb-8">
                <div className="flex-grow h-px bg-green-500"></div>
                <h2 className="mx-4 text-green-500 uppercase tracking-wide font-semibold">
                    Why Us
                </h2>
                <div className="flex-grow h-px bg-green-500"></div>
            </div>
            <h3 className="text-4xl font-bold mb-4">
                Safe financial investment
                <br />
                with the features we have
            </h3>
            <p className="text-gray-600">
                All these serves are easy for you just one touch
            </p>
            <Stats/>
            {/*<FeatureSection/>*/}
        </section>
    );
};

export default WhyUsSection;