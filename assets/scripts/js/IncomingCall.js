$(document).ready(() => {
    LoadMenuItemContent(GetIncomingCallContent());
    CheckForUsername();
});

function CheckForUsername() {

    if (GetUsername() == 'Change Me') {
        SendMessageToUI('Info', `Click the "Change Me" link.`);
    }
}

function GatherIncomingCallData() {

    let OutputString = '';
    let Inputs = $('input');
    let Textareas = $('textarea');
    let TotalObjects = Inputs.add(Textareas);

    for (let i = 0; i < TotalObjects.length; i++) {
        OutputString += `${TotalObjects.eq(i).parent().find('label').data('out')}: ${TotalObjects.eq(i).val()}\n`;
    }

    return OutputString;
}

function GetProductReferenceData() {

    let ReferenceData = `
        <option value="CareDirector V5">CareDirector V5</option>
        <option value="CareDirector V6">CareDirector V6</option>
        <option value="CareDirector Youth">CareDirector Youth</option>
        <option value="CareNotes">CareNotes</option>
        <option value="CrossCare">CrossCare</option>
        <option value="Staffplan Roster">Staffplan Roster</option>
        <option value="Staffplan Exchange">Staffplan Exchange</option>
        <option value="CAMT">CAMT</option>
        <option value="Everylife Integration">Everylife Integration</option>
        <option value="Pass Integration">Pass Integration</option>
        <option value="Caresys">Caresys</option>
        <option value="Adastra">Adastra</option>
        <option value="Adastra 111">Adastra 111</option>
        <option value="Docman">Docman</option>
    `;

    return ReferenceData;
}

function GetIncomingCallContent() {

    let Content = `
        <!-- Intro -->
        <div class="IncomingCallElement">
            <p id="IncomingCallIntro">Hello, you're through to the Advanced support desk. This is <span id="IncomingCallUsername">${GetUsername()}</span> speaking.</p>
        </div>
        <!-- Product -->
        <div class="IncomingCallElement">
            <label data-out="Product" for="IncomingCallProduct">Can I start by taking the affected product please?</label>
            <input type="text" name="IncomingCallProduct" id="IncomingCallProduct" list="IncomingCallProductList" autocomplete="off">
            <datalist id="IncomingCallProductList">
                ${GetProductReferenceData()}
            </datalist>
        </div>
        <!-- Customer name -->
        <div class="IncomingCallElement">
            <label data-out="Name" for="IncomingCallCustomerName">Can I take your first and last name?</label>
            <input type="text" name="IncomingCallCustomerName" id="IncomingCallCustomerName" autocomplete="off">
        </div>
        <!-- Customer contact number -->
        <div class="IncomingCallElement">
            <label data-out="Contact number" for="IncomingCallCustomerContactNumber">Can I confirm your best contact number?</label>
            <input type="text" name="IncomingCallCustomerContactNumber" id="IncomingCallCustomerContactNumber" autocomplete="off">
        </div>
        <!-- Customer contact email -->
        <div class="IncomingCallElement">
            <label data-out="Contact email" for="IncomingCallCustomerContactEmail">Can I confirm your best contact email address?</label>
            <input type="text" name="IncomingCallCustomerContactEmail" id="IncomingCallCustomerContactEmail" autocomplete="off">
        </div>
        <!-- Customer site -->
        <div class="IncomingCallElement">
            <label data-out="Site" for="IncomingCallCustomerSite">Where are you calling from?</label>
            <input type="text" name="IncomingCallCustomerSite" id="IncomingCallCustomerSite" autocomplete="off">
        </div>
        <!-- The problem  -->
        <div class="IncomingCallElement">
            <label data-out="Problem" for="IncomingCallProblem">What is the problem?</label>
            <textarea name="IncomingCallProblem" id="IncomingCallProblem" autocomplete="off"></textarea>
        </div>
        <!-- Users affected -->
        <div class="IncomingCallElement">
            <label data-out="Users affected" for="IncomingCallUsersAffected">How many users are affected by this?</label>
            <input type="text" name="IncomingCallUsersAffected" id="IncomingCallUsersAffected" autocomplete="off">
        </div>
        <!-- Error messages -->
        <div class="IncomingCallElement">
            <label data-out="Error messages" for="IncomingCallErrorMessages">Are you getting any error messages?</label>
            <textarea name="IncomingCallErrorMessages" id="IncomingCallErrorMessages" autocomplete="off"></textarea>
        </div>
        <!-- Steps to replicate -->
        <div class="IncomingCallElement">
            <label data-out="Steps to replicate" for="IncomingCallStepsToReplicate">What are the steps to replicate?</label>
            <textarea name="IncomingCallStepsToReplicate" id="IncomingCallStepsToReplicate" autocomplete="off"></textarea>
        </div>
        <!-- Started -->
        <div class="IncomingCallElement">
            <label data-out="Started" for="IncomingCallStarted">When did this start?</label>
            <input type="date" name="IncomingCallStarted" id="IncomingCallStarted">
        </div>
        <!-- Hosted -->
        <div class="IncomingCallElement">
            <label data-out="Hosted" for="IncomingCallHosted">Do you know if your site is self-hosted?</label>
            <input type="text" name="IncomingCallHosted" id="IncomingCallHosted" list="IncomingCallHostedList" autocomplete="off">
            <datalist id="IncomingCallHostedList">
                <option value="Caller does not know">Caller does not know</option>
                <option value="Self-hosted">Site is self-hosted</option>
                <option value="Hosted">Hosted by Advanced</option>
            </datalist>
        </div>
        <!-- Environment -->
        <div class="IncomingCallElement">
            <label data-out="Environment" for="IncomingCallEnvironment">Which environment is this affecting (Live, UAT, Dev, Migration etc.)?</label>
            <input type="text" name="IncomingCallEnvironment" id="IncomingCallEnvironment" list="IncomingCallEnvironmentList" autocomplete="off">
            <datalist id="IncomingCallEnvironmentList">
                <option value="Live">Live</option>
                <option value="UAT">UAT</option>
                <option value="Training">Training</option>
                <option value="Dev">Dev</option>
                <option value="Migration">Migration</option>
                <option value="Finance">Finance</option>
                <option value="Reporting">Reporting</option>
                <option value="Caller does not know">Caller does not know</option>
            </datalist>
        </div>
        <!-- Version -->
        <div class="IncomingCallElement">
            <label data-out="Version" for="IncomingCallVersion">What version of the software are you running?</label>
            <input type="text" name="IncomingCallVersion" id="IncomingCallVersion" autocomplete="off">
        </div>
        <!-- Copy button -->
        <div class="IncomingCallElement">
            <button id="IncomingCallCopyButton" class="CopyButton">Copy</button>
        </div>
    `;

    return Content;
}