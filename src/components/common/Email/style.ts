import styled, { keyframes } from 'styled-components';

export const EmailForm = styled.form`
  min-width: 25rem;
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  /* align-items: center; */
  justify-content: center;
`;

export const EmailTitle = styled.div`
  font: var(--font-heading-xl) Raleway;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
`;

export const EmailLabel = styled.label`
  font: var(--font-label-intermediate) Raleway;
  color: white;
  padding: 0.5rem;
  width: 100%;
`;

export const EmailInput = styled.input`
  font: var(--font-paragraph-medium) Raleway;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
`;

export const EmailArea = styled.textarea`
  font: var(--font-paragraph-medium) Raleway;
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
`;

export const EmailSubmit = styled.input`
  font: var(--font-label-medium) Raleway;
  width: 100%;
  height: 3rem;
  margin: 2rem 0rem 0rem 0rem;
  color: white;
  border-radius: 2rem;
  background: var(--purpleBlue);
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const SubmitResult = styled.div`
  font: var(--font-paragraph-small) Gowun Dodum;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
`;
