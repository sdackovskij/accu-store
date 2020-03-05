import React from 'react';
import PropTypes from 'prop-types';
import Card from '../ViewComponents/Card';
import LoadMore from '../ViewComponents/LoadMore';
import Loading from '../ViewComponents/Loading';

export const FIRST_LOAD = 8;

class Content extends React.Component {
  componentDidMount() {
    const { axiosData, resetPage } = this.props;
    resetPage();
    axiosData(FIRST_LOAD);
  }

  render() {
    const {
      pokemons,
      loading,
      axiosData,
      onCurentPage,
      isActiveLoadMore,
      total,
      endOfList,
      addToMyPokedex,
    } = this.props;
    return (
      <div>
        {pokemons.map((card) => (
          <Card
            key={card.id}
            pokemon={card}
            srcImg={`http://localhost:3000/pokemons/${card.id}.png`}
            add={addToMyPokedex}
          />
        ))}

        {loading ? <Loading /> : null}

        <div className="clearfix" />

        <LoadMore
          axiosData={axiosData}
          onCurentPage={onCurentPage}
          isActiveLoadMore={isActiveLoadMore}
          total={total}
          endOfList={endOfList}
        />
      </div>
    );
  }
}

Content.propTypes = {
  total: PropTypes.string.isRequired,
  endOfList: PropTypes.string.isRequired,
  onCurentPage: PropTypes.number.isRequired,
  isActiveLoadMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  addToMyPokedex: PropTypes.func,
  axiosData: PropTypes.func.isRequired,
  resetPage: PropTypes.func.isRequired,
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      date: PropTypes.date,
      isMy: PropTypes.bool,
    }),
  ).isRequired,
};

export default Content;
