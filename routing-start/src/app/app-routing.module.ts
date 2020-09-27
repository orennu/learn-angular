import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolverService } from "./servers/server/server-resolver.service";
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
    { 
      path: 'servers', 
      // canActivate: [AuthGuardService], // commenting this out to apply AuthGuardService to children only
      canActivateChild: [AuthGuardService],
      component: ServersComponent, 
      children: [
        { path: ':id', component: ServerComponent, resolve: {server: ServerResolverService} },
        { path: ':id/edit', component:  EditServerComponent, canDeactivate: [CanDeactivateGuard] }
      ] 
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true}) // using hash routes for cases where the web server
        // is not returning index.html on 404 for routes that should be handled by angular
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}