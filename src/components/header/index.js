import { h, Component } from "preact";
import { Link } from "preact-router/match";
import styled from "styled-components";
import Logo from "../../svg/Logo";

const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  color: #b2b2b2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;

  svg {
    fill: #86dc2f;
  }

  nav {
    a {
      margin-top: 50px;
      display: inline-block;
      background: #4f97d7;
      color: #fff;
      padding: 8px 16px;
      border-radius: 4px;
      text-decoration: none;
    }
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        {false && <nav>
          <Link activeClassName="active" href="/">
            Install
          </Link>
        </nav>}
      </Wrapper>
    );
  }
}
