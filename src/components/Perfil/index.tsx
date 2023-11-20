import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { PerfilContent, PerfilImage, HeaderContent, Title, GitLink, Biography, Content, FooterContent, Item, GitContent } from "./styles";

export function Perfil() {

  function handleClickOnGit() {
    window.open("https://github.com/MatheusGFritzke", "_blank")
  }

  return (
    <PerfilContent>
      <PerfilImage src="https://avatars.githubusercontent.com/MatheusGFritzke" />
      <Content>
        <HeaderContent>
          <Title>
            Matheus Fritzke
          </Title>
          <GitContent
            onClick={handleClickOnGit}
          >
            <GitLink>
              GITHUB
            </GitLink>
            <ArrowSquareOut size={14} weight="fill" color="#3294F8" />
          </GitContent>
        </HeaderContent>
        <Biography>
          Full Stack WEB developer.
        </Biography>
        <FooterContent>
          <Item>
            <GithubLogo size={16} weight="fill" />
            <span>MatheusGFritzke</span>
          </Item>
          <Item>
            <Buildings size={16} weight="fill" />
            <span>Clinicorp</span>
          </Item>
          <Item>
            <Users size={16} weight="fill" />
            <span>2 seguidores</span>
          </Item>
        </FooterContent>
      </Content>
    </PerfilContent>
  )
}