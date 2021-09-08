import React from 'react'
import ProkesBox from '../../atomics/box/ProkesBox'
import IconMasker from '../../../images/icon/prokes/masker.svg'
import IconCuciTangan from '../../../images/icon/prokes/cuci-tangan.svg'
import IconKerumunan from '../../../images/icon/prokes/kerumunan.svg'

const ContentDetail: React.FC = () => {
    return (
        <div className='flex flex-col lg:flex-row flex-nowrap'>
            <div className='flex-grow lg:flex-grow-0 flex-shrink py-3 lg:py-8 px-5 w-full lg:w-4/12'>
                <ProkesBox
                    src={IconMasker}
                    alt='icon masker'
                    title='Memakai Masker'
                    description='Patuthi protokol kesehatan dengan selalu memakai masker kemana saja'
                />
            </div>

            <div className='flex-grow lg:flex-grow-0 flex-shrink py-3 lg:py-8 px-5 w-full lg:w-4/12'>
                <ProkesBox
                    src={IconCuciTangan}
                    alt='icon cuci tangan'
                    title='Cuci Tangan'
                    description='Selalu mencuci tangan dengan sabun dan air yang mengalir'
                />
            </div>

            <div className='flex-grow lg:flex-grow-0 flex-shrink py-3 lg:py-8 px-5 w-full lg:w-4/12'>
                <ProkesBox
                    src={IconKerumunan}
                    alt='icon kerumunan'
                    title='Jaga Jarak'
                    description='Selalu menjaga jarak minimal 1 meter serta menghindari kerumunan'
                />
            </div>
        </div>
    )
}

export default ContentDetail
