import { session } from 'grammy';
import mongoose from 'mongoose';
import { ISession, MongoDBAdapter } from '@grammyjs/storage-mongodb';

import SessionData from '../types/session';

const sessions = mongoose.connection.collection<ISession>('sessions');

const mySession = session({
  initial: (): SessionData => ({ __language_code: 'en' }),
  storage: new MongoDBAdapter<SessionData>({ collection: sessions })
});

export default mySession;
