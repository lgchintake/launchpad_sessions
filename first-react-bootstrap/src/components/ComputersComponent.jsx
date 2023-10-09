import { MenuComponent } from "./base-components/MenuComponent";
import { NavbarComonent } from "./base-components/NavbarComponent";

export const ComputerComponent = ()=>{
    return (
        <>
          <NavbarComonent />
          <div className="row partation">
            <MenuComponent />
            <div className="col-md-10 main-area">Computer section</div>
          </div>
        </>
      );
}