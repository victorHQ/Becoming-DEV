import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #07141a;
    color: ${colors.secondDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  input[type=text], input[type=email], input[type=number], input[type=password] {
    font-size: 16px;
    border-color: #cccccc;
    padding: 10px;
    border-width: 3px;
    border-style: solid;
    background-color: #ffffff;
    text-shadow: 0px 0px 0px rgba(42,42,42,.75);
    font-weight: normal;
    font-style: none;
    transition: all 300ms;

    &:focus{
      border-color: #eb196e;
    }
  }

  .draw-border {
    box-shadow: inset 0 0 0 4px #58cdd1;
    color: #58afd1;
    -webkit-transition: color 0.25s 0.0833333333s;
    transition: color 0.25s 0.0833333333s;
    position: relative;
  }

  .draw-border::before,
  .draw-border::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: '';
    pointer-events: none;
    position: absolute;
    width: 0rem;
    height: 0;
    bottom: 0;
    right: 0;
  }

  .draw-border::before {
    border-bottom-width: 4px;
    border-left-width: 4px;
  }

  .draw-border::after {
    border-top-width: 4px;
    border-right-width: 4px;
  }

  .draw-border:hover {
    color: #ffe593;
  }

  .draw-border:hover::before,
  .draw-border:hover::after {
    border-color: #eb196e;
    -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
  }

  .draw-border:hover::before {
    -webkit-transition-delay: 0s, 0s, 0.25s;
    transition-delay: 0s, 0s, 0.25s;
  }

  .draw-border:hover::after {
    -webkit-transition-delay: 0s, 0.25s, 0s;
    transition-delay: 0s, 0.25s, 0s;
  }

  .btn {
    text-align: center;
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 700 1.2rem 'Roboto Slab', sans-serif;
    padding: 0.75em 2em;
    letter-spacing: 0.05rem;
    margin: 1em;
    width: 10rem;
  }

  .btn:focus {
    outline: 2px dotted #55d7dc;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor}
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor}
  }
`;

export const Container = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');

  max-width: 600px;
  margin: 30px auto;
  padding: 60px;

  h1 {
    color: white;
    text-align: center;
    font-size: 3rem;
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  z-index: 999;

  /**
 * ----------------------------------------
 * animation fade-in for MODAL
 * ----------------------------------------
*/

  @keyframes fade-in {
    0% {
      transform: translate3d(0, -30px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  /**
  * ----------------------------------------
  * animation rotate for MODAL
  * ----------------------------------------
  */
  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  .modal-overlay.active {
    opacity: 1;
    visibility: visible;
    animation: fade-in 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .modal {
    background: #0c0d0e;
    padding: 2.4rem;
    border-radius: 0.25rem;
    position: relative;
    z-index: 1;
    border: 3px solid;
    border-image: conic-gradient(from var(--angle), #aa3dce00 15%, #d53abb, #e91e63, #ffc107) 1;
  }

  .modal:hover {
    --angle: 0deg;
    border-image: conic-gradient(from var(--angle), #aa3dce00 15%, #d53abb, #e91e63, #ffc107) 1;
    animation: 10s rotate linear infinite;
  }

  .modal #message {
    color: #e8e6e3;
    max-width: 500px;
  }

  .modal #message h2 {
    margin-top: 0;
    font-size: 2rem;
    text-align: center;
  }

  .modal #message p {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  .modal #message .input-modal {
    margin-top: 1.2rem;
  }

  .modal #message .input-modal.action {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal #message .input-modal.action .button {
    width: 50%;
  }

  .modal #message .input-modal.action .button.confirm {
    color: #7b7b7b;
    text-decoration: none;
    border: 3px #7b7b7b solid;
    background-color: rgba(0, 0, 0, 0.501);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
  }

  .modal #message .input-modal.action .button.confirm:hover {
    border-color: #e8e6e3;
    color: #e8e6e3;
  }

  .modal #message .input-modal.action .button.confirm:hover {
    opacity: 0.8;
  }

  .modal #message .input-modal.action .button.negate {
    color: #7b7b7b;
    text-decoration: none;
    border: 3px #7b7b7b solid;
    background-color: rgba(0, 0, 0, 0.501);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
  }

  .modal #message .input-modal.action .button.negate:hover {
    border-color: #e8e6e3;
    color: #e8e6e3;
  }

  .modal #message .input-modal.action .button.negate:hover {
    opacity: 0.8;
  }
`;
