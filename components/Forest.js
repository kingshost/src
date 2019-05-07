import { PureComponent } from 'react';
import throttle from 'lodash/throttle';

import assetsPath from '../util/assetsPath';

const IMG_WIDTHS = [360, 512, 768, 960, 1280, 1920];
const THROTTLE_INTERVAL_MS = 100;

const BG_SET = IMG_WIDTHS.map(
  w => `${assetsPath}/images/forest-w${w}.jpg ${w}w`
).join(', ');

const computePosition = () => (window.scrollY / (window.innerHeight - document.body.clientHeight)) * 100;

class Forest extends PureComponent {
  state = { position: 0 };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ position: computePosition() });
    window.addEventListener('scroll', this.onWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  onWindowScroll = throttle(() => {
    this.setState({ position: computePosition() });
  }, THROTTLE_INTERVAL_MS);

  setForestRef = (ref) => {
    this.forestRef = ref;
  };

  render() {
    return (
      <div
        ref={this.setForestRef}
        className="forest lazyload"
        style={{
          backgroundImage: `url(${assetsPath}/images/forest-w240.jpg)`,
          backgroundPositionY: `${this.state.position}px`
        }}
        data-bgset={BG_SET}
        data-sizes="auto"
      >
        <style jsx>{`
          .forest {
            position: relative;
            z-index: -1;
            background: top/cover no-repeat;
            transition: background-position ${THROTTLE_INTERVAL_MS}ms linear;
            height: 19vw;
          }
        `}</style>
      </div>
    );
  }
}

export default Forest;
