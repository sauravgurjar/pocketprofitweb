
 import React from 'react';
 import logo from '../assets/loga.png';

 const Footer: React.FC = () => {
     return (
         <footer className="bg-white">
             <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                 <div className="lg:flex lg:items-start lg:gap-8">
                     <img
                         src={logo}
                         className="w-20 h-20"
                         alt='Pocket profit'
                     />

                     <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                         <div className="col-span-2">
                             <div>
                                 <h2 className="text-2xl font-bold text-gray-900">PocketProfit — Turn every rupee into results.</h2>

                                 <p className="mt-4 text-gray-500">
                                     PocketProfit helps you track, analyze, and grow your money effortlessly.
                                     Turn every transaction into a step toward your financial goals.
                                 </p>
                             </div>
                         </div>

                         <div className="col-span-2 sm:col-span-1">
                             <p className="font-medium text-gray-900">Company</p>

                             <ul className="mt-6 space-y-4 text-sm">
                                 <li>
                                     <a href="/PageInProgress" className="text-gray-700 transition hover:opacity-75"> About </a>
                                 </li>

                                 <li>
                                     <a href="/PageInProgress" className="text-gray-700 transition hover:opacity-75"> Meet the
                                         Team </a>
                                 </li>

                                 <li>
                                     <a href="/PageInProgress" className="text-gray-700 transition hover:opacity-75">
                                         Review </a>
                                 </li>
                             </ul>
                         </div>

                         <div className="col-span-2 sm:col-span-1">
                             <p className="font-medium text-gray-900">Helpful Links</p>

                             <ul className="mt-6 space-y-4 text-sm">
                                 <li>
                                     <a href="/PageInProgress" className="text-gray-700 transition hover:opacity-75"> Contact </a>
                                 </li>
                             </ul>
                         </div>

                         <div className="col-span-2 sm:col-span-1">
                             <p className="font-medium text-gray-900">Legal</p>

                             <ul className="mt-6 space-y-4 text-sm">
                                 <li>
                                     <a href="/PageInProgress"
                                        className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
                                 </li>

                                 <li>
                                     <a href="/PageInProgress" className="text-gray-700 transition hover:opacity-75"> Returns
                                         Policy </a>
                                 </li>

                                 <li>
                                     <a href="/PageInProgress" className="text-gray-700 transition hover:opacity-75"> Refund
                                         Policy </a>
                                 </li>

                                 <li>
                                     <a href="/PageInProgress" className="text-gray-700 transition hover:opacity-75"> Hiring
                                          </a>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>

                 <div className="mt-8 border-t border-gray-100 pt-8">
                     <div className="sm:flex sm:justify-between">
                         <p className="text-xs text-gray-500">&copy; 2025. PocketProfit.in. All rights reserved.</p>

                         <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                             <li>
                                 <a href="/PageInProgress" className="text-gray-500 transition hover:opacity-75"> Terms &
                                     Conditions </a>
                             </li>

                             <li>
                                 <a href="/PageInProgress" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
         </footer>
     );
 };

 export default Footer;
