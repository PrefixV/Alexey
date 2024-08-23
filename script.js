var accordionHeaders = document.querySelectorAll('.accordion-header');
    var accordionContents = document.querySelectorAll('.accordion-content');

  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      var content = this.nextElementSibling;
      this.classList.toggle('active');
      content.classList.toggle('show');
      if (content.classList.contains('show')) {
        content.style.maxHeight = content.scrollHeight + '20px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });