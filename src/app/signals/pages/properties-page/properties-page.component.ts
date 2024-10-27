import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request';

@Component({
  selector: 'signals-properties-page',
  templateUrl: './properties-page.component.html',
  styles: ``
})
export class PropertiesPageComponent {

  public fullName = computed(()=>`${this.user().first_name}  ${this.user().last_name}`)
  public counter = signal(10);
  public userChangeEffect = effect(()=> {
      console.log('use effect change effect trigger');
      console.log( `${this.user().first_name}  -  ${this.counter()}`);
  });

  public user= signal<User>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

    increasedBy(value: number){
        this.counter.update( counter => counter + value);
    }

    onFieldUpdated(field: keyof User, value: string){
      // this.user.set({
      //   ...this.user(),
      //   [field]:value,
      // })

      // this.user.update( current => ({
      //   ...current,
      //   [field] : value
      // }))

      this.user.update(current => {
        switch(field){
          case 'email':
            current.email = value;
            break;
            case 'avatar':
            current.avatar = value;
            break;
            case 'last_name':
            current.last_name = value;
            break;

            case 'first_name':
              current.first_name = value;
              break;

              case 'id':
            current.id = Number(value);
            break;
        }
        return current
      })
     }
}
