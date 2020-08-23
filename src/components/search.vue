<template>
<div class="content">
        <header class="header" role="banner">
            <q-chip style="margin-top:25px;height:50px;margin-left:25px;">
            <q-avatar>
              <img src="../assets/TJU.png">
            </q-avatar>
               CodeSearch
            </q-chip>
            <div class="q-pa-md" style="width: 700px; height:100px;margin-left:250px;margin-top:-70px;">
               <div class="q-gutter-md">
                <q-input v-model="search" debounce="500" filled placeholder="Search">
                  <template v-slot:append>
                     <q-icon name="search" ></q-icon>
                  </template>
                </q-input>
               </div>
            </div>
        </header>
        <q-separator color="blue" inset ></q-separator>
        <div class="title" style="display:flex;">
            <li style="margin-left:50px;margin-top:25px;list-style:none;font-size:20px;">About 39,500,000 results for “xxxxxxx”</li>
            <div class="header-right" style="display:flex;margin-left:400px;">
                <a class="faq-link"  href="" style="text-decoration:none;margin-top:25px;">FAQ</a>
                <a class="about-link" tabindex="0" role="button"  href="" style="text-decoration:none;margin-left:25px;margin-top:25px;">About</a>
                <a class="feedback-link" tabindex="0" role="button"  href="" style="text-decoration:none;margin-left:25px;margin-top:25px;">Contact</a>
                <span class="middot" style="margin-top:25px;margin-left:25px;">•</span>
                <div class="account-menu-button" style="display:flex;">
                    <button class="button button--tertiary account-menu__sign-in-button" role="button" aria-label="Sign In" 
                    style="background: #f4d35e;border: #f4d35e;color: #000;white-space: nowrap;margin-left:25px;height:35px;margin-top:18px;">Sign In</button>
                    <button class="button button--secondary account-menu__sign-up-button" role="button" aria-label="Create Free Account"
                    style="background: #f4d35e;border: #f4d35e;color: #000;white-space: nowrap;height:35px;margin-left:50px;margin-top:18px;">Create Free Account</button>
                </div>
            </div>
        </div>
        <q-separator  style="margin-top:25px;" color="blue" inset ></q-separator>

      <div class="middle" style="display:flex;">

        <div class="content">
            <q-card class="my-card bg-secondary text-white" v-for="item in info" :key="item.label" :value="item.value">
            <q-card-section>
                <div class="text-h6">{{item.title}}</div>
                <div class="text-subtitle2">{{item.author_time}}</div>
            </q-card-section>
  
            <q-card-section>
               {{ item.content }}
            </q-card-section>
  
            <q-separator dark ></q-separator>
  
            <q-card-actions>
               <q-btn flat v-on:click="detail">详细页面</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      
       <div id="q-app" style="width:480px;height:500px;margin-top:30px;" >
          <div class="q-pa-md">
            <q-parallax :height="1500"  :speed="0.50"> 
          <template v-slot:media>
            <img src="../assets/tongji.jpg">
          </template>
  
          <template v-slot:content="scope">
           <div
            class="absolute column items-center"
            :style="{
              opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
              top: (scope.percentScrolled * 60) + '%',
              left: 0,
              right: 0,
             }"
            
           >
            <img src="../assets/TJU.png" style="width: 150px; height: 150px">
            <div class="text-h3 text-white text-center">CodeSearch</div>
            </div>
          </template>
           </q-parallax>
       </div>
     </div>





      </div>

      <div id="q-app" style="margin-left:500px;">
      <div class="q-pa-lg">
      <q-pagination 
        v-model="current" 
        color="teal"
        :max="10"
        :max-pages="5"
        :ellipses="false"
        :boundary-numbers="false"
      >
      </q-pagination>
    </div>
    </div>

   

</div>
  
</template>

<script>

export default {  

  data () {
    return {
        current: 5,
        info:[
            {title:"The eleventh and twelfth data releases of the Sloan Digital Sky Survey: final data from SDSS-III",author_time:"Shadab Alam · Franco D. Albareti"+"    "+"2015"+"First Publication:"+"5 January 2015",content:"The third generation of the Sloan Digital Sky Survey (SDSS-III) took data from 2008 to 2014 using the original SDSS wide-field imager, the original and an upgraded multi-object fiber-fed optical..."},
            {title:"The Blazar TXS 0506+056 Associated with a High-energy Neutrino: Insights into Extragalactic Jets and Cosmic-Ray Acceleration",author_time:"Stefano Ansoldi · Lucio Angelo Antonelli"+"    "+"2018"+"First Publication:"+"11 July 2018",content:"A neutrino with energy similar to 290 TeV, IceCube-170922A, was detected in coincidence with the BL Lac object TXS. 0506+056 during enhanced gamma-ray activity, with chance coincidence being rejected..."},
            {title:"The first power spectrum limit on the 21-cm signal of neutral hydrogen during the Cosmic Dawn at z = 20-25 from LOFAR",author_time:"Bharat Kumar Gehlot · Franz G. Mertens"+"    "+"2018"+"First Publication:"+"18 September 2018",content:"Observations of the redshifted 21-cm hyperfine line of neutral hydrogen from early phases of the Universe such as Cosmic Dawn and the Epoch of Reionization promise to open a new window onto the early..."},
            {title:"The first power spectrum limit on the 21-cm signal of neutral hydrogen during the Cosmic Dawn at z = 20-25 from LOFAR",author_time:"Bharat Kumar Gehlot · Franz G. Mertens"+"    "+"2018"+"First Publication:"+"18 September 2018",content:"Observations of the redshifted 21-cm hyperfine line of neutral hydrogen from early phases of the Universe such as Cosmic Dawn and the Epoch of Reionization promise to open a new window onto the early..."},
            {title:"The first power spectrum limit on the 21-cm signal of neutral hydrogen during the Cosmic Dawn at z = 20-25 from LOFAR",author_time:"Bharat Kumar Gehlot · Franz G. Mertens"+"    "+"2018"+"First Publication:"+"18 September 2018",content:"Observations of the redshifted 21-cm hyperfine line of neutral hydrogen from early phases of the Universe such as Cosmic Dawn and the Epoch of Reionization promise to open a new window onto the early..."},
        ],
            
        
    }
  },

}
</script>

<style>
html {
    background: #fff;
    color: #2e414f;
    font-family: Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 100%;
    font-weight: 400;
    line-height: 1.4;
}
.my-card{
  width: 100%;
  max-width: 1000px;
  margin-left:50px;
  margin-top:50px;
}

</style>