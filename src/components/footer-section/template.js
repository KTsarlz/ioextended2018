import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <footer class="footer">
    <a class="logo-anchor" href="https://gdgph.org" aria-label="GDG Philippines Website" target="_blank" rel="noopener">
      <lazy-picture
          class="logo"
          src="/assets/images/gdgph-3.png"
          alt="GDG Philippines logo">
      </lazy-picture>
    </a>
    <div class="spacer"></div>
    <nav class="social-nav-container">
      <ul class="social-nav-list">
        <li class="social-nav">
          <a class="social-icon-anchor" href="https://www.meetup.com/gdgphilippines/" aria-label="GDG Philippines Meetup Page" target="_blank" rel="noopener">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">
              <g>
                <rect x="-0.2" y="0.1" style="fill:none" width="53.8" height="53.4"/>
                <path d="M5.1,24.8c0.1,0.6,0,1.1-0.3,1.6c-0.3,0.5-0.8,0.8-1.4,0.9s-1.1,0-1.6-0.4c-0.5-0.3-0.8-0.8-0.9-1.4 c-0.1-0.6,0-1.1,0.3-1.6C1.6,23.4,2,23.1,2.6,23s1.1,0,1.6,0.3C4.7,23.7,5,24.2,5.1,24.8z M43.9,28.4c1.3,2.1,1.7,4.4,1.2,6.8
                  c-0.5,2.4-1.7,4.4-3.8,5.8c-1.7,1.2-3.5,1.7-5.6,1.7c-0.4,1.5-1.2,2.7-2.4,3.5c-1.2,0.9-2.5,1.3-4,1.2c-1.5,0-2.8-0.6-3.9-1.6
                  c-0.2,0.2-0.3,0.3-0.4,0.3c-1.9,1.3-4,1.8-6.3,1.4s-4.1-1.6-5.4-3.5c-0.9-1.4-1.4-2.9-1.5-4.6c-1.5-0.3-2.9-0.9-4-2
                  c-1.1-1.1-1.9-2.2-2.2-3.6c-0.4-1.3-0.4-2.7-0.1-4.2c0.4-1.5,1.1-2.8,2.3-3.9c-0.7-1.1-1-2.3-1.1-3.6c0-1.3,0.2-2.4,0.7-3.5
                  c0.5-1.1,1.2-2,2.2-2.7c1-0.8,2.1-1.2,3.4-1.4c0.6-1.6,1.5-3,2.8-4.1c1.2-1.2,2.6-2,4.1-2.6s3-0.7,4.7-0.5s3.1,0.8,4.5,1.9
                  c1.3-0.4,2.6-0.6,3.9-0.5c1.3,0.1,2.5,0.4,3.6,1s2.1,1.3,2.9,2.2c0.8,0.9,1.4,2,1.9,3.2c0.4,1.3,0.6,2.6,0.5,3.9
                  c1,0.3,1.8,0.8,2.4,1.6c0.7,0.8,1.1,1.6,1.3,2.5s0.1,1.8-0.2,2.8C45.2,27,44.7,27.8,43.9,28.4z M10.1,41.1c0.2,0.1,0.4,0.4,0.4,0.6
                  c0.1,0.3,0,0.5-0.1,0.8c-0.1,0.2-0.4,0.4-0.6,0.4c-0.3,0.1-0.5,0-0.7-0.1c-0.2-0.1-0.4-0.4-0.4-0.6c-0.1-0.3,0-0.5,0.1-0.8
                  c0.1-0.2,0.4-0.4,0.6-0.4C9.6,40.9,9.9,40.9,10.1,41.1z M12.6,10c0.3,0.4,0.3,0.8,0.3,1.2c-0.1,0.5-0.3,0.8-0.7,1.1
                  c-0.4,0.3-0.8,0.3-1.2,0.3c-0.5-0.1-0.8-0.3-1-0.7c-0.3-0.4-0.3-0.8-0.3-1.2c0.1-0.5,0.3-0.8,0.7-1.1c0.4-0.3,0.8-0.3,1.2-0.3
                  C12,9.4,12.3,9.6,12.6,10z M37.1,35.7c-0.1-0.4-0.3-0.8-0.8-0.9c-0.4-0.2-0.9-0.3-1.4-0.3c-0.5,0-0.9-0.1-1.4-0.3s-0.7-0.6-0.7-1.1
                  c-0.1-0.9,0.2-2.2,0.9-3.9c0.7-1.7,1.4-3.4,2.1-5.1s1-2.8,0.9-3.6c-0.3-1.9-1.3-2.8-3.3-2.9c-0.8,0-1.5,0.1-2.1,0.4l-0.1,0.1
                  c-0.1,0-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0.1c-0.1,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c0,0-0.1-0.1-0.2-0.1
                  c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.3-0.3s-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.2-0.3-0.2
                  c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.6-0.1-1-0.1-1.3,0.1s-0.8,0.4-1.3,0.9
                  c0,0-0.1,0.1-0.3,0.2s-0.3,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.2-0.5,0.2c-0.1,0-0.3,0-0.5-0.1
                  c-1-0.5-1.8-0.9-2.3-1.1c-0.8-0.3-1.6-0.3-2.6,0.1s-1.7,1-2.1,1.8c-0.3,0.5-0.7,1.4-1.1,2.7c-0.5,1.3-0.9,2.5-1.2,3.7
                  c-0.3,1.2-0.7,2.4-1.1,3.7s-0.6,2-0.6,2c-0.4,1.3-0.2,2.4,0.5,3.3s1.8,1.4,3.1,1.3c0.6,0,1-0.2,1.4-0.4c0.4-0.2,0.7-0.7,1.1-1.3
                  c0.1-0.2,0.9-2.1,2.2-5.6c1.3-3.5,2.1-5.3,2.1-5.4c0.1-0.2,0.3-0.4,0.6-0.5c0.3-0.1,0.6-0.1,0.8,0c0.5,0.3,0.7,0.8,0.6,1.5
                  c0,0.3-0.5,1.6-1.4,3.9c-0.9,2.3-1.4,3.5-1.4,3.7c-0.1,0.7,0.1,1.2,0.5,1.6c0.5,0.3,1,0.4,1.7,0.2c0.7-0.2,1.2-0.7,1.5-1.4
                  c0.1-0.1,0.5-1,1.3-2.6s1.5-3.1,2.3-4.6s1.2-2.3,1.3-2.5c0.4-0.5,0.8-0.8,1.1-0.8c0.5,0,0.8,0.4,0.7,1.1c0,0.3-0.6,1.7-1.8,4.1
                  c-1.2,2.4-1.8,3.9-2,4.5c-0.2,1-0.1,1.9,0.4,2.9c0.5,0.9,1.2,1.6,2.1,2.1c0.3,0.2,0.8,0.3,1.4,0.4c0.6,0.1,1.3,0.2,2,0.2
                  c0.7,0,1.3-0.1,1.7-0.4C37,36.8,37.2,36.3,37.1,35.7z M17,2.2c0.1,0.3,0,0.6-0.1,0.9c-0.2,0.3-0.4,0.4-0.7,0.5
                  c-0.3,0.1-0.6,0-0.9-0.2C15,3.2,14.8,3,14.8,2.7c-0.1-0.3,0-0.6,0.2-0.9c0.2-0.3,0.4-0.4,0.7-0.5c0.3-0.1,0.6,0,0.9,0.2
                  C16.8,1.6,16.9,1.9,17,2.2z M26.4,49.1c0.2,0.3,0.3,0.7,0.2,1c-0.1,0.4-0.3,0.7-0.6,0.9s-0.7,0.3-1,0.2c-0.4-0.1-0.7-0.3-0.9-0.6
                  c-0.2-0.3-0.3-0.7-0.2-1c0.1-0.4,0.3-0.7,0.6-0.9c0.3-0.2,0.7-0.3,1-0.2S26.2,48.7,26.4,49.1z M31.6,3.7c0.3,0.5,0.4,1,0.2,1.6
                  s-0.5,1-1,1.3c-0.5,0.3-1,0.4-1.6,0.2c-0.6-0.1-1-0.5-1.3-1c-0.3-0.5-0.4-1.1-0.2-1.6c0.1-0.6,0.5-1,1-1.3c0.5-0.3,1-0.4,1.6-0.3
                  C30.8,2.9,31.3,3.2,31.6,3.7z M40.8,45.3c0.4,0.5,0.5,1.1,0.4,1.7c-0.1,0.6-0.4,1.1-0.9,1.5c-0.5,0.4-1.1,0.5-1.7,0.4
                  c-0.6-0.1-1.1-0.4-1.4-0.9c-0.4-0.5-0.5-1.1-0.4-1.7c0.1-0.6,0.4-1.1,0.9-1.5c0.5-0.4,1.1-0.5,1.7-0.4
                  C39.9,44.5,40.4,44.8,40.8,45.3z M47,15.3c0.3,0.4,0.4,0.9,0.3,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.4,0.3-0.9,0.4-1.4,0.3
                  c-0.5-0.1-0.9-0.3-1.2-0.8c-0.3-0.4-0.4-0.9-0.3-1.4c0.1-0.5,0.3-0.9,0.8-1.2c0.4-0.3,0.9-0.4,1.4-0.3C46.4,14.6,46.8,14.9,47,15.3
                  z M50.1,28.6c0.1,0.4,0,0.7-0.2,1c-0.2,0.3-0.5,0.5-0.9,0.6c-0.4,0.1-0.7,0-1-0.2c-0.3-0.2-0.5-0.5-0.6-0.9c-0.1-0.4,0-0.7,0.2-1
                  c0.2-0.3,0.5-0.5,0.9-0.6c0.4-0.1,0.7,0,1,0.2C49.8,28,50,28.3,50.1,28.6z M52.4,22c0.1,0.3,0,0.5-0.1,0.8
                  c-0.1,0.2-0.4,0.4-0.6,0.5c-0.3,0.1-0.5,0-0.8-0.2c-0.2-0.2-0.4-0.4-0.4-0.6c-0.1-0.3,0-0.5,0.1-0.8c0.1-0.2,0.4-0.4,0.6-0.4
                  c0.3-0.1,0.5,0,0.7,0.1C52.2,21.5,52.3,21.7,52.4,22z"/>
              </g>
            </svg>
          </a>
        </li>
        <li class="social-nav">
          <a class="social-icon-anchor" href="https://plus.google.com/105750470224587854845" aria-label="GDG Philippines Google Page" target="_blank" rel="noopener">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M10.181 14.294v3.494h5.775c-0.231 1.5-1.744 4.394-5.775 4.394-3.475 0-6.313-2.881-6.313-6.431s2.838-6.431 6.313-6.431c1.981 0 3.3 0.844 4.056 1.569l2.762-2.662c-1.775-1.656-4.075-2.662-6.819-2.662-5.631 0.006-10.181 4.556-10.181 10.188s4.55 10.181 10.181 10.181c5.875 0 9.775-4.131 9.775-9.95 0-0.669-0.075-1.181-0.163-1.688h-9.613z"></path>
              <path d="M32 14h-3v-3h-3v3h-3v3h3v3h3v-3h3z"></path>
            </svg>
          </a>
        </li>
        <li class="social-nav">
          <a class="social-icon-anchor" href="https://twitter.com/gdgphilippines" aria-label="GDG Philippines Twitter Page" target="_blank" rel="noopener">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
            </svg>
          </a>
        </li>
        <li class="social-nav">
          <a class="social-icon-anchor" href="https://facebook.com/gdgphilippines" aria-label="GDG Philippines Facebook Page" target="_blank" rel="noopener">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
            </svg>
          </a>
        </li>
        <li class="social-nav">
          <a class="social-icon-anchor" href="https://www.instagram.com/gdgphilippines/" aria-label="GDG Philippines Instagram Page" target="_blank" rel="noopener">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
              <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
              <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </footer>
`;

export { template };
