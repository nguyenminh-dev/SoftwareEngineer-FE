import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  searchForm = this.formBuilder.group({
    searchValue: ''
  });
  ngOnInit(): void {
  }

  onSubmit()
  {
    this.searchEvent.emit(this.searchForm.value.searchValue);
    this.searchForm.reset();
  }
}
