import { NgModule } from "@angular/core";
import { StopPropagationDirective } from "./stop-propagation.directive";
import { ToolTipDirective } from './tool-tip.directive';

@NgModule({
    
    declarations: [
        StopPropagationDirective,
        ToolTipDirective,
    ],
    exports: [
        StopPropagationDirective,
        ToolTipDirective,
    ]

})
export class ApplicationDirectivesModule {}