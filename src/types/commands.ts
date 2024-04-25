import Command from './command';

type Commands = {
  [name: string]: {
    command: string;
    description: string;
    method: Command;
  };
};

export default Commands;
