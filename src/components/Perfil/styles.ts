import styled from "styled-components";

export const PerfilContent = styled.div`
  width: 54rem;
  height: 13.25rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  border-radius: 10px;
  background: ${(props) => props.theme['gray-500']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  margin-top: -5.5rem;
  padding: 2rem;
`

export const PerfilImage = styled.img`
  height: 9.25rem;
  border-radius: 8px;
  margin-right: 2rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FooterContent = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  span {
    color: ${(props) => props.theme['white-200']};
    font-family: Nunito;
    line-height: 160%;
  }
`

export const Title = styled.span`
  color: ${(props) => props.theme['white-100']};

  font-family: Nunito;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
`
export const GitLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme['blue-100']};
  font-weight: bold;
  gap: 8px;
  font-size: 0.75rem;
  margin-top: 2.5px;

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme['blue-100']};
  }
`

export const Biography = styled.span`
  color: ${(props) => props.theme['white-300']};

  font-family: Nunito;
  line-height: 160%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Item = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const GitContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`