import {Handler, Methods} from '@/common/types/api';

abstract class AbsService {
  public abstract endpoint: string;
  public abstract method: Methods;
  public abstract handler: Handler;
}

export default AbsService;
