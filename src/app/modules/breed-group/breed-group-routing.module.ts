import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BreedGroupComponent } from "./breed-group.component";

const routes: Routes = [
    {
        path: '',
        component: BreedGroupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BreedGroupRoutingModule { }