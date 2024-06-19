<script>
</script>

<template>
  <main>

    <MenuSuperior />
  
    <div style="padding: 100px 0px 0px 0px;" class="">
      <hr class="custom-hr">
      <div>
        <div class="div-titulo-pagina-fotos">
          <h2 class="titulo-pagina-fotos">Encadernação</h2>
          <p class="paragrafo-pagina-fotos">Opções de cores e Ø (diâmetros) diferenciados. Equipamentos automáticos e semi-automáticos que oferecem qualidade e rapidez.</p>
        </div>
        <div class="corpo-pagina-fotos">
            <!-- Cards ------------------------------------------------------------------------------------->
          <div class="row row-cols-1 row-cols-md-3 g-4 grid-cards">

            <div class="col">
              <div class="card">
                <img src="assets/images/encadernacao-espirais.jpg" class="card-img imagem-card" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title" style="color: black">Ring Wire (Wire ou Garras de Duplo Anel)</h5>
                  <p class="card-text"></p>
                  <p class="card-text"><small></small></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src="assets/images/encadernacao-maquina1.jpg" class="card-img imagem-card" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title" style="color: black">Maquina</h5>
                  <p class="card-text"></p>
                  <p class="card-text"><small></small></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src="assets/images/encadernacao-maquina2.jpg" class="card-img imagem-card" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title" style="color: black">Maquina</h5>
                  <p class="card-text"></p>
                  <p class="card-text"><small></small></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src="assets/images/encadernacao-maquina3.jpg" class="card-img imagem-card" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title" style="color: black">Maquina</h5>
                  <p class="card-text"></p>
                  <p class="card-text"><small></small></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src="assets/images/encadernacao-maquina4.jpg" class="card-img imagem-card" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title" style="color: black">Maquina</h5>
                  <p class="card-text"></p>
                  <p class="card-text"><small></small></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img src="assets/images/encadernacao-caderno.jpg" class="card-img imagem-card" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title" style="color: black">Caderno</h5>
                  <p class="card-text"></p>
                  <p class="card-text"><small></small></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  
    <Rodape />
  </main>
</template>

<style>

.imagem-card {
  object-fit: cover
}

/* .div-titulo-pagina-fotos {
} */

.titulo-pagina-fotos {
  display: flex;
  color: rgb(58, 106, 141);
  justify-content: center;
}

.paragrafo-pagina-fotos {
  display: flex;
  justify-content: center;
}

/* .corpo-pagina-fotos {

} */

@media only screen and (max-width: 768px) {
  .div-titulo-pagina-fotos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .paragrafo-pagina-fotos {
    text-align: justify;
    width: 95%;
  }
}

</style>