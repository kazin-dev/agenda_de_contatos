const form = document.getElementById('formulario');
const tableBody = document.getElementById('table-body');

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
});

function adicionaLinha(){
    const nome = document.getElementById('input-nome');
    const telefone = document.getElementById('input-telefone');

        let linha = `
    <tr>
        <td>${nome.value}</td>
        <td>${telefone.value}</td>
    </tr>`;
    
    tableBody.innerHTML += linha;

    nome.value = '';
    telefone.value = '';
    }
    
    
    
    

