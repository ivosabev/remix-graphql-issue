import {EntryContext} from '@remix-run/node';
import {RemixServer} from '@remix-run/react';
// eslint-disable-next-line import/no-internal-modules
import {renderToString} from 'react-dom/server';

export default function handleRequest(request: Request, responseStatusCode: number, responseHeaders: Headers, remixContext: EntryContext) {
  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(`<!DOCTYPE html>${markup}`, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
