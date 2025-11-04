import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserHomeComponent } from './modules/user/components/user-home/user-home.component';
import { UserDashboardComponent } from './modules/user/components/user-dashboard/user-dashboard.component';
import { UserComponent } from './modules/user/user.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminHomeComponent } from './modules/admin/components/admin-home/admin-home.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'productList', component: ProductListComponent},
  
  {path: 'user', component: UserComponent,
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {path: 'admin', component: AdminComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },

  {path: 'products',
    // component: ProductListComponent,
    children: [
      {path: 'details/:id', component: ProductDetailComponent},
      {path: 'add', component: ProductAddComponent},
      {path: 'edit/:id', component: ProductAddComponent},
      {path: 'productList', component: ProductListComponent}
      
    ]
  },
  // {path: 'admin', component: AdminComponent},
  // {path: 'adminHome', component: AdminHomeComponent},
  // {path: 'adminDashboard', component: AdminDashboardComponent},

  // {path: 'user', component: UserComponent},
  // {path: 'userHome', component: UserHomeComponent},
  // {path: 'userDashboard', component: UserDashboardComponent},

  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
