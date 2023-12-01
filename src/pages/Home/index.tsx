import { useEffect, useState } from "react";
import { Perfil } from "../../components/Perfil";
import { Repositories } from "../../components/Repositories";
import { HomeContainer, FullContent, PublicationsContainer, SearchContentContainer, StyledTextInput, RepositoriesContainer } from "./styles";

export function Home() {

  interface RepositoryType {
    name: string
    description: string
    html_url: string
    created_at: string
    language: string
    pushed_at: string
    updated_at: string
  }

  const [data, setData] = useState<RepositoryType[]>([]);
  const [username] = useState("MatheusGFritzke");

  useEffect(() => {
    const localStorageEmpty = !localStorage.getItem("GitHub-blog-repos") || !localStorage.getItem("GitHub-blog-limitDate");

    const limitDateExpired = localStorage.getItem("GitHub-blog-limitDate")
      ? new Date(JSON.parse(localStorage.getItem("GitHub-blog-limitDate")!)) < new Date()
      : false;

    if (localStorageEmpty || limitDateExpired) {
      return fetchData(username);
    }
    else {
      return getData();
    }
  }, []);

  const getData = () => {
    const initialData = localStorage.getItem("GitHub-blog-repos");
    const limitDateExpired = localStorage.getItem("GitHub-blog-limitDate")
      ? new Date(JSON.parse(localStorage.getItem("GitHub-blog-limitDate")!)) < new Date()
      : false;
    if (initialData && !limitDateExpired) {
      const parsedData = JSON.parse(initialData) as RepositoryType[];
      setData(parsedData);
    } else fetchData(username)
  };

  const fetchData = (username: string) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(repositories => {
        const formattedData = repositories.map((repository: RepositoryType) => ({
          name: repository.name,
          description: repository.description,
          html_url: repository.html_url,
          created_at: repository.created_at,
          language: repository.language,
          pushed_at: repository.pushed_at,
          updated_at: repository.updated_at,
        }));

        setData((state) => [...state, ...formattedData]);

        localStorage.setItem("GitHub-blog-repos", JSON.stringify(formattedData));
        const currentDate = new Date();

        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + 1);

        localStorage.setItem("GitHub-blog-limitDate", JSON.stringify(nextDate));
      })
      .catch(error => console.error("Erro na requisição:", error));
  }

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
          {data.map((repo) => (
            <Repositories
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
              created_at={repo.created_at}
              language={repo.language}
              pushed_at={repo.pushed_at}
              updated_at={repo.updated_at}
            />
          ))}
        </RepositoriesContainer>
      </HomeContainer>
    </FullContent>
  )
}