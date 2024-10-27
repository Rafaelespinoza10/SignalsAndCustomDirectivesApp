import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {


  private _color : string = 'red';
  private _errors?: ValidationErrors| null;

  @Input() public set color(value:string){
      this._color =  value;
      this.setStyle();
  }

  @Input() public set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    console.log(value);
    this.setErrorMessage();
  }

  private htmlElement?: ElementRef<HTMLElement>;
  constructor(private elementRef: ElementRef<HTMLElement>){
    console.log(this.elementRef);
    console.log('constructor de la directiva');
    this.htmlElement = this.elementRef;
    this.htmlElement.nativeElement.innerHTML = 'hola mundo desde la directiva';

  }

  ngOnInit(): void {
      console.log('directiva - onInit')
  }

  setStyle(){
    if(!this.htmlElement ) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }


  setErrorMessage(){
    if(!this.htmlElement) return;

    if(!this._errors){
      this.htmlElement.nativeElement.innerHTML = 'No hay errores';
      return;
    }
    const errors = Object.keys(this._errors);
    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requetido';
      }else if(errors.includes('minlength')){
        const valueErrors = Object.values(this._errors);
        this.htmlElement.nativeElement.innerHTML = `Este campo debe de contener al menos ${valueErrors[0].requiredLength} caracteres`
    }else if(errors.includes('email')){
      this.htmlElement.nativeElement.innerHTML = 'Este campo debe de ser de tipo correo';
    }
  }
}
