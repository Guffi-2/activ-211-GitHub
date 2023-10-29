<script setup lang="ts">

</script>

<template>
  <header>
    <img src="./On.PNG" class="logo vue" alt="Vue logo" />
    <h2>Актив школы 211</h2>
    <menu>
      <h4 id="news">Новоcти</h4>
      <h4 id="about">О нас</h4>
      <h4 id="soc-seti">Соц-сети</h4>
    </menu>
  </header>
  <mobileMenu>
      <h4 id="news_m"><a href="#news_p">Новоcти</a></h4>
      <h4 id="about_m">О нас</h4>
      <h4 id="soc-seti_m">Соц-сети</h4>
  </mobileMenu>
  <div class="news_title">
    <h2 id="news_p">Новости</h2>
  </div>
  <news>
  <news_p>
    <div class="post_1">
        <h4>🎤Приглашаем всех желающих на новый концерт Оркестра!🎤</h4>
        <img src="./ljdsfh.jpeg"/>
        <h5>Оркестр 211<br>
            🌟27.10.2023🌟<br>
            🎬11:40<br>
            🎤Актовый зал<br>
            🎬Вход для всех желающих с 11:30<br>
            🎬Завтра<br>
            🎸Приходите на наш новый концерт!🎸<br>
            <u>Приглашаются все желающие!</u><br> </h5>
            <a href="https://vk.com/wall-213311039_82">VK пост</a>
    </div>
    <div class="post_2">
        <h4>🎤Приглашаем всех желающих на новый концерт Оркестра!🎤</h4>
        <img src="./ljdsfh.jpeg"/>
        <h5>Оркестр 211<br>
            🌟27.10.2023🌟<br>
            🎬11:40<br>
            🎤Актовый зал<br>
            🎬Вход для всех желающих с 11:30<br>
            🎬Завтра<br>
            🎸Приходите на наш новый концерт!🎸<br>
            <u>Приглашаются все желающие!</u><br> </h5>
            <a href="https://vk.com/wall-213311039_82">VK пост</a>
    </div>
  </news_p>
</news>
</template>

<style scoped>
mobileMenu a{
  text-decoration: none;
  color: #213547;
}
.news_title{
  width: 100%;
  height: 10px;
}

.post_2{
  width: 400px;
  height: 535px;
  background-color: rgb(243, 243, 243);
  border-radius: 30px;
  margin-right: 30px;
}
.post_2 h4{
  padding: 15px;
}
.post_2 h5{
  padding-top: 0px;
  padding-left: 15px;
  font-size: 15px;
}
.post_2 h3{
  padding-top: 0px;
  padding-left: 0px;
}
.post_2 a{
  padding-top: 0px;
  padding-left: 15px;
  text-decoration: none;
  font-weight: bolder;
  color: #4f75d6;
}
.post_2 img{
  width: 400px;
}

.post_1{
  width: 400px;
  height: 535px;
  background-color: rgb(243, 243, 243);
  border-radius: 30px;
  margin-right: 30px;
}
.post_1 h4{
  padding: 15px;
}
.post_1 h5{
  padding-top: 0px;
  padding-left: 15px;
  font-size: 15px;
}
.post_1 h3{
  padding-top: 0px;
  padding-left: 0px;
}
.post_1 a{
  padding-top: 0px;
  padding-left: 15px;
  text-decoration: none;
  font-weight: bolder;
  color: #4f75d6;
}
.post_1 img{
  width: 400px;
}
#news_p{
  padding-top: 0px;
  padding-top: 20px;
  padding-left: 40px;
  font-size: 1.6rem; 
}
news_p{
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 260px;
}
#news{
  padding-right: 20px;
}
#about{
  padding-right: 20px;
}
.logo {
  height: 5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo.vue {
  /* */
  margin: none;
}
menu{
  width: 55%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo.vue:hover {
  filter: drop-shadow(0 0 0.4em #b90000); /* #a5a5a5*/
}
mobileMenu{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: none;
  padding: none;
  background-color: #eeeeee;
  display: none;
}
header{
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: none;
  padding: none;
}

@media (min-width: 1200px) {
  h2 { 
    font-size: 1.5vw;
  }
  h4{
    font-size: 1.3vw;
  }
  .logo {
  height: 5em;
  will-change: filter;
  transition: filter 300ms;
  }
  #about_m{
    visibility: hidden;
  }
  #news_m{
    visibility: hidden;
  }
  #soc-seti_m{
    visibility: hidden;
  }
  mobileMenu{
    visibility: hidden;
    display: none;
  }
}
@media (max-width: 1199px) and (min-width: 900px) {
  h2 { 
    font-size: 1rem; 
  }
  #about_m{
    visibility: hidden;
  }
  #news_m{
    visibility: hidden;
  }
  #soc-seti_m{
    visibility: hidden;
  }
  mobileMenu{
    visibility: hidden;
    display: none;
  }
}

@media (max-width: 899px) {
  mobileMenu{
    display: flex;
  }
  .logo {
  height: 4em;
  will-change: filter;
  transition: filter 300ms;
  }
  header h2{
    width: 55%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #about{
    visibility: hidden;
  }
  #news{
    visibility: hidden;
  }
  #soc-seti{
    visibility: hidden;
    
  }

  #about_m{
    padding-right: 20px;
  }
  #news_m{
    padding-right: 20px;
  }
  menu{
    display: none;
  }
  news{
    padding-top: 20px;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #news_p{
  padding-top: 0px;
  padding-left: 0px;
  font-size: 1.6rem; 
}
.post_1{
  width: 95%;
  height: 520px;
  background-color: #f3f3f3;
  border-radius: 30px;
  margin-right: 0px;
}
.post_1 h4{
  padding: 15px;
}
.post_1 h5{
  padding-top: 0px;
  padding-left: 15px;
  font-size: 16px;
}
.post_1 h3{
  padding-top: 0px;
  padding-left: 0px;
}
.post_1 a{
  padding-top: 0px;
  padding-left: 15px;
  text-decoration: none;
  font-weight: bolder;
  color: #4f75d6;
}
.post_1 img{
  width: 100%;
}
.post_2{
  width: 95%;
  height: 520px;
  background-color: #f3f3f3;
  border-radius: 30px;
  margin-right: 0px;
  margin-top: 15px;
}
.post_2 h4{
  padding: 15px;
}
.post_2 h5{
  padding-top: 0px;
  padding-left: 15px;
  font-size: 16px;
}
.post_2 h3{
  padding-top: 0px;
  padding-left: 0px;
}
.post_2 a{
  padding-top: 0px;
  padding-left: 15px;
  text-decoration: none;
  font-weight: bolder;
  color: #4f75d6;
}
.post_2 img{
  width: 100%;
}
news_p{
  width: 100%;
  height: 10px;
  display: flex;
  /* align-items: center; */
  padding-top: 12px;
  flex-wrap: wrap;
  /* justify-content: center;*/
}
.news_title{
  padding-top: 20px;
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mobile_pons{
  display: grid;
  justify-content: center;
  align-items: center;
}
}

</style>
