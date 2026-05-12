import test from 'node:test';
import assert from 'node:assert/strict';
import { parseWarningsAtom } from '../lib/arso/warnings.ts';
import { parseForecastHtml } from '../lib/arso/forecasts.ts';

test('parseForecastHtml extracts blocks', () => {
  const html = '<h2>Danes</h2><p>Sončno.</p>';
  const out = parseForecastHtml(html);
  assert.equal(out[0].title, 'Danes');
});

test('parseWarningsAtom extracts events', () => {
  const xml = '<feed><title>Opozorila</title><entry><title>Nevihta</title><summary>Možni nalivi</summary></entry></feed>';
  const out = parseWarningsAtom(xml);
  assert.equal(out[0].event, 'Nevihta');
});
