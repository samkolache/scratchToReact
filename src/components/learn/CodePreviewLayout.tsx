import React from 'react';
import { Sandpack } from "@codesandbox/sandpack-react";
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";


// Define prop types
interface CodePreviewLayoutProps {
  html?: string;
  css?: string;  
  js?: string;
  react?: string;
}

const CodePreviewLayout: React.FC<CodePreviewLayoutProps> = ({ html, css, js, react }) => {
  return (
    <div>
      {react ? (
      <SandpackProvider
      template="react"
      files={{
        "/App.js": {
          code: react
        },
        "/App.css": {
          code: `
            @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
          `,
        },
      }}
      
    >
      <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
     
      
      ) : (
        <Sandpack
          template="static"
          files={{
            "/index.html": { code: html },
            "/style.css": { code: css },
            "/script.js": { code: js || "" },
          }}
        />
      )}
    </div>
  );
};

export default CodePreviewLayout;
