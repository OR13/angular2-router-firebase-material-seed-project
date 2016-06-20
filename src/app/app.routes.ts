import { provideRouter, RouterConfig } from '@angular/router';

export const routes: RouterConfig = [
  /*
    This is an example route
    { path: '/example', component: ExampleComponent, index: true },
    { path: '/exampleParent', component: ExampleParentComponent, children: [
      { path: '/exampleChildRoot', component: ExampleChildRootComponent, index: true },
      { path: '/exampleChildNotRoot', component: ExampleChildComponent }
    ]},
    The `path` is the reference url so in your browser it would be www.yourcoolsite.com/example
    The `component` is the component that is displayed in the according <router-outlet> just like how <app-root> is displayed in the body of index.html
    The `index` is declaring that this page is the root of it's subtree so www.yourcoolsite.com would take you to www.yourcoolsite.com/example
    The `chilren' are the sub directories of this path:
      The `path' /exampleChildRoot in your browser would be www.yourcoolsite.com/exampleParent/exampleChildRoot and www.yourcoolsite.com/exampleParent/ would take you to it, since it is INDEX: TRUE
      
    In general Routing passes the designated component into its parent's router-outlet
  */
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];