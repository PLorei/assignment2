$(document).ready(function () {
  var submitBtn = $('#submit');
  submitBtn.click(submission);
});

function submission() {
  $('#errorSummary').html(''); // clear error summary
  var firstNameField = $('#firstName');
  var lastNameField = $('#lastName');
  var firstNameValid = checkField(firstNameField);
  var lastNameValid = checkField(lastNameField);

  var isAnyError = (!firstNameValid) || (!lastNameValid);
  if (isAnyError === true) {
    // don't do anything
  }
  else {
    $('#form-element').css('display', 'none');
    $('#success').css('display', 'block');
  }
}

function checkField(field) {
  var isError = false;
  var fieldName = field.attr('name');
  if (isFieldEmpty(field)) {
    addError(fieldName + ' cannot be empty.');
    field.addClass('field-error');
    return false;
  }
  if (!isFirstLetterUpperCase(field.val())) {
    addError(fieldName + ' must be capitalized');
    field.addClass('field-error');
    return false;
  }
  field.addClass('field-valid');
  return true;
}


function addError(error) {
  var newError = '<span>' + error + '</span><br/>';
  $('#errorSummary').append(newError);
}

function isFieldEmpty(field) {
  if ((field.val() === null) || (field.val().trim() === '')) {
    return true;
  }
  return false;
}

function isFirstLetterUpperCase(word) {
  if (word[0] === word[0].toUpperCase()) {
    return true;
  }
  return false;
}
