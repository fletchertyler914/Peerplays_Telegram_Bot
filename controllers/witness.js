'use strict';

const Telegram = require('telegram-node-bot');
//var { Api } = require("./lib");
//let wsString = "wss://bitshares.openledger.info/ws";

class WitnessController extends Telegram.TelegramBaseController {
    infoHandler($) {
        let text = $.message.text.split(' ');
        let witness = text[1];
        let missed_blocks = 0;
        let successful_blocks = 100;


//        Api.instance(wsString, true).init_promise.then((res) => {
//            console.log(res);

//            function updateObject() {
//                Api.instance().db_api().exec( "get_objects", [ ["2.1.0"] ] ).then(response => {
//                    console.log("Successfully connected to the Openledger API");
//                    console.log("get_object", response);

//                    for (var key in response[0]) {
//                        if (!document.getElementById("td_" + key)) {
//                            var tr = document.createElement("tr");
//                            var keyTd = document.createElement("td");
//                            keyTd.innerText = key;
//                            var definitionTd = document.createElement("td");
//                            definitionTd.innerText = response[0][key];
//                            definitionTd.id = "td_" + key;
//                            definitionTd.style = "font-weight: bold; padding-left: 20px;";
//                            tr.appendChild(keyTd);
//                            tr.appendChild(definitionTd);
//                            globalTable.appendChild(tr);
//                        } else {
//                            var definitionTd = document.getElementById("td_" + key);
//                            definitionTd.innerText = response[0][key];
//                        }
//                    }
//                })
//            }

//            updateObject();
//            setInterval(updateObject, 3000);
//        });

//        function updateListener(object) {
//            console.log("set_subscribe_callback update:\n", object);
//        }



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
