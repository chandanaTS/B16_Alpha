import { Routes, RouterModule } from '@angular/router';
import { CartlistComponent } from './cartlist/cartlist.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DummyLoginComponent } from './dummy-login/dummy-login.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
    { path: 'wish_list', component: WishlistComponent },
    { path: 'shopping_cart', component: CartlistComponent },    
    { path: 'login', component: DummyLoginComponent },
    { path: "", component: HomepageComponent}
];
export const appRoutingModule = RouterModule.forRoot(routes);