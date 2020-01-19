<template>
  <div>
    
    <div class="container-fluid">
      <b-navbar>
        <b-navbar-brand>
          <g-link to="/">Zeke Cato Enterprise</g-link>
        </b-navbar-brand>
        <div id>
          <font-awesome :icon="['fab','linkedin']" />
        </div>
        <b-navbar-nav class="ml-auto">
            <b-nav-item><g-link to="/about/">About</g-link></b-nav-item>
            <b-nav-item><g-link to="/it-consulting/">IT Consulting</g-link></b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="container">
      <slot/>
    </div>

  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}

nav[role="navigation"] {
  text-align: center;
}


.layout {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
</style>
