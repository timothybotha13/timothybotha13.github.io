$('body').on('click', '.MenuButton', function() {
    ProcessMenuButtonClick($(this));
});

$('body').on('click', '.Toast', function() {
    $(this).remove();
});

$('body').on('click', '.CopyButton', function() {
    ProcessCopy($(this));
});

$('body').on('click', '#IncomingCallUsername', function() {
    UpdateUsername();
});

function SendToClipboard(Text) {

    if (!navigator.clipboard) {
        SendMessageToUI('Error', 'Clipboard navigator method is not available.');
        return;
    }

    if (Text == '') {
        SendMessageToUI('Error', 'No data to send to clipboard.');
        return;
    }

    navigator.clipboard.writeText(Text).then(function() {
        SendMessageToUI('Success', 'Copied to clipboard!');
    }, function(e) {
        SendMessageToUI('Error', e);
    });
}

function ProcessCopy(CopyButton) {

    let ButtonId = CopyButton.prop('id').replace('CopyButton','');
    let CopyString = ''; 

    switch(ButtonId) {
        case 'IncomingCall':
            CopyString = GatherIncomingCallData();
            break;
        case 'OutgoingCall':
            CopyString = GatherOutgoingCallData();
            break;
        case 'OutgoingEmail':
            CopyString = GatherOutgoingEmailData();
            break;
        default:
            SendMessageToUI('Error', 'Unknown copy button pressed.');
            return;
    }

    SendToClipboard(CopyString);
}

function SendMessageToUI(Type, Message) {
    
    let Toast = `
        <div class="Toast Toast${Type}">
            <h2>${Type}</h2>
            <hr>
            <p>${Message}</p>
        </div>
    `;

    $('#BreadBin').append(Toast);
}

function ProcessMenuButtonClick(Object) {
    
    switch(Object.prop('id')) {
        case 'IncomingCall':
            LoadMenuItemContent(GetIncomingCallContent());
            CheckForUsername();
            break;
        case 'OutgoingCall':
            LoadMenuItemContent(GetOutgoingCallContent());
            break;
        case 'OutgoingEmail':
            LoadMenuItemContent(GetOutgoingEmailContent());
            break;
        case 'ResponseTemplates':
            LoadMenuItemContent(GetResponseTemplatesContent());
            break;
        case 'PhoneNumbers':
            LoadMenuItemContent(GetPhoneNumbers());
            break;
        case 'HelpAndAbout':
            LoadMenuItemContent(GetHelpAndAboutContent());
            break;
        default:
            SendMessageToUI('Error', 'Unknown menu button press.');
            return;
    }

    $('.MenuButton').removeClass('Selected');
    Object.addClass('Selected');
}

function LoadMenuItemContent(Content) {

    if (Content == undefined || Content == "") {
        SendMessageToUI('Error', 'Unable to identify menu item content.');
        return;
    }

    let Canvas = $('#Canvas');

    Canvas.empty();
    Canvas.append(Content);
}

function GetUsername() {

    let Username = localStorage.getItem('Username');
    if (Username == null || Username == undefined) {
        Username = 'Change Me';
    }

    return Username;
}

function UpdateUsername() {

    let NewUsername = prompt('Update your name:', '');

    if (NewUsername != null && NewUsername!= '') {
        localStorage.setItem('Username', NewUsername);
    }

    LoadMenuItemContent(GetIncomingCallContent());
}

