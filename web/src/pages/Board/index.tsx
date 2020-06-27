import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import './styles.css';

interface Message {
  id: number;
  content: string;
  user: {
    email: string;
  };
}

const GET_ALL_MESSAGES = gql`
  query {
    getMessages {
      id
      content
      user {
        email
      }
    }
  }
`;

const Board: React.FC = () => {
  const { loading, data } = useQuery<{ getMessages: Message[] }>(
    GET_ALL_MESSAGES
  );

  if (loading) return <p>Loading ...</p>;

  return (
    <ul className="container">
      {data?.getMessages.map((message) => (
        <li key={message.id} className="message">
          <p>{message.content}</p>

          <span>{message.user.email}</span>
        </li>
      ))}
    </ul>
  );
};

export default Board;
