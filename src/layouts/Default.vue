<template>
  <div>
    
    <div class="container-fluid">
        
      <div class="header row">
        
        <div class="col-6 col-sm-10">
          <g-link id="logomain" to="/">
            <h1> Zeke Cato Enterprise </h1>
          </g-link>
        </div>

        <div class="col-6 col-sm-10">
          <p class="text-muted">
            IT Consulting — Math, science, and technology tutoring — Sensitively Simple natural body care
          </p>
        </div>

      </div>

      <b-navbar id="navbar" class="row">
        <b-navbar-nav id="navlinks">
            <b-nav-item><g-link to="/about/">About</g-link></b-nav-item>
            <b-nav-item><g-link to="/it-consulting/">IT Consulting</g-link></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://www.linkedin.com/in/roy-zeke-schultz-cato-8665a453/">
            <font-awesome :icon="['fab','linkedin']" size="lg"/>
          </b-nav-item>
          <b-nav-item href="mailto:zeke@zekecato.com">
            <font-awesome :icon="['fas','envelope']" size="lg" />
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>

    </div>

    <div class="container">
      <slot/>
    </div>

  </div>
</template>

<style>

.header {
  padding-top: 10px;
  align-items: auto;
}

#logomain {
  text-decoration: none;
  color: black;
}

#navbar {
  background-color: black;
}
#navlinks {
  color: white;
}
svg {
  color: white;
}
</style>
