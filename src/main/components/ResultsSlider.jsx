import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'

const mockResults = [
  'Drink more water daily.',
  'Reduce sugar intake.',
  'Get 8 hours of sleep.',
  'Exercise at least 30 mins/day.',
]

function ResultsSlider() {
  return (
    <div className="mt-16 mb-10 px-6">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Health Tips for You</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="max-w-sm mx-auto"
      >
        {mockResults.map((tip, i) => (
          <SwiperSlide key={i} className="bg-blue-500 text-white rounded-lg p-6 flex items-center justify-center text-center text-lg">
            {tip}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ResultsSlider
