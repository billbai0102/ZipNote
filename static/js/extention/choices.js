$('.btn-search').click(function() {
    console.log(document.getElementById('search').value);
    let pass_to_python = document.getElementById('search').value;
    $.ajax({
        type: 'GET',
        url: '/' + pass_to_python
    }).done(function(res) {
        console.log('Worked!');
    });
});
