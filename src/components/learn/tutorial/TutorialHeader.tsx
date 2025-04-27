import React from 'react';

interface TutorialHeaderProps {
  title: string;
}

const TutorialHeader: React.FC<TutorialHeaderProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <h1 className="text-5xl font-bold">{title}</h1>
    </div>
  );
};

export default TutorialHeader;