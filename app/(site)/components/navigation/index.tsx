import Nav from "./nav";
import { navbar2 } from "./navbar2";
import Footer from "./Footer";

export const navs = {
  "nav.1": Nav,
  "nav.2": navbar2,
  "block.footer": Footer,
};

export function NavRenderer(props: { nav: any }) {
  // @ts-ignore

  const Nav = navs[props.nav._type];

  if (!Nav) {
    return null;
  }

  return <Nav {...props.nav} />;
}
