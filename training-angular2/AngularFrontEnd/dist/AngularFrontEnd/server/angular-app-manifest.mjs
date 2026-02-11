
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/customers/*"
  },
  {
    "renderMode": 2,
    "route": "/addupdate"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5032, hash: 'ebbe6a315cdf71ffc1e053251046063bae86ff2ac9fe7152824fcc96617ba0ae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: '4408377349ba9756cb0aa562a37c9f6bbcebf40a314bcb1690d8e8618dc11eab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'addupdate/index.html': {size: 14213, hash: '54802ea3e6d50f8bf8288b664b2f706d9ccf040c30577eb5f895e2f17cb82e9e', text: () => import('./assets-chunks/addupdate_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7364, hash: 'ed4cab6c607f02e4204f63200c6c3caca79587be3185e92aafdfa406f7b40b15', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JG7EAGFK.css': {size: 230853, hash: 'YlmivfEfBiI', text: () => import('./assets-chunks/styles-JG7EAGFK_css.mjs').then(m => m.default)}
  },
};
