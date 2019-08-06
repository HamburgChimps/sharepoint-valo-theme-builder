#!/usr/bin/env node

import extract from './extract';
import build from './build';

export const commands = {
  extract,
  build,
};

export default function main() {
  const command = process.argv[2];
  const themeFilePath = process.argv[3];
  commands[command as keyof typeof commands](themeFilePath);
}

if (require.main === module) {
  main();
}
