import cn from 'classnames';
import { PureComponent } from 'react';
import assetsPath from '../util/assetsPath';

const IMG_WIDTHS = [360, 512, 768, 960, 1280, 1920];
const AWAKE_TIMEOUT = 300;

const getSrcSet = (eyes) =>
  IMG_WIDTHS.map((w) => `${assetsPath}/images/hero${eyes ? '-eyes' : ''}-w${w}.${eyes ? 'png' : 'jpg'} ${w}w`).join(
    ', '
  );

class Hero extends PureComponent {
  state = { awake: false };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ awake: false });
    this.vhareeiTimeout = setTimeout(() => {
      this.setState({ awake: true });
    }, AWAKE_TIMEOUT);
  }

  componentWillUnmount() {
    clearTimeout(this.vhareeiTimeout);
  }

  render() {
    const { awake } = this.state;
    return (
      <div className="container">
        <img
          alt="Kiran"
          className={cn('hero kiran', { awake })}
          src={`${assetsPath}/images/hero-w240.jpg`}
          srcSet={getSrcSet()}
        />
        <img
          alt="Kiran's eyes"
          className={cn('hero eyes', { awake })}
          src={`${assetsPath}/images/hero-eyes-w240.png`}
          srcSet={getSrcSet(true)}
        />
        <style jsx>{`
          .container {
            position: relative;
            z-index: -1;
            height: 38vw;
            overflow: hidden;
          }

          .hero {
            position: absolute;
            width: 100%;
            transform: scale3d(1.2, 1.2, 1);
            transition: opacity 20s 2s linear, transform 20s 2s ease-in-out;
            will-change: transition, transform, opacity, filter;
            &.awake {
              transform: scale3d(1, 1, 1) translate3d(0, -10%, 0);
            }
          }

          .eyes {
            opacity: 0;
            &.awake {
              animation: eyes 8s linear 22s infinite;
              opacity: 1;
            }
          }

          @keyframes eyes {
            from,
            20%,
            40%,
            60%,
            80%,
            to {
              filter: saturate(100%) brightness(1);
            }
            30% {
              filter: saturate(95%) brightness(1.4);
            }
            50% {
              filter: saturate(70%) brightness(0.8);
            }
            70% {
              filter: saturate(85%) brightness(0.9);
            }
            90% {
              filter: saturate(100%) brightness(1.2);
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Hero;
