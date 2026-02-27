import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ExampleDownloadSection({
  exampleDir,
  zipUrl = 'downloads/example.zip',
  title = 'Download and run locally',
}) {
  const downloadHref = useBaseUrl(zipUrl);

  return (
    <>
      <h2>{title}</h2>
      <p>
        Download this example ZIP, then open the{' '}
        {exampleDir ? <code>{exampleDir}</code> : 'example'} folder to run it
        locally inside the project.
      </p>
      <a
        className="button button--primary"
        href={downloadHref}
        target="_blank"
        rel="noopener noreferrer">
        Download project ZIP
      </a>
    </>
  );
}

