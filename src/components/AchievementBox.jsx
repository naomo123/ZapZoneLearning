import React from 'react';
import '../styles/AchievementBox.css';

const AchievementBox = () => {

  return (
<>
<div className='container-general-a'>
<div id="container-achieve"> 
  <h2>Achievement-Box</h2>
  <div class="content-achieve">
    <div class="achievement">
      <div class="bar">
        <div class="img-box"><i class="fas fa-sign-in-alt"></i></div>
        <div class="progress login"></div>
        <p> <span class="login-counter">0</span>/5login
        </p>
      </div>
    </div>
    <div class="achievement">
      <div class="bar">
        <div class="img-box"><i class="fas fa-heart"></i></div>
        <div class="progress love"></div>
        <p> <span class="love-counter">0</span>/5 love
        </p>
      </div>
    </div>
    <div class="achievement">
      <div class="bar">
        <div class="img-box"><i class="fas fa-users"></i></div>
        <div class="progress community"></div>
        <p> <span class="community-counter">0</span>/5 community
        </p>
      </div>
    </div>
    <div class="achievement">
      <div class="bar">
        <div class="img-box"><i class="fas fa-camera"></i></div>
        <div class="progress photography"></div>
        <p> <span class="photography-counter">0</span>/5 photography
        </p>
      </div>
    </div>
    <div class="achievement">
      <div class="bar">
        <div class="img-box"><i class="fas fa-comment-alt"></i></div>
        <div class="progress communication"></div>
        <p> <span class="communication-counter">0</span>/5 communication
        </p>
      </div>
    </div>
    <div class="achievement">
      <div class="bar">
        <div class="img-box"><i class="fas fa-phone"></i></div>
        <div class="progress call"></div>
        <p> <span class="call-counter">0</span>/5 call
        </p>
      </div>
    </div>
  </div>
</div>
<div id="button-bar"> 
  <button name="login" title="click to fill item-achievement bar"><i class="fas fa-sign-in-alt"></i></button>
  <button name="love" title="click to fill item-achievement bar"><i class="fas fa-heart"></i></button>
  <button name="community" title="click to fill item-achievement bar"><i class="fas fa-users"></i></button>
  <button name="photography" title="click to fill item-achievement bar"><i class="fas fa-camera"></i></button>
  <button name="communication" title="click to fill item-achievement bar"><i class="fas fa-comment-alt"></i></button>
  <button name="call" title="click to fill item-achievement bar"><i class="fas fa-phone"></i></button>
</div><a class="reference" href="http://bit.ly/2JPuBjx" target="_blank">🔗 alisoueidan.com</a>
</div>
</>
  );
};

export default AchievementBox;
