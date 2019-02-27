$(function() {
	hideInputLabels();
	cardPreviewAndFlip();
	checkoutPaymentTabs();
	formValidation();
});

//If input field has a value then hide the label
function hideInputLabels() {
	$("input").focusout(function() {
		var fieldId = $(this).attr("id");
		if ($(this).val() == "") {
			$("label[for='" + fieldId + "']").removeClass("stay");
		} else {
			$("label[for='" + fieldId + "']").addClass("stay");
		}
	});
}

function formValidation() {
	//Email Form validation
	$("#emailFormContain").validate({
		rules: {
			// The key name on the left side is the name attribute
			// of an input field. Validation rules are defined
			// on the right side
			email: "required",
			email: {
				required: true,
				email: true
			}
		},
		// Specify validation error messages
		messages: {
			email: "Please enter a valid email address"
		},
		errorElement: "span",
		// Make sure the form is submitted to the destination defined
		// in the "action" attribute of the form when valid
		submitHandler: function(form) {
			form.submit();
		}
	});
}

function cardPreviewAndFlip() {
	$("#cardNumber").on("keyup change input paste blur", function() {
		ccNumber = this.value;
		$(".cardPreview__number").text(ccNumber);
	});

	$("#cardName").on("keyup change input paste blur", function() {
		ccName = this.value;
		$(".cardPreview__name").text(ccName);
	});

	$("#cardExpiry").on("keyup change input paste blur", function() {
		ccExpiry = this.value;
		$(".cardPreview__date").text(ccExpiry);
	});

	$("#cardCvv").on("keyup change input paste focus blur", function() {
		$(".cardPreview__card").addClass("flipped");
		ccExpiry = this.value;
		$(".cardPreview__cvv").text(ccExpiry);
	});

	$("#cardCvv").blur(function() {
		$(".cardPreview__card").removeClass("flipped");
	});
}

function checkoutPaymentTabs() {
	$(".paymentTabs .paymentTabs__tab").click(function() {
		var tab_id = $(this).data("tab");

		$(".paymentTabs .paymentTabs__tab").removeClass("paymentTabs__tab--active");
		$(".tabContent").removeClass("openPaymentMethod");

		$(this).addClass("paymentTabs__tab--active");
		$("#" + tab_id).addClass("openPaymentMethod");
	});
}
