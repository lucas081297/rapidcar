import { Component, OnInit } from '@angular/core';
import { stores } from 'src/data/stores';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  stores:any = stores
  storesStates: Array<string> = []
  selectState:string = 'SP'

  ngOnInit(): void {
    stores.map(store => {
      this.storesStates.includes(store.state)
      ? ''
      : this.storesStates.push(store.state)
    }
  )

  }

  changeState(state:any) {
    //console.log(state.value)
    this.selectState = state.value
  }
}
