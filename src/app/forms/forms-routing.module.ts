import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsComponent} from './forms.component';
import {SingleQuestionOneAnswerComponent} from './pages/single-question-one-answer/single-question-one-answer.component';
import {FormsNavComponent} from './shared/forms-nav/forms-nav.component';
import {SingleRadioComponent} from './pages/single-radio/single-radio.component';
import {SingleRadioWithSubjectHeaderComponent} from './pages/single-radio-with-subject-header/single-radio-with-subject-header.component';
import {SingleQuestionMultipleAnswersComponent} from './pages/single-question-multiple-answers/single-question-multiple-answers.component';
import {TextQuestionNoRequirementsComponent} from './pages/text-question-no-requirements/text-question-no-requirements.component';
import {DateQuestionComponent} from './pages/date-question/date-question.component';
import {EmailQuestionComponent} from './pages/email-question/email-question.component';
import {MultiQuestionwithSimilarAnswerTypesComponent} from './pages/multi-questionwith-similar-answer-types/multi-questionwith-similar-answer-types.component';
import {NumericQuestionComponent} from './pages/numeric-question/numeric-question.component';
import {NumericQuestionWithMinMaxComponent} from './pages/numeric-question-with-min-max/numeric-question-with-min-max.component';
import {PhoneQuestionComponent} from './pages/phone-question/phone-question.component';

const routes: Routes = [
    {
        path: '',
        component: FormsComponent,
        children: [
            {
                path: '',
                component: FormsNavComponent
            },
            {
                path: 'single-question-one-answer',
                component: SingleQuestionOneAnswerComponent
            },
            {
                path: 'single-radio',
                component: SingleRadioComponent
            },
            {
                path: 'single-radio-with-subject-header',
                component: SingleRadioWithSubjectHeaderComponent
            },
            {
                path: 'single-question-multi-answer',
                component: SingleQuestionMultipleAnswersComponent
            },
            {
                path: 'text-question-no-requirements',
                component: TextQuestionNoRequirementsComponent
            },
            {
                path: 'date-question',
                component: DateQuestionComponent
            },
            {
                path: 'email-question',
                component: EmailQuestionComponent
            },
            {
                path: 'multi-question-with-similar-answer',
                component: MultiQuestionwithSimilarAnswerTypesComponent
            },
            {
                path: 'numeric-question',
                component: NumericQuestionComponent
            },
            {
                path: 'numeric-with-min-max',
                component: NumericQuestionWithMinMaxComponent
            },
            {
                path: 'phone-question',
                component: PhoneQuestionComponent
            },
            {
                path: 'single-radio',
                component: SingleRadioComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRoutingModule {
}
