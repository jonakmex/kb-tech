import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ExampleDownloadSection({
  exampleDir,
  zipUrl = 'downloads/example.zip',
  title = 'Descargar y ejecutar localmente',
}) {
  const downloadHref = useBaseUrl(zipUrl);

  return (
    <>
      <h2>{title}</h2>
      <p>
        Descarga el ZIP de este ejemplo y luego abre la carpeta{' '}
        {exampleDir ? <code>{exampleDir}</code> : 'del ejemplo'} para ejecutarlo
        localmente dentro del proyecto.
      </p>
      <a
        className="button button--primary"
        href={downloadHref}
        target="_blank"
        rel="noopener noreferrer">
        Descargar ZIP del proyecto
      </a>
    </>
  );
}

