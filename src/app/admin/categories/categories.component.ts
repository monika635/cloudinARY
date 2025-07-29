import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../shared/category/category.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [RouterLink,DatePipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {


  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService


  ) {

  }
  ngOnInit(): void {
    this.getAllCategories()
  }



  categories: any[] = []


  getAllCategories() {
    this.spinner.show()
    this.categoryService.allCategories().subscribe((res: any) => {
      this.categories = res
      this.spinner.hide()
      this.toastr.success("Categories Loaded")
    },
      ((err: any) => {
        this.spinner.hide()
        console.log(err);
      })
    )
  }
}
