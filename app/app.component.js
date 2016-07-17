"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var player_service_1 = require('./service/player.service');
var AppComponent = (function () {
    function AppComponent(playerService) {
        this.playerService = playerService;
        this.title = 'Tournament';
        // createTournament;
        //
        // constructor(
        //   private createTournament: CreateTournament) {
        //   createTournament = createTournament;
        // }
        this.playerName = '';
        this.playerList = [];
    }
    AppComponent.prototype.addPlayer = function () {
        var _this = this;
        this.playerService.addPlayer(this.playerName);
        this.playerName = '';
        this.playerService.getPlayerList().then(function (players) { return _this.playerList = players; });
    };
    AppComponent.prototype.removePlayer = function (player) {
        var _this = this;
        this.playerService.removePlayer(player);
        this.playerService.getPlayerList().then(function (players) { return _this.playerList = players; });
    };
    AppComponent.prototype.resetTournament = function () {
        var _this = this;
        this.playerService.resetTournament();
        this.playerService.getPlayerList().then(function (players) { return _this.playerList = players; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [
                player_service_1.PlayerService
            ]
        }), 
        __metadata('design:paramtypes', [player_service_1.PlayerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map