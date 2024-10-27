import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'signal-user-info-page',
  templateUrl: './user-info-page.component.html',
  styles: ``
})
export class UserInfoPageComponent implements OnInit{

  private userService = inject(UserService);
  public userId = signal(1);

  public currentUser = signal<User|undefined>(undefined);
  public userWasFound = signal(true);
  public fullName = computed<string>(() => {
      if(!this.currentUser()) return 'user not found';
      return `${this.currentUser()!.first_name } ${this.currentUser()?.last_name}`
   });

   public email = computed<string>(() =>{
    if(!this.currentUser()) return 'email not found';
    return`${this.currentUser()!.email}`;
  });


  ngOnInit(): void {
      this.loadUser(this.userId());
  }

  loadUser(id: number){
      if(id <= 0) return;
      this.userId.set(id);
      this.currentUser.set(undefined)

      this.userService.getUserById(id)
      .pipe(
        debounceTime(50)
      )
      .subscribe({
        next: (user) => {
          this.currentUser.set(user);
          this.userWasFound.set(true);
        },
        error: () => {
          this.currentUser.set(undefined);
          this.userWasFound.set(false);
        }
      })
  }
}
