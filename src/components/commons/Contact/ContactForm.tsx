import React from 'react';
import { ViewRecipesButton } from '~/components/elements/Button/Button';
import chef from '~/assets/images/contact.png';
import InputField from '~/components/elements/Input/InputField';
import SelectField from '~/components/elements/SelectField/SelectField';

export const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-8 min-h-screen bg-white">
      <h1 className="text-4xl font-primary-600 font-bold mb-10">Contact us</h1>
      <div className="flex flex-wrap items-start justify-between gap-10">

        {/* Image */}
        <div className="w-1/4">
          <img
            src={chef}
            alt="Chef"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Form */}
        <form className="w-2/3 max-w-lg space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Name */}
            <InputField label="Name" type="text" placeholder="Enter your name..." />

            {/* Email Address */}
            <InputField label="Email Address" type="email" placeholder="Your email address..." />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Subject */}
            <InputField label="Subject" type="text" placeholder="Enter subject..." />

            {/* Enquiry Type */}
            <SelectField label="Enquiry Type" options={['Advertising', 'Feedback', 'Support']} />
          </div>

          {/* Messages */}
          <InputField label="Messages" type="textarea" placeholder="Enter your messages..." rows={4} />

          {/* Submit Button */}
          <ViewRecipesButton showIcon={false}>Submit</ViewRecipesButton>
        </form>
      </div>
    </div>
  );
};
