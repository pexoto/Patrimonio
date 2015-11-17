function addAlert(message) {
    $('#alerts').append(
        '<div class="alert alert-warning" data-alert = "alert"' +
            '<strong>Aviso!</strong>' + message +
			'<button type="submit" class="btn btn-lg btn-link ">Cancelar</button>' +
            '<button type="submit" class="btn btn-lg btn-link " >Ok</button>' +
            '</div>');
}

function deletarCessao() {
    addAlert('Tem certeza que deseja deletar esta cessão?');
}

$('#modal-from-dom').on('show', function() {
    var id = $(this).data('id'),
        removeBtn = $(this).find('.danger');

    removeBtn.attr('href', removeBtn.attr('href').replace(/(&|\?)ref=\d*/, '$1ref=' + id));
    
    $('#debug-url').html('Delete URL: <strong>' + removeBtn.attr('href') + '</strong>');
});

$('.confirm-delete').on('click', function(e) {
    e.preventDefault();

    var id = $(this).data('id');
    $('#modal-from-dom').data('id', id).modal('show');
});