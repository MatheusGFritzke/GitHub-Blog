import styled from "styled-components";

export const RepositoriesContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;
  background: ${(props) => props.theme['gray-400']};
  padding: 2rem;
  overflow: hidden;

  a {
    color: ${(props) => props.theme['white-300']};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;
    max-width: 352px;
    max-height: 140px;
    line-height: 160%;
    
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  span {
    max-width: 16.6875rem;

    color: ${(props) => props.theme['white-100']};

    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }
`

export const HoursComponentContainer = styled.div`
  display: flex;

  color: ${(props) => props.theme['gray-100']};
  font-size: 0.875rem;
  line-height: 160%;
`