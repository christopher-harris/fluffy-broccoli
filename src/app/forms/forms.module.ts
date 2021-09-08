import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsRoutingModule} from './forms-routing.module';
import {FormsComponent} from './forms.component';
import {SharedModule} from '../shared/shared/shared.module';
import {InlineSVGModule} from 'ng-inline-svg';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { SingleRadioComponent } from './pages/single-radio/single-radio.component';
import { SingleRadioWithSubjectHeaderComponent } from './pages/single-radio-with-subject-header/single-radio-with-subject-header.component';
import { SingleQuestionOneAnswerComponent } from './pages/single-question-one-answer/single-question-one-answer.component';
import { SingleQuestionMultipleAnswersComponent } from './pages/single-question-multiple-answers/single-question-multiple-answers.component';
import { TextQuestionNoRequirementsComponent } from './pages/text-question-no-requirements/text-question-no-requirements.component';
import { DateQuestionComponent } from './pages/date-question/date-question.component';
import { PhoneQuestionComponent } from './pages/phone-question/phone-question.component';
import { NumericQuestionComponent } from './pages/numeric-question/numeric-question.component';
import { NumericQuestionWithMinMaxComponent } from './pages/numeric-question-with-min-max/numeric-question-with-min-max.component';
import { EmailQuestionComponent } from './pages/email-question/email-question.component';
import { MultiQuestionwithSimilarAnswerTypesComponent } from './pages/multi-questionwith-similar-answer-types/multi-questionwith-similar-answer-types.component';
import { FormsNavComponent } from './shared/forms-nav/forms-nav.component';


@NgModule({
    declarations: [
        FormsComponent,
        ProgressBarComponent,
        SingleRadioComponent,
        SingleRadioWithSubjectHeaderComponent,
        SingleQuestionOneAnswerComponent,
        SingleQuestionMultipleAnswersComponent,
        TextQuestionNoRequirementsComponent,
        DateQuestionComponent,
        PhoneQuestionComponent,
        NumericQuestionComponent,
        NumericQuestionWithMinMaxComponent,
        EmailQuestionComponent,
        MultiQuestionwithSimilarAnswerTypesComponent,
        FormsNavComponent
    ],
    imports: [
        CommonModule,
        FormsRoutingModule,
        SharedModule
    ]
})
export class FormsModule {
}
