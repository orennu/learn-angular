import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name?: string};
  paramsSubscription: Subscription;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    /**
     * I didn't like the fact that we have a route scheme of /users/:id/:name
     * It's more common to have just /users/:id so I changed class property users object 
     * to have id property as mandatory (like before) and made the name property optional (with the ? sign)
     * and then created the user object only with id (comming from the route params (snapshot.parmas) at first
     * and then added the name property using a new users service with getUser method (using the id).
     * this was also updated to the subscription so it will be updated afterwards.
     * note the + sign before this.user.id which tells JS that this property is of type number since this.user.id 
     * which is fetched from the route params is a string.
     */
    this.user = {
      id: this.route.snapshot.params['id'],
      // name: this.route.snapshot.params['name']
    };
    // this.user.id = this.route.snapshot.params['id'];
    this.user.name = this.usersService.getUser(+this.user.id).name;
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = this.usersService.getUser(+this.user.id).name;
      // this.user.name = params['name'];
    });
  }

  /**
   * Here we manually unsubscribe from this.route.params Observable which is done by angular so not really needed here.
   * But, if we create our own Observables and subscribe them, angular will not unsubscribe them for us so
   * we will have to unsubscribe them ourselves like in below statement.
   */
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
