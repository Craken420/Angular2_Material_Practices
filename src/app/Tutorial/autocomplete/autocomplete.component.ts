import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }
  options: string[] = ['AngularJs', 'ReactJs', 'VueJs'];
  objectOptions = [
    { name: 'AngularJs'},
    { name: 'AngularMaterial'},
    { name: 'ReactJs'},
    { name: 'VueJs'},
  ];
  myCtrl = new FormControl();
  filteredOptions: Observable<string []>;


  displayFn(subject) {
    return subject ? subject.name : undefined
  };

  ngOnInit() {
    this.filteredOptions = this.myCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  };

  private _filter(value: string): string[] {
    const silterValue = value.toLocaleLowerCase();
    return this.options.filter(option => option.toLocaleLowerCase().includes(value))
  }

}
