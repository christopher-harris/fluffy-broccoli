import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StyleGuideRoutingModule} from './style-guide-routing.module';
import {StyleGuideComponent} from './style-guide.component';
import {BootstrapModule} from '../shared/modules/bootstrap/bootstrap.module';
import { ContentComponent } from './sections/content/content.component';
import { FormsComponent } from './sections/forms/forms.component';
import { ComponentsComponent } from './sections/components/components.component';
import { TypographySectionComponent } from './sections/content/typography-section/typography-section.component';
import { ImagesSectionComponent } from './sections/content/images-section/images-section.component';
import { TablesSectionComponent } from './sections/content/tables-section/tables-section.component';
import { FiguresSectionComponent } from './sections/content/figures-section/figures-section.component';
import { OverviewComponent } from './sections/forms/overview/overview.component';
import { DisabledFormsComponent } from './sections/forms/disabled-forms/disabled-forms.component';
import { SizingComponent } from './sections/forms/sizing/sizing.component';
import {MarkdownModule} from 'ngx-markdown';


@NgModule({
    declarations: [
        StyleGuideComponent,
        ContentComponent,
        FormsComponent,
        ComponentsComponent,
        TypographySectionComponent,
        ImagesSectionComponent,
        TablesSectionComponent,
        FiguresSectionComponent,
        OverviewComponent,
        DisabledFormsComponent,
        SizingComponent
    ],
    imports: [
        CommonModule,
        StyleGuideRoutingModule,
        BootstrapModule,
        MarkdownModule.forChild()
    ]
})
export class StyleGuideModule {
}
