function ativaScrollSuave(selector) {
  $(selector).click(function (event) {
    event.preventDefault();
    var target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    );
  });
}

ativaScrollSuave("a[href*=receitas]");
ativaScrollSuave("a[href*=quem-somos]");
ativaScrollSuave("a[href*=contato]");
