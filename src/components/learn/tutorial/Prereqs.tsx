// components/learn/tutorial/Prerequisites.tsx
import React from 'react';

interface PrerequisitesProps {
  items: string[] | React.ReactNode[];
}

const Prerequisites: React.FC<PrerequisitesProps> = ({ items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold">Prerequisites</h2>
      <ul className="list-disc pl-6 pt-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Prerequisites;