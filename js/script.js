var tbody = document.querySelector('tbody');
var tfoot = document.querySelector('tfoot');
var lista = JSON.parse(localStorage.getItem('listas'));

function renderTabela() {

    for (row in lista) {

        var tr = document.createElement('tr');

        var volume = lista[row].valor * lista[row].quantidade;

        var tQuant = lista[row].quantidade + tQuant;
        var tValor = lista[row].valor + tValor;
        var tVolume = volume + tVolume;

        tr.innerHTML = `<td>${lista[row].data}</td>
                        <td>${lista[row].quantidade}</td>
                        <td>${lista[row].valor}</td>
                        <td>${volume}</td>`
        tbody.appendChild(tr);
    }
}

renderTabela();

function addTable() {
    var dt = document.getElementById('data').value
    var qt = parseInt(document.getElementById('quantidade').value)
    var vl = parseFloat(document.getElementById('valor').value)

    lista.push({ data: dt, quantidade: qt, valor: vl })

    saveStorage();
    renderTabela();

}


function saveStorage() {
    localStorage.setItem('listas', JSON.stringify(lista))
}