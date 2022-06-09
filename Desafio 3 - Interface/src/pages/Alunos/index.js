import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEnvelope, FaPlusSquare } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import { Card, AlunoContainer, ProfilePicture, NovoAluno, HomeContainer } from './styled';

import axios from '../../services/axios';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }

      setIsLoading(false);
    }
  };

  const handleDeleteIntermediate = (e, id, index) => {
    e.preventDefault();
    handleDelete(e, id, index);
  };

  return (
    <HomeContainer>
      <Loading isLoading={isLoading} />

      <h1>
        Alunos <IoIosSchool />
      </h1>

      {isLoggedIn ? (
        <>
          <NovoAluno>
            <Link className="btn draw-border" to="/aluno/">
              <FaPlusSquare />
            </Link>
          </NovoAluno>
          <AlunoContainer>
            {alunos.map((aluno, index) => (
              <div key={String(aluno.id)}>
                <Card>
                  <ProfilePicture>
                    {get(aluno, 'Fotos[0].url', false) ? (
                      <img src={aluno.Fotos[0].url} alt="Foto de Perfil" className="card__image" />
                    ) : (
                      <FaUserCircle className="card__image" size={36} />
                    )}
                  </ProfilePicture>
                  <p className="card__name">{aluno.nome}</p>
                  <ul className="social-icons">
                    <li>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <Link
                        title={aluno.email}
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `mailto:${aluno.email}`;
                        }}
                      >
                        <FaEnvelope className="social-icon" />
                      </Link>
                    </li>
                  </ul>
                  <Link className="btn draw-border" to={`/aluno/${aluno.id}/edit`}>
                    Editar
                  </Link>
                  <Link
                    className="btn draw-border"
                    onClick={(e) => handleDeleteIntermediate(e, aluno.id, index)}
                    to={`/aluno/${aluno.id}/delete`}
                  >
                    Excluir
                  </Link>
                </Card>
              </div>
            ))}
          </AlunoContainer>
        </>
      ) : (
        <AlunoContainer>
          <h2>Precisa fazer login para visualizar os alunos.</h2>
        </AlunoContainer>
      )}
    </HomeContainer>
  );
}
