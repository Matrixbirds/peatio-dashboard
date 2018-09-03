import Route from '@ember/routing/route';
import Setting from '../models/setting';

export default Route.extend({
  model () {
    return Setting;
  }
});
