$(function() {
    hideInputLabels();
    showPaymentDrawer();
    cardInputMasks();
    cardPreviewAndFlip();
});

//If input field has a value then hide the label
function hideInputLabels() {
    $('input').focusout(function(){
        var fieldId = $(this).attr("id");
        if ($(this).val() == ''){
            $("label[for='"+fieldId+"']").removeClass('stay');
         } else {
            $("label[for='"+fieldId+"']").addClass('stay');
         }
    });
}

//Check to make sure details inputs are filled and show payment section
function showPaymentDrawer() {
}

//Add input masks to the checkout page for data validation
function cardInputMasks() {
    $("#cardNumber").inputmask("9999 9999 9999 9999",{ "placeholder": "" });
    $("#cardExpiry").inputmask("99/99",{ "placeholder": "" });
    $("#cardCvv").inputmask("999",{ "placeholder": "" });
}

function cardPreviewAndFlip() {
    $("#cardNumber").on("keyup change input paste blur", function () {
        ccNumber = this.value;
        $('.cardPreview__number').text(ccNumber);
    });

    $("#cardName").on("keyup change input paste blur", function () {
        ccName = this.value;
        $('.cardPreview__name').text(ccName);
    });

    $("#cardExpiry").on("keyup change input paste blur", function () {
        ccExpiry = this.value;
        $('.cardPreview__date').text(ccExpiry);
    });

    $("#cardCvv").on("keyup change input paste focus blur", function () {
        $('.cardPreview__card').addClass('flipped');
        ccExpiry = this.value;
        $('.cardPreview__cvv').text(ccExpiry);
    });

    $("#cardCvv").blur(function(){
        $('.cardPreview__card').removeClass('flipped');
    });
}