/**
 * Created by camilo on 26/03/17.
 */
import {EmployersComponent} from "./employers.component";
import {RouterModule} from "@angular/router";
const EMPLOYER_ROUTERS = [
  {path: '', component: EmployersComponent}
];
export const EMPLOYERS_ROUTING = RouterModule.forChild(EMPLOYER_ROUTERS);
