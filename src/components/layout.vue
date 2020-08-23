<template>
  <div class="main">
      <header class="header" role="banner">
      <a class="logo" aria-label="Homepage" href="">同济软件学院</a> 
      <div class="header-right">
        <div class="account-menu">
          <div class="account-menu-button">
             <button class="sign-in-button" role="button" aria-label="Sign In" data-selenium-selector="reading-list-sign-in" data-heap-id="sign_in_modal_button">Sign In</button>
             <button class="sign-up-button" role="button" aria-label="Create Free Account" data-heap-id="sign_up_modal_button">Create Free Account</button>
          </div>
        </div>
      </div>
    </header>

    <div class="hero-content" role="main" id="main-content">
            <div class="container">
                <h1 class="hero-search__label">同济软件学院</h1>
                <h2 class="hero-search__sublabel">ABCDEFGHIJKLMN</h2>
                <form class="search-bar" id="search-form" role="search" autocomplete="off" action="/search">
                    <div class="input-container">
                        <div class="input-bg">
                            <div class="search-icon">
                            </div>
                                <input type="search" name="q" aria-label="Search text" class="legacy__input" placeholder="输入需要搜索的内容" autofocus="" value=""/>
                                <button aria-label="Submit" class="form-submit" @click="gosearch">
                                    <div class="flex-row-vcenter">
                                        <span class="form-submit-label">Search</span>
                                    </div>
                                </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  </div>
    
  
</template>

<script>
export default {  
  name:'codesearch',
  data () {
    return {
    }
  },
  methods:{
   gosearch() {
   this.$router.replace('/search')
 },
  }
}
</script>

<style>
.header {
  background-color: #11223d;
  padding: 4px 14px;
  position: relative;
  display:flex;
  z-index: 600;
}


.header .logo {
  margin-right: 10px;
  width: 200px;
}

.header a{
  color:white;
  text-decoration:none;
}

.header .header-right{
  margin-left:1000px;
  font-size: 11.9px;
}

.header .header-right .account-menu .account-menu-button button {
  background-color: #11223d;
  border: 1px solid #f4d35e;
  color: #f4d35e;
  font-size: 14px;
  margin-left: 20px;
  padding: 5px 20px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
}
.header .header-right .account-menu .account-menu-button {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

/****** */
html {
    color: #2e414f;
    font-family: Roboto,Helvetica Neue,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.4;
    background: no-repeat 0 0 url(../assets/homepage-background.svg),#11223d;
}

 .hero-content {

    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;

    margin-top:150px;
}

.hero-content .container h1 {
    color: #f4d35e;
    font-family: Roboto Slab,Georgia,serif;
    font-size: 48px;
    font-weight: 600;
}

.hero-content .container h2 {
    color: #fff;
    font-family: Roboto Light,Helvetica Neue,Arial,sans-serif;
    font-size: 22px;
    font-weight: 300;
    line-height: 26px;
}

.hero-content .container .search-bar {
    margin: 32px auto 12px;
    min-width: auto;
    border-radius: 3px;
    text-align: left;
}

.hero-content .container .search-bar .input-bg {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    background: #fff;
    flex-grow: 2;
}

.hero-content .container .search-bar .search-icon {
    fill: #8c9296;
    left: 15px;
    margin-left: 15px;
    margin-right: 10px;
    transform-style: preserve-3d;
}

.hero-content .container .search-bar .input-container .input-bg{
    display:flex;
    width:1000px;
}

.hero-content .container .search-bar .input-container .input-bg input {
    padding-bottom: 20px;
    padding-top: 20px;
    font-size: 16px;

    appearance: none;
    border: 0;
    color: #2e414f;
    overflow: hidden;
    padding-left: 0;
    padding-right: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    border-radius: 5px;
    display: inline-block;
    font-weight: 400;

    box-sizing: content-box;

    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
}

.hero-content .container  .search-bar  .input-container .input-bg .form-submit {
    background: #f4d35e;
    border: #f4d35e;
    color: #000;
    white-space: nowrap;

    font-size: 16px;
    font-weight: 500;
    height: 65px;
    padding: 18px 24px;
}




</style>