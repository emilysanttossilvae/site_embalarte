<script>
</script>

<template>
  <main class="carrossel-main" style="padding: 95px 0px 0px 0px;">

    <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide carrossel" data-bs-ride="carousel">
      <div class="carousel-inner carrossel">
        <div class="carousel-item active carrossel" data-bs-interval="4000">
          <img src="assets\images\carrossel-estantes.png" class="d-block w-100 carrossel" alt="estantes">
        </div>
        <div class="carousel-item carrossel" data-bs-interval="4000">
          <img src="assets\images\carrossel-linha-producao.png" class="d-block w-100 carrossel" alt="producao">
        </div>
        <div class="carousel-item carrossel" data-bs-interval="4000">
          <img src="assets\images\carrossel-fachada.png" class="d-block w-100 carrossel" alt="fachada">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <hr class="custom-hr">

  </main>

</template>

<style>

@media only screen and (max-width: 768px) {
  .carrossel-main {
    height: 300px;
  }

  .carrossel {
    height: 100%;
    width: 100%;
  }
}

.custom-hr {
  margin: 20px 0px 5px 0px;
  border: 0;
  height: 3px;
  background-color: rgb(58, 106, 141);
}

</style>