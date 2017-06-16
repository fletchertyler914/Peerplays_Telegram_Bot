'use strict';

const Telegram = require('telegram-node-bot'),
      tg = new Telegram.Telegram('<bot key>', {
        workers: 1
    });

const WitnessController = require('./controllers/witness'),
      OtherwiseController = require('./controllers/otherwise');

const witnessCtrl = new WitnessController();

tg.router.when(new Telegram.TextCommand('/info', 'infoCommand'), witnessCtrl)
         .otherwise(new OtherwiseController());

function exitHandler(exitCode) {
    process.exit(exitCode);
}

process.on('SIGINT', exitHandler.bind(null, 0));
process.on('uncaughtException', exitHandler.bind(null, 1));
