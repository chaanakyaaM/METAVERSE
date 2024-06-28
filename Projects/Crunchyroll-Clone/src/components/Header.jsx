import { SocialMedia } from "./SocialMedia/SocialMedia";

function Header() {
  return (
    <header>
      <h1>
        <strong>The Anime List</strong>
        <SocialMedia />
      </h1>
    </header>
  );
}

export default Header;
