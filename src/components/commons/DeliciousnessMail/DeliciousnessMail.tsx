import BackgroundMail from '~/assets/images/deliciousness-mail.png';
import { ViewRecipesButton } from '~/components/elements/Button/Button';

export const DeliciousnessMail = () => {
  return (
    <div className="mx-8">
      <div
        className="flex flex-col items-center justify-center text-center p-6 md:p-12"
        style={{
          backgroundImage: `url(${BackgroundMail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Deliciousness to your inbox
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquot enim ad minim.
        </p>
        <div className="flex items-center bg-white p-2 rounded-[16px] shadow-lg max-w-md w-full max-custom-500:block">
          <input
            type="email"
            placeholder="Your email address..."
            className="flex-grow px-4 py-2 text-sm outline-none rounded-l-full"
          />
          <ViewRecipesButton showIcon={false}>Subscribe</ViewRecipesButton>
        </div>
      </div>
    </div>
  );
};
