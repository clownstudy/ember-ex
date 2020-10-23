import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

//MapComponent 내의 this.token(getter)에 접근.
// token 접근 시 URL-encode는 중요함.
export default class MapComponent extends Component {
  get token(){
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}

