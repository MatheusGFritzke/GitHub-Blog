import { RepositoriesContainer, Header, HoursComponentContainer } from "./styles";

interface RepositoriesProps {
  name: string
  description: string
  html_url: string
  created_at: string
  language: string
  pushed_at: string
  updated_at: string
}

export function Repositories({
  name,
  description,
  html_url,
  created_at,
  language,
  pushed_at,
  updated_at
}: RepositoriesProps) {

  return (
    <RepositoriesContainer>
      <Header>
        <span>{name}</span>
        <HoursComponentContainer>
          {updated_at}
        </HoursComponentContainer>
      </Header>
      <a>{description}</a>
    </RepositoriesContainer>
  )
}