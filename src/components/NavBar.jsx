import React from 'react'

const NavBar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BOOK</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:3000">BOOKS INFO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/search">BOOKS SEARCH</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/shop">SHOP</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar