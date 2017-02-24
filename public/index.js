function search(x) {

  $.post("http://localhost:3000/search", {"key": x}, function (data) {
    $("#title").text(data)
  });
}
