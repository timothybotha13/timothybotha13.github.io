$('body').on('click', '.ResponseTemplate p', function() {
    GetResponseTemplateFrom($(this));
});

function GetResponseTemplatesContent() {

    let Responses = ResponseTemplateTitles();

    let Output = `
        <p id="ResponseTemplateTitle">
            This will generate an email based on your chosen template. 
        </p>
    `;
    for (let i = 0; i < Responses.length; i++) {

        Output += `
            <div class="ResponseTemplate">
                <p>${Responses[i]}</p>
            </div>
        `;
    }

    return Output;
}

function GetResponseTemplateFrom(Template) {

    let Response = `${IsAfternoon()?'Good afternoon':'Good morning'},\n\n${ResponseTemplates()[$('.ResponseTemplate p').index(Template)]}`;
    SendToClipboard(Response);
}

function ResponseTemplateTitles() {

    let Titles = [
        'Refer to the Ideas Portal',
        'Request steps to replicate',
        'Raising to the developers (suspended)',
        'Raising to the developers (active)',
        'Customer is chasing an update',
        'PID warning',
        'Seven day notification',
        'Seven day closure',
        'Fixed in future version',
        'Closing a slowness case',
        'Slowness first response'
    ];

    return Titles;
}

function ResponseTemplates() {

    let Responses = [
`Our development team have reviewed this issue and advised that [DEV_ADVICE_GOES_HERE].

In this instance, we are requesting that you raise this in the Customer Portal as an Idea. You can visit this by using the following link - 

https://customers.advancedcomputersoftware.com/login 

Please log in, and find your product under the Ideas tab. Once there, you can give details of this case, and our Product Team will review it. 

Since there is no further action that support can take, this ticket will now be closed. Should you have any further questions, please contact our support desk on 03303430067. `,
`Thank you for the information that you have given us so far. We require more detailed steps to replicate this issue. Specifically, could you please advise a step-by-step description as to how (insert thing here)? 

The reason we ask for this is so that we can attempt to replicate the issue exactly as you - or the affected users - have previously done. 

These steps are necessary for this investigation, and without them, we will not be able to investigate effectively. `,
`Please be advised that this is being investigated by our development team. For your reference, the Problem ticket reference is 12345678 and the Development reference is ABVN-1234. 

This incident ticket will now be set to suspended during their investigation, though rest assured, we are looking into this. Should you have any further questions, please contact the support desk on 03303430067. `,
`Please be advised that this is being investigated by our development team. For your reference, the Problem ticket reference is 12345678 and the Development reference is ABVN-1234. 

This incident ticket will now be set to active during their investigation, though rest assured, we are looking into this. Should you have any further questions, please contact the support desk on 03303430067. `,
`Firstly, please allow me to apologise for the delay in this ticket being handled. This is not representative of our standards and steps are being taken to provide a prompter service. 

This case is still under investigation. You will be notified when we have a more meaningful update. We do appreciate the impact of this, and your patience is greatly appreciated.`,
`Unfortunately, the content of your attachment contravenes our local policy regarding the handling of patient identifiable information and as such we are required to delete it from our systems. Please can I ask that you remove, and re-upload your attachment with any identifiable information either obfuscated or removed.
 
If you have any questions regarding our local data protection policy, please email our clinical governance team at AHCClinicalTeam@oneadvanced.com, who will be more than happy to assist.

For the avoidance of doubt, we cannot accept a patient's name, date of birth, addresses, or gender. We are only allowed to accept NHS numbers and IDs. `,
`This case appears to have been dormant for some time, and it’s likely that it has been resolved, cannot be consistently reproduced, or is no longer an issue. Currently, we are requesting permission to close this case in order to help us operate more efficiently. You can of course open a new case if the issue re-occurs.  

If this case does require additional attention, please let us know, and we will be happy to keep it open and again investigate the matter. 

This case may be closed in 7 days from the date of this email. 

If we receive no feedback from you regarding this issue in 7 days, we will consider that you are happy for us to close the case without further contact. Alternatively, you can reply to this email or call the number below to advise us to close the case immediately OR to let us know that it should remain open. We remain ready to continue our investigation any time at your request. 

If you have an account for our customer support website, you can see the full history of the support case there at https://customers.oneadvanced.com/s/login/?ec=302&startURL=%2Fs%2F

How to contact us: You can contact us by replying to this email, or by calling us on 03303430067 (international customers: +44 3303430067) and quoting the reference number above.  We look forward to your reply and will be happy to assist you with any other issues you may have.`,
`We are closing this case as we have not heard from you in an extended period. If you wish to re-open the case, please contact our service desk on 03303430067.`,
`I can advise that a fix for this issue is being released in VERSION.

Given that there may be some delay in your site being able to test the fix, we are requesting your permission to suspend this ticket.

Please note that this ticket will remain open during this period.`,
`We have received several alerts (LATEST ALERT FOR CLOSE) suggesting that the slowness you experienced should be resolved. 

Since we handle all slowness cases on a day-by-day basis, this ticket will now be closed. Should you receive further slowness, please raise a new incident ticket. `,
`Thank you for raising this ticket with the support desk. 

We are currently investigating this drop in performance. Any updates will be provided when we have them. 

We do appreciate the impact that this has for your site, and its users, and we are working to get this resolved in a reasonable timeframe. `
    ];

    return Responses;
}