import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';

import { SortFields, SortDirections } from '_constants';

import SimpleArrow from '_components/SimpleArrow';

import styles from './Sorting.scss';

@CSSModules(styles, { allowMultiple: true })
class Sorting extends PureComponent {
  handleClick = (field) => {
    const { sortField, changeSortField } = this.props;
    if (sortField !== field) {
      changeSortField(field);
    }
  }

  sortDirectionChange = () => {
    const { changeSortDirection, sortDirection } = this.props;

    const direction = SortDirections.asc === sortDirection ?
      SortDirections.desc : SortDirections.asc;

    changeSortDirection(direction);
  }

  render() {
    const { className, sortField, sortDirection } = this.props;

    const arrowDirection = SortDirections.asc === sortDirection ?
      'bottom' : 'top';

    return (
      <div className={className} styleName="root">
        <div styleName="wrapper">
          <h4 styleName="title">
            Sort by:
          </h4>
          {SortFields.map((item) => {
            const isActive = sortField === item;

            return (
              <div
                key={item}
                styleName={classnames('item', { isActive })}
                onClick={() => { this.handleClick(item); }}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div
          styleName="arrowWrap"
          onClick={this.sortDirectionChange}
        >
          <SimpleArrow
            size="small"
            duration={arrowDirection}
          />
        </div>
      </div>
    );
  }
}

Sorting.propTypes = {
  className: PropTypes.string,
  sortField: PropTypes.string,
  sortDirection: PropTypes.string,
  changeSortField: PropTypes.func,
  changeSortDirection: PropTypes.func,
};


export default Sorting;
