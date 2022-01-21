import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { UserIndexComponent } from "./javascript/hello_angular/app/index.component";

const appRoutes: Routes = [
  { path: "users", component: UserIndexComponent },
  { path: "", redirectTo: "/users", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}