// components/learn/tutorial/CodePreview.tsx
import React from 'react';
import CodePreviewLayout from '../CodePreviewLayout';

interface CodePreviewProps {
  html?: string;
  css?: string;
  js?: string;
  react?: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ html, css, js, react }) => {
  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold mb-4">The Code</h2>
      <CodePreviewLayout html={html} css={css} js={js} react={react} />
      <p className="mt-2 text-xs">* If the component preview isn't loading, try refreshing the page.</p>
      <p className="mt-2 text-xs">* You can adjust the size of the code preview and code by dragging the sides!</p>
    </div>
  );
};

export default CodePreview;