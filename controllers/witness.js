'use strict';

const Telegram = require('telegram-node-bot');

class WitnessController extends Telegram.TelegramBaseController {
    infoHandler($) {
        let text = $.message.text.split(' ');
        let witness = text[1];
        let missed_blocks = 0;
        let successful_blocks = 100;

        if (!witness) {
            return $.sendMessage('Please specify a witness name!');
        }

        return $.sendMessage('Witness: ' + witness + '\nMissed Blocks: ' + missed_blocks + '\nSuccessful Blocks: ' + successful_blocks, { parse_mode: 'Markdown' });

    }

    get routes() {
        return {
            'infoCommand': 'infoHandler',
        };
    }
}

module.exports = WitnessController;
