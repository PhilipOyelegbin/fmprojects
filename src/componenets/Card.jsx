import React from 'react'
import equilibrium from '../images/image-equilibrium.jpg'
import ethereum from '../images/icon-ethereum.svg'
import clock from '../images/icon-clock.svg'
import view from '../images/icon-view.svg'
import avatar from '../images/image-avatar.png'

export const Card = () => {
  return (
    <div className='bg-cardBg p-5 w-[90%] md:w-1/2 mx-auto rounded-lg'>
        <img className='rounded-lg hover:bg-cyan hover:mix-blend-overlay hover:bg-[../images/icon-view.svg]' src={equilibrium || ""} alt="image" />
        <h2 className='font-bold text-newWhite text-lg md:text-xl my-3 hover:text-cyan'>Equilibrium #3429</h2>
        <p className='text-softBlue text-sm md:text-lg my-3'>Our Equilibrium collection promotes balance and calm.</p>

        <div className='flex justify-between items-center border-b border-line pb-5'>
            <p className='flex items-center text-cyan font-bold'>
                <img className='mr-2' src={ethereum || ""} alt="icon" />
                0.041ETH
            </p>
            <p className='flex items-center text-softBlue md:font-bold'>
                <img className='mr-2' src={clock || ""} alt="icon" />
                3 days left
            </p>
        </div>

        <div className='flex items-center my-3'>
            <img className='w-8 h-8 md:w-10 md:h-10 rounded-full border border-newWhite mr-3' src={avatar || ""} alt="avatar" />
            <p className='text-softBlue text-sm md:text-lg'>Creation of <span className='text-newWhite hover:text-cyan'>Jules Wyvern</span></p>
        </div>
    </div>
  )
}
