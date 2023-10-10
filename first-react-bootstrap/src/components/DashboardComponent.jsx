import { NavbarComonent } from "./base-components/NavbarComponent";
import { MenuComponent } from "./base-components/MenuComponent";

export const DashboardComponent = () => {
  return (
    <>
      <NavbarComonent />
      <div className="row partation">
        <MenuComponent />
        <div className="col-sm main-area">Dashboard Section</div>
      </div>
    </>
  );
};
