
$("button").click(function (e) {
    e.preventDefault();
    var name = $("input").val()
    fetch(`https://www.fruityvice.com/api/fruit/${name}`)
    .then(response => response.json())
})
