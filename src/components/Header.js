import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <section class="hero is-primary is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Movie Fight
                <span class="icon">
                  <i class="fas fa-film"></i>
                </span>
              </h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
