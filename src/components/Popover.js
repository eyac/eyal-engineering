import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { colors } from '../common/styles';

const POPOVERS = { DEFAULT: 'default', TOOLTIP: 'tooltip', MENU: 'menu' };

const createAndShow = (target, element, position, closeOnClickOutside = false, popover = POPOVERS.DEFAULT) => {
  const popoverToRender = <Popover position={position} target={target} popover={popover}
                                   element={element} closeOnClickOutside={closeOnClickOutside}></Popover>;
  const container = document.createElement('span');
  container.className = 'popover-container';
  target.parentNode.insertBefore(container, target);
  ReactDOM.render(popoverToRender, container);
};

export class PopoverManager {

  static POSITIONS = { TOP: 'top', BOTTOM: 'bottom', LEFT: 'left', RIGHT: 'right' };

  static show(target, element, position, closeOnClickOutside, popover) {
    if (!element || !target) {
      return;
    }
    else {
      return !(target.previousElementSibling.className === 'popover-container') ? createAndShow(target, element, position, closeOnClickOutside, popover) : null;
    }
  }

  static showTooltip(target, element, position) {
    createAndShow(target, element, position, true, POPOVERS.TOOLTIP);
  }

  static showMenu(target, element, position, closeOnClickOutside) {
    PopoverManager.show(target, element, position, closeOnClickOutside, POPOVERS.MENU);
  }

  static hide(e) {
    const popover = e.currentTarget.previousElementSibling;
    popover && popover.className === 'popover-container' && popover.remove();
  }
}

export class Popover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      position: 'top',
      offsetTop: 0,
      offsetLeft: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.props.popover !== POPOVERS.TOOLTIP ? window.addEventListener('click', this.onClick) : this.setState({ show: true });
    this.setState({ position: this.props.position });
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    this.props.popover !== POPOVERS.TOOLTIP && window.removeEventListener('click', this.onClick);
  }

  onClick(e) {
    if (!e.defaultPrevented) {
      this.props.target.contains(e.target) ? this.setState({ show: !this.state.show }) : this.props.closeOnClickOutside && this.setState({ show: false });
    }
  }

  updateDimensions() {
    const { target } = this.props;
    this.setState({ topOffset: target.offsetTop + 20 + 'px', leftOffset: target.offsetLeft + 'px' });
  }

  render() {
    const popoverStyle = `popover-data ${this.state.position}`;
    return (
      <Fragment>
        {this.state.show &&
        <div className="popover-wrapper">
          <div className={popoverStyle}>
            {this.props.element}
          </div>
        </div>
        }
        {/*language=CSS*/}
        <style jsx>{`
            .popover-wrapper {
              position: absolute;
              top: ${this.state.topOffset};
              left: ${this.state.leftOffset};
            }
              .popover-data {
                font-family: Avenir,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
                font-weight: 100;
                font-size: 12px;
                position: absolute;
                height: auto;
                padding: 15px 15px;
                width: max-content;
                max-width: 250px;
                height: auto;
                color: ${this.props.popover === POPOVERS.MENU ? colors.gray : colors.white};
                background-color: ${this.props.popover === POPOVERS.MENU ? colors.white : colors.gray};
                border-radius: 4px;
                filter: ${this.props.popover === POPOVERS.MENU ? 'drop-shadow(0 0 1px #000000)' : ''};
               }
              .top{
                bottom: 45px;
                right: -40px;
               }
              .bottom{
              top: 15px;
              right: ${this.props.popover === POPOVERS.MENU ? '-40px' : '-72px'};
             }
              .right{
                bottom: 7px;
                left: 48px;
             }
              .left{
                bottom: 7px;
                right: 26px;
               }
              .top:after  {
                content: "";
                position: absolute;
                bottom: ${this.props.popover === POPOVERS.MENU ? '-15px' : '-18px'};
                right: ${this.props.popover === POPOVERS.MENU ? '17px' : '30px'};
                border-style: solid;
                border-width:  ${this.props.popover === POPOVERS.MENU ? '15px 15px 0 15px' : '20px 0px 0px 30px'};
                border-color: ${this.props.popover === POPOVERS.MENU ? colors.white : colors.gray} transparent;
                display: block;
                }
              .bottom:before  {
                content: "";
                position: absolute;
                top: ${this.props.popover === POPOVERS.MENU ? '-15px' : '-20px'};
                right: ${this.props.popover === POPOVERS.MENU ? '17px' : '30px'};
                border-style: solid;
                border-width: ${this.props.popover === POPOVERS.MENU ? ' 0 15px 15px 15px' : '0px 30px 20px 0px'};
                border-color: ${this.props.popover === POPOVERS.MENU ? colors.white : colors.gray} transparent;
                display: block;
              }
              .right:after  {
                content: "";
                position: absolute;
                bottom: 15px;
                left: -24px;
                border-style: solid;
                border-width: ${this.props.popover === POPOVERS.MENU ? '0px 0 30px 25px' : '0px 0 30px 25px'};
                border-color: ${this.props.popover === POPOVERS.MENU ? colors.white : colors.gray} transparent;
                display: block;
              }
              .left:before  {
              content: "";
              position: absolute;
              bottom: 15px;
              right: -23px;
              border-style: solid;
              border-width: ${this.props.popover === POPOVERS.MENU ? '0px 25px 30px 0' : '0px 25px 30px 0'};
              border-color: ${this.props.popover === POPOVERS.MENU ? colors.white : colors.gray} transparent;
              display: block;
              }
        `}</style>
      </Fragment>
    );
  }
}