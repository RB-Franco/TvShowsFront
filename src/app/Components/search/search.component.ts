import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

}
