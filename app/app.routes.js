"use strict";
var router_1 = require('@angular/router');
var createTournament_component_1 = require('./createTournament/createTournament.component');
var routes = [
    {
        path: '',
        redirectTo: '/tournament',
        pathMatch: 'full'
    },
    {
        path: 'newTournament',
        component: createTournament_component_1.CreateTournament
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map