$(document).ready(function(){

    var popisKojegija = "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan";
    var kolegiDetaljno = "http://www.fulek.com/VUA/supit/GetKolegij/";

    $.getJSON(popisKojegija, function (data) {
        $("#kolegij").autocomplete({
            source: data,
            select: function (e, ui) {
                e.preventDefault();
                $(this).val(ui.item.label);
                addToTable(ui.item.value);
            },
                
            
        });
    });

    $('#tableKolegij').on('click', 'button[type="button"]', function () {
        $(this).closest('tr').remove();
        updateTableSum();
        if ($('#tableKolegij tbody').children('tr').length == 0) {
            $('#tableKolegij').hide();
        }
    })

    function addToTable(idKolegij) {
        let url = kolegiDetaljno + idKolegij;
        $.getJSON(url, function (detaljiKolegija) {
            $('#tableKolegij tbody').append('<tr><td>' + 
            detaljiKolegija.kolegij + '</td><td>' + 
            detaljiKolegija.ects + '</td><td>' + 
            detaljiKolegija.sati + '</td><td>' + 
            detaljiKolegija.predavanja + '</td><td>' + 
            detaljiKolegija.vjezbe + '</td><td>' + 
            detaljiKolegija.tip + 
                '</td><td><button class="btn-delete" type="button">Obriši</button></td></tr>');
            updateTableSum();
            $('#tableKolegij').show();
        });
    }

    function updateTableSum() {
        let ects = 0;
        let sati = 0;
        $('#tableKolegij tbody tr td:nth-child(2)').each(function () {
            ects = (parseInt($(this).html()) + ects);
        })
        $('#tableKolegij tbody tr td:nth-child(3)').each(function () {
            sati = (parseInt($(this).html()) + sati);
        })
        $('#tableKolegij tfoot tr td:nth-child(2)').html(ects);
        $('#tableKolegij tfoot tr td:nth-child(3)').html(sati);
    }

 });