import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="pt-20 pb-12">
            <div className='w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>

                {/* first part */}

                <div>
                    <h1 className='text-[25px] uppercase font-semibold text-black mb-4 '>Persian store </h1>
                    <p className='text-sm text-black opacity-60'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, fuga!
                    </p>

                    <div className='flex flex-col mt-6 gap-2'>
                        <p className='text-base mt-6 text-black opacity-80'> ( +98)  919 027 79 76</p>

                        <span className='text-black '>danial79fakhrabadi@gmail.com</span>
                    </div>


                </div>


                <div className='lg:mx-auto '>
                    <h1 className='footer__title'>Information</h1>
                    <p className='footer__link'>About us</p>
                    <p className='footer__link'>privacy police</p>
                    <p className='footer__link'>Contact</p>
                    <p className='footer__link'>Terms & Conditions</p>
                    <p className='footer__link'>Github</p>
                </div>
                <div className='lg:mx-auto '>
                    <h1 className='footer__title'>Account</h1>
                    <p className='footer__link'>About us</p>
                    <p className='footer__link'>privacy police</p>
                    <p className='footer__link'>Contact</p>
                    <p className='footer__link'>Terms & Conditions</p>
                    <p className='footer__link'>Github</p>
                </div>
                <div className='lg:mx-auto '>
                    <h1 className='footer__title'>Shop</h1>
                    <p className='footer__link'>About us</p>
                    <p className='footer__link'>privacy police</p>
                    <p className='footer__link'>Contact</p>
                    <p className='footer__link'>Terms & Conditions</p>
                    <p className='footer__link'>Github</p>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto '>
                <p className='text-sm text-black opacity-60'> © 2025 Persian Store. All rights reserved.</p>
                <Image src="/images/logo.png" alt='logo' width={100} height={100} className='object-contain sm:ml-auto' />
            </div>
        </div>
    )
}

export default Footer