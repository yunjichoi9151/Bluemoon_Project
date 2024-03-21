import styled from 'styled-components';

interface FunctionDetailProps {
  color?: string;
  location?: string;
}

export const FunctionDetail = styled.div<FunctionDetailProps>`
  color: ${(props) => props.color || 'var(--white)'};
  background-color: transparent;
  padding: auto;
  display: flex;
  align-items: center;
`;
