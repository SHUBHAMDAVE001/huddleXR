import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


export const MainLayoutRoutes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/page.module').then(m => m.PageModule)
            }
        ]
    }
];


