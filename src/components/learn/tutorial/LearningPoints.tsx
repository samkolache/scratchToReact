import React from 'react';

interface LearningPointsProps {
  points: string[] | React.ReactNode[];
}

const LearningPoints: React.FC<LearningPointsProps> = ({ points }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold">What you'll learn</h2>
      <ul className="list-disc pl-6 pt-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default LearningPoints;