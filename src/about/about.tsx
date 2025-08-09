import { useState } from 'react';
import { Users, Target, Award, Globe, ChevronRight, Star, Heart, Zap } from 'lucide-react';

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState('mission');

    const stats = [
        { label: 'Years of Excellence', value: '10+', icon: Award },
        { label: 'Happy Clients', value: '500+', icon: Heart },
        { label: 'Projects Completed', value: '1000+', icon: Zap },
        { label: 'Team Members', value: '50+', icon: Users }
    ];

    const values = [
        {
            title: 'Innovation',
            description: 'We embrace cutting-edge technology and creative solutions to solve complex challenges.',
            icon: Zap
        },
        {
            title: 'Excellence',
            description: 'We strive for perfection in every project, delivering quality that exceeds expectations.',
            icon: Star
        },
        {
            title: 'Collaboration',
            description: 'We believe in the power of teamwork and building strong partnerships with our clients.',
            icon: Users
        },
        {
            title: 'Impact',
            description: 'We create solutions that make a meaningful difference in businesses and communities.',
            icon: Globe
        }
    ];

    const team = [
        {
            name: 'saurav singh',
            role: 'Chief Investment Officer',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
            bio: 'Expert portfolio manager with 5+ years in mutual fund strategies and market analysis.'
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* Hero Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            About Us
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We're a dedicated team of financial experts and investment professionals committed to
                            helping you build wealth through smart mutual fund investments and portfolio management.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => {
                            const IconComponent = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className="bg-white rounded-lg p-6 text-center border border-gray-200 shadow-sm"
                                >
                                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                    <div className="text-gray-600 text-sm">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values Tabs */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['mission', 'vision', 'story'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                                    activeTab === tab
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
                        {activeTab === 'mission' && (
                            <div className="text-center">
                                <Target className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                    To empower investors with comprehensive mutual fund solutions and expert guidance
                                    that help them achieve their financial goals and build long-term wealth through
                                    strategic portfolio management.
                                </p>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="text-center">
                                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                    To be the leading mutual fund investment company, creating a future where
                                    every investor has access to professional-grade portfolio management and
                                    can confidently build their financial legacy.
                                </p>
                            </div>
                        )}

                        {activeTab === 'story' && (
                            <div className="text-center">
                                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                    Founded in 2014 with a simple belief: that smart investing should be accessible
                                    to everyone. What started as a boutique investment advisory has grown into a
                                    trusted mutual fund company, helping thousands of investors achieve their
                                    financial dreams through disciplined portfolio management.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do and shape our culture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value) => {
                            const IconComponent = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 rounded-lg bg-blue-100">
                                            <IconComponent className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The brilliant minds behind our success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-lg p-8 md:p-12 border border-gray-200 shadow-sm">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to Work Together?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Let's create something amazing together. Get in touch to start your next project.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                            <span>Get Started</span>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}