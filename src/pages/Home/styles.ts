import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FullContent = styled.div`
  display: flex;
  justify-content: center;
`

export const PublicationsContainer = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  margin-top: 4.5rem;
  font-size: 1.125rem;

  font-weight: 700;
  color: ${(props) => props.theme['white-200']};

  span {
    color: ${(props) => props.theme['gray-100']};

    font-family: Nunito;
    font-size: 0.875rem;
    line-height: 160%;
  }

`

export const SearchContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`

export const StyledTextInput = styled.input`
  width: 100%;
  height: 3.125rem;
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  gap: 8px;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  background: ${(props) => props.theme['gray-700']};

  color: ${(props) => props.theme['white-300']};
`
export const RepositoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
