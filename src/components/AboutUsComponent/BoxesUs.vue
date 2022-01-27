<template>
  <div class="container-boxes">
    <div class="left-box">
      <h1>Dale una nueva vida a los artículos</h1>
      <img src="../../assets/img/img-boxes.png" alt />
    </div>
    <div class="right-box">
      <h1>Sálvemos al planeta</h1>
      <img src="../../assets/img/img2-boxes.png" alt />
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.container-boxes {
  display: flex;
  opacity: 0.9;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
}

.left-box {
  border: 2px solid #f396ac;
  background-color: #f58fa7;
  border-radius: 20px;
  width: 400px;
  height: 250px;
  box-shadow: 2px 2px 10px 2px grey;

  h1 {
    color: white;
    text-align: left;
    width: 50%;
    margin-left: 15px;
  }

  img {
    width: 35%;
    position: relative;
    left: 20%;
    bottom: 25%;
  }
}

.right-box {
  border: 2px solid #022ab0;
  background-color: #022ab0;
  border-radius: 20px;
  width: 400px;
  height: 250px;
  box-shadow: 2px 2px 10px 2px grey;

  h1 {
    color: white;
    text-align: left;
    width: 50%;
    margin-left: 15px;
  }

  img {
    width: 65%;
    position: relative;
    left: 20%;
    bottom: 10%;
  }
}
</style>
