<template>
  <div>
    
    <div class="container-fluid">

      <div class="header row">

        <div class="col-12 col-sm-10 order-2 order-sm-1">
            <div class="row">
              <div class="col">
                <b-link id="logomain" class="" to="/">
                  <h1 class="text-sm-left text-center"> Zeke Cato Enterprise </h1>
                </b-link>
              </div>
            </div>

            <div class="row">
              <h6 class="col text-muted text-sm-left text-center">
                IT Consulting — Math, science, and technology tutoring — Sensitively Simple natural body care
              </h6>
            </div>
        </div>

        <div class="col-12 col-sm-2 order-1 order-sm-2 text-center">
          <div class="row justify-content-center align-items-center socialrow">
            <div class="col-1 col-sm-12">
              <a href="https://www.linkedin.com/in/roy-zeke-schultz-cato-8665a453/">
                <font-awesome :icon="['fab','linkedin']" size="2x" />
              </a>
            </div>
            <div class="col-1 col-sm-12">
              <a href="mailto:zeke@zekecato.com">
                <font-awesome :icon="['fas','envelope']" size="2x" />
              </a>        
            </div>
          </div>
        </div>

      </div>

      <b-navbar type="dark" toggleable="sm" id="navbar" class="row">
        <b-collapse is-nav id="navlinks">
          <b-navbar-nav>
              <g-link to="/about/">About</g-link>
              <g-link to="/it-consulting/">IT Consulting</g-link>
          </b-navbar-nav>
        </b-collapse>
        <b-navbar-toggle target="navlinks"></b-navbar-toggle>
      </b-navbar>

    </div>

    <div class="container">
      <slot/>
    </div>

  </div>
</template>

<style>

.socialrow {
  margin-top: 12px;
}

.socialrow>*>* {
  color:black;
}

#logomain {
  text-decoration: none;
  color: black;
}

#navbar {
  background-color: black;
}

</style>
