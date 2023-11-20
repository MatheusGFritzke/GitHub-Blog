import { useEffect, useState } from "react";
import { Perfil } from "../../components/Perfil";
import { Repositories } from "../../components/Repositories";
import { HomeContainer, FullContent, PublicationsContainer, SearchContentContainer, StyledTextInput, RepositoriesContainer } from "./styles";

export function Home() {

  interface RepositoryType {
    name: string
    description: string
    html_url: string
  }

  const [data, setData] = useState<RepositoryType[]>([]);

  useEffect(() => {
    const username = "MatheusGFritzke";

    fetch(`https://api.github.com/users/${username}/repos`) //!todo --> fazer a parte da autenticação pois sem há um limite baixo de requisições.
      .then(response => response.json())
      .then(repositories => {
        console.log("🥶 --> file: index.tsx:22 --> useEffect --> repositories:", repositories)
        const formattedData = repositories.map((repository: RepositoryType) => ({
          name: repository.name,
          description: repository.description,
          html_url: repository.html_url,
        }));

        setData((state) => [...state, ...formattedData]);
      })
      .catch(error => console.error("Erro na requisição:", error));
  }, []);

  return (
    <FullContent>
      <HomeContainer>
        <Perfil />
        <PublicationsContainer>
          Publicações
          <span>6 puplicações</span>
        </PublicationsContainer>

        <SearchContentContainer>
          <StyledTextInput type="text" placeholder="Buscar conteúdo" />
        </SearchContentContainer>
        <RepositoriesContainer>
          <Repositories />
          <Repositories />
          <Repositories />
          <Repositories />
        </RepositoriesContainer>
      </HomeContainer>
    </FullContent>
  )
}