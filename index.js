"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creatureController_1 = require("./src/creatureController");
const mapController_1 = require("./src/mapController");
const creatureMonitor = new creatureController_1.creatureController();
const map = new mapController_1.mapController(null);
creatureMonitor.createNewCreature(15);
creatureMonitor.createNewCreature(30);
creatureMonitor.createNewCreature(120);
creatureMonitor.createNewCreature(60);
creatureMonitor.createNewCreature(45);
creatureMonitor.startMonitoring();
map.showMap();
//# sourceMappingURL=index.js.map