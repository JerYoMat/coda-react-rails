import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import Loading from '../misc/Loading';
import { addFavorite, removeFavorite } from '../../actions';

const FavoriteButton = ({  companyId, user, favorite, addFavorite, removeFavorite, loading }) => {
  
  if (!user) {
    return <Link to={'../../login'} className='favorite-button'><span>Log in to add</span></Link>
  }
  if (loading) {
    return <Loading className='favoriteButton' />
  }
  if (!favorite) {
    return <FontAwesomeIcon icon={faPlus} className='favorite-button' size='lg' onClick={() => addFavorite(companyId)} />
  }
  return <FontAwesomeIcon icon={faCheck} className='favorite-button' size='lg' onClick={() => removeFavorite(favorite)}/>
}

const mapState = (state, ownProps) => {
  const companyId = parseInt(ownProps.companyId, 10);
  return { 
    user: state.user.info,
    favorite: state.user.favorites[companyId],
    loading: state.user.syncingFavorites
  }
}
const mapDispatch = { addFavorite, removeFavorite }


export default connect(mapState, mapDispatch)(FavoriteButton)



