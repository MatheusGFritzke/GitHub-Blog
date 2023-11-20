import { HeaderContainer } from './styles'
import headerImage from '../../assests/header.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerImage} alt="" style={{ width: "100%" }} />
    </HeaderContainer>
  )
}
