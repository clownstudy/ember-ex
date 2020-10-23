import Component from '@glimmer/component';
import ENV from 'ember-ex/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-11/static';
export default class MapComponent extends Component {
  get src(){
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

//MapComponent 내의 this.token(getter)에 접근.
// token 접근 시 URL-encode는 중요함.
  get token(){
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}

