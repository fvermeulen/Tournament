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
var player_1 = require('./player/player');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tournament';
        this.playerId = 0;
        this.playerName = '';
        this.playerList = [];
    }
    AppComponent.prototype.addPlayer = function () {
        var name = this.playerName.trim();
        if (name) {
            if (!this.playerList.length) {
                this.playerId = 0;
            }
            this.playerId++;
            this.playerList.push(new player_1.Player(this.playerId, name));
            this.playerName = '';
        }
    };
    AppComponent.prototype.removePlayer = function (player) {
        var index = this.playerList.indexOf(player);
        if (index == null) {
            //player not found
            return;
        }
        this.playerList.splice(index, 1);
    };
    AppComponent.prototype.resetTournament = function () {
        this.playerList = [];
        this.playerId = 0;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map