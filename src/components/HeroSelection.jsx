import React from 'react';
import { connect } from 'react-redux'
import { selectHero } from '../actions/index'
import Helper from '../Helper'

const mapStateToProps = (state) => {
  return state.toJS();
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHeroSelectionClick: (hero) => {
      dispatch(selectHero(hero));
    }
  }
}

let HeroSelection = (props) => {
  return (
    <div id="hero-selection">
      {Object.keys(Helper.HERO_IMAGES).map(hero => {
        return (<img key={hero} className="hero" src={Helper.HERO_IMAGES[hero]} onClick={() => props.onHeroSelectionClick(hero) }/>)})
      }
    </div>
  );
};

HeroSelection = connect(null, mapDispatchToProps)(HeroSelection);

export default HeroSelection;
