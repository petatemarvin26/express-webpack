import {AbsService} from '@/common/abstract';
import {Handler, Methods} from '@/common/types/api';
import {ChatModel} from '@/database/models/Chat';
import {_eq} from 'vin-pg-orm';

export class AskService extends AbsService {
  public endpoint: string = '/';
  public method: Methods = 'post';
  public handler: Handler = async (req, res) => {
    try {
      const chatmodel = await ChatModel.select().where(_eq('id', 1)).many();
      res.status(200).json({
        result: chatmodel
      });
    } catch (err) {
      res.status(400).json({
        message: String(err)
      });
    }
  };
}
