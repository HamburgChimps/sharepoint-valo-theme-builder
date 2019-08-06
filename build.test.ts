import {
  existsSync
} from 'fs'

import build from './build';

describe('build', () => {
  it('should succesfully build theme.json using navigation.css and office-theme.json', () => {
    build('./test-theme.json');

    expect(existsSync('./navigation.css')).toBe(false);
    expect(existsSync('./office-theme.json')).toBe(false);
  });
});
