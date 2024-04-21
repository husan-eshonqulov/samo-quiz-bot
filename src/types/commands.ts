import Command from './command';

type Commands = {
  [name: string]: {
    title: string;
    command: Command;
  };
};

export default Commands;
