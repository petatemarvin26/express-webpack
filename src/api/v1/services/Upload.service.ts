import {AbsService} from '@/common/abstract';
import {Handler, Methods} from '@/common/types/api';

export class UploadService extends AbsService {
  public endpoint: string = '/';
  public method: Methods = 'post';
  public handler: Handler = (req, res) => {
    res.status(200).json({
      message: 'Upload Service!'
    });
  };
}
