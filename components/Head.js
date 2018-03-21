import Head from 'next/head'

export default () => (
  <Head>
    <title>Александр Мансуров</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700&amp;subset=cyrillic" rel="stylesheet" />
    <style>{`
      * {
        box-sizing: border-box;
      }
      html{
          font-family: 'Anonymous Pro', monospace;
          font-size:100%;
          line-height:1.6;
          background:white;
          color:#000;
          -webkit-overflow-scrolling:touch; }

      body{
          margin:0;
          font-size:1rem; }
      @media (min-width: 50rem){
          body{
              font-size:1.25rem; } }
      body header,
      body main,
      body footer,
      body article{
          position:relative;
          margin:0 auto; }
      body header {
          background-color: white; }
      body header h1{
          margin:0; }
      body header p{
          margin:0;
          color: #aaa; }
      body footer{
          margin-top:4.5em;
          padding-bottom:1.5em;
          text-align:center;
          font-size:.8rem;
          color:#aaa; }
      body header,
      section {
          box-shadow: inset 1px 1px 0px 0px rgba(0, 0, 0, .05);
          padding: 2rem; }
      @media (min-width: 50rem){
          body header,
          section {
            padding: 4rem; } }

      section {
          flex-grow: 1;
          flex-basis: 100%; }
      @media (min-width: 50rem){
          section {
            flex-basis: 50%; } }

      nav{
          margin:1em 0 0; }
      nav ul{
          list-style:none;
          margin:0;
          padding:0; }
      nav ul li{
          display:inline-block;
          margin-right:1em;
          margin-bottom:0; }
      nav a:hover{
          color:#3000c1; }

      ul, ol{
          margin-top:0;
          padding-top:0;
          padding-left:2.5em; }

      p{
          margin:1em 0; }
      p:first-child{
          margin-top:0; }
      p:last-child{
          margin-bottom:0; }
      p + ul, p + ol{
          margin-top:-.75em; }
      p img, p picture{
          float:left;
          margin-bottom:0;
          margin-right:1em; }
      p img img, p picture img{
          float:none;
          margin:0; }

      dd{
          margin-bottom:1em;
          margin-left:0;
          padding-left:2.5em; }

      dt{
          font-weight:700; }

      blockquote{
          margin:0;
          padding-left:2.5em; }

      aside{
          margin:.5em 0;
          font-size:.8em;
          font-weight: normal;
          color:#aaa; }
      @media (min-width: 65rem){
          aside{
              position:absolute;
              left:-11rem;
              width:9.375rem;
              max-width:9.375rem;
              text-align: right;
              margin:0;
              padding-right:.5em;
              font-size:1em;
              border-right:1px solid #f2f2f2; }

          .aside-hide {
              display: none; }}

      h1, h2, h3, h4, h5, h6{
          margin:0;
          line-height:1.2; }
      h1:hover > a[href^='#'][id], h1:focus > a[href^='#'][id], h2:hover > a[href^='#'][id], h2:focus > a[href^='#'][id], h3:hover > a[href^='#'][id], h3:focus > a[href^='#'][id], h4:hover > a[href^='#'][id], h4:focus > a[href^='#'][id], h5:hover > a[href^='#'][id], h5:focus > a[href^='#'][id], h6:hover > a[href^='#'][id], h6:focus > a[href^='#'][id]{
          opacity:1;
          -webkit-transition:opacity 0s, color 300ms ease-out;
          transition:opacity 0s, color 300ms ease-out; }
      h1 + p, h1 + details, h2 + p, h2 + details, h3 + p, h3 + details, h4 + p, h4 + details, h5 + p, h5 + details, h6 + p, h6 + details{
          margin-top:.5em; }
      h1 > a[href^='#'][id], h2 > a[href^='#'][id], h3 > a[href^='#'][id], h4 > a[href^='#'][id], h5 > a[href^='#'][id], h6 > a[href^='#'][id]{
          position:absolute;
          left:-.5em;
          opacity:0;
          background:none;
          color:rgba(0, 0, 0, 0.5);
          -webkit-transition:opacity 300ms ease-out;
          transition:opacity 300ms ease-out; }
      h1 > a[href^='#'][id]:target, h1 > a[href^='#'][id]:hover, h1 > a[href^='#'][id]:focus, h2 > a[href^='#'][id]:target, h2 > a[href^='#'][id]:hover, h2 > a[href^='#'][id]:focus, h3 > a[href^='#'][id]:target, h3 > a[href^='#'][id]:hover, h3 > a[href^='#'][id]:focus, h4 > a[href^='#'][id]:target, h4 > a[href^='#'][id]:hover, h4 > a[href^='#'][id]:focus, h5 > a[href^='#'][id]:target, h5 > a[href^='#'][id]:hover, h5 > a[href^='#'][id]:focus, h6 > a[href^='#'][id]:target, h6 > a[href^='#'][id]:hover, h6 > a[href^='#'][id]:focus{
          opacity:1;
          box-shadow:none;
          color:#000;
          -webkit-transition:opacity 0s, color 0s;
          transition:opacity 0s, color 0s; }
      h1 > a[href^='#'][id]:target:focus, h2 > a[href^='#'][id]:target:focus, h3 > a[href^='#'][id]:target:focus, h4 > a[href^='#'][id]:target:focus, h5 > a[href^='#'][id]:target:focus, h6 > a[href^='#'][id]:target:focus{
          outline:none; }
      h1 > a[href^='#'][id]::before, h2 > a[href^='#'][id]::before, h3 > a[href^='#'][id]::before, h4 > a[href^='#'][id]::before, h5 > a[href^='#'][id]::before, h6 > a[href^='#'][id]::before{
          content:'•'; }

      h1{
          font-size:2em; }

      h2{
          font-size:1.75em; }

      h3{
          font-size:1.25em; }

      h4{
          font-size:1.15em; }

      h5{
          font-size:1em; }

      h6{
          margin-top:1em;
          font-size:1em;
          color:#aaa; }

      article {
          display: flex;
          flex-wrap: wrap;
          overflow: hidden; }

      article + article{
          margin-top:1em; }

      article header p{
          font-family:"PT Sans", Helvetica, Arial, sans;
          font-size:.7em;
          color:#aaa; }
      article header p + h1, article header p + h2, article header p + h3{
          margin-top:0; }

      article header h1 + p, article header h2 + p, article header h3 + p{
          margin-top:.25em; }

      article header h1 a, article header h2 a, article header h3 a{
          color:#000;
          background:url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="1"%3E%3Crect x="0" y="0.5" width="1" height="0.5" fill="rgba(0, 0, 0, 0.35)"/%3E%3C/svg%3E') left bottom repeat-x; }
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){
          article header h1 a, article header h2 a, article header h3 a{
              background:url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="2"%3E%3Crect x="0" y="1" width="1" height="1" fill="rgba(0, 0, 0, 0.35)"/%3E%3C/svg%3E') left bottom repeat-x; } }
      article header h1 a:visited, article header h2 a:visited, article header h3 a:visited{
          color:#aaa;
          background:url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="1"%3E%3Crect x="0" y="0.5" width="1" height="0.5" fill="rgba(170, 170, 170, 0.35)"/%3E%3C/svg%3E') left bottom repeat-x; }
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){
          article header h1 a:visited, article header h2 a:visited, article header h3 a:visited{
              background:url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="2"%3E%3Crect x="0" y="1" width="1" height="1" fill="rgba(170, 170, 170, 0.35)"/%3E%3C/svg%3E') left bottom repeat-x; } }
      article header h1 a:visited:hover, article header h2 a:visited:hover, article header h3 a:visited:hover{
          color:#3000c1; }

      article > footer{
          margin-top:1.5em;
          font-size:.8em; }

      a{
          text-decoration:none;
          color:#0064c1;
          -webkit-transition:color 300ms ease-out, box-shadow 300ms ease-out;
          transition:color 300ms ease-out, box-shadow 300ms ease-out;
          background:url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="1"%3E%3Crect x="0" y="0.5" width="1" height="0.5" fill="rgba(0, 100, 193, 0.35)"/%3E%3C/svg%3E') left bottom repeat-x; }
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){
          a{
              background:url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="2"%3E%3Crect x="0" y="1" width="1" height="1" fill="rgba(0, 100, 193, 0.35)"/%3E%3C/svg%3E') left bottom repeat-x; } }
      a:hover, a:active{
          outline-width:0; }
      a:hover{
          box-shadow:inset 0px -1px #3000c1;
          color:#3000c1;
          -webkit-transition:color 0s, box-shadow 0s;
          transition:color 0s, box-shadow 0s; }

      abbr{
          margin-right:-.075em;
          letter-spacing:.075em;
          font-size:.9em; }

      img, picture{
          display:block;
          max-width:100%;
          margin:0 auto; }

      audio, video{
          width:100%;
          max-width:100%; }

      video{
          -o-object-position:0 -1px;
          object-position:0 -1px; }

      figure{
          margin:1em 0 .5em;
          padding:0; }
      figure + p{
          margin-top:.5em; }
      figure figcaption{
          opacity:.65;
          font-size:.85em; }

      table{
          display:inline-block;
          border-spacing:0;
          border-collapse:collapse;
          overflow-x:auto;
          max-width:100%;
          text-align:left;
          vertical-align:top;
          background:-webkit-linear-gradient(rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%) 0 0, -webkit-linear-gradient(rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%) 100% 0;
          background:linear-gradient(rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%) 0 0, linear-gradient(rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%) 100% 0;
          background-attachment:scroll, scroll;
          background-size:1px 100%, 1px 100%;
          background-repeat:no-repeat, no-repeat; }
      table caption{
          font-size:.9em;
          background:#fff; }
      table td, table th{
          padding:.35em .75em;
          vertical-align:top;
          font-size:.9em;
          border:1px solid #f2f2f2;
          border-top:0;
          border-left:0; }
      table td:first-child, table th:first-child{
          padding-left:0;
          background-image:-webkit-linear-gradient(left, white 50%, rgba(255, 255, 255, 0) 100%);
          background-image:linear-gradient(to right, white 50%, rgba(255, 255, 255, 0) 100%);
          background-size:2px 100%;
          background-repeat:no-repeat; }
      table td:last-child, table th:last-child{
          padding-right:0;
          border-right:0;
          background-image:-webkit-linear-gradient(right, white 50%, rgba(255, 255, 255, 0) 100%);
          background-image:linear-gradient(to left, white 50%, rgba(255, 255, 255, 0) 100%);
          background-position:100% 0;
          background-size:2px 100%;
          background-repeat:no-repeat; }
      table td:only-child, table th:only-child{
          background-image:-webkit-linear-gradient(left, white 50%, rgba(255, 255, 255, 0) 100%), -webkit-linear-gradient(right, white 50%, rgba(255, 255, 255, 0) 100%);
          background-image:linear-gradient(to right, white 50%, rgba(255, 255, 255, 0) 100%), linear-gradient(to left, white 50%, rgba(255, 255, 255, 0) 100%);
          background-position:0 0, 100% 0;
          background-size:2px 100%, 2px 100%;
          background-repeat:no-repeat, no-repeat; }
      table th{
          line-height:1.2; }

      code, kbd, var, samp{
          font-family:Consolas, "Lucida Console", Monaco, monospace;
          font-style:normal; }

      pre{
          overflow-x:auto;
          font-size:.8em;
          background:-webkit-linear-gradient(rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%) 0 0, -webkit-linear-gradient(rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%) 100% 0;
          background:linear-gradient(rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%) 0 0, linear-gradient(rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%) 100% 0;
          background-attachment:scroll, scroll;
          background-size:1px 100%, 1px 100%;
          background-repeat:no-repeat, no-repeat; }
      pre > code{
          display:inline-block;
          overflow-x:visible;
          box-sizing:border-box;
          min-width:100%;
          border-right:3px solid #fff;
          border-left:1px solid #fff; }

      hr{
          height:1px;
          margin:2em 0;
          border:0;
          background:#f2f2f2; }

      details{
          margin:1em 0; }
      details[open]{
          padding-bottom:.5em;
          border-bottom:1px solid #f2f2f2; }

      summary{
          display:inline-block;
          font-weight:700;
          border-bottom:1px dashed;
          cursor:pointer; }
      summary::-webkit-details-marker{
          display:none; }

      noscript{
          color:#d00000; }

      ::-moz-selection{
          background:yellow; }

      ::selection{
          background:yellow; }

      .iframe {
          position: relative;
          padding-bottom: 56.25%;
          padding-top: 25px;
          height: 0;
      }
      .iframe iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
      }
      .help {
          cursor: help; }
      .movie-tile {
          flex-basis: 20%;
          max-width: 20%;
          padding: 5px; }
      @media (min-width: 50rem){
          .movie-tile {
              flex-basis: 10%;
              max-width: 10%;
              padding: 5px; } }
    `}</style>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112751787-1"></script>
    <script dangerouslySetInnerHTML={{__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', 'UA-112751787-1');
    `}}></script>
    <script dangerouslySetInnerHTML={{__html: `
      (function(d, w, c) {
          w.ChatraID = 'aeSjcHXJXuKpCPZPA';
          var s = d.createElement('script');
          w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
          };
          s.async = true;
          s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
          + '//call.chatra.io/chatra.js';
          if (d.head) d.head.appendChild(s);
      })(document, window, 'Chatra');
    `}}></script>
  </Head>
)
