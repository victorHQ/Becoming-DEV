import styled from 'styled-components';

export const HomeContainer = styled.section`
  max-width: 1200px;
  margin: 30px auto;
  padding: 60px;

  h1 {
    color: white;
    text-align: center;
    font-size: 3rem;
  }

  h2 {
    margin-top: 20px;
    color: white;
    text-align: center;
  }
`;

export const AlunoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 50px;
`;

export const Card = styled.div`
  border: 1px solid #eb196e;
  padding: 10px;
  box-shadow: 5px 10px #000;
  background-color: #222831;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: white;
  width: 17rem;

  .card__name {
    margin-top: 15px;
    font-size: 1.5em;
  }

  .social-icons {
    padding: 0;
    list-style: none;
    margin: 1em;
  }

  .social-icons li {
    display: inline-block;
    margin: 0.15em;
    position: relative;
    font-size: 1em;
  }

  .social-icon {
    color: #fff;
    position: absolute;
    top: 0.95em;
    left: 0.96em;
    transition: all 265ms ease-out;
  }

  .social-icons a {
    display: flex;
  }

  .social-icons a:before {
    transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    content: ' ';
    width: 45px;
    height: 45px;
    border-radius: 100%;
    display: block;
    background: linear-gradient(45deg, #ff003c, #c648c8);
    transition: all 265ms ease-out;
  }

  .social-icons a:hover:before {
    transform: scale(0);
    transition: all 265ms ease-in;
  }

  .social-icons a:hover i {
    transform: scale(2.2);
    -ms-transform: scale(2.2);
    -webkit-transform: scale(2.2);
    color: #ff003c;
    background: -webkit-linear-gradient(45deg, #ff003c, #c648c8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 265ms ease-in;
  }
`;

export const ProfilePicture = styled.div`
  .card__image {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    border: 5px solid #272133;
    margin-top: 20px;
    box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
  }
`;

export const NovoAluno = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .btn {
    width: initial;
  }
`;

// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import * as colors from '../../config/colors';

// export const AlunoContainer = styled.div`
//   margin-top: 20px;

//   div {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 5px 0;
//   }

//   div + div {
//     border-top: 1px solid #eee;
//   }
// `;

// export const ProfilePicture = styled.div`
//   img {
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//   }
// `;

// export const NovoAluno = styled(Link)`
//   display: block;
//   text-align: center;
//   width: 100px;
//   margin-top: 20px;
//   padding: 10px 0;
//   background: ${colors.primaryColor};
//   border: none;
//   color: #fff;
//   border-radius: 4px;
//   font-weight: 700;
//   -webkit-transition: all 300ms;
//   transition: all 300ms;

//   &:hover {
//     filter: brightness(75%);
//   }
// `;
