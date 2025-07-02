import HeaderBar from './HeaderBar';

export default function Header() {
  return (
    <HeaderBar>
      <HeaderBar.Logo />
      <HeaderBar.Navbar>
        <HeaderBar.NavItem label="학생1" path="stu1" />
        <HeaderBar.NavItem label="학생2" path="stu2" />
        <HeaderBar.NavItem label="학생3" path="stu3" />
        <HeaderBar.NavItem label="학생4" path="stu4" />
      </HeaderBar.Navbar>
      <HeaderBar.MenuIcon />
    </HeaderBar>
  );
}
