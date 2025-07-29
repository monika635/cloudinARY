import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { HomeComponent } from './customer/home/home.component';
import { AboutComponent } from './customer/about/about.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AddCategoryComponent } from './admin/categories/add-category/add-category.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [


    {
        path: "", redirectTo: '/home', pathMatch: "full"
    },

    {
        path: "login", component: LoginComponent
    },
    {
        path: "", component: CustomerLayoutComponent, children: [
            {
                path: "home", component: HomeComponent
            },
            {
                path: "about", component: AboutComponent
            },
            {
                path: "register", component: RegisterComponent
            }

        ]
    },


    {
        path: "admin", component: AdminLayoutComponent, children: [
            {
                path: "dashboard", component: DashboardComponent
            },
            {
                path: "category/manage", component: CategoriesComponent
            },
            {
                path: "category/add", component: AddCategoryComponent
            }
        ]
    }

];
