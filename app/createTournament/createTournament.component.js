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
var router_1 = require('@angular/router');
var player_service_1 = require('../service/player.service');
var CreateTournament = (function () {
    function CreateTournament(router, playerService) {
        this.router = router;
        this.playerService = playerService;
        this.playerName = '';
        this.playerList = [];
        this.isCreationDoneInvisible = true;
    }
    CreateTournament.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayerList().then(function (players) { return _this.playerList = players; });
    };
    CreateTournament.prototype.addPlayer = function () {
        var _this = this;
        this.isCreationDoneInvisible = false;
        this.playerService.addPlayer(this.playerName);
        this.playerName = '';
        this.playerService.getPlayerList().then(function (players) { return _this.playerList = players; });
    };
    CreateTournament.prototype.removePlayer = function (player) {
        var _this = this;
        this.playerService.removePlayer(player);
        this.playerService.getPlayerList().then(function (players) { return _this.playerList = players; });
    };
    CreateTournament.prototype.resetTournament = function () {
        var _this = this;
        this.playerService.resetTournament();
        this.playerService.getPlayerList().then(function (players) { return _this.playerList = players; });
    };
    CreateTournament.prototype.creationDone = function () {
        var link = ['/tournament'];
        this.router.navigate(link);
    };
    CreateTournament = __decorate([
        core_1.Component({
            selector: 'createTournament',
            templateUrl: 'app/createTournament/createTournament.component.html',
            styleUrls: ['app/createTournament/createTournament.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, player_service_1.PlayerService])
    ], CreateTournament);
    return CreateTournament;
}());
exports.CreateTournament = CreateTournament;
//# sourceMappingURL=createTournament.component.js.map