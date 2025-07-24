import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsPageComponent } from "./details-page/details-page.component";
import { DetailsPageRoutingModule } from "./details-page-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button"
import { ConvertTimePipe } from "../shared/pipes/convert-time/convert-time.pipe";

@NgModule({
    declarations: [DetailsPageComponent],
    imports: [
    CommonModule,
    SharedModule,
    DetailsPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    ConvertTimePipe
],
    exports: [DetailsPageComponent]
})
export class DetailsPageModule {}