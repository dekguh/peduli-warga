import React from 'react'
import IconDotted from '../../../images/step-dot.png'

const StepLine: React.FC = () => {
    return (
        <div className='hidden lg:block p-3'>
            <div className='flex flex-row flex-nowrap'>
                <div className='flex-grow-0 flex-shrink w-4/12 text-center'>
                    <h6>Tahap 1</h6>
                    <img src={IconDotted} alt='icon' className='mx-auto mt-1 relative -bottom-0 transform translate-y-2/4 hover:scale-110 duration-300 cursor-pointer' />
                </div>

                <div className='flex-grow-0 flex-shrink w-4/12 text-center'>
                    <h6>Tahap 2</h6>
                    <img src={IconDotted} alt='icon' className='mx-auto mt-1 relative -bottom-0 transform translate-y-2/4 hover:scale-110 duration-300 cursor-pointer' />
                </div>

                <div className='flex-grow-0 flex-shrink w-4/12 text-center'>
                    <h6>Tahap 3</h6>
                    <img src={IconDotted} alt='icon' className='mx-auto mt-1 relative -bottom-0 transform translate-y-2/4 hover:scale-110 duration-300 cursor-pointer' />
                </div>
            </div>

            <div className='h-1 bg-gray-100 w-full'></div>
        </div>
    )
}

export default StepLine
