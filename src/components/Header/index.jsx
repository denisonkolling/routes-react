import { Container, HeaderItem, HeaderLink, HeaderLogoLink, RightItems, HeaderText } from "./styles";
import { FaRoute } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { FaRightFromBracket, FaUser } from "react-icons/fa6";

const Header = () => {
  const { logOut, customer } = useAuth();

  return (
    <Container>
      <HeaderItem>
        <HeaderLogoLink>
          {" "}
          <FaRoute />
          &nbsp; Trail Routes
        </HeaderLogoLink>
      </HeaderItem>
      <RightItems>
        <HeaderItem>
          <HeaderLink to="/user-profile">
            <FaUser />
            <HeaderText>&nbsp;{customer?.username}</HeaderText>
          </HeaderLink>
        </HeaderItem>
        <HeaderItem>
          <HeaderLink to="/signin" onClick={logOut}>
            <FaRightFromBracket />
            <HeaderText>&nbsp;Logout</HeaderText>
          </HeaderLink>
        </HeaderItem>
      </RightItems>
    </Container>
  );
};

export default Header;
