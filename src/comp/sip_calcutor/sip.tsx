import React, { useState, useEffect, useCallback } from 'react';
import { Calculator, TrendingUp, DollarSign, Calendar, Target } from 'lucide-react';

export default function SIPCalculator() {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);
    const [results, setResults] = useState({
        totalInvestment: 0,
        estimatedReturns: 0,
        totalValue: 0
    });

    const calculateSIP = useCallback(() => {
        const monthlyRate = expectedReturn / 12 / 100;
        const months = timePeriod * 12;

        // SIP Formula: M * [((1 + r)^n - 1) / r] * (1 + r)
        const futureValue = monthlyInvestment *
            (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

        const totalInvestment = monthlyInvestment * months;
        const estimatedReturns = futureValue - totalInvestment;

        setResults({
            totalInvestment: Math.round(totalInvestment),
            estimatedReturns: Math.round(estimatedReturns),
            totalValue: Math.round(futureValue)
        });
    }, [monthlyInvestment, expectedReturn, timePeriod]);

    useEffect(() => {
        calculateSIP();
    }, [calculateSIP]);

    const formatCurrency = (amount: number | bigint) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };



    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                            <Calculator className="h-8 w-8 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">SIP Calculator</h1>
                    <p className="text-gray-600 text-lg">Plan your systematic investment journey</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                            <Target className="h-6 w-6 text-blue-600 mr-2" />
                            Investment Parameters
                        </h2>

                        <div className="space-y-6">
                            {/* Monthly Investment */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Monthly Investment Amount
                                </label>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min="500"
                                        max="100000"
                                        step="500"
                                        value={monthlyInvestment}
                                        onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>₹500</span>
                                        <span>₹1,00,000</span>
                                    </div>
                                </div>
                                <div className="mt-3 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                                    <input
                                        type="number"
                                        value={monthlyInvestment}
                                        onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                        className="w-full text-xl font-semibold text-blue-600 bg-transparent border-none outline-none"
                                        min="500"
                                        max="100000"
                                    />
                                    <span className="text-sm text-gray-600">per month</span>
                                </div>
                            </div>

                            {/* Expected Return */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Expected Annual Return (%)
                                </label>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min="1"
                                        max="30"
                                        step="0.5"
                                        value={expectedReturn}
                                        onChange={(e) => setExpectedReturn(Number(e.target.value))}
                                        className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>1%</span>
                                        <span>30%</span>
                                    </div>
                                </div>
                                <div className="mt-3 p-3 bg-green-50 rounded-lg border-2 border-green-200">
                                    <input
                                        type="number"
                                        value={expectedReturn}
                                        onChange={(e) => setExpectedReturn(Number(e.target.value))}
                                        className="w-full text-xl font-semibold text-green-600 bg-transparent border-none outline-none"
                                        min="1"
                                        max="30"
                                        step="0.1"
                                    />
                                    <span className="text-sm text-gray-600">% annually</span>
                                </div>
                            </div>

                            {/* Time Period */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Investment Period (Years)
                                </label>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min="1"
                                        max="40"
                                        step="1"
                                        value={timePeriod}
                                        onChange={(e) => setTimePeriod(Number(e.target.value))}
                                        className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>1 Year</span>
                                        <span>40 Years</span>
                                    </div>
                                </div>
                                <div className="mt-3 p-3 bg-purple-50 rounded-lg border-2 border-purple-200">
                                    <input
                                        type="number"
                                        value={timePeriod}
                                        onChange={(e) => setTimePeriod(Number(e.target.value))}
                                        className="w-full text-xl font-semibold text-purple-600 bg-transparent border-none outline-none"
                                        min="1"
                                        max="40"
                                    />
                                    <span className="text-sm text-gray-600">years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-6">
                        {/* Summary Cards */}
                        <div className="grid gap-4">
                            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-600 text-sm font-medium">Total Investment</p>
                                        <p className="text-2xl font-bold text-gray-800">{formatCurrency(results.totalInvestment)}</p>
                                    </div>
                                    <DollarSign className="h-10 w-10 text-blue-500" />
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-600 text-sm font-medium">Estimated Returns</p>
                                        <p className="text-2xl font-bold text-gray-800">{formatCurrency(results.estimatedReturns)}</p>
                                    </div>
                                    <TrendingUp className="h-10 w-10 text-green-500" />
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-purple-100 text-sm font-medium">Total Value</p>
                                        <p className="text-3xl font-bold">{formatCurrency(results.totalValue)}</p>
                                    </div>
                                    <Calendar className="h-10 w-10 text-purple-200" />
                                </div>
                            </div>
                        </div>

                        {/* Detailed Breakdown */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Investment Breakdown</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Monthly Investment:</span>
                                    <span className="font-semibold text-gray-800">{formatCurrency(monthlyInvestment)}</span>
                                </div>

                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Investment Period:</span>
                                    <span className="font-semibold text-gray-800">{timePeriod} years ({timePeriod * 12} months)</span>
                                </div>

                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Expected Return:</span>
                                    <span className="font-semibold text-gray-800">{expectedReturn}% p.a.</span>
                                </div>

                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Total Investment:</span>
                                    <span className="font-semibold text-blue-600">{formatCurrency(results.totalInvestment)}</span>
                                </div>

                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Wealth Gained:</span>
                                    <span className="font-semibold text-green-600">{formatCurrency(results.estimatedReturns)}</span>
                                </div>

                                <div className="flex justify-between items-center py-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg px-4">
                                    <span className="text-gray-700 font-medium">Final Amount:</span>
                                    <span className="font-bold text-xl text-purple-600">{formatCurrency(results.totalValue)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Investment vs Returns</h3>
                            <div className="relative">
                                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                                        style={{ width: `${(results.totalInvestment / results.totalValue) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between mt-2 text-sm">
                                    <span className="text-blue-600 font-medium">Investment: {((results.totalInvestment / results.totalValue) * 100).toFixed(1)}%</span>
                                    <span className="text-purple-600 font-medium">Returns: {((results.estimatedReturns / results.totalValue) * 100).toFixed(1)}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                        <strong>Disclaimer:</strong> This calculator provides estimates based on the inputs provided.
                        Actual returns may vary depending on market conditions and fund performance.
                        Please consult with a financial advisor before making investment decisions.
                    </p>
                </div>
            </div>

            <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
        </div>
    );
}