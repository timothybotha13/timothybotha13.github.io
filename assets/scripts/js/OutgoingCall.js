function GatherOutgoingCallData() {
    return $('#OutgoingCallNotes').val();
}

function GetOutgoingCallContent() {

    let Content = `
        <!-- Notepad -->
        <div class="OutgoingCallElement">
            <label id="OutgoingCallTitle" for="OutgoingCallNotes">Outgoing call notes:</label>
            <textarea name="OutgoingCallNotes" id="OutgoingCallNotes" autocomplete="off"></textarea>
        </div>
        <!-- Copy button -->
        <div class="OutgoingCallElement">
            <button id="OutgoingCallCopyButton" class="CopyButton">Copy</button>
        </div>
    `;

    return Content;
}
