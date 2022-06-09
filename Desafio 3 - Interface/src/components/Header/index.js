import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
        Home
      </Link>
      {isLoggedIn ? (
        <Link to="/register">
          <FaUserAlt size={24} /> Perfil
        </Link>
      ) : (
        <Link to="/register">
          <FaUserAlt size={24} /> Criar Conta
        </Link>
      )}

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={24} /> Sair
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} /> Entrar
        </Link>
      )}

      {isLoggedIn && <FaCircle title="Online" size={24} color="#66ff33" />}
    </Nav>
  );
}
