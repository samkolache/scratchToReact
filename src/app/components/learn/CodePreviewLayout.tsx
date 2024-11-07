import React from 'react';
import { Sandpack } from "@codesandbox/sandpack-react";

// Define prop types
interface CodePreviewLayoutProps {
  html: string;
  css: string;
  js?: string; // Mark `js` as optional
}

const CodePreviewLayout: React.FC<CodePreviewLayoutProps> = ({ html, css, js }) => {
  return (
    <div>
      <Sandpack 
        template="static"
        files={{
          "/index.html": { code: html },
          "/style.css": { code: css },
          "/script.js": { code: js || '' } // Use an empty string if `js` is not provided
        }}
      />
    </div>
  );
};

export default CodePreviewLayout;
