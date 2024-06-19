<script>
// Server=localhost\MSSQLSERVER02;Database=master;Trusted_Connection=True;
</script>

<template>
  <MenuSuperior />

  <Carrossel />

  <!-- Introdução -------------------------------------------------------------------------------->
  <!-- Bem-vindo -->
  <div class="boas-vindas">
    <!-- Linha Esquerda -->
    <div class="linha-esquerda"></div>
    
    <!-- Texto de Bem-vindo -->
    <div class="boas-vindas-texto">
      <h1 class="text-center" style="color:rgb(58, 106, 141)">Bem Vindo!</h1>
      <p class="text-justify texto-justificado" style="padding: 0px 0px 0px 10px;"> O <strong>Grupo EMBALARTE</strong> oferece as mais diversas soluções logísticas de acordo com cada necessidade. Atendimento 
        personalizado, suporte e gestão são nossos maiores diferenciais. Solicite um orçamento para o seu projeto
        sem compromisso.
      </p>
    </div>

    <!-- Linha Direita -->
    <div class="linha-direita"></div>
  </div>

  <hr class="custom-hr">

  <!-- Cards ------------------------------------------------------------------------------------->
  <div class="row row-cols-1 row-cols-md-3 g-4 grid-cards">

    <div class="col">
      <NuxtLink to="/albuns/encadernacao" class="link-nuxt">
        <div class="card h-100 estilo-card">
          <img src="assets\images\processo-encadernacao.jpg" class="card-img-top imagem-card" alt="Encadernação">
          <div class="card-body">
            <h5 class="card-title">Encadernação</h5>
            <p class="card-text texto-card">Encadernações em Espiral e Ring wire (wire-o). Desde apostilas, livros, agendas, calendários, guias e 
              materiais específicos. Possibilidade de vários diâmetros, formatos e cores, com ampla capacidade de produção.
            </p>
          </div>
          <!-- class="text-body-secondary" -->
          <!-- <div class="card-footer">
            <small style="color:white;"></small>
          </div> -->
        </div>
      </NuxtLink>
    </div>

    <div class="col">
      <NuxtLink to="/albuns/manuseio" class="link-nuxt">
        <div class="card h-100 estilo-card">
          <img src="assets/images/processo-manuseio.png" class="card-img-top imagem-card" alt="Manuseio">
          <div class="card-body">
            <h5 class="card-title">Manuseio e Montagem de Kit's</h5>
            <p class="card-text texto-card">Montagens de Kits Promocionais, On Pack's, Projetos Personalizados, Desenvolvimento de Embalagens, Impressões PB, 
              Codificação e Gravação Ink Jet, Operações Full-Filment, Outsourcing Transporte, Co-Packer e Crossdocking.
            </p>
          </div>
          <!-- <div class="card-footer">
            <small style="color:white"></small>
          </div> -->
        </div>
      </NuxtLink>
    </div>

    <div class="col">
      <NuxtLink to="/albuns/shrink" class="link-nuxt">
        <div class="card h-100 estilo-card">
          <img src="assets/images/shrink-1.jpg" class="card-img-top imagem-card" alt="Shrink">
          <div class="card-body">
            <h5 class="card-title">Shrink e Manuseios Diversos</h5>
            <p class="card-text texto-card">Shrink em filme poliolefínico com máquinas de alta performance. 
              Intercalações, desintercalações, colagens e manuseios em geral. Blister, Skin e suporte nas mais diversas operações.
            </p>
          </div>
          <!-- <div class="card-footer">
            <small style="color:white"></small>
          </div> -->
        </div>
      </NuxtLink>
    </div>

  </div>

  <!-- Rodape  ----------------------------------------------------------------------------------->
  <Rodape />

  </template>

<style>
/* rgb(58, 106, 141) */

.estilo-card {
  background-color: rgb(58, 106, 141);
  color: white;
  font-family: monospace;
}

.imagem-card {
  height: 60%;
  object-fit: cover
}

.texto-justificado {
  text-align: justify;
}

.texto-card {
  color: #DCDCDC;
  font-family: Arial, Helvetica, sans-serif;
}

.link-nuxt {
  text-decoration: none;
}

.custom-hr {
  margin: 20px 0px 5px 0px;
  border: 0;
  height: 3px;
  background-color: rgb(58, 106, 141);
}

.grid-cards {
  margin: 0px 0px 0px 0px;
}

.boas-vindas {
  display: flex;
  justify-content: space-between
}

.boas-vindas-texto {
  width: 30%;
}

.linha-esquerda {
  width: 35%;
  margin: 75px 15px 75px 20px;
  background: linear-gradient(to right, rgba(58, 106, 141, 0.8), rgba(58, 106, 141, 0));
  /* background: linear-gradient(to left, rgba(58, 106, 141, 0.8), rgba(58, 106, 141, 0)); */
  border-radius: 5px;
}

.linha-direita {
  width: 35%;
  margin: 75px 20px 75px 15px;
  /* background: linear-gradient(to right, rgba(58, 106, 141, 0.8), rgba(58, 106, 141, 0)); */
  background: linear-gradient(to left, rgba(58, 106, 141, 0.8), rgba(58, 106, 141, 0));
  border-radius: 5px;
}

/* Como dar RESPONSIVIDADE da WEB -> Celular */
@media only screen and (max-width: 768px) {
  .linha-direita {
    display: none;
  }
  .linha-esquerda {
    display: none;
  }

  .boas-vindas-texto {
    width: 98%;
    text-align: justify;
  }

  .boas-vindas {
    display: flex;
    justify-content: space-between;
    padding: 30px 0px 0px 0px;
  }

}

</style>