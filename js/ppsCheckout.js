$(function() {
    hideInputLabels();
    showPaymentDrawer();
    cardPreviewAndFlip();
    checkoutPaymentTabs();
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

function checkoutPaymentTabs() {
    $('.paymentTabs .paymentTabs__tab').click(function() {
        var tab_id = $(this).data("tab");

		$('.paymentTabs .paymentTabs__tab').removeClass('paymentTabs__tab--active');
		$('.tabContent').removeClass('openPaymentMethod');

		$(this).addClass('paymentTabs__tab--active');
		$("#"+tab_id).addClass('openPaymentMethod');
    });
}