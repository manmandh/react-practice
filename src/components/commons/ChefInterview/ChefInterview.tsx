import { SocialIcon, socialMediaIcons } from '../Header/Header'
import direction from '~/assets/images/direction.png'

export const ChefInterview = () => {
  return (
    <div className='px-[110px] bg-white mb-10 pt-[60px]'>
      <div className='flex flex-col lg:flex-row'>
        {/* Left Content: Questions */}
        <div className='flex-1 space-y-8 pr-8'>
          {/* Question 1 */}
          <div className='px-[40px]'>
            <h2 className='text-2xl font-bold text-gray-800'>How did you start out in the food industry?</h2>
            <p className='mt-2 text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
              at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
              mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>
          </div>

          {/* Question 2 */}
          <div className='px-[40px]'>
            <h2 className='text-2xl font-bold text-gray-800'>What do you like most about your job?</h2>
            <p className='mt-2 text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
              at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
              mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>
          </div>

          {/* Question 3 */}
          <div className='px-[40px]'>
            <h2 className='text-2xl font-bold text-gray-800'>Do you cook at home on your days off?</h2>
            <img src={direction} alt='Cooking at home' className='w-full h-auto mt-4 rounded-md shadow-md' />
            <p className='pt-[32px] text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
              at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
              mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>
          </div>

          <div className='px-[40px]'>
            <h2 className='text-[24px] font-bold'>
              What would your advice be to young people looking to get their foot in the door?
            </h2>
            <p className='pt-[24px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
              at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
              mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>
          </div>

          <div className='px-[4px] py-[48px] text-[36px] italic bg-[rgba(0,0,0,0.05)]'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”
          </div>

          <div className='px-[40px] pt-[60px]'>
            <h2 className='text-[24px] font-bold'>
              What is the biggest misconception that people have about being a professional chef?
            </h2>
            <p className='pt-[24px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
              at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
              mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>
          </div>
        </div>

        {/* Right Content: Share Icons */}
        <div className='flex-none lg:w-[20%] lg:pl-8 mt-8 lg:mt-0 border-l border-gray-300 flex flex-col items-center space-y-4'>
          <span className='block text-gray-800 font-bold mt-4'>SHARE THIS ON:</span>
          <div className='flex flex-col gap-[30px]'>
            {socialMediaIcons.map((iconSrc) => (
              <SocialIcon key={iconSrc} iconSrc={iconSrc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
