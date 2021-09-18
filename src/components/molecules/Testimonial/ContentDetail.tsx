import React from 'react'
import Carousel from 'react-multi-carousel'
import BoxTestimonial from '../../atomics/box/BoxTestimonial'
import { dataTestimonial } from '../../utils/data'

const ContentDetail: React.FC = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1023, min: 768 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
        }
    }

    return (
        <div>
            <Carousel
                responsive={responsive}
                keyBoardControl={false}
                autoPlay={true}
                autoPlaySpeed={5000}
                arrows={false}
                itemClass='px-3 pt-5 pb-7'
                showDots={false}
            >
                {dataTestimonial && dataTestimonial.map(data => (
                    <div key={data.id}>
                        <BoxTestimonial
                            name={data.name}
                            position={data.position}
                            message={data.message}
                            photo={data.photo}
                            totalStar={data.totalStar}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ContentDetail
