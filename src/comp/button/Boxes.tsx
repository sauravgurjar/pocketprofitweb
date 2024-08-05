import React from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    name: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, name }) => (
    <div className="bg-gray-700 w-full max-w-[500px] rounded-xl hover:bg-gray-900 hover:scale-105 duration-700 p-5  flex flex-col">
        <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
                <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
        </figure>
        <h4 className="py-2 text-white text-start font-bold">{name}</h4>
        <p className="text-base leading-7 text-white text-start font-semibold">{description}</p>
        <p className="text-sm leading-7 text-slate-300 text-start mt-2">{title}</p>
        <div className="pt-5 pb-2 flex justify-center mt-auto">
            <button className="w-36 h-10 font-semibold rounded-xl bg-indigo-100 hover:scale-90 duration-500">Button</button>
        </div>
    </div>
);

const FeatureSection: React.FC = () => {
    const features = [
        {
            icon: "clock-icon",
            title: "Create an account in just a few minutes",
            description: "Opening an account is just a few minutes with our state-of-the-art onboarding process",
            name:"saurav"
        },
        {
            icon: "chart-icon",
            title: "Various investment instruments",
            description: "Various kinds of financial market investment instruments that you can try to diversify your funds safely and reliably"
            ,name:"saurav"
        },



    ];

    return (
        <div className=" lg:max-w-[1000px] md:max-w-[1000px] max-w-[1000px]  mx-auto mt-16 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-6 justify-items-center">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;