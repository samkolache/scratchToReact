import React from 'react';

interface ResourceLinksProps {
  resources: React.ReactNode[];
}

const ResourceLinks: React.FC<ResourceLinksProps> = ({ resources }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold">Resources</h3>
      <ul className="list-disc pl-6 max-w-4xl">
        {resources?.map((resource, index) => (
          <li className="mt-2" key={index}>{resource}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceLinks;