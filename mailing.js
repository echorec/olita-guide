var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyUwy9WV7p9sNQAc9s-Y2UEv2kH63CHRuek1t7G-TMV6T--IYAY/exec'
$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})