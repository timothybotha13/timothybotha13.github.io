$(window).keypress(function(e) {
    
    if (e.which == 56) {

        let CheckBoxes = $('input:checkbox');
        for (let i = 0; i < CheckBoxes.length; i++) {
            if (CheckBoxes.eq(i).prop('checked')) {
                continue;
            }
            else {
                $('input:checkbox').prop('checked', true);
                return;
            }
        }
        
        $('input:checkbox').prop('checked', false);
    }
});

function GatherOutgoingEmailData() {

    let Output = `${IsAfternoon() ? 'Good afternoon' : 'Good morning'},

This case is being investigated by the ${$('#OutgoingEmailProduct').val()} team. 

Thank you for the information you have provided so far. We require the following to continue our investigations. Please try to answer all questions.\n\n`;

    let ChecboxQuestionOutputs = '';
    let CheckboxQuestions = $('.MDSQuestion');
    let CurrentCheckboxQuestion;

    for (let i = 0; i < CheckboxQuestions.length; i++) {

        CurrentCheckboxQuestion = CheckboxQuestions.eq(i);
        if (CurrentCheckboxQuestion.prop('checked')) {
            ChecboxQuestionOutputs += `${CurrentCheckboxQuestion.parent().find('label').text()}\n`;
        }
    }

    Output += `${ChecboxQuestionOutputs}${$('#OutgoingEmailMisc').val() == '' ? '' : $('#OutgoingEmailMisc').val() + '\n'}
Once we have confirmed this information, we can work towards resolving this issue. `;    

    return Output;
}

function IsAfternoon() {

    let Today = new Date();
    let CurrentHours = Today.getHours();

    if (CurrentHours > 11) {
        return true;
    }

    return false;
}

function LoadOutgoingEmailCheckboxElements() {

    let QuestionArray = [
        'When did this start?',
        'Is this affecting all users?',
        'Are you able to replicate this on other machines?',
        'Which browser are you using?',
        'Which environment is this affecting (Live, UAT, Dev etc.)?',
        'Which version is this affecting?',
        'Are you getting any error messages?',
        'What are the steps to replicate this issue? Please be as descriptive as possible.',
        'Could you please provide an example patient?'
    ];

    let LabelArray = [
        'EmailStart',
        'UsersAffected',
        'AffectedMachines',
        'Browser',
        'Environment',
        'Version',
        'ErrorMessages',
        'StepsToReplicate',
        'ExamplePatient'
    ];

    if (QuestionArray.length != LabelArray.length) {
        SendMessageToUI('Error', 'Cannot load MDS questions as the arrays are not the same length.');
        return '';
    }

    let Sample = '';
    let OutputElement = '';

    for (let i = 0; i < QuestionArray.length; i++) {

        Sample = `
            <div class="OutgoingEmailElement">
                <label for="OutgoingEmail${LabelArray[i]}">${QuestionArray[i]}</label>
                <input class="MDSQuestion" type="checkbox" name="OutgoingEmail${LabelArray[i]}" id="OutgoingEmail${LabelArray[i]}" autocomplete="off">
            </div>
        `;

        OutputElement += Sample;
    }

    return OutputElement;
}

function GetOutgoingEmailContent() {

    let Content = `
        <!-- Info -->
        <div class="OutgoingEmailElement">
            <p id="RequestMDSInfo">
                This will generate an email you can use to request MDS from the customer. 
            </p>
        </div>
        <div class="OutgoingEmailElement">
            <p id="RequestMDSWarning">
                Please check the information we already have. Don't ask for the same thing more than once.
            </p>
        </div>
        <!-- Product -->
        <div class="OutgoingEmailElement">
            <label for="OutgoingEmailProduct">Select the appropiate team:</label>
            <input type="text" name="OutgoingEmailProduct" id="OutgoingEmailProduct" list="OutgoingEmailProductList" autocomplete="off">
            <datalist id="OutgoingEmailProductList">
            ${GetProductReferenceData()}
            </datalist>
        </div>
        <!-- MDS questions -->
        ${LoadOutgoingEmailCheckboxElements()}
        <!-- Other -->
        <div class="OutgoingEmailElement OutgoingEmailTextarea">
            <label for="OutgoingEmailMisc">Anything else:</label>
            <textarea name="OutgoingEmailMisc" id="OutgoingEmailMisc" autocomplete="off"></textarea>
        </div>
        <!-- Copy button -->
        <div class="OutgoingEmailElement">
            <button id="OutgoingEmailCopyButton" class="CopyButton">Copy</button>
        </div>
    `;

    return Content;
}