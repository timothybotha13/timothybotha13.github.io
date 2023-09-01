function GetVersion() {

    return '1.2.6';
}

function GetHelpAndAboutContent() {

    let Content = `
        <div class="HelpAndAboutContainer">
            <p><span>Project:</span> Community helper.</p>
            <p><span>Version:</span> ${GetVersion()}.</p>
            <p><span>Author:</span> Callum Martin.</p>
            <p><span>Admins:</span> Callum Martin.</p>
            <p><span>Description:</span> Aligns the input and output of MDS.</p>
            <p><span>Github:</span> <a href="https://github.com/CallumMartinA/CallumMartinA.github.io">Github.</a></p>
            <p><span>Report an issue:</span> <a href="https://github.com/CallumMartinA/CallumMartinA.github.io/issues">Report an issue</a>, or contact an admin via email.</p>
        </div>
    `;

    return Content;
}