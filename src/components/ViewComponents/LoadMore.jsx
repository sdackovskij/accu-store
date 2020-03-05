import React from 'react';
import '../../style/scss/Card.scss';
import PropTypes from 'prop-types';

const LoadMore = ({
  endOfList,
  axiosData,
  isActiveLoadMore,
  total,
  onCurentPage,
}) => (
  <div className="center-align footer">
    <button
      type="button"
      className={`waves-effect waves-light btn-large red ${endOfList}`}
      onClick={() => {
        axiosData(onCurentPage);
        isActiveLoadMore(total, onCurentPage);
      }}
    >
      Load more
    </button>
  </div>
);

LoadMore.propTypes = {
  total: PropTypes.string.isRequired,
  endOfList: PropTypes.string.isRequired,
  onCurentPage: PropTypes.number.isRequired,
  isActiveLoadMore: PropTypes.func.isRequired,
  axiosData: PropTypes.func.isRequired,
};


export default LoadMore;
