var v=function(t,e,r,f){var n,a=0;typeof e!="boolean"&&(f=r,r=e,e=void 0);function o(){var p=this,s=Number(new Date)-a,h=arguments;function u(){a=Number(new Date),r.apply(p,h)}function m(){n=void 0}f&&!n&&u(),n&&clearTimeout(n),f===void 0&&s>t?u():e!==!0&&(n=setTimeout(f?m:u,f===void 0?t-s:t))}return o},i=v,d=function(t,e,r){return r===void 0?i(t,e,!1):i(t,r,e!==!1)},D=v,c=d,l={throttle:D,debounce:c};export{v as a,d,l as t};