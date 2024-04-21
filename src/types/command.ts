import MyContext from './context';

type Command = (ctx: MyContext) => Promise<void>;

export default Command;
