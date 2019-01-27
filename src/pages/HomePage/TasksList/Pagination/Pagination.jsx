import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { TASK_PER_PAGE } from '_constants';
import SimpleArrow from '_components/SimpleArrow';

import Item from './Item';

import styles from './Pagination.scss';

const PAGINATION_COUNT = 6;

@CSSModules(styles, { allowMultiple: true })
class Pagination extends PureComponent {
  generatePagination = () => {
    const { currentPage, taskCount } = this.props;

    const lastPage = Math.ceil(taskCount / TASK_PER_PAGE);

    const paginationArr = [];
    const correctStart = currentPage === 1 ? 2 : currentPage;
    const checkOnLast = correctStart >= lastPage - PAGINATION_COUNT ?
      lastPage - PAGINATION_COUNT :
      correctStart;

    for (let index = checkOnLast; index < PAGINATION_COUNT + checkOnLast; index += 1) {
      paginationArr.push(index);
    }

    return paginationArr;
  }

  handleClick = (page) => {
    const { currentPage, taskCount } = this.props;

    const lastPage = Math.ceil(taskCount / TASK_PER_PAGE);

    if (page <= lastPage && page > 0 && page !== currentPage) {
      this.props.changePage(page);
    }
  }

  render() {
    const {
      className,
      currentPage,
      taskCount,
    } = this.props;

    const paginations = this.generatePagination();
    const lastPage = Math.ceil(taskCount / TASK_PER_PAGE);

    return (
      <div className={className} styleName="root">
        <Item
          onClick={() => { this.handleClick(1); }}
        >
          {String(1)}
        </Item>
        <Item
          onClick={() => { this.handleClick(currentPage - 1); }}
        >
          <SimpleArrow
            duration="left"
            size="small"
          />
        </Item>
        {paginations.map(item => (
          <Item
            key={item}
            isActive={currentPage === item}
            onClick={() => { this.handleClick(item); }}
          >
            {String(item)}
          </Item>
        ))}
        <Item
          onClick={() => { this.handleClick(currentPage + 1); }}
        >
          <SimpleArrow
            size="small"
          />
        </Item>
        <Item
          onClick={() => { this.handleClick(lastPage); }}
        >
          {String(lastPage)}
        </Item>
      </div>
    );
  }
}

Pagination.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.number,
  taskCount: PropTypes.number,
  changePage: PropTypes.func,
};


export default Pagination;
