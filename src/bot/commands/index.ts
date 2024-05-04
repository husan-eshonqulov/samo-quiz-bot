import Commands from '../../types/commands';
import start from './start';
import test from './test';

const commands: Commands = [
  {
    command: 'start',
    description: 'start command',
    method: start
  },
  {
    command: 'test',
    description: 'test command',
    method: test
  }
];

export default commands;
