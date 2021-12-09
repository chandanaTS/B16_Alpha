import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DummyLoginComponent } from './dummy-login/dummy-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartlistComponent } from './cartlist/cartlist.component';

const routes: Routes = [
    { path: 'wish_list', component: WishlistComponent },
    { path: 'shopping_cart', component: CartlistComponent},
    { path: 'login', component: DummyLoginComponent },
    { path: 'homepage', component: HomepageComponent }
];
export const appRoutingModule = RouterModule.forRoot(routes);