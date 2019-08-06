import {
  existsSync
} from 'fs'

import extract from './extract';

describe('extract', () => {
  it('should succesfully extract navigation.css and office-theme.json', () => {
    extract('./test-theme.json');

    expect(existsSync('./navigation.css')).toBe(true);
    expect(existsSync('./office-theme.json')).toBe(true);
  });
});
