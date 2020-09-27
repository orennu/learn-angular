import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

/**
 * We define the routes in app-routing module so it will be available throughout the application.
 * We set the array of routes in a const of type Routes.
 * Each route entry is an object containing at least the path and the relevant component.
 * We need to register RouterModule in app module imports and call forRoot with the routes const as an argument.
 * Of course, we need to import Routes, RouterModule and the components.
 */
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id', component: UserComponent }
    ] },
    { path: 'servers', component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component:  EditServerComponent }
    ] },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}