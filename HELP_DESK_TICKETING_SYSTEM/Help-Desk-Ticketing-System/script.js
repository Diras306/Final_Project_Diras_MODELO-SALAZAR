$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/tickets",
    success: function(data) {
      $.each(data, function(index, value) {
        $("#tickets-table-body").append("<tr><td>" + value.id + "</td><td>" + value.title + "</td><td>" + value.description + "</td><td>" + value.severity + "</td><td>" + value.created_at + "</td><td>" + value.updated_at + "</td></tr>");
      });
    }
  });
});
