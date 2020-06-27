/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import './styles.css';

export const CREATE_OR_LOGIN_USER = gql`
  mutation($email: String!) {
    createOrLoginUser(data: { email: $email }) {
      id
    }
  }
`;

const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const history = useHistory();

  const [createOrLoginUserMutation, { data }] = useMutation(
    CREATE_OR_LOGIN_USER
  );

  useEffect(() => {
    if (data) {
      const { createOrLoginUser } = data;
      const { id } = createOrLoginUser;

      history.push(`/board?id=${id}`);
    }
  }, [data, history]);

  async function handleRegister(e: React.MouseEvent): Promise<void> {
    e.preventDefault();

    if (input.length < 1) {
      alert('Insert a valid e-mail');
      return;
    }

    createOrLoginUserMutation({ variables: { email: input } });
    setInput('');
  }

  return (
    <div className="container">
      <div className="content">
        <form action="">
          <input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="E-mail"
          />

          <button className="button" type="submit" onClick={handleRegister}>
            <FaCheck size={36} color="#fff" />
            <span>Login or Register</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
