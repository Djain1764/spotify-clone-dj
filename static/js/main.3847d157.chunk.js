(this["webpackJsonpspotify-clone-dj"]=this["webpackJsonpspotify-clone-dj"]||[]).push([[0],{157:function(e,t,a){e.exports=a(453)},161:function(e,t,a){},162:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),o=a.n(c),r=(a(161),a(24)),i=a(131),s=a.n(i),m=Object(n.createContext)(),u=function(e){var t=e.reducer,a=e.initialState,c=e.children;return l.a.createElement(m.Provider,{value:Object(n.useReducer)(t,a)},c)},E=function(){return Object(n.useContext)(m)},p=a(139),d=a.n(p),y=a(137),f=a.n(y),_=a(140),v=a.n(_),g=a(132),S=a.n(g),T=a(141),b=a.n(T),h=a(143),N=a.n(h),O=a(138),j=a.n(O),k=a(142),I=a.n(k),P=(a(162),a(465)),w=a(466);var L=function(e){var t=e.spotify,a=E(),c=Object(r.a)(a,2),o=c[0],i=(o.token,o.item),s=o.playing,m=c[1];Object(n.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),m({type:"SET_PLAYING",playing:e.is_playing}),m({type:"SET_ITEM",item:e.item})}))}),[t]);var u=function(){s?(t.pause(),m({type:"SET_PLAYING",playing:!1})):(t.play(),m({type:"SET_PLAYING",playing:!0}))};return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__left"},l.a.createElement("img",{className:"footer__albumLogo",src:null===i||void 0===i?void 0:i.album.images[0].url,alt:null===i||void 0===i?void 0:i.name}),i?l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,i.name),l.a.createElement("p",null,i.artists.map((function(e){return e.name})).join(", "))):l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,"No song is playing"),l.a.createElement("p",null,"..."))),l.a.createElement("div",{className:"footer__center"},l.a.createElement(S.a,{className:"footer__green"}),l.a.createElement(f.a,{onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),s?l.a.createElement(j.a,{onClick:u,fontSize:"large",className:"footer__icon"}):l.a.createElement(d.a,{onClick:u,fontSize:"large",className:"footer__icon"}),l.a.createElement(v.a,{onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),l.a.createElement(b.a,{className:"footer__green"})),l.a.createElement("div",{className:"footer__right"},l.a.createElement(P.a,{container:!0,spacing:2},l.a.createElement(P.a,{item:!0},l.a.createElement(I.a,null)),l.a.createElement(P.a,{item:!0},l.a.createElement(N.a,null)),l.a.createElement(P.a,{item:!0,xs:!0},l.a.createElement(w.a,{"aria-labelledby":"continuous-slider"})))))};a(168),a(169),a(170);var M=function(e){var t=e.option,a=void 0===t?"test":t,n=e.Icon;return l.a.createElement("div",{className:"sidebarOption"},n&&l.a.createElement(n,{className:"sidebarOption__icon"}),n?l.a.createElement("h4",null,a):l.a.createElement("p",null,a))},Y=a(144),A=a.n(Y),x=a(58),C=a.n(x),R=a(145),K=a.n(R),G="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("261bbffc1f2e4341a9abaee4fa8236eb","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true");var B=function(){var e,t=E(),a=Object(r.a)(t,2),n=a[0].playlists;return a[1],console.log(n),l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),l.a.createElement(M,{Icon:A.a,option:"Home"}),l.a.createElement(M,{Icon:C.a,option:"Search"}),l.a.createElement(M,{Icon:K.a,option:"Your Library"}),l.a.createElement("br",null),l.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),l.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return l.a.createElement(M,{option:e.name})})))},U=(a(171),a(172),a(467));var W=function(e){e.spotify;var t,a=E(),n=Object(r.a)(a,2),c=n[0].user;return n[1],l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement(C.a,null),l.a.createElement("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})),l.a.createElement("div",{className:"header__right"},l.a.createElement(U.a,{alt:null===c||void 0===c?void 0:c.display_name,src:null===c||void 0===c||null===(t=c.images[0])||void 0===t?void 0:t.url}),l.a.createElement("h4",null,null===c||void 0===c?void 0:c.display_name)))};a(173);var Q=function(e){var t=e.track,a=e.playSong;return console.log(t),l.a.createElement("div",{className:"songRow",onClick:function(){return a(t.id)}},l.a.createElement("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),l.a.createElement("div",{className:"songRow__info"},l.a.createElement("h1",null,t.name),l.a.createElement("p",null,t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name)))},z=a(146),F=a.n(z),V=a(147),Z=a.n(V),D=a(148),J=a.n(D);var q=function(e){var t=e.spotify,a=E(),n=Object(r.a)(a,2),c=n[0].discover_weekly,o=n[1],i=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){o({type:"SET_ITEM",item:e.item}),o({type:"SET_PLAYING",playing:!0})}))}))};return l.a.createElement("div",{className:"body"},l.a.createElement(W,{spotify:t}),l.a.createElement("div",{className:"body__info"},l.a.createElement("img",{src:"https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/xZ6U6VmlRlBAxMFGqqxRIZlBQjCtXxxOM6XH8BPouleKcszTh4-k9S8IugswModiaP06JtNs5t6pHmPDZdI2oxjrfhViNsK-PgKzq_ReaIl3kfKb_omaP5EMo04-Bxjj274UnpJPN5Q3Ks5vUYtLBOQ9ehEGgzurG4NN6pBGxRHkPLM5kmYjyHyxS3xeYdyBdVQTSxgiOrouu27RejKDvjwmoBwGSMLRYJcRNQBp_q5sNnWKn6sK3BWMYLi2598-mUjQK-CFp7IC22hlNhhMjUuRSSxmaooDM6v1bUot1mcRb5Mtew8Ko1VbM_tYoAiBeK3S-WtdO2_A1iPQRLGEqShT5tSdZYe4h_ftAlkPvTGK6dOrTbBAczUEnsToofkvA-PMyF0uFKyl-VjYfTB8OagLuEZCS8jWnzWgItEsfg8=/OTA6OTU6NjFUNDEtNjAtMg==",alt:""}),l.a.createElement("div",{className:"body__infoText"},l.a.createElement("strong",null,"PLAYLIST"),l.a.createElement("h2",null,"Discover Weekly"),l.a.createElement("p",null,null===c||void 0===c?void 0:c.description))),l.a.createElement("div",{className:"body__songs"},l.a.createElement("div",{className:"body__icons"},l.a.createElement(F.a,{className:"body__shuffle",onClick:function(e){t.play({context_uri:"spotify:playlist:37i9dQZEVXcJZyENOWUFo7"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){o({type:"SET_ITEM",item:e.item}),o({type:"SET_PLAYING",playing:!0})}))}))}}),l.a.createElement(Z.a,{fontSize:"large"}),l.a.createElement(J.a,null)),null===c||void 0===c?void 0:c.tracks.items.map((function(e){return l.a.createElement(Q,{playSong:i,track:e.track})}))))};var H=function(e){var t=e.spotify;return l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"player__body"},l.a.createElement(B,null),l.a.createElement(q,{spotify:t})),l.a.createElement(L,{spotify:t}))};a(174),a(175);var X=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),l.a.createElement("a",{href:G},"LOGIN TO SPOTIFY"))},$=new s.a;var ee=function(){var e=E(),t=Object(r.a)(e,2),a=t[0].token,c=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&($.setAccessToken(t),c({type:"SET_TOKEN",token:t}),$.getPlaylist("37i9dQZEVXcQ9COmYvdajy").then((function(e){return c({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),$.getMyTopArtists().then((function(e){return c({type:"SET_TOP_ARTISTS",top_artists:e})})),c({type:"SET_SPOTIFY",spotify:$}),$.getMe().then((function(e){c({type:"SET_USER",user:e})})),$.getUserPlaylists().then((function(e){c({type:"SET_PLAYLISTS",playlists:e})})),console.log("\ud83d\udc7f\ud83d\udc7f\ud83d\udc7f\ud83d\udc7f",a))}),[a,c]),l.a.createElement("div",{className:"app"},!a&&l.a.createElement(X,null),a&&l.a.createElement(H,{spotify:$}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(6),ae=(a(176),function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(te.a)(Object(te.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object(te.a)(Object(te.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(te.a)(Object(te.a)({},e),{},{item:t.item});case"SET_DISCOVER_WEEKLY":return Object(te.a)(Object(te.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_TOP_ARTISTS":return Object(te.a)(Object(te.a)({},e),{},{top_artists:t.top_artists});case"SET_TOKEN":return Object(te.a)(Object(te.a)({},e),{},{token:t.token});case"SET_SPOTIFY":return Object(te.a)(Object(te.a)({},e),{},{spotify:t.spotify});case"SET_PLAYLISTS":return Object(te.a)(Object(te.a)({},e),{},{playlists:t.playlists});default:return e}});o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null},reducer:ae},l.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.3847d157.chunk.js.map