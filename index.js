$('.video-container').hide()
var $source = $('#video_here')
$('.speedButton').click(() => {
  $('.video').trigger('pause')
  const speed = $('.speedNumber').val()
  if (speed <= 0 || isNaN(speed)) {
    // $('.video').trigger('pause')
    alert(
      'TR: Video hızını 0 ve negatif dışında rakam olarak belirtmelisiniz değerde olamaz.  EN: You must specify the video speed as a digit other than 0 and negative.'
    )
  } else {
    $('.video-container').slideDown()
  }
})

$(document).on('change', '.file_multi_video', function (evt) {
  $source[0].src = URL.createObjectURL(this.files[0])
  $source.parent()[0].load()
  document.getElementById('video').playbackRate = parseFloat(
    document.getElementById('speed').value.trim()
  )
})
