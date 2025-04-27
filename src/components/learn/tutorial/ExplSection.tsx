import React from 'react';
import clsx from 'clsx';

interface ExplanationSectionProps {
  title: string;
  tips: string[] | React.ReactNode[];
  isReact?: boolean;
  type: 'html' | 'css' | 'js';
}

const ExplanationSection: React.FC<ExplanationSectionProps> = ({ 
  title, 
  tips, 
  isReact = false,
  type 
}) => {
  const getTitleClass = () => {
    if (type === 'html') {
      return isReact ? 'text-brandLightBlue' : 'text-brandOrange';
    } else if (type === 'css') {
      return isReact ? 'text-[#38BDF8]' : 'text-brandBlue';
    } else if (type === 'js') {
      return 'text-brandYellow';
    }
    return '';
  };

  return (
    <div className="mb-6">
      <h3 className={clsx('text-2xl font-semibold', getTitleClass())}>
        {title}
      </h3>
      <ul className="list-disc pl-6 max-w-4xl">
        {tips?.map((tip, index) => (
          <li className="mt-2" key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExplanationSection;