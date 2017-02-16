import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import Helper from '../Helper'
import { selectTeamIndex } from '../actions/index'

const mapStateToProps = (state) => {
  return state.toJS();
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTeamMemberClick: (i) => {
      dispatch(selectTeamIndex(i));
    }
  }
}

class Team extends React.Component {
  constructor({props}) {
    super(props);
  }
  render() {
    return (
    <div className="container">
      <div id="myTeam" className="row">
        { this.props.myTeam.members.map((hero, i) => {
          return (
            <img key={i} onClick={() => this.props.onTeamMemberClick(i) } data-selected={i == this.props.myTeam.selected ? true : null} src={Helper.HERO_IMAGES[hero]} className="hero"></img>
        )})}
      </div>
      <div id="otherTeam" className="row">
        { this.props.otherTeam.members.map((hero, i) => {
          return (
            <img key={i} src={Helper.HERO_IMAGES[hero]} className="hero"></img>
        )})}
      </div>
    </div>
  )}
}

Team.propTypes = {
  onTeamMemberClick: PropTypes.func.isRequired,
}

Team = connect(mapStateToProps, mapDispatchToProps)(Team);

export default Team;
