import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public attr = {id: 'one'}

  public onClick(){
    if(this.attr.id === 'one'){
      this.attr= {id:'two'}
    }
    else{
      this.attr= {id:'one'}
    }
  }
}
