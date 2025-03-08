import React, { useEffect } from 'react'
import Hero from "../../../Gallery/3.png"
import "./Home.css"
import Reason from '../Reason/Reason'
import HowWorks from '../HowWorks/HowWorks'
import Testimonial from './Testimonal/Testimonal'
import Opportunities from '../Opportunities/Opportunities'
import Price from '../Price/Price'
import FAQ from '../FAQ/FAQ'
import CTA from '../CTA/CTA'
import Security from '../Security/Security'
import Table from '../Table/Table'
import Charts from '../Charts/Charts'
import Footer from '../Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration
            easing: 'ease-out', // Animation easing
            once: true, // Ensure animation runs only once
            delay: 100, // Delay before animation starts
        });
        AOS.refresh(); // Refresh AOS to detect new elements
    }, []);


    return (
        <div>
            <div className='bg-orange-200 text-center relative '>
                <div data-aos="fade-up" id='/' className='pt-16'>
                    <div className='p-10 relative hidden lg:block '>
                        <div className='relative opacity-10'>
                            <div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                                <div className='w-full h-0.5 bg-amber-600 my-10'></div>
                            </div>
                        </div>
                        <div className='absolute flex justify-center items-center inset-0'>
                            <div className='text-gray-700'>
                                <div>
                                    <div className=''>
                                        <div className=''>
                                            <h1 className='text-3xl lg:text-6xl font-extrabold text-white text-border'>
                                                Invest with Confidence, <br /> Grow Your Wealth with Expertise
                                            </h1>

                                            <p className='font-bold text-xl my-2 lg:my-5  hidden lg:block'>Join thousands of successful investors and  <br />build a future of financial freedom with our secure, innovative platform.</p>
                                            <p className='font-medium text-xl lg:text-2xl my-5 text-amber-700'>Secure Finance Investments for Premium Returns | InvestWise</p>

                                            <div className='flex justify-center items-center mb-2 lg:mb-0'>
                                                <div className='text-center border-2 border-amber-700 px-3 py-1.5 lg:px-6 lg:py-2.5 text-base lg:text-xl font-medium w-max button'>
                                                    <button>Start Investing</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <img src={Hero} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-700 p-10 block lg:hidden'>
                        <div>
                            <div className=''>
                                <div className=''>
                                    <h1 className='text-3xl lg:text-6xl font-extrabold text-white text-border'>
                                        Invest with Confidence, <br /> Grow Your Wealth with Expertise
                                    </h1>

                                    <p className='font-bold text-xl my-2 lg:my-5 hidden lg:block'>Join thousands of successful investors and  <br />build a future of financial freedom with our secure, innovative platform.</p>
                                    <p className='font-medium text-xl lg:text-2xl my-5 text-amber-700'>Secure Finance Investments for Premium Returns | InvestWise</p>

                                    <div className='flex justify-center items-center mb-2 lg:mb-0'>
                                        <div className='text-center border-2 border-amber-700 px-3 py-1.5 lg:px-6 lg:py-2.5 text-base lg:text-xl font-medium w-max button'>
                                            <button>Start Investing</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img src={Hero} />
                                </div>
                            </div>
                        </div>
                    </div></div>
            </div>
            <div>
                <Reason></Reason>
                <HowWorks />
                <Opportunities />
                <Price />
                <Charts />
                <Table />
                <Testimonial />
                <Security />
                <FAQ />
                <CTA />
                <Footer></Footer>
            </div>
        </div>
    )
}
