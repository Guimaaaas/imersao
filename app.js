function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    let titulo = "";
    let tag = "";
  
    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      tag = dado.tags.toLowerCase();
      if(titulo.includes(campoPesquisa) || tag.includes(campoPesquisa)){
        // Cria o HTML para cada item do resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
        `;
      }
    }
    if (!resultados){
      return section.innerHTML = "<p>Nada foi encontrado</p>"
    }
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }