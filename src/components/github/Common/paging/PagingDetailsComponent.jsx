import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PagingDetailsComponent extends PureComponent {
    getPageClass(page, currentPage) {
        let className = 'page-container';
        if(page === currentPage) {
            className += ' active';
        } else {
            className += ' inactive';
        }

        return className;
    }
    render() {
        const { page, onPageChangeHandler, currentPage } = this.props;
        return ( 
            <span onClick={() => onPageChangeHandler(page)}
                className={this.getPageClass(page, currentPage)}>
                <span>{ page }</span>
            </span>
        );
    }
}

PagingDetailsComponent.propTypes = {
    page: PropTypes.number.isRequired,
    onPageChangeHandler: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};
 
export default PagingDetailsComponent;