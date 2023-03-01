var MPW;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./locale/en/translation.js":
/*!**********************************!*\
  !*** ./locale/en/translation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "en_translation": () => (/* binding */ en_translation)
/* harmony export */ });
const en_translation = {
    // This document is to be used as a template as all the base code is in English
    // Basic HTML tags are allowed such as <b><i> etc. All data is sanitized https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

    // General words
    enabled: "enabled",                    //
    active: "Active",                     //
    disabled: "disabled",                   //
    on:"On",                          //
    experimental:"Experimental",                //
    amount:"Amount",                      //
    staking:"Staking",                     //
    rewards:"rewards",                     //
    available:"Available",                   //

    // Nav Bar
    navIntro: "Intro",                   //
    navDashboard: "Dashboard",               //
    navSend: "Send",                    //
    navStake: "Stake",                   //
    navMasternode: "Masternode",              //
    navGovernance:"Governance",               //
    navSettings: "Settings",                //

    navTestnet: "<b>Testnet Mode On</b>",                 //
    navNetwork: "<b>Network:</b>",                 //
    navDebug: "Debug",                   //
    navExperimentalSync:"<b>Experimental Sync Active</b>",         //

    // Footer
    footerBuiltWithPivxLabs: "Built with 💜 by PIVX Labs",    //
    footerGithubLink: "MyPIVXWallet",           //

    // Intro
    title: "Welcome to",                      //
    titleName: "My PIVX Wallet!",                  //

    cardOneTitle: "Be your own Bank!",               //
    cardOneDesc: "MyPIVXWallet has <b>no custody</b> over your funds. You are in full ownership of your keys and your PIV. ",                //
    cardOneLink: "Know more",                //

    cardTwoTitle: "Universal and Portable",               //
    cardTwoDesc: "You can generate cryptographically-secure addresses with your browser and hardware.",                // 
    cardTwoLink: "Know more",                //

    cardThreeTitle: "Don't trust, verify!",             //
    cardThreeDesc: "MyPIVXWallet is completely open-source, available on the PIVX Labs github.",              //
    cardThreeLink: "Know more",              //

    cardFourTitle: "For the community",              //
    cardFourDesc: "MyPIVXWallet is built with love without any fees, privacy intrusions or advertising. ",               //
    cardFourLink: "Know more",               //

    // Dashboard
    dashboardTitle: "Dashboard",             //
    dCardOneTitle: "Create a",              //
    dCardOneSubTitle: "New Wallet",           //
    dCardOneDesc: "Create a new PIVX wallet, offering the most secure backup & security methods.",               //
    dCardOneButton: "Create A New Wallet",             //

    dCardTwoTitle: "Create a new",              //
    dCardTwoSubTitle: "Vanity Wallet",           //
    dCardTwoDesc: "Create a wallet with a custom prefix, this can take a long time!",               //
    dCardTwoButton: "Create A Vanity Wallet",             //

    dCardThreeTitle: "Access your",            //
    dCardThreeSubTitle: "Ledger Wallet",         //
    dCardThreeDesc: "Use your Ledger Hardware wallet with MPW's familiar interface.",             //
    dCardThreeButton: "Access my Ledger",           //

    dCardFourTitle: "Go to",             //
    dCardFourSubTitle: "My Wallet",          //
    dCardFourDesc: "Import a PIVX wallet using a Private Key, xpriv, or Seed Phrase.",              //
    dCardFourButtonI:"Import Wallet",            //
    dCardFourButtonA:"Access My Wallet",            //

    // Send
    sendTitle: "Create a",                  //
    sendSubTitle: "Transaction",               //
    sendShieldingWarning: "Please <b>AVOID</b> sending to Shielded addresses using this wallet - this functionality is currently unsupported.",       //

    sendSimpleTxTitle: "Create Simple Transactions",          //
    sendSimpleTxAddress: "Address",        //
    sendSimpleTxAll: "(Send All)",            //
    sendSimpleTxDesc: "Description (from the merchant)",           //
    sendSimpleTxButton:"Send Transaction",          //

    sendManualTxTitle:"Create Manual Transactions",           //
    sendManualTxInput:"Inputs",           //
    sendManualTxTRXHash: "Trx Hash",        //
    sendManualTxIndex:"Index",           //
    sendManualTxScript:"Script",          //
    sendManualTxOutputs:"Outputs",         //
    sendManualTxOutputAddr:"Output address 1",      //
    sendManualTxOutputAddrTwo:"Output address 2",   //
    sendManualTxWIFKey:"WIF key",          //
    sendManualTxWarning:"<b>WARNING:</b> ANY FUNDS NOT ALLOCATED WILL BE USED AS FEES",         //
    sendManualTxButton:"Create Raw Signed Transction",          //
    sendSignedRawTx:"Signed Raw Transaction",             //
    sendSignedTutorial:"Don't understand how this works? ",          //
    sendSignedTutorialLink:"Tutorial Here",      //
    sendSignedTutorialAdvInfo:"Advanced Details: <br>locktime is set to 0, sequence is set to max. SIGHASH_ALL option is chosen for signing raw Transaction.",   //

    // Stake
    stakeTitle:"Stake your PIV to generate rewards!",                  //
    stakeSubTitle:"Coins that you Stake are \"Locked\" seperately from your Available balance, and have a chance to generate rewards. <br> The more coins you stake, the more frequently you'll receive rewards.",               //
    stake:"Stake",
    stakeUnstake:"Unstake",                //
    stakeLoadMore:"Load more",               //

    // Governance
    contestedProposalsTitle:"Contested Proposals",
    contestedProposalsDesc:"These are proposals that received an overwhelming amount of downvotes, making it likely spam or a highly contestable proposal.",

    // Settings
    settingsCurrency:"Choose a display currency:",
    settingsExplorer:"Choose an explorer:",            //
    settingsLanguage:"Choose a Language:",            //
    settingsPivxNode:"Choose a PIVX node:",            //
    settingsAnalytics:"Choose your analytics contribution level:",           //
    settingsToggleDebug:"Toggle Debug Mode",         //
    settingsToggleSync:"Toggle Sync Mode",          //
    settingsToggleTestnet:"Toggle Testnet Mode",       //

    // Transparency Report
    transparencyReport: "Transparency Report",
    hit:"A ping indicating an app load, no unique data is sent.",
    time_to_sync:"The time in seconds it took for MPW to last synchronise.",
    transaction:"A ping indicating a Tx, no unique data is sent, but may be inferred from on-chain time.",

    // Alerts
    ALERTS: "<-- DO NOT EDIT! All below entries are for Alert Popups",

    FAILED_TO_IMPORT: '<b>Failed to import!</b> Invalid password',
    TESTNET_ENCRYPTION_DISABLED: "<b>Testnet Mode is ON!</b><br>Wallet encryption disabled",
    PASSWORD_TOO_SMALL: "That password is a little short!<br>Use at least <b>{MIN_PASS_LENGTH} characters.</b>",
    PASSWORD_DOESNT_MATCH: 'Your passwords don\'t match!',
    NEW_PASSWORD_SUCCESS: '<b>You\'re Secured! 🔐</b><br>Nice stuff, Armoured PIVian!',
    INVALID_AMOUNT: '<b>Invalid amount!</b><br>',
    UNSUPPORTED_CHARACTER: "The character '{char}' is unsupported in addresses! (Not Base58 compatible)",
    UNSUPPORTED_WEBWORKERS: "This browser doesn\'t support Web Workers (multi-threaded JS), unfortunately you cannot generate Vanity wallets!",
    INVALID_ADDRESS: "<b>Invalid PIVX address!</b><br> {address}",
    VALIDATE_AMOUNT_LOW: '<br>Minimum amount is {minimumAmount} {coinTicker}!',
    VALIDATE_AMOUNT_DECIMAL: '{coinDecimal} decimal limit exceeded',
    SUCCESS_STAKING_ADDR: '<b>Staking Address set!</b><br>Now go ahead and unstake!',
    CONFIRM_UNSTAKE_H_WALLET:"<b>Confirm your Unstake</b><br>Confirm the TX on your {strHardwareName}",
    CONFIRM_TRANSACTION_H_WALLET:"<b>Confirm your transaction</b><br>Confirm the TX on your {strHardwareName}",
    SUCCESS_STAKING_ADDR_SET: '<b>Staking Address set!</b><br>Now go ahead and stake!',
    STAKE_NOT_SEND: 'Here, use the <b>Stake</b> screen, not the Send screen!',
    BAD_ADDR_LENGTH: '<b>Invalid PIVX address!<b><br>Bad length ({addressLength})',
    BAD_ADDR_PREFIX: '<b>Invalid PIVX address!<b><br>Bad prefix {address} (Should start with {addressPrefix})',
    SENT_NOTHING: 'You can\'t send \'nothing\'!',
    MORE_THEN_8_DECIMALS: '8 decimal limit exceeded',
    SAVE_WALLET_PLEASE: "<b>Save your wallet!</b><br>Dashboard ➜ Set Password",
    BACKUP_OR_ENCRYPT_WALLET: "Please ENCRYPT and/or BACKUP your keys before leaving, or you may lose them!",
    
    SWITCHED_EXPLORERS : "<b>Switched explorer!</b><br>Now using {explorerName}",
    SWITCHED_NODE : "<b>Switched node!</b><br>Now using {node}",
    SWITCHED_ANALYTICS: "<b>Switched analytics level!</b><br>Now {level}",
    SWITCHED_SYNC: "<b>Switched sync mode!</b><br>Now using {sync} sync",
    UNABLE_SWITCH_TESTNET: "<b>Unable to switch Testnet Mode!</b><br>A wallet is already loaded",

    WALLET_OFFLINE_AUTOMATIC: "<b>Offline Mode is active!</b><br>Please disable Offline Mode for automatic transactions",
    WALLET_UNLOCK_IMPORT: "Please {unlock} your wallet before sending transactions!",
    WALLET_FIREFOX_UNSUPPORTED: "<b>Firefox doesn't support this!</b><br>Unfortunately, Firefox does not support hardware wallets",
    WALLET_HARDWARE_WALLET:"<b>Hardware wallet ready!</b><br>Please keep your {hardwareWallet} plugged in, unlocked, and in the PIVX app",
    WALLET_CONFIRM_L:"Confirm the import on your Ledger",
    WALLET_NO_HARDWARE: "<b>No device available</b><br>Couldn't find a hardware wallet; please plug it in and unlock!",
    WALLET_HARDWARE_CONNECTION_LOST: "<b>Lost connection to {hardwareWallet} </b><br>It seems the {hardwareWallet} was unplugged mid-operation, oops!",
    WALLET_HARDWARE_BUSY: "<b>{hardwareWallet} is waiting</b><br>Please unlock your {hardwareWallet} or finish it's current prompt",
    WALLET_HARDWARE_ERROR: "<b> {hardwareWallet} </b><br> {error}",


    CONFIRM_POPUP_VOTE: "Confirm Vote",             
    CONFIRM_POPUP_VOTE_HTML: "Are you sure? It takes 60 minutes to change vote",        
    CONFIRM_POPUP_TRANSACTION: "Confirm your transaction",      
    CONFIRM_POPUP_MN_P_KEY: "Your Masternode Private Key",         
    CONFIRM_POPUP_MN_P_KEY_HTML: "<br> Save this private key and copy it to your VPS config <br>",  
    CONFIRM_POPUP_VERIFY_ADDR: "Verify your address",      

}


/***/ }),

/***/ "./locale/uwu/translation.js":
/*!***********************************!*\
  !*** ./locale/uwu/translation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uwu_translation": () => (/* binding */ uwu_translation)
/* harmony export */ });
const uwu_translation = {
    // This document is to be used as a template as all the base code is in English
    // Basic HTML tags are allowed such as <b><i> etc. All data is sanitized https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

    // General words
    enabled: "enabwed",                    //enabled
    active: "",                     //Active
    disabled: "disabwed",                   //disabled
    on:"",                          //On
    experimental:"Oh no! Dangewous!",                //Experimental
    amount:"a<i>meow</i>nt",                      //Amount
    staking:"",                     //Staking
    rewards:"rewowods",                     //rewards
    available:"Avawable",                   //Available

    // Nav Bar
    navIntro: "Intwo",                   //Intro
    navDashboard: "Dashbowed",               //Dashboard
    navSend: "Send❣",                    //Send
    navStake: "",                   //Stake
    navMasternode: "",              //Masternode
    navGovernance:"",               //Governance
    navSettings: "",                //Settings

    navTestnet: "Testnet Mowode On",                 //<b>Testnet Mode On</b>
    navNetwork: "<b>Netwowork</b>",                 //<b>Network:</b>
    navDebug: "Debuwug",                   //Debug
    navExperimentalSync:"<b>Dangewous sync actiwated!</b>",         //<b>Experimental Sync Active</b>

    // Footer
    footerBuiltWithPivxLabs: "Built with wuv by PIVX Wabs❣",    //Built with 💜 by PIVX Labs
    footerGithubLink: "",           //MyPIVXWallet

    // Intro
    title: "Wewcome to",                      //Welcome to
    titleName: "My PIVX Wawwet!",                  //My PIVX Wallet!

    cardOneTitle: "Be da bank!",               //Be your own Bank!
    cardOneDesc: "MyPIVXWawwet has <b>nowo custody</b> over yowour funds. You are in full owonership of your keys and your PIV.",                //MyPIVXWallet has <b>no custody</b> over your funds. You are in full ownership of your keys and your PIV. 
    cardOneLink: "Knowo mowore",                //Know more

    cardTwoTitle: "Univewsal and Portabwe",               //Universal and Portable
    cardTwoDesc: "Yowou can genewate cwyptogwaphicawwy-secuwe adwesses with yowour bwowoser and hawdware.",                //You can generate cryptographically-secure addresses with your browser and hardware. 
    cardTwoLink: "Knowo mowore",                //Know more

    cardThreeTitle: "Dun trust, vewify!",             //Don't trust, verify!
    cardThreeDesc: "MYPIVXWawwet is compwetewy open-soworce, avawable on da PIVX Wabs Github.",              //MyPIVXWallet is completely open-source, available on the PIVX Labs github.
    cardThreeLink: "Knowo mowore",              //Know more

    cardFourTitle: "For da Commuwunity",              //For the community
    cardFourDesc: "MyPIVXWawwet is built with wuv without any fees, pwiwacy intruwutions, or adwertizing.",               //MyPIVXWallet is built with love without any fees, privacy intrusions or advertising. 
    cardFourLink: "Knowo mowore",               //Know more

    // Dashboard
    dashboardTitle: "Dashbowod",             //Dashboard
    dCardOneTitle: "Cweate a",              //Create a
    dCardOneSubTitle: "New Wawwet!",           //New Wallet
    dCardOneDesc: "Cweate a new PIVX wawwet, offewing da most secuwur backup & securrrity methods.",               //Create a new PIVX wallet, offering the most secure backup & security methods.
    dCardOneButton: "Cweate A New Wawwet",             //Create A New Wallet

    dCardTwoTitle: "Cweate a new",              //Create a new
    dCardTwoSubTitle: "Vanity Wawwet",           //Vanity Wallet
    dCardTwoDesc: "Cweate a wawwet wiv a custom pwefix, dis can take a long twime!",               //Create a wallet with a custom prefix, this can take a long time!
    dCardTwoButton: "Cweate A Vanity Wawwet",             //Create A Vanity Wallet

    dCardThreeTitle: "Access yowour",            //Access your
    dCardThreeSubTitle: "Hawdware Wawwet",         //Hardware Wallet
    dCardThreeDesc: "Use ur Ledger Hardware wawwet wiv MPW's famiwiar intwerface.",             //Use your Ledger Hardware wallet with MPW's familiar interface.
    dCardThreeButton: "Access my Ledger",           //Access my Ledger

    dCardFourTitle: "Go to",             //Go to
    dCardFourSubTitle: "My Wawwet",          //My Wallet
    dCardFourDesc: "Impowt a PIVX wawwet using a Pwivate Key, xpriv, or Seed Phrase.",              //Import a PIVX wallet using a Private Key, xpriv, or Seed Phrase.
    dCardFourButtonI:"Impowt Wawwet",            //Import Wallet
    dCardFourButtonA:"Access My Wawwet",            //Access My Wallet

    // Send
    sendTitle: "Cweate a",                  //Create a
    sendSubTitle: "Twansaction",               //Transaction
    sendShieldingWarning: "Pwetty Pwease <b>AVOID</b> sending to Sheilded addwesses using dis wawwet, dis functionawity is cuwwentwy unsu<i>purr</i>ted.",       //Please <b>AVOID</b> sending to Shielded addresses using this wallet - this functionality is currently unsupported.

    sendSimpleTxTitle: "Cweate Simple Twansactions",          //Create Simple Transactions
    sendSimpleTxAddress: "Addwess",        //Address
    sendSimpleTxAll: "(Send All♡)",            //(Send All)
    sendSimpleTxDesc: "Deswiption (fwom da Mewrchant)",           //Description (from the merchant)
    sendSimpleTxButton:"Send Twansaction",          //Send Transaction

    sendManualTxTitle:"Cweate Manuwual Twansactions",           //Create Manual Transactions
    sendManualTxInput:"",           //Inputs
    sendManualTxTRXHash: "",        //Trx Hash
    sendManualTxIndex:"",           //Index
    sendManualTxScript:"Scwipt",          //Script
    sendManualTxOutputs:"",         //Outputs
    sendManualTxOutputAddr:"Output addwess 1",      //Output address 1
    sendManualTxOutputAddrTwo:"Output addwess 2",   //Output address 2
    sendManualTxWIFKey:"",          //WIF key
    sendManualTxWarning:"<b>WARNING:</b> ANY FUNDS NOT AWWOCATED WILL BE USED AS FEES",         //<b>WARNING:</b> ANY FUNDS NOT ALLOCATED WILL BE USED AS FEES
    sendManualTxButton:"Cweate Rawr Signed Twansaction",          //Create Raw Signed Transction
    sendSignedRawTx:"Signed Rawr Twansaction",             //Signed Raw Transaction
    sendSignedTutorial:"Don't undewstand how dis works?",          //Don't understand how this works? 
    sendSignedTutorialLink:"Tutowial hewe!",      //Tutorial Here
    sendSignedTutorialAdvInfo:"Advanced Detaiws: <br>wocktime is set to zewo, sequence is set to max. SIGHASH_ALL option is chosen for signing rawr Twansaction.",   //Advanced Details: <br>locktime is set to 0, sequence is set to max. SIGHASH_ALL option is chosen for signing raw Transaction.

    // Stake
    stakeTitle:"Stake ur PIV to genewwate wewards!",                  //Stake your PIV to generate rewards!
    stakeSubTitle:"Coins dat you Stake are \"Locked\" sepewately from ur Avaiwable bwalance, and havs a chance to genewwate rewawrds. <br> Da more coins you stake, da more frequwuntly you'll receive rewawrds.",               // Coins that you Stake are \"Locked\" seperately from your Available balance, and have a chance to generate rewards. <br> The more coins you stake, the more frequently you'll receive rewards.
    stake:"", //Stake
    stakeUnstake:"",                //Unstake
    stakeLoadMore:"Lowoad Mowore",               //Load more

    // Governance
    contestedProposalsTitle:"Contwested Pwoposals",
    contestedProposalsDesc:"Dees are pwoposals dat received an overwhelming ameownt of downwotes, making it likely spam or a highly contwestable pwoposal.",

    // Settings
    settingsCurrency:"Chowose a dispway cuwwency:",
    settingsExplorer:"Chowose an expwower:",            //Choose an explorer:
    settingsLanguage:"Chowose a Languwuage!",            //Choose a Language:
    settingsAnalytics:"Chowose your anawytics contwibution wevel:",           //Choose your analytics contribution level:
    settingsPivxNode:"Chowose a PIVX nowode pwease:",            //Choose a PIVX node:
    settingsToggleDebug:"Toggle Debug Mowode",         //Toggle Debug Mode
    settingsToggleSync:"Toggle Sync Mowode",          //Toggle Sync Mode
    settingsToggleTestnet:"Toggle Testnet Mowode",       //Toggle Testnet Mode

    // Transparency Report
    transparencyReport: "Twanspawency Repawt",
    hit:"A ping indicating an app load, no unique data is sent.♡",
    time_to_sync:"The time in seconds it took for MPW to last synchronise.♡",
    transaction:"A ping indicating a Tx, no unique data is sent, but may be infewwed from on-chain time.♡",
    
    // Alerts
    ALERTS: "<-- DO NOT EDIT! All below entries are for Alert Popups",

    FAILED_TO_IMPORT:"<b>Faiwed to impawt!</b> Invawed password! Baka!",             //'<b>Failed to import!</b> Invalid password',
    TESTNET_ENCRYPTION_DISABLED:"<b>Testnet Mowode in ON!</b><br>Wawwet encwyption disabwed",  //"<b>Testnet Mode is ON!</b><br>Wallet encryption disabled",
    PASSWORD_TOO_SMALL:"Dat password is a wittle short!<br>Pwease use at least<b> {MIN_PASS_LENGTH} chawacters!</b>",           //"That password is a little short!<br>Use at least <b>" + MIN_PASS_LENGTH + " characters.</b>",
    PASSWORD_DOESNT_MATCH:"Yowour passwords dun match!! baka!!",        //'Your passwords don\'t match!',
    NEW_PASSWORD_SUCCESS:"<b>Yowou\'re Secuwed!</b><br>Good Job, PIVX Pogchamp!",         //'<b>You\'re Secured! 🔐</b><br>Nice stuff, Armoured PIVian!',
    INVALID_AMOUNT:"<b>Invawed a<i>meow</i>nt</b><br>",               //'<b>Invalid amount!</b><br>',
    UNSUPPORTED_CHARACTER:  "The chawacter '{char}' is unsupurrted in addwesses! (Not Base58 compatible)",        //"The character '{char}' is unsupported in addresses! (Not Base58 compatible)"
    UNSUPPORTED_WEBWORKERS: "Dis bwowser doesn't suppurrt web workers",      //This browser doesn\'t support Web Workers (multi-threaded JS), unfortunately you cannot generate Vanity wallets!
    INVALID_ADDRESS: "<b>Invawed PIVX addwess baka</b><br> {address} ",            //<b>Invalid PIVX address!<b><br> {address}
    VALIDATE_AMOUNT_LOW:"<br>Minimum ameownt is {minimumAmount} {coinTicker}!",          //'<br>Minimum amount is ',
    VALIDATE_AMOUNT_DECIMAL:" decimal wimit exceeded. Yowouve gone too fawr!",      //' decimal limit exceeded',
    SUCCESS_STAKING_ADDR:"<b>Staking Addwess set!</b><br>Now go ahead and unstake senpai❣",         //'<b>Staking Address set!</b><br>Now go ahead and unstake!',
    CONFIRM_UNSTAKE_H_WALLET:"<b> Confirm yowour Unstake</b><br>Confirm da TX on yowour {strHardwareName}",     //"<b>Confirm your Unstake</b><br>Confirm the TX on your ",
    CONFIRM_TRANSACTION_H_WALLET:"<b>Confirm yowoure twansaction</b><br>Confirm da TX on yowour {strHardwareName}", //"<b>Confirm your transaction</b><br>Confirm the TX on your ",
    SUCCESS_STAKING_ADDR_SET:"<b>Staking Addwess set!~</b><br>Now go ahead and stake senpai❣",     //'<b>Staking Address set!</b><br>Now go ahead and stake!',
    STAKE_NOT_SEND:"Here senpai❣ use da <b>Stake</b> scween, Not da send scween, baka!",               //'Here, use the <b>Stake</b> screen, not the Send screen!',
    BAD_ADDR_LENGTH:"<b>Invawed PIVX addwess!</b><br>Bad wength ({addressLength})",              //'<b>Invalid PIVX address!<b><br>Bad length ({addressLength})',
    BAD_ADDR_PREFIX:"<b>Invawed PIVX addwess! Baka!</b><br>Bad pwefix {address} (Should start with {addressPrefix})",              //'<b>Invalid PIVX address!<b><br>Bad prefix {address} (Should start with {addressPrefix})',
    SENT_NOTHING:"You can\'t send nothing!! Baka!",                 //'You can\'t send \'nothing\'!',
    MORE_THEN_8_DECIMALS:"8 decimal wimit exceeded. Too many nyumbers!!",         //'8 decimal limit exceeded',
    SAVE_WALLET_PLEASE:"<b>Save yowour wawwet!</b><br>Dashbowed ➜ Set Password",           // "<b>Save your wallet!</b><br>Dashboard ➜ Set Password",
    BACKUP_OR_ENCRYPT_WALLET:"Pwease ENCWYPT and/or BACKUP yowour keys befowe weaving, or you may lose dem! Oh noes!",     // "Please ENCRYPT and/or BACKUP your keys before leaving, or you may lose them!"

    SWITCHED_EXPLORERS : "<b>Switched expwower!</b><br>Nowo using {explorerName}✿",         //<b>Switched explorer!</b><br>Now using {explorerName},
    SWITCHED_NODE : "<b>Switched nowode!✿</b><br>Nowo using {node}",              //<b>Switched node!</b><br>Now using {node},
    SWITCHED_ANALYTICS: "<b>Switched anawytics wevel!</b><br>Nowo {level}",          //<b>Switched analytics level!</b><br>Now {level},
    SWITCHED_SYNC: "<b>Switched sync mowode!✿</b><br>Nowo using {sync} sync",               //<b>Switched sync mode!</b><br>Now using {sync} sync,
    UNABLE_SWITCH_TESTNET: "<b>Unable to switch Testnet Mowode!</b><br>A wawwet is alweady woaded✿",       //<b>Unable to switch Testnet Mode!</b><br>A wallet is already loaded

    WALLET_OFFLINE_AUTOMATIC: "<b>Offwine Mowode is active!</b><br>Pwease disabwe Offwine Mowode for automatic twansactions",       //"<b>Offline Mode is active!</b><br>Please disable Offline Mode for automatic transactions",
    WALLET_UNLOCK_IMPORT: "Pwease {unlock} your wawwet befowore sending twansactions!",           //"Please {unlock} your wallet before sending transactions!",
    WALLET_FIREFOX_UNSUPPORTED: "Oh noes!<b>Firefox senpai doesn't sup<i>purr</i>t this!</b><br>Unfortunatewy, Firefox senpai does not sup<i>purr</i>t hawdware wawwets",     //"<b>Firefox doesn't support this!</b><br>Unfortunately, Firefox does not support hardware wallets",
    WALLET_HARDWARE_WALLET: "<b>Hawdware wawwet ready!</b><br>Pwease keep your {hardwareWallet} pwugged in, unwocked, and in da PIVX app ♥",         //"<b>Hardware wallet ready!</b><br>Please keep your {hardwareWallet} plugged in, unlocked, and in the PIVX app",
    WALLET_CONFIRM_L: "Confiwm da impowot on your Wedger",               //"Confirm the import on your Ledger",
    WALLET_NO_HARDWARE: "<b>No device avaiwable ☹</b><br>Couldn't find a hawdware wawwet; pwease pwug it in and unwock!",             //"<b>No device available</b><br>Couldn't find a hardware wallet; please plug it in and unlock!",
    WALLET_HARDWARE_CONNECTION_LOST: "<b>Wost connection to da {hardwareWallet} </b><br>It seems da {hardwareWalletProductionName} was unpwugged mid-opewation, oops!!",// "<b>Lost connection to {hardwareWallet} </b><br>It seems the {hardwareWalletProductionName} was unplugged mid-operation, oops!",
    WALLET_HARDWARE_BUSY: "<b>{hardwareWallet} is waiting!</b><br>Pwease unwock yowour {hardwareWalletProductionName} or finish it's cuwwent pwompt",           //"<b>{hardwareWallet} is waiting</b><br>Please unlock your {hardwareWalletProductionName} or finish it's current prompt",
    WALLET_HARDWARE_ERROR: "<b> {hardwareWallet} </b><br> {error}",          //"<b> {hardwareWallet} </b><br> {error}"


    CONFIRM_POPUP_VOTE: "Confiwm Vowote!",             //Confirm Vote
    CONFIRM_POPUP_VOTE_HTML: "Are you suuure? It takes 60 minutes to change yowour vowote",        //Are you sure? It takes 60 minutes to change vote
    CONFIRM_POPUP_TRANSACTION: "Confiwm yowour twansaction",      //Confirm your transaction
    CONFIRM_POPUP_MN_P_KEY: "Yowour Masternode Pwivate Key",         //Your Masternode Private Key
    CONFIRM_POPUP_MN_P_KEY_HTML: "<br> Save dis pwivate key and copy it to yowour VPS config <br>",    // <br> Save this private key and copy it to your VPS config <br>
    CONFIRM_POPUP_VERIFY_ADDR: "Vewify yowour addwess",      //Verify your address
}


/***/ }),

/***/ "./scripts/aes-gcm.js":
/*!****************************!*\
  !*** ./scripts/aes-gcm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decrypt": () => (/* binding */ decrypt),
/* harmony export */   "encrypt": () => (/* binding */ encrypt)
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
const buff_to_base64 = (buff) => btoa(String.fromCharCode.apply(null, buff));

const base64_to_buf = (b64) =>
    Uint8Array.from(atob(b64), (c) => c.charCodeAt(null));

const enc = new TextEncoder();
const dec = new TextDecoder();

async function encrypt(data, strPassword = '') {
    const strPass =
        strPassword ||
        window.prompt('Please enter your wallet encryption password');
    if (!strPass) return false;
    return await encryptData(data, strPass);
}

async function decrypt(data, strPassword) {
    const strPass =
        strPassword ||
        window.prompt('Please enter your wallet unlock password');
    if (!strPass) return false;
    return (await decryptData(data, strPass)) || 'decryption failed!';
}

const getPasswordKey = (password) =>
    window.crypto.subtle.importKey(
        'raw',
        enc.encode(password),
        'PBKDF2',
        false,
        ['deriveKey']
    );

const deriveKey = (passwordKey, salt, keyUsage) =>
    window.crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt,
            iterations: 250000,
            hash: 'SHA-256',
        },
        passwordKey,
        { name: 'AES-GCM', length: 256 },
        false,
        keyUsage
    );

async function encryptData(secretData, password) {
    try {
        const salt = window.crypto.getRandomValues(new Uint8Array(16));
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        const passwordKey = await getPasswordKey(password);
        const aesKey = await deriveKey(passwordKey, salt, ['encrypt']);
        const encryptedContent = await window.crypto.subtle.encrypt(
            {
                name: 'AES-GCM',
                iv: iv,
            },
            aesKey,
            enc.encode(secretData)
        );

        const encryptedContentArr = new Uint8Array(encryptedContent);
        let buff = new Uint8Array(
            salt.byteLength + iv.byteLength + encryptedContentArr.byteLength
        );
        buff.set(salt, 0);
        buff.set(iv, salt.byteLength);
        buff.set(encryptedContentArr, salt.byteLength + iv.byteLength);
        return buff_to_base64(buff);
    } catch (e) {
        console.log(`Error - ${e}`);
        return '';
    }
}

async function decryptData(encryptedData, password) {
    try {
        const encryptedDataBuff = base64_to_buf(encryptedData);
        const salt = encryptedDataBuff.slice(0, 16);
        const iv = encryptedDataBuff.slice(16, 16 + 12);
        const data = encryptedDataBuff.slice(16 + 12);
        const passwordKey = await getPasswordKey(password);
        const aesKey = await deriveKey(passwordKey, salt, ['decrypt']);
        const decryptedContent = await window.crypto.subtle.decrypt(
            {
                name: 'AES-GCM',
                iv: iv,
            },
            aesKey,
            data
        );
        return dec.decode(decryptedContent);
    } catch (e) {
        console.log(`Error - ${e}`);
        return '';
    }
}


/***/ }),

/***/ "./scripts/chain_params.js":
/*!*********************************!*\
  !*** ./scripts/chain_params.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COIN": () => (/* binding */ COIN),
/* harmony export */   "COIN_DECIMALS": () => (/* binding */ COIN_DECIMALS),
/* harmony export */   "MAX_ACCOUNT_GAP": () => (/* binding */ MAX_ACCOUNT_GAP),
/* harmony export */   "MIN_PASS_LENGTH": () => (/* binding */ MIN_PASS_LENGTH),
/* harmony export */   "PRIVKEY_BYTE_LENGTH": () => (/* binding */ PRIVKEY_BYTE_LENGTH),
/* harmony export */   "cChainParams": () => (/* binding */ cChainParams)
/* harmony export */ });
// In most BTC-derived coins, the below parameters can be found in the 'src/chainparams.cpp' Mainnet configuration.
// These below params share the same names as the CPP params, so finding and editing these is easy-peasy!
// <[network_byte] [32_byte_payload] [0x01] [4_byte_checksum]>
const PRIVKEY_BYTE_LENGTH = 38;

const COIN_DECIMALS = 8;
const COIN = 10 ** 8;

/** The maximum gap (absence of transactions within a range of derived addresses) before an account search ends */
const MAX_ACCOUNT_GAP = 20;

/* Internal tweaking parameters */
// A new encryption password must be 'at least' this long.
const MIN_PASS_LENGTH = 6;

/* chainparams */
const cChainParams = {
    current: null,
    main: {
        collateralInSats: 10000 * COIN,
        isTestnet: false,
        TICKER: 'PIV',
        PUBKEY_PREFIX: ['D'],
        STAKING_PREFIX: 'S',
        PUBKEY_ADDRESS: 30,
        SECRET_KEY: 212,
        BIP44_TYPE: 119,
        BIP44_TYPE_LEDGER: 77,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 51472,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'rockdev', url: 'https://explorer.rockdev.org' },
            { name: 'zkBitcoin', url: 'https://zkbitcoin.com' },
        ],
        Nodes: [{ name: 'duddino', url: 'https://rpc.duddino.com/mainnet' }],
        Consensus: {
            // Network upgrades
            UPGRADE_V6_0: undefined,
        },
    },
    testnet: {
        collateralInSats: 10000 * COIN,
        isTestnet: true,
        TICKER: 'tPIV',
        PUBKEY_PREFIX: ['x', 'y'],
        STAKING_PREFIX: 'W',
        PUBKEY_ADDRESS: 139,
        SECRET_KEY: 239,
        BIP44_TYPE: 1,
        BIP44_TYPE_LEDGER: 1,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 51474,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'rockdev', url: 'https://testnet.rockdev.org' },
        ],
        Nodes: [{ name: 'duddino', url: 'https://rpc.duddino.com/testnet' }],
        Consensus: {
            // Network upgrades
            UPGRADE_V6_0: undefined,
        },
    },
};
// Set default chain
cChainParams.current = cChainParams.main;


/***/ }),

/***/ "./scripts/global.js":
/*!***************************!*\
  !*** ./scripts/global.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accessOrImportWallet": () => (/* binding */ accessOrImportWallet),
/* harmony export */   "askForCSAddr": () => (/* binding */ askForCSAddr),
/* harmony export */   "beforeUnloadListener": () => (/* binding */ beforeUnloadListener),
/* harmony export */   "cachedColdStakeAddr": () => (/* binding */ cachedColdStakeAddr),
/* harmony export */   "checkVanity": () => (/* binding */ checkVanity),
/* harmony export */   "destroyMasternode": () => (/* binding */ destroyMasternode),
/* harmony export */   "doms": () => (/* binding */ doms),
/* harmony export */   "generateVanityWallet": () => (/* binding */ generateVanityWallet),
/* harmony export */   "getBalance": () => (/* binding */ getBalance),
/* harmony export */   "getStakingBalance": () => (/* binding */ getStakingBalance),
/* harmony export */   "guiEncryptWallet": () => (/* binding */ guiEncryptWallet),
/* harmony export */   "guiImportWallet": () => (/* binding */ guiImportWallet),
/* harmony export */   "guiPreparePayment": () => (/* binding */ guiPreparePayment),
/* harmony export */   "hideAllWalletOptions": () => (/* binding */ hideAllWalletOptions),
/* harmony export */   "importMasternode": () => (/* binding */ importMasternode),
/* harmony export */   "isMasternodeUTXO": () => (/* binding */ isMasternodeUTXO),
/* harmony export */   "mempool": () => (/* binding */ mempool),
/* harmony export */   "onPrivateKeyChanged": () => (/* binding */ onPrivateKeyChanged),
/* harmony export */   "openTab": () => (/* binding */ openTab),
/* harmony export */   "playMusic": () => (/* binding */ playMusic),
/* harmony export */   "refreshChainData": () => (/* binding */ refreshChainData),
/* harmony export */   "restoreWallet": () => (/* binding */ restoreWallet),
/* harmony export */   "selectMaxBalance": () => (/* binding */ selectMaxBalance),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "startMasternode": () => (/* binding */ startMasternode),
/* harmony export */   "toClipboard": () => (/* binding */ toClipboard),
/* harmony export */   "toggleDropDown": () => (/* binding */ toggleDropDown),
/* harmony export */   "toggleExportUI": () => (/* binding */ toggleExportUI),
/* harmony export */   "unblurPrivKey": () => (/* binding */ unblurPrivKey),
/* harmony export */   "updateMasternodeTab": () => (/* binding */ updateMasternodeTab),
/* harmony export */   "updateStakingRewardsGUI": () => (/* binding */ updateStakingRewardsGUI),
/* harmony export */   "wipePrivateData": () => (/* binding */ wipePrivateData)
/* harmony export */ });
/* harmony import */ var _mempool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mempool.js */ "./scripts/mempool.js");
/* harmony import */ var _masternode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masternode.js */ "./scripts/masternode.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n.js */ "./scripts/i18n.js");
/* harmony import */ var jdenticon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jdenticon */ "./node_modules/jdenticon/dist/jdenticon-module.mjs");
/* harmony import */ var _wallet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet.js */ "./scripts/wallet.js");
/* harmony import */ var _network_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./network.js */ "./scripts/network.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.js */ "./scripts/settings.js");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./misc.js */ "./scripts/misc.js");
/* harmony import */ var _chain_params_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chain_params.js */ "./scripts/chain_params.js");
/* harmony import */ var _aes_gcm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aes-gcm.js */ "./scripts/aes-gcm.js");
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./native.js */ "./scripts/native.js");
/* harmony import */ var _prices_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./prices.js */ "./scripts/prices.js");
/* harmony import */ var ip_address__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ip-address */ "./node_modules/ip-address/dist/esm/ip-address.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");















let doms = {};

function start() {
    doms = {
        domStart: document.getElementById('start'),
        domInstall: document.getElementById('installTab'),
        domNavbarToggler: document.getElementById('navbarToggler'),
        domGuiStaking: document.getElementById('guiStaking'),
        domGuiWallet: document.getElementById('guiWallet'),
        domGuiBalance: document.getElementById('guiBalance'),
        domGuiBalanceTicker: document.getElementById('guiBalanceTicker'),
        domGuiBalanceValue: document.getElementById('guiBalanceValue'),
        domGuiBalanceValueCurrency: document.getElementById(
            'guiBalanceValueCurrency'
        ),
        domGuiBalanceBox: document.getElementById('guiBalanceBox'),
        domBalanceReload: document.getElementById('balanceReload'),
        domBalanceReloadStaking: document.getElementById(
            'balanceReloadStaking'
        ),
        domGuiBalanceStaking: document.getElementById('guiBalanceStaking'),
        domGuiBalanceStakingTicker: document.getElementById(
            'guiBalanceStakingTicker'
        ),
        domGuiStakingLoadMore: document.getElementById('stakingLoadMore'),
        domGuiStakingLoadMoreIcon: document.getElementById(
            'stakingLoadMoreIcon'
        ),
        domGuiBalanceBoxStaking: document.getElementById(
            'guiBalanceBoxStaking'
        ),
        domGuiDelegateAmount: document.getElementById('delegateAmount'),
        domGuiUndelegateAmount: document.getElementById('undelegateAmount'),
        domTxTab: document.getElementById('txTab'),
        domStakeTab: document.getElementById('stakeTab'),
        domsendNotice: document.getElementById('sendNotice'),
        domSimpleTXs: document.getElementById('simpleTransactions'),
        domSimpleTXsDropdown: document.getElementById(
            'simpleTransactionsDropdown'
        ),
        domAddress1s: document.getElementById('address1s'),
        domValue1s: document.getElementById('value1s'),
        domGuiViewKey: document.getElementById('guiViewKey'),
        domModalQR: document.getElementById('ModalQR'),
        domModalQrLabel: document.getElementById('ModalQRLabel'),
        domPrefix: document.getElementById('prefix'),
        domPrefixNetwork: document.getElementById('prefixNetwork'),
        domWalletToggle: document.getElementById('wToggle'),
        domGenerateWallet: document.getElementById('generateWallet'),
        domGenVanityWallet: document.getElementById('generateVanityWallet'),
        domGenHardwareWallet: document.getElementById('generateHardwareWallet'),
        //GOVERNANCE ELEMENTS
        domGovProposalsTable: document.getElementById('proposalsTable'),
        domGovProposalsTableBody: document.getElementById('proposalsTableBody'),
        domGovProposalsContestedTable: document.getElementById(
            'proposalsContestedTable'
        ),
        domGovProposalsContestedTableBody: document.getElementById(
            'proposalsContestedTableBody'
        ),
        //MASTERNODE ELEMENTS
        domCreateMasternode: document.getElementById('createMasternode'),
        domControlMasternode: document.getElementById('controlMasternode'),
        domAccessMasternode: document.getElementById('accessMasternode'),
        domMnAccessMasternodeText: document.getElementById(
            'accessMasternodeText'
        ),
        domMnCreateType: document.getElementById('mnCreateType'),
        domMnTextErrors: document.getElementById('mnTextErrors'),
        domMnIP: document.getElementById('mnIP'),
        domMnTxId: document.getElementById('mnTxId'),
        domMnPrivateKey: document.getElementById('mnPrivateKey'),
        domMnDashboard: document.getElementById('mnDashboard'),
        domMnProtocol: document.getElementById('mnProtocol'),
        domMnStatus: document.getElementById('mnStatus'),
        domMnNetType: document.getElementById('mnNetType'),
        domMnNetIP: document.getElementById('mnNetIP'),
        domMnLastSeen: document.getElementById('mnLastSeen'),

        domAccessWallet: document.getElementById('accessWallet'),
        domImportWallet: document.getElementById('importWallet'),
        domImportWalletText: document.getElementById('importWalletText'),
        domAccessWalletBtn: document.getElementById('accessWalletBtn'),
        domVanityUiButtonTxt: document.getElementById('vanButtonText'),
        domGenKeyWarning: document.getElementById('genKeyWarning'),
        domEncryptWarningTxt: document.getElementById('encryptWarningText'),
        domEncryptBtnTxt: document.getElementById('encryptButton'),
        domEncryptPasswordBox: document.getElementById('encryptPassword'),
        domEncryptPasswordFirst: document.getElementById('newPassword'),
        domEncryptPasswordSecond: document.getElementById('newPasswordRetype'),
        domGuiAddress: document.getElementById('guiAddress'),
        domGenIt: document.getElementById('genIt'),
        domHumanReadable: document.getElementById('HumanReadable'),
        domTxOutput: document.getElementById('transactionFinal'),
        domReqDesc: document.getElementById('reqDesc'),
        domReqDisplay: document.getElementById('reqDescDisplay'),
        domIdenticon: document.getElementById('identicon'),
        domPrivKey: document.getElementById('privateKey'),
        domPrivKeyPassword: document.getElementById('privateKeyPassword'),
        domAvailToDelegate: document.getElementById('availToDelegate'),
        domAvailToUndelegate: document.getElementById('availToUndelegate'),
        domAnalyticsDescriptor: document.getElementById('analyticsDescriptor'),
        domStakingRewardsList: document.getElementById(
            'staking-rewards-content'
        ),
        domStakingRewardsTitle: document.getElementById(
            'staking-rewards-title'
        ),
        domMnemonicModalContent: document.getElementById(
            'ModalMnemonicContent'
        ),
        domMnemonicModalButton: document.getElementById(
            'modalMnemonicConfirmButton'
        ),
        domExportWallet: document.getElementById('guiExportWalletItem'),
        domWipeWallet: document.getElementById('guiWipeWallet'),
        domRestoreWallet: document.getElementById('guiRestoreWallet'),
        domNewAddress: document.getElementById('guiNewAddress'),
        domConfirmModalHeader: document.getElementById('confirmModalHeader'),
        domConfirmModalTitle: document.getElementById('confirmModalTitle'),
        domConfirmModalContent: document.getElementById('confirmModalContent'),
        domConfirmModalButtons: document.getElementById('confirmModalButtons'),
        domConfirmModalConfirmButton: document.getElementById(
            'confirmModalConfirmButton'
        ),
        domConfirmModalCancelButton: document.getElementById(
            'confirmModalCancelButton'
        ),

        masternodeLegacyAccessText:
            'Access the masternode linked to this address<br> Note: the masternode MUST have been already created (however it can be online or offline)<br>  If you want to create a new masternode access with a HD wallet',
        masternodeHDAccessText:
            "Access your masternodes if you have any! If you don't you can create one",
        // Aggregate menu screens and links for faster switching
        arrDomScreens: document.getElementsByClassName('tabcontent'),
        arrDomScreenLinks: document.getElementsByClassName('tablinks'),
        // Alert DOM element
        domAlertPos: document.getElementsByClassName('alertPositioning')[0],
        domNetwork: document.getElementById('Network'),
        domNetworkE: document.getElementById('NetworkE'),
        domNetworkD: document.getElementById('NetworkD'),
        domDebug: document.getElementById('Debug'),
        domTestnet: document.getElementById('Testnet'),
        domCurrencySelect: document.getElementById('currency'),
        domExplorerSelect: document.getElementById('explorer'),
        domNodeSelect: document.getElementById('node'),
        domTranslationSelect: document.getElementById('translation'),
    };
    (0,_i18n_js__WEBPACK_IMPORTED_MODULE_2__.start)();
    loadImages();
    doms.domStart.click();

    // Register native app service
    (0,_native_js__WEBPACK_IMPORTED_MODULE_10__.registerWorker)();

    // Configure Identicon
    jdenticon__WEBPACK_IMPORTED_MODULE_3__.configure();
    // URL-Query request processing
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let requestTo;
    let requestAmount;
    // Check for a payment request
    if (urlParams.has('pay') && urlParams.has('amount')) {
        requestTo = urlParams.get('pay');
        requestAmount = parseFloat(urlParams.get('amount'));
        console.log(requestTo + ' ' + requestAmount);
        // We have our payment request info, wait until the page is fully loaded then display the payment request via .onload
    }

    // Customise the UI if a saved wallet exists
    if ((0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.hasEncryptedWallet)()) {
        // Hide the 'Generate wallet' buttons
        doms.domGenerateWallet.style.display = 'none';
        doms.domGenVanityWallet.style.display = 'none';

        const publicKey = localStorage.getItem('publicKey');

        if (publicKey) {
            (0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.importWallet)({ newWif: publicKey });
        } else {
            // Display the password unlock upfront
            accessOrImportWallet();
        }
    }

    // Payment processor redirect
    if (requestTo && requestAmount) {
        guiPreparePayment(
            requestTo,
            requestAmount,
            urlParams.has('desc') ? urlParams.get('desc') : ''
        );
    }

    // If allowed by settings: submit a simple 'hit' (app load) to Labs Analytics
    (0,_network_js__WEBPACK_IMPORTED_MODULE_5__.submitAnalytics)('hit');
    setInterval(refreshChainData, 15000);
    doms.domPrefix.value = '';
    doms.domPrefixNetwork.innerText =
        _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.PUBKEY_PREFIX.join(' or ');
    (0,_settings_js__WEBPACK_IMPORTED_MODULE_6__.start)();
}

// WALLET STATE DATA
const mempool = new _mempool_js__WEBPACK_IMPORTED_MODULE_0__.Mempool();
let exportHidden = false;

//                        PIVX Labs' Cold Pool
let cachedColdStakeAddr = 'SdgQDpS8jDRJDX8yK8m9KnTMarsE84zdsy';

function openTab(evt, tabName) {
    // Hide all screens and deactivate link highlights
    for (const domScreen of doms.arrDomScreens)
        domScreen.style.display = 'none';
    for (const domLink of doms.arrDomScreenLinks)
        domLink.classList.remove('active');

    // Show and activate the given screen
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');

    // Close the navbar if it's not already closed
    if (!doms.domNavbarToggler.className.includes('collapsed'))
        doms.domNavbarToggler.click();

    if (tabName === 'Governance') {
        updateGovernanceTab();
    }
    if (tabName === 'Masternode') {
        updateMasternodeTab();
    }
}

function getBalance(updateGUI = false) {
    const nBalance = mempool.getBalance();
    const nCoins = nBalance / _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.COIN;

    // Update the GUI too, if chosen
    if (updateGUI) {
        // Set the balance, and adjust font-size for large balance strings
        const nLen = nCoins.toFixed(2).length;
        doms.domGuiBalance.innerText = nCoins.toFixed(nLen >= 6 ? 0 : 2);
        doms.domAvailToDelegate.innerText =
            'Available: ~' +
            nCoins.toFixed(2) +
            ' ' +
            _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.TICKER;

        // Update currency values
        _settings_js__WEBPACK_IMPORTED_MODULE_6__.cMarket.getPrice(_settings_js__WEBPACK_IMPORTED_MODULE_6__.strCurrency).then((nPrice) => {
            // Configure locale settings by detecting currency support
            const cLocale = Intl.supportedValuesOf('currency').includes(
                _settings_js__WEBPACK_IMPORTED_MODULE_6__.strCurrency.toUpperCase()
            )
                ? {
                      style: 'currency',
                      currency: _settings_js__WEBPACK_IMPORTED_MODULE_6__.strCurrency,
                      currencyDisplay: 'narrowSymbol',
                  }
                : { maximumFractionDigits: 8, minimumFractionDigits: 8 };
            let nValue = nCoins * nPrice;
            // Handle certain edge-cases; like satoshis having decimals.
            switch (_settings_js__WEBPACK_IMPORTED_MODULE_6__.strCurrency) {
                case 'sats':
                    nValue = Math.round(nValue);
                    cLocale.maximumFractionDigits = 0;
                    cLocale.minimumFractionDigits = 0;
            }
            doms.domGuiBalanceValue.innerText = nValue.toLocaleString(
                'en-gb',
                cLocale
            );
            doms.domGuiBalanceValueCurrency.innerText =
                _settings_js__WEBPACK_IMPORTED_MODULE_6__.strCurrency.toUpperCase();
        });

        // Add a notice to the Send page if balance is lacking
        doms.domsendNotice.innerHTML = nBalance
            ? ''
            : '<div class="alert alert-danger" role="alert"><h4>Note:</h4><h5>You don\'t have any funds, get some coins first!</h5></div>';
    }

    return nBalance;
}

function getStakingBalance(updateGUI = false) {
    const nBalance = mempool.getDelegatedBalance();

    if (updateGUI) {
        // Set the balance, and adjust font-size for large balance strings
        doms.domGuiBalanceStaking.innerText = Math.floor(nBalance / _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.COIN);
        doms.domGuiBalanceBoxStaking.style.fontSize =
            Math.floor(nBalance / _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.COIN).toString().length >= 4
                ? 'large'
                : 'x-large';
        doms.domAvailToUndelegate.innerText =
            'Staking: ~' +
            (nBalance / _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.COIN).toFixed(2) +
            ' ' +
            _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.TICKER;
    }

    return nBalance;
}

function selectMaxBalance(domValueInput, fCold = false) {
    domValueInput.value = (fCold ? getStakingBalance() : getBalance()) / _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.COIN;
}

function updateStakingRewardsGUI(fCallback = false) {
    if (!_network_js__WEBPACK_IMPORTED_MODULE_5__.arrRewards.length) {
        // This ensures we don't spam network requests, since if a network callback says we have no stakes; no point checking again!
        if (!fCallback) (0,_network_js__WEBPACK_IMPORTED_MODULE_5__.getStakingRewards)();
        return;
    }
    //DOMS.DOM-optimised list generation
    const strList = _network_js__WEBPACK_IMPORTED_MODULE_5__.arrRewards.map(
            (cReward) =>
                `<i style="opacity: 0.75; cursor: pointer" onclick="window.open('${
                    _settings_js__WEBPACK_IMPORTED_MODULE_6__.cExplorer.url + '/tx/' + cReward.id
                }', '_blank')">${new Date(
                    cReward.time * 1000
                ).toLocaleDateString()}</i> <b>+${cReward.amount} ${
                    _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.TICKER
                }</b>`
        )
        .join('<br>');
    // Calculate total
    const nRewards = _network_js__WEBPACK_IMPORTED_MODULE_5__.arrRewards.reduce(
        (total, reward) => total + reward.amount,
        0
    );
    // UpdateDOMS.DOM
    doms.domStakingRewardsTitle.innerHTML = `Staking Rewards: ≥${nRewards} ${_chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.TICKER}`;
    doms.domStakingRewardsList.innerHTML = strList;
}

async function loadImages() {
    // Promise.all is useless since we only need to load one image, but we might need to load more in the future
    Promise.all([
        (async () => {
            document.getElementById('mpw-main-logo').src = (
                await __webpack_require__.e(/*! import() */ "assets_logo_png").then(__webpack_require__.t.bind(__webpack_require__, /*! ../assets/logo.png */ "./assets/logo.png", 17))
            ).default;
            document.getElementById('privateKeyImage').src = (
                await __webpack_require__.e(/*! import() */ "assets_key_png").then(__webpack_require__.t.bind(__webpack_require__, /*! ../assets/key.png */ "./assets/key.png", 17))
            ).default;
            document.getElementById('pivxLogoSend').src = (
                await __webpack_require__.e(/*! import() */ "assets_pivx_png").then(__webpack_require__.t.bind(__webpack_require__, /*! ../assets/pivx.png */ "./assets/pivx.png", 17))
            ).default;
        })(),
    ]);
}

let audio = null;
async function playMusic() {
    // On first play: load the audio into memory from the host
    if (audio === null) {
        // Dynamically load the file
        audio = new Audio((await __webpack_require__.e(/*! import() */ "assets_music_mp3").then(__webpack_require__.t.bind(__webpack_require__, /*! ../assets/music.mp3 */ "./assets/music.mp3", 17))).default);
    }

    // Play or Pause
    if (audio.paused || audio.ended) {
        audio.play();
        for (const domImg of document.getElementsByTagName('img'))
            domImg.classList.add('discoFilter');
    } else {
        audio.pause();
        for (const domImg of document.getElementsByTagName('img'))
            domImg.classList.remove('discoFilter');
    }
}

function unblurPrivKey() {
    if (
        document
            .getElementById('exportPrivateKeyText')
            .classList.contains('blurred')
    ) {
        document
            .getElementById('exportPrivateKeyText')
            .classList.remove('blurred');
    } else {
        document
            .getElementById('exportPrivateKeyText')
            .classList.add('blurred');
    }
}

function toClipboard(source, caller) {
    // Fetch the text/value source
    const domCopy = document.getElementById(source) || source;

    // Use an invisible textbox as the clipboard source
    const domClipboard = document.getElementById('clipboard');
    domClipboard.value = domCopy.value || domCopy.innerHTML || domCopy;
    domClipboard.select();
    domClipboard.setSelectionRange(0, 99999);

    // Browser-dependent clipboard execution
    if (!navigator.clipboard) {
        document.execCommand('copy');
    } else {
        navigator.clipboard.writeText(domCopy.innerHTML || domCopy);
    }

    // Display a temporary checkmark response
    caller.classList.add('fa-check');
    caller.classList.remove('fa-clipboard');
    caller.style.cursor = 'default';
    setTimeout(() => {
        caller.classList.add('fa-clipboard');
        caller.classList.remove('fa-check');
        caller.style.cursor = 'pointer';
    }, 1000);
}

function guiPreparePayment(strTo = '', strAmount = 0, strDesc = '') {
    doms.domTxTab.click();
    if (doms.domSimpleTXs.style.display === 'none')
        doms.domSimpleTXsDropdown.click();
    // Apply values
    doms.domAddress1s.value = strTo;
    doms.domValue1s.value = strAmount;
    doms.domReqDesc.value = strDesc;
    doms.domReqDisplay.style.display = strDesc ? 'block' : 'none';
    doms.domValue1s.focus();
}

function hideAllWalletOptions() {
    // Hide and Reset the Vanity address input
    doms.domPrefix.value = '';
    doms.domPrefix.style.display = 'none';

    // Hide all "*Wallet" buttons
    doms.domGenerateWallet.style.display = 'none';
    doms.domImportWallet.style.display = 'none';
    doms.domGenVanityWallet.style.display = 'none';
    doms.domAccessWallet.style.display = 'none';
    doms.domGenHardwareWallet.style.display = 'none';
}

async function govVote(hash, voteCode) {
    if (
        (await (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.confirmPopup)({
            title: _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.CONFIRM_POPUP_VOTE,
            html: _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.CONFIRM_POPUP_VOTE_HTML,
        })) == true
    ) {
        if (localStorage.getItem('masternode')) {
            const cMasternode = new _masternode_js__WEBPACK_IMPORTED_MODULE_1__["default"](
                JSON.parse(localStorage.getItem('masternode'))
            );
            if ((await cMasternode.getStatus()) !== 'ENABLED') {
                (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                    'warning',
                    'Your masternode is not enabled yet!',
                    6000
                );
                return;
            }
            const result = await cMasternode.vote(hash.toString(), voteCode); //1 yes 2 no
            if (result.includes('Voted successfully')) {
                //good vote
                (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)('success', 'Vote submitted!', 6000);
            } else if (result.includes('Error voting :')) {
                //If you already voted return an alert
                (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                    'warning',
                    'You already voted for this proposal! Please wait 1 hour',
                    6000
                );
            } else if (result.includes('Failure to verify signature.')) {
                //wrong masternode private key
                (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                    'warning',
                    "Failed to verify signature, please check your masternode's private key",
                    6000
                );
            } else {
                //this could be everything
                console.error(result);
                (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                    'warning',
                    'Internal error, please try again later',
                    6000
                );
            }
        } else {
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)('warning', 'Access a masternode before voting!', 6000);
        }
    }
}

async function startMasternode(fRestart = false) {
    if (localStorage.getItem('masternode')) {
        if (_wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey.isViewOnly) {
            return (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                'warning',
                "Can't start masternode in view only mode",
                6000
            );
        }
        const cMasternode = new _masternode_js__WEBPACK_IMPORTED_MODULE_1__["default"](
            JSON.parse(localStorage.getItem('masternode'))
        );
        if (await cMasternode.start()) {
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                'success',
                '<b>Masternode ' + (fRestart ? 're' : '') + 'started!</b>',
                4000
            );
        } else {
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                'warning',
                '<b>Failed to ' +
                    (fRestart ? 're' : '') +
                    'start masternode!</b>',
                4000
            );
        }
    }
}

function destroyMasternode() {
    if (localStorage.getItem('masternode')) {
        localStorage.removeItem('masternode');
        (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
            'success',
            '<b>Masternode destroyed!</b><br>Your coins are now spendable.',
            5000
        );
        updateMasternodeTab();
    }
}

/**
 * Takes an ip address and adds the port.
 * If it's an IPv4 address, ip:port will be used, (e.g. 127.0.0.1:12345)
 * If it's an IPv6 address, [ip]:port will be used, (e.g. [::1]:12345)
 * @param {String} ip - Ip address with or without port
 * @returns {String}
 */
function parseIpAddress(ip) {
    // IPv4 without port
    if (ip.match(/\d+\.\d+\.\d+\.\d+/)) {
        return `${ip}:${_chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.MASTERNODE_PORT}`;
    }
    // IPv4 with port
    if (ip.match(/\d+\.\d+\.\d+\.\d+:\d+/)) {
        return ip;
    }
    // IPv6 without port
    if (ip_address__WEBPACK_IMPORTED_MODULE_12__.Address6.isValid(ip)) {
        return `[${ip}]:${_chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.MASTERNODE_PORT}`;
    }

    const groups = /\[(.*)\]:\d+/.exec(ip);
    if (groups !== null && groups.length > 1) {
        // IPv6 with port
        if (ip_address__WEBPACK_IMPORTED_MODULE_12__.Address6.isValid(groups[1])) {
            return ip;
        }
    }

    // If we haven't returned yet, the address was invalid.
    return null;
}

async function importMasternode() {
    const mnPrivKey = doms.domMnPrivateKey.value;
    const address = parseIpAddress(doms.domMnIP.value);
    if (!address) {
        (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)('warning', 'The ip address is invalid!', 5000);
        return;
    }

    let collateralTxId;
    let outidx;
    let collateralPrivKeyPath;
    doms.domMnIP.value = '';
    doms.domMnPrivateKey.value = '';

    if (!_wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey.isHD) {
        // Find the first UTXO matching the expected collateral size
        const cCollaUTXO = mempool
            .getConfirmed()
            .find(
                (cUTXO) => cUTXO.sats === _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.collateralInSats
            );

        // If there's no valid UTXO, exit with a contextual message
        if (!cCollaUTXO) {
            if (getBalance(false) < _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.collateralInSats) {
                // Not enough balance to create an MN UTXO
                (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                    'warning',
                    'You need <b>' +
                        (_chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.collateralInSats -
                            getBalance(false)) /
                            _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.COIN +
                        ' more ' +
                        _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.TICKER +
                        '</b> to create a Masternode!',
                    10000
                );
            } else {
                // Balance is capable of a masternode, just needs to be created
                // TODO: this UX flow is weird, is it even possible? perhaps we can re-design this entire function accordingly
                (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                    'warning',
                    'You have enough balance for a Masternode, but no valid collateral UTXO of ' +
                        _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.collateralInSats / _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.COIN +
                        ' ' +
                        _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.TICKER,
                    10000
                );
            }
            return;
        }

        collateralTxId = cCollaUTXO.id;
        outidx = cCollaUTXO.vout;
        collateralPrivKeyPath = 'legacy';
    } else {
        const path = doms.domMnTxId.value;
        const masterUtxo = mempool
            .getConfirmed()
            .findLast((u) => u.path === path); // first UTXO for each address in HD
        // sanity check:
        if (masterUtxo.sats !== _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.collateralInSats) {
            return (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                'warning',
                'This is not a suitable UTXO for a Masternode',
                10000
            );
        }
        collateralTxId = masterUtxo.id;
        outidx = masterUtxo.vout;
        collateralPrivKeyPath = path;
    }
    doms.domMnTxId.value = '';

    const cMasternode = new _masternode_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        walletPrivateKeyPath: collateralPrivKeyPath,
        mnPrivateKey: mnPrivKey,
        collateralTxId: collateralTxId,
        outidx: outidx,
        addr: address,
    });
    await refreshMasternodeData(cMasternode, true);
    await updateMasternodeTab();
}

function accessOrImportWallet() {
    // Hide and Reset the Vanity address input
    doms.domPrefix.value = '';
    doms.domPrefix.style.display = 'none';

    // Show Import button, hide access button
    doms.domImportWallet.style.display = 'block';
    setTimeout(() => {
        doms.domPrivKey.style.opacity = '1';
    }, 100);
    doms.domAccessWalletBtn.style.display = 'none';

    // If we have a local wallet, display the decryption prompt
    // This is no longer being used, as the user will be put in view-only
    // mode when logging in, however if the user locked the wallet before
    // #52 there would be no way to recover the public key without getting
    // The password from the user
    if ((0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.hasEncryptedWallet)()) {
        doms.domPrivKey.placeholder = 'Enter your wallet password';
        doms.domImportWalletText.innerText = 'Unlock Wallet';
        doms.domPrivKey.focus();
    }
}

function onPrivateKeyChanged() {
    if ((0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.hasEncryptedWallet)()) return;
    // Check whether the length of the string is 128 bytes (that's the length of ciphered plain texts)
    // and it doesn't have any spaces (would be a mnemonic seed)
    const fContainsSpaces = doms.domPrivKey.value.includes(' ');
    doms.domPrivKeyPassword.hidden =
        doms.domPrivKey.value.length !== 128 || fContainsSpaces;

    // Uncloak the private input IF spaces are detected, to make Seed Phrases easier to input and verify
    doms.domPrivKey.setAttribute('type', fContainsSpaces ? 'text' : 'password');
}

async function guiImportWallet() {
    const fEncrypted = doms.domPrivKey.value.length === 128;

    // If we are in testnet: prompt an import
    if (_chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.isTestnet) return (0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.importWallet)();

    // If we don't have a DB wallet and the input is plain: prompt an import
    if (!(0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.hasEncryptedWallet)() && !fEncrypted) return (0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.importWallet)();

    // If we don't have a DB wallet and the input is ciphered:
    const strPrivKey = doms.domPrivKey.value;
    const strPassword = doms.domPrivKeyPassword.value;
    if (!(0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.hasEncryptedWallet)() && fEncrypted) {
        const strDecWIF = await (0,_aes_gcm_js__WEBPACK_IMPORTED_MODULE_9__.decrypt)(strPrivKey, strPassword);
        if (!strDecWIF || strDecWIF === 'decryption failed!') {
            return (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)('warning', _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.FAILED_TO_IMPORT, [], 6000);
        } else {
            localStorage.setItem('encwif', strPrivKey);
            return (0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.importWallet)({
                newWif: strDecWIF,
            });
        }
    }
    // Prompt for decryption of the existing wallet
    const fHasWallet = await (0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.decryptWallet)(doms.domPrivKey.value);

    // If the wallet was successfully loaded, hide all options and load the dash!
    if (fHasWallet) hideAllWalletOptions();
}

function guiEncryptWallet() {
    // Disable wallet encryption in testnet mode
    if (_chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.isTestnet)
        return (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
            'warning',
            _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.TESTNET_ENCRYPTION_DISABLED,
            [],
            2500
        );

    // Fetch our inputs, ensure they're of decent entropy + match eachother
    const strPass = doms.domEncryptPasswordFirst.value,
        strPassRetype = doms.domEncryptPasswordSecond.value;
    if (strPass.length < _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.MIN_PASS_LENGTH)
        return (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
            'warning',
            _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.PASSWORD_TOO_SMALL,
            [{ MIN_PASS_LENGTH: _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.MIN_PASS_LENGTH }],
            4000
        );
    if (strPass !== strPassRetype)
        return (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)('warning', _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.PASSWORD_DOESNT_MATCH, [], 2250);
    (0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.encryptWallet)(strPass);
    (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)('success', _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.NEW_PASSWORD_SUCCESS, [], 5500);

    $('#encryptWalletModal').modal('hide');

    doms.domWipeWallet.hidden = false;
}

async function toggleExportUI() {
    if (!exportHidden) {
        if ((0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.hasEncryptedWallet)()) {
            doms.domExportPrivateKey.innerHTML = localStorage.getItem('encwif');
            exportHidden = true;
        } else {
            if (_wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey.isViewOnly) {
                exportHidden = false;
            } else {
                doms.domExportPrivateKey.innerHTML = _wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey.keyToBackup;
                exportHidden = true;
            }
        }
    } else {
        doms.domExportPrivateKey.innerHTML = '';
        exportHidden = false;
    }
}

function checkVanity() {
    var e = event || window.event; // get event object
    var key = e.keyCode || e.which; // get key cross-browser
    var char = String.fromCharCode(key).trim(); // convert key to char
    if (char.length == 0) return;

    // Ensure the input is base58 compatible
    if (!_misc_js__WEBPACK_IMPORTED_MODULE_7__.MAP_B58.toLowerCase().includes(char.toLowerCase())) {
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
        return (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
            'warning',
            _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.UNSUPPORTED_CHARACTER,
            [{ char: char }],
            3500
        );
    }
}

let isVanityGenerating = false;
const arrWorkers = [];
let vanUiUpdater;

function stopSearch() {
    isVanityGenerating = false;
    for (let thread of arrWorkers) {
        thread.terminate();
    }
    while (arrWorkers.length) arrWorkers.pop();
    doms.domPrefix.disabled = false;
    doms.domVanityUiButtonTxt.innerText = 'Create A Vanity Wallet';
    clearInterval(vanUiUpdater);
}

async function generateVanityWallet() {
    if (isVanityGenerating) return stopSearch();
    if (typeof Worker === 'undefined')
        return (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)('error', _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.UNSUPPORTED_WEBWORKERS, [], 7500);
    // Generate a vanity address with the given prefix
    if (
        doms.domPrefix.value.length === 0 ||
        doms.domPrefix.style.display === 'none'
    ) {
        // No prefix, display the intro!
        doms.domPrefix.style.display = 'block';
        setTimeout(() => {
            doms.domPrefix.style.opacity = '1';
        }, 100);
        doms.domGuiAddress.innerHTML = '~';
        doms.domPrefix.focus();
    } else {
        // Remove spaces from prefix
        doms.domPrefix.value = doms.domPrefix.value.replace(/ /g, '');

        // Cache a lowercase equivilent for lower-entropy comparisons (a case-insensitive search is ALOT faster!) and strip accidental spaces
        const nInsensitivePrefix = doms.domPrefix.value.toLowerCase();
        const nPrefixLen = nInsensitivePrefix.length;

        // Ensure the input is base58 compatible
        for (const char of doms.domPrefix.value) {
            if (!_misc_js__WEBPACK_IMPORTED_MODULE_7__.MAP_B58.toLowerCase().includes(char.toLowerCase()))
                return (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                    'warning',
                    _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.UNSUPPORTED_CHARACTER,
                    [{ char: char }],
                    3500
                );
            // We also don't want users to be mining addresses for years... so cap the letters to four until the generator is more optimized
            if (doms.domPrefix.value.length > 5)
                return (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                    'warning',
                    _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.UNSUPPORTED_CHARACTER,
                    [{ char: char }],
                    3500
                );
        }
        isVanityGenerating = true;
        doms.domPrefix.disabled = true;
        let attempts = 0;

        // Setup workers
        const nThreads = Math.max(
            Math.floor(window.navigator.hardwareConcurrency * 0.75),
            1
        );
        console.log('Spawning ' + nThreads + ' vanity search threads!');
        while (arrWorkers.length < nThreads) {
            arrWorkers.push(
                new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("scripts_global_js-scripts_misc_js"), __webpack_require__.b))
            );
            const checkResult = (data) => {
                attempts++;
                if (
                    data.pub.substr(1, nPrefixLen).toLowerCase() ==
                    nInsensitivePrefix
                ) {
                    (0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.importWallet)({
                        newWif: data.priv,
                        fRaw: true,
                    });
                    stopSearch();
                    doms.domGuiBalance.innerHTML = '0';
                    doms.domGuiBalanceBox.style.fontSize = 'x-large';
                    return console.log(
                        'VANITY: Found an address after ' +
                            attempts +
                            ' attempts!'
                    );
                }
            };

            arrWorkers[arrWorkers.length - 1].onmessage = (event) =>
                checkResult(event.data);
            arrWorkers[arrWorkers.length - 1].postMessage(
                _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.PUBKEY_ADDRESS
            );
        }

        // GUI Updater
        doms.domVanityUiButtonTxt.innerText =
            'Stop (Searched ' + attempts.toLocaleString('en-GB') + ' keys)';
        vanUiUpdater = setInterval(() => {
            doms.domVanityUiButtonTxt.innerText =
                'Stop (Searched ' + attempts.toLocaleString('en-GB') + ' keys)';
        }, 200);
    }
}

function toggleDropDown(id) {
    const domID = document.getElementById(id);
    domID.style.display = domID.style.display === 'block' ? 'none' : 'block';
}

function askForCSAddr(force = false) {
    if (force) cachedColdStakeAddr = null;
    if (cachedColdStakeAddr === '' || cachedColdStakeAddr === null) {
        cachedColdStakeAddr = prompt(
            'Please provide a Cold Staking address (either from your own node, or a 3rd-party!)'
        ).trim();
        if (cachedColdStakeAddr) return true;
    } else {
        return true;
    }
    return false;
}

function isMasternodeUTXO(cUTXO, masternode = null) {
    const cMasternode =
        masternode || JSON.parse(localStorage.getItem('masternode'));
    if (cMasternode) {
        const { collateralTxId, outidx } = cMasternode;
        return collateralTxId === cUTXO.id && cUTXO.vout === outidx;
    } else {
        return false;
    }
}

async function wipePrivateData() {
    const title = (0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.hasEncryptedWallet)()
        ? 'Do you want to lock your wallet?'
        : 'Do you want to wipe your wallet private data?';
    const html = (0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.hasEncryptedWallet)()
        ? 'You will need to enter your password to access your funds'
        : "You will lose access to your funds if you haven't backed up your private key or seed phrase";
    if (
        await (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.confirmPopup)({
            title,
            html,
        })
    ) {
        _wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey.wipePrivateData();
        doms.domWipeWallet.hidden = true;
        if ((0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.hasEncryptedWallet)()) {
            doms.domRestoreWallet.hidden = false;
        }
    }
}

async function restoreWallet() {
    if (
        await (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.confirmPopup)({
            title: 'Unlock your wallet',
            html: '<input type="password" id="restoreWalletPassword" placeholder="Wallet password">',
        })
    ) {
        const password = document.getElementById('restoreWalletPassword').value;
        if (await (0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.decryptWallet)(password)) {
            doms.domRestoreWallet.hidden = true;
            doms.domWipeWallet.hidden = false;
        }
    }
}

/**
 * Fetch Governance data and re-render the Governance UI
 */
async function updateGovernanceTab() {
    // Fetch all proposals from the network
    const arrProposals = await _masternode_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProposals({
        fAllowFinished: false,
    });

    /* Sort proposals into two categories
        - Standard (Proposal is either new with <100 votes, or has a healthy vote count)
        - Contested (When a proposal may be considered spam, malicious, or simply highly contestable)
    */
    const arrStandard = arrProposals.filter(
        (a) => a.Yeas + a.Nays < 100 || a.Ratio > 0.25
    );
    const arrContested = arrProposals.filter(
        (a) => a.Yeas + a.Nays >= 100 && a.Ratio <= 0.25
    );

    // Render Proposals
    renderProposals(arrStandard, false);
    renderProposals(arrContested, true);
}

/**
 * Render Governance proposal objects to a given Proposal category
 * @param {Array<object>} arrProposals - The proposals to render
 * @param {boolean} fContested - The proposal category
 */
function renderProposals(arrProposals, fContested) {
    // Select the table based on the proposal category
    const domTable = fContested
        ? doms.domGovProposalsContestedTableBody
        : doms.domGovProposalsTableBody;

    // Render the proposals in the relevent table
    domTable.innerHTML = '';
    for (const cProposal of arrProposals) {
        const domRow = domTable.insertRow();

        // Name and URL hyperlink
        const domNameAndURL = domRow.insertCell();
        // IMPORTANT: Sanitise all of our HTML or a rogue server or malicious proposal could perform a cross-site scripting attack
        domNameAndURL.innerHTML = `<a class="active" href="${(0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.sanitizeHTML)(
            cProposal.URL
        )}"><b>${(0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.sanitizeHTML)(cProposal.Name)}</b></a>`;

        // Payment Schedule and Amounts
        const domPayments = domRow.insertCell();
        domPayments.innerHTML = `<b>${(0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.sanitizeHTML)(
            cProposal.MonthlyPayment
        )}</b> ${_chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.TICKER} <br>
      <small> ${(0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.sanitizeHTML)(
          cProposal['RemainingPaymentCount']
      )} payments remaining of <b>${(0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.sanitizeHTML)(cProposal.TotalPayment)}</b> ${
            _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.TICKER
        } total</small>`;

        // Vote Counts and Consensus Percentages
        const domVoteCounters = domRow.insertCell();
        const { Yeas, Nays } = cProposal;
        const nPercent = cProposal.Ratio * 100;

        domVoteCounters.innerHTML = `<b>${nPercent.toFixed(2)}%</b> <br>
      <small> <b><div class="text-success" style="display:inline;"> ${Yeas} </div></b> /
	  <b><div class="text-danger" style="display:inline;"> ${Nays} </div></b>
      `;

        // Voting Buttons for Masternode owners (MNOs)
        const domVoteBtns = domRow.insertCell();
        const domNoBtn = document.createElement('button');
        domNoBtn.className = 'pivx-button-big';
        domNoBtn.innerText = 'No';
        domNoBtn.onclick = () => govVote(cProposal.Hash, 2);

        const domYesBtn = document.createElement('button');
        domYesBtn.className = 'pivx-button-big';
        domYesBtn.innerText = 'Yes';
        domYesBtn.onclick = () => govVote(cProposal.Hash, 1);

        domVoteBtns.appendChild(domNoBtn);
        domVoteBtns.appendChild(domYesBtn);
    }
}

async function updateMasternodeTab() {
    //TODO: IN A FUTURE ADD MULTI-MASTERNODE SUPPORT BY SAVING MNs with which you logged in the past.
    // Ensure a wallet is loaded
    doms.domMnTextErrors.innerHTML = '';
    doms.domAccessMasternode.style.display = 'none';
    doms.domCreateMasternode.style.display = 'none';
    doms.domMnDashboard.style.display = 'none';

    if (!_wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey) {
        doms.domMnTextErrors.innerHTML =
            'Please ' +
            ((0,_wallet_js__WEBPACK_IMPORTED_MODULE_4__.hasEncryptedWallet)() ? 'unlock' : 'import') +
            ' your <b>COLLATERAL WALLET</b> first.';
        return;
    }

    if (_wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey.isHardwareWallet) {
        doms.domMnTxId.style.display = 'none';
        doms.domMnTextErrors.innerHTML = 'Ledger is not yet supported';
        return;
    }

    if (!mempool.getConfirmed().length) {
        doms.domMnTextErrors.innerHTML =
            'Your wallet is empty or still loading, re-open the tab in a few seconds!';
        return;
    }

    let strMasternodeJSON = localStorage.getItem('masternode');
    // If the collateral is missing (spent, or switched wallet) then remove the current MN
    if (strMasternodeJSON) {
        const cMasternode = JSON.parse(strMasternodeJSON);
        if (
            !mempool
                .getConfirmed()
                .find((utxo) => isMasternodeUTXO(utxo, cMasternode))
        ) {
            localStorage.removeItem('masternode');
            strMasternodeJSON = null;
        }
    }

    doms.domControlMasternode.style.display = strMasternodeJSON
        ? 'block'
        : 'none';

    // first case: the wallet is not HD and it is not hardware, so in case the wallet has collateral the user can check its status and do simple stuff like voting
    if (!_wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey.isHD) {
        doms.domMnAccessMasternodeText.innerHTML =
            doms.masternodeLegacyAccessText;
        doms.domMnTxId.style.display = 'none';
        // Find the first UTXO matching the expected collateral size
        const cCollaUTXO = mempool
            .getConfirmed()
            .find(
                (cUTXO) => cUTXO.sats === _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.collateralInSats
            );
        const balance = getBalance(false);
        if (cCollaUTXO) {
            if (strMasternodeJSON) {
                const cMasternode = new _masternode_js__WEBPACK_IMPORTED_MODULE_1__["default"](
                    JSON.parse(localStorage.getItem('masternode'))
                );
                await refreshMasternodeData(cMasternode);
                doms.domMnDashboard.style.display = '';
            } else {
                doms.domMnTxId.style.display = 'none';
                doms.domccessMasternode.style.display = 'block';
            }
        } else if (balance < _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.collateralInSats) {
            // The user needs more funds
            doms.domMnTextErrors.innerHTML =
                'You need <b>' +
                (_chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.collateralInSats - balance) / _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.COIN +
                ' more ' +
                _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.TICKER +
                '</b> to create a Masternode!';
        } else {
            // The user has the funds, but not an exact collateral, prompt for them to create one
            doms.domCreateMasternode.style.display = 'block';
            doms.domMnTxId.style.display = 'none';
            doms.domMnTxId.innerHTML = '';
        }
    } else {
        doms.domMnTxId.style.display = 'none';
        doms.domMnTxId.innerHTML = '';
        doms.domMnAccessMasternodeText.innerHTML = doms.masternodeHDAccessText;

        // First UTXO for each address in HD
        const mapCollateralAddresses = new Map();

        // Aggregate all valid Masternode collaterals into a map of Address <--> Collateral
        for (const cUTXO of mempool.getConfirmed()) {
            if (cUTXO.sats !== _chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.collateralInSats) continue;
            mapCollateralAddresses.set(cUTXO.path, cUTXO);
        }
        const fHasCollateral = mapCollateralAddresses.size > 0;

        // If there's no loaded MN, but valid collaterals, display the configuration screen
        if (!strMasternodeJSON && fHasCollateral) {
            doms.domMnTxId.style.display = 'block';
            doms.domAccessMasternode.style.display = 'block';

            for (const [key] of mapCollateralAddresses) {
                const option = document.createElement('option');
                option.value = key;
                option.innerText = await _wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey.getAddress(key);
                doms.domMnTxId.appendChild(option);
            }
        }

        // If there's no collateral found, display the creation UI
        if (!fHasCollateral) doms.domCreateMasternode.style.display = 'block';

        // If we have a collateral and a loaded Masternode, display the Dashboard
        if (fHasCollateral && strMasternodeJSON) {
            const cMasternode = new _masternode_js__WEBPACK_IMPORTED_MODULE_1__["default"](JSON.parse(strMasternodeJSON));
            // Refresh the display
            refreshMasternodeData(cMasternode);
            doms.domMnDashboard.style.display = '';
        }
    }
}

async function refreshMasternodeData(cMasternode, fAlert = false) {
    const cMasternodeData = await cMasternode.getFullData();
    if (_settings_js__WEBPACK_IMPORTED_MODULE_6__.debug) console.log(cMasternodeData);

    // If we have MN data available, update the dashboard
    if (cMasternodeData && cMasternodeData.status !== 'MISSING') {
        doms.domMnTextErrors.innerHTML = '';
        doms.domMnProtocol.innerText = `(${(0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.sanitizeHTML)(
            cMasternodeData.version
        )})`;
        doms.domMnStatus.innerText = (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.sanitizeHTML)(cMasternodeData.status);
        doms.domMnNetType.innerText = (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.sanitizeHTML)(
            cMasternodeData.network.toUpperCase()
        );
        doms.domMnNetIP.innerText = cMasternode.addr;
        doms.domMnLastSeen.innerText = new Date(
            cMasternodeData.lastseen * 1000
        ).toLocaleTimeString();
    }

    if (cMasternodeData.status === 'MISSING') {
        doms.domMnTextErrors.innerHTML =
            'Masternode is currently <b>OFFLINE</b>';
        if (!_wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey.isViewOnly) {
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                'warning',
                'Your masternode is offline, we will try to start it',
                6000
            );
            // try to start the masternode
            const started = await cMasternode.start();
            if (started) {
                doms.domMnTextErrors.innerHTML =
                    'Masternode successfully started!';
                (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                    'success',
                    'Masternode successfully started!, it will be soon online',
                    6000
                );
                localStorage.setItem('masternode', JSON.stringify(cMasternode));
            } else {
                doms.domMnTextErrors.innerHTML =
                    "We couldn't start your masternode";
                (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                    'warning',
                    'We could not start your masternode',
                    6000
                );
            }
        }
    } else if (
        cMasternodeData.status === 'ENABLED' ||
        cMasternodeData.status === 'PRE_ENABLED'
    ) {
        if (fAlert)
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                'success',
                `Your masternode status is <b> ${(0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.sanitizeHTML)(
                    cMasternodeData.status
                )} </b>`,
                6000
            );
        localStorage.setItem('masternode', JSON.stringify(cMasternode));
    } else if (cMasternodeData.status === 'REMOVED') {
        doms.domMnTextErrors.innerHTML =
            'Masternode is currently <b>REMOVED</b>';
        if (fAlert)
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)(
                'warning',
                'Your masternode is in <b>REMOVED</b> state',
                6000
            );
    } else {
        // connection problem
        doms.domMnTextErrors.innerHTML = 'Unable to connect!';
        if (fAlert) (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)('warning', 'Unable to connect!', 6000);
    }

    // Return the data in case the caller needs additional context
    return cMasternodeData;
}

function refreshChainData() {
    // If in offline mode: don't sync ANY data or connect to the internet
    if (!_network_js__WEBPACK_IMPORTED_MODULE_5__.networkEnabled)
        return console.warn(
            'Offline mode active: For your security, the wallet will avoid ALL internet requests.'
        );
    if (!_wallet_js__WEBPACK_IMPORTED_MODULE_4__.masterKey) return;

    // Play reload anim
    doms.domBalanceReload.classList.add('playAnim');
    doms.domBalanceReloadStaking.classList.add('playAnim');

    // Fetch block count + UTXOs
    (0,_network_js__WEBPACK_IMPORTED_MODULE_5__.getBlockCount)();
    getBalance(true);

    // Fetch pricing data
    (0,_prices_js__WEBPACK_IMPORTED_MODULE_11__.refreshPriceDisplay)();
}

// A safety mechanism enabled if the user attempts to leave without encrypting/saving their keys
const beforeUnloadListener = (evt) => {
    evt.preventDefault();
    // Disable Save your wallet warning on unload
    if (!_chain_params_js__WEBPACK_IMPORTED_MODULE_8__.cChainParams.current.isTestnet)
        (0,_misc_js__WEBPACK_IMPORTED_MODULE_7__.createAlert)('warning', _i18n_js__WEBPACK_IMPORTED_MODULE_2__.ALERTS.SAVE_WALLET_PLEASE, [], 10000);
    // Most browsers ignore this nowadays, but still, keep it 'just incase'
    return (evt.returnValue = _i18n_js__WEBPACK_IMPORTED_MODULE_2__.translation.BACKUP_OR_ENCRYPT_WALLET);
};


/***/ }),

/***/ "./scripts/i18n.js":
/*!*************************!*\
  !*** ./scripts/i18n.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALERTS": () => (/* binding */ ALERTS),
/* harmony export */   "arrActiveLangs": () => (/* binding */ arrActiveLangs),
/* harmony export */   "loadAlerts": () => (/* binding */ loadAlerts),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "switchTranslation": () => (/* binding */ switchTranslation),
/* harmony export */   "translatableLanguages": () => (/* binding */ translatableLanguages),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "translateAlerts": () => (/* binding */ translateAlerts),
/* harmony export */   "translation": () => (/* binding */ translation)
/* harmony export */ });
/* harmony import */ var _locale_en_translation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/en/translation.js */ "./locale/en/translation.js");
/* harmony import */ var _locale_uwu_translation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/uwu/translation.js */ "./locale/uwu/translation.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");



const ALERTS = {};
let translation = {};

// TRANSLATION
//Create an object of objects filled with all the translations
const translatableLanguages = {
    en: _locale_en_translation_js__WEBPACK_IMPORTED_MODULE_0__.en_translation,
    uwu: _locale_uwu_translation_js__WEBPACK_IMPORTED_MODULE_1__.uwu_translation,
};

/**
 * Takes the language name and sets the translation settings based on the language file
 * @param {string} langName
 */
function switchTranslation(langName) {
    if (arrActiveLangs.includes(langName)) {
        translation = translatableLanguages[langName];
        translate(translation);
        loadAlerts();
        return true;
    } else {
        console.log(
            'i18n: The language (' +
                langName +
                ") is not supported yet, if you'd like to contribute translations (for rewards!) contact us on GitHub or Discord!"
        );
        translation = translatableLanguages.en_translation;
        return false;
    }
}

/**
 * Takes a string that includes {x} and replaces that based on what is in the array of objects
 * @param {string} message
 * @param {array<Object>} variables
 * @returns a string with the variables implemented in the string
 *
 * @example
 * //returns "test this"
 * translateAlerts("test {x}" [x : "this"])
 */
function translateAlerts(message, variables) {
    variables.forEach((element) => {
        message = message.replaceAll(
            '{' + Object.keys(element)[0] + '}',
            Object.values(element)[0]
        );
    });
    return message;
}

/**
 * Translates all the static html based on the tag data-i18n
 * @param {Array} i18nLangs
 *
 */
function translate(i18nLangs) {
    if (!i18nLangs) return;

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        if (!i18nLangs[element.dataset.i18n]) return;

        if (element.dataset.i18n_target) {
            element[element.dataset.i18n_target] =
                i18nLangs[element.dataset.i18n];
        } else {
            switch (element.tagName.toLowerCase()) {
                case 'input':
                case 'textarea':
                    element.placeholder = i18nLangs[element.dataset.i18n];
                    break;
                default:
                    element.innerHTML = i18nLangs[element.dataset.i18n];
                    break;
            }
        }
    });
    loadAlerts();
}

/**
 * Translates the alerts by loading the data into the ALERTS object
 */
function loadAlerts() {
    // Alerts are designated by a special 'ALERTS' entry in each translation file
    let fFoundAlerts = false;
    for (const [alert_key, alert_translation] of Object.entries(translation)) {
        if (fFoundAlerts) {
            ALERTS[alert_key] = alert_translation;
        }
        // Skip all entries until we find the ALERTS flag
        if (alert_key === 'ALERTS') fFoundAlerts = true;
    }
}
function parseUserAgentLang(strUA, arrLangsWithSubset) {
    if (arrLangsWithSubset.some((strLang) => strUA.includes(strLang))) {
        // Split the lang in to 'primary' and 'subset', only use the primary lang
        return strUA.substring(0, 2);
    }
    // Otherwise, just use the full language spec
    return strUA;
}

// When adding a lang remember to add it to the object translatableLanguages as well as here.
const arrActiveLangs = ['en', 'uwu'];

function start() {
    // We use this function to parse the UA lang in a safer way: for example, there's multiple `en` definitions
    // ... but we shouldn't duplicate the language files, we can instead cut the affix (US, GB) and simply use 'en'.
    // ... This logic may apply to other languages with such subsets as well, so take care of them here!
    const arrLangsWithSubset = ['en'];

    const strLang = parseUserAgentLang(
        window.navigator.userLanguage || window.navigator.language,
        arrLangsWithSubset
    );

    // When removing you do not have to remove from translatableLanguages
    let localTranslation = localStorage.getItem('translation');
    // Check if set in local storage
    if (localTranslation != null) {
        switchTranslation(localTranslation);
    } else {
        // Check if we support the user's browser locale
        if (arrActiveLangs.includes(strLang)) {
            switchTranslation(strLang);
        } else {
            // Default to EN if the locale isn't supported yet
            console.log(
                'i18n: Your language (' +
                    strLang +
                    ") is not supported yet, if you'd like to contribute translations (for rewards!) contact us on GitHub or Discord!"
            );
            switchTranslation('en');
        }
    }
    translate(translation);
}


/***/ }),

/***/ "./scripts/masternode.js":
/*!*******************************!*\
  !*** ./scripts/masternode.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Masternode)
/* harmony export */ });
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ "./scripts/settings.js");
/* harmony import */ var _chain_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chain_params.js */ "./scripts/chain_params.js");
/* harmony import */ var _wallet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.js */ "./scripts/wallet.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./scripts/utils.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var ip_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ip-address */ "./node_modules/ip-address/dist/esm/ip-address.js");
/* harmony import */ var _noble_secp256k1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @noble/secp256k1 */ "./node_modules/@noble/secp256k1/lib/esm/index.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");








/**
 * Construct a Masternode
 * @param {string} [masternode.walletPrivateKeyPath] - BIP39 path pointing to the private key holding the collateral. Optional if not HD
 * @param {string} masternode.mnPrivateKey - Masternode private key. Must be uncompressed WIF
 * @param {string} masternode.collateralTxId - Must be a UTXO pointing to the collateral
 * @param {number} masternode.outidx - The output id of the collateral starting from 0
 * @param {string} masternode.addr - IPV4 address in the form `ip:port`
 */
class Masternode {
    constructor({
        walletPrivateKeyPath,
        mnPrivateKey,
        collateralTxId,
        outidx,
        addr,
    } = {}) {
        this.walletPrivateKeyPath = walletPrivateKeyPath;
        this.mnPrivateKey = mnPrivateKey;
        this.collateralTxId = collateralTxId;
        this.outidx = outidx;
        this.addr = addr;
    }

    async _getWalletPrivateKey() {
        return await _wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey.getPrivateKey(this.walletPrivateKeyPath);
    }

    /**
       @return {Promise<Object>} The object containing masternode information for this masternode
     */
    async getFullData() {
        const strURL = `${_settings_js__WEBPACK_IMPORTED_MODULE_0__.cNode.url}/listmasternodes?params=${this.collateralTxId}`;
        try {
            const cMasternodes = (await (await fetch(strURL)).json()).filter(
                (m) => m.outidx === this.outidx
            );
            if (cMasternodes.length > 0) {
                return cMasternodes[0];
            } else {
                return { status: 'MISSING' };
            }
        } catch (e) {
            //this is the unfortunate state in which the node is not reachable
            console.error(e);
            return 'EXPLORER_DOWN';
        }
    }

    /**
       @return {Promise<string>} The status of this masternode.
     */
    async getStatus() {
        const cMasternode = await this.getFullData();
        return cMasternode ? cMasternode.status : 'MISSING';
    }

    /**
     * @param {String} ip
     * @param {Number} port
     * @returns {string} hex representation of the IP + port pair
     */
    static _decodeIpAddress(ip, port) {
        const address = ip.includes('.')
            ? ip_address__WEBPACK_IMPORTED_MODULE_5__.Address6.fromAddress4(ip)
            : new ip_address__WEBPACK_IMPORTED_MODULE_5__.Address6(ip);
        const bytes = address.toUnsignedByteArray();
        const res =
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToHex)([...new Array(16 - bytes.length).fill(0), ...bytes]) +
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToHex)(Masternode._numToBytes(port, 2, false));
        return res;
    }

    static _numToBytes(number, numBytes = 8, littleEndian = true) {
        const bytes = [];
        for (let i = 0; i < numBytes; i++) {
            bytes.push((number / 2 ** (8 * i)) & 0xff);
        }
        return littleEndian ? bytes : bytes.reverse();
    }

    /**
     * @param {Object} message - message to encode
     * @param {string} message.vin.txid - transaction id of the collateral
     * @param {number} message.vin.idx - output id of the collateral starting from 0
     * @param {string} message.blockHash - latest blockhash
     * @param {number} message.sigTime - current time in seconds since UNIX epoch
     * @return {Array} Returns the unsigned ping message. It needs to be signed with the MN private key
     */
    static getPingSignature({ vin, blockHash, sigTime }) {
        const ping = [
            ...(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(vin.txid).reverse(),
            ...Masternode._numToBytes(vin.idx, 4, true),
            // Should be tx sequence, but 0xffffff is fine
            ...[0, 255, 255, 255, 255],
            ...(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(blockHash).reverse(),
            ...Masternode._numToBytes(sigTime, 8, true),
        ];
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.dSHA256)(ping);
    }

    /**
     * @param {Object} message - Message to encode
     * @param {string} message.walletPrivateKey - private key of the collateral
     * @param {string} message.addr - Masternode ipv4 with port
     * @param {string} message.mnPrivateKey - private key of masternode
     * @param {number} message.sigTime - current time in seconds since UNIX epoch
     * @return {string} The message to be signed with the collateral private key.
     * it needs to be padded with "\x18DarkNet Signed Message:\n" + Message length + Message
     * Then hashed two times with SHA256
     */
    static getToSign({ walletPrivateKey, addr, mnPrivateKey, sigTime }) {
        let ip, port;
        if (addr.includes('.')) {
            // IPv4
            [ip, port] = addr.split(':');
        } else {
            // IPv6
            [ip, port] = addr.slice(1).split(']');
            port = port.slice(1);
        }
        const publicKey = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(
            (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.deriveAddress)({
                pkBytes: (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.parseWIF)(walletPrivateKey, true),
                output: 'COMPRESSED_HEX',
            })
        );
        const mnPublicKey = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(
            (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.deriveAddress)({
                pkBytes: (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.parseWIF)(mnPrivateKey, true),
                output: 'UNCOMPRESSED_HEX',
            })
        );

        const pkt = [
            ...Masternode._numToBytes(1, 4, true), // Message version
            ...(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(Masternode._decodeIpAddress(ip, port)), // Encoded ip + port
            ...Masternode._numToBytes(sigTime, 8, true),
            ...Masternode._numToBytes(publicKey.length, 1, true), // Collateral public key length
            ...publicKey,
            ...Masternode._numToBytes(mnPublicKey.length, 1, true), // Masternode public key length
            ...mnPublicKey,
            ...Masternode._numToBytes(
                _chain_params_js__WEBPACK_IMPORTED_MODULE_1__.cChainParams.current.PROTOCOL_VERSION,
                4,
                true
            ), // Protocol version
        ];
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToHex)((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.dSHA256)(pkt).reverse());
    }

    /**
     * @return {Promise<string>} The last block hash
     */
    static async getLastBlockHash() {
        const status = await (await fetch(`${_settings_js__WEBPACK_IMPORTED_MODULE_0__.cExplorer.url}/api/`)).json();
        return status.backend.bestBlockHash;
    }

    /**
     * @return {Promise<string>} The signed message signed with the collateral private key
     */
    async getSignedMessage(sigTime) {
        const padding = '\x18DarkNet Signed Message:\n'
            .split('')
            .map((c) => c.charCodeAt(0));
        const walletPrivateKey = await this._getWalletPrivateKey();
        const toSign = Masternode.getToSign({
            addr: this.addr,
            walletPrivateKey: walletPrivateKey,
            mnPrivateKey: this.mnPrivateKey,
            sigTime,
        })
            .split('')
            .map((c) => c.charCodeAt(0));
        const hash = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.dSHA256)(padding.concat(toSign.length).concat(toSign));
        const [signature, v] = await _noble_secp256k1__WEBPACK_IMPORTED_MODULE_6__.sign(
            hash,
            (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.parseWIF)(walletPrivateKey, true),
            { der: false, recovered: true }
        );
        return [v + 31, ...signature];
    }
    /**
     * @return {Promise<string>} The signed ping message signed with the masternode private key
     */
    async getSignedPingMessage(sigTime, blockHash) {
        const toSign = Masternode.getPingSignature({
            vin: {
                txid: this.collateralTxId,
                idx: this.outidx,
            },
            blockHash,
            sigTime,
        });
        const [signature, v] = await _noble_secp256k1__WEBPACK_IMPORTED_MODULE_6__.sign(
            toSign,
            (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.parseWIF)(this.mnPrivateKey, true),
            { der: false, recovered: true }
        );
        return [v + 27, ...signature];
    }

    /**
     * Get the message encoded to hex used to start a masternode
     * It uses to two signatures: `getPingSignature()` which is signed
     * With the masternode private key, and `getToSign()` which is signed with
     * The collateral private key
     * @return {Promise<string>} The message used to start a masternode.
     */
    async broadcastMessageToHex() {
        const sigTime = Math.round(Date.now() / 1000);
        const blockHash = await Masternode.getLastBlockHash();
        const [ip, port] = this.addr.split(':');
        const walletPrivateKey = await this._getWalletPrivateKey();
        const walletPublicKey = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(
            (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.deriveAddress)({
                pkBytes: (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.parseWIF)(walletPrivateKey, true),
                output: 'COMPRESSED_HEX',
            })
        );

        const mnPublicKey = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(
            (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.deriveAddress)({
                pkBytes: (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.parseWIF)(this.mnPrivateKey, true),
                output: 'UNCOMPRESSED_HEX',
                compress: false,
            })
        );

        const sigBytes = await this.getSignedMessage(sigTime);
        const sigPingBytes = await this.getSignedPingMessage(
            sigTime,
            blockHash
        );

        const message = [
            ...(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(this.collateralTxId).reverse(),
            ...Masternode._numToBytes(this.outidx, 4, true),
            ...Masternode._numToBytes(0, 1, true), // Message version
            ...Masternode._numToBytes(0xffffffff, 4, true),
            ...(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(Masternode._decodeIpAddress(ip, port)),
            ...Masternode._numToBytes(walletPublicKey.length, 1, true),
            ...walletPublicKey,
            ...Masternode._numToBytes(mnPublicKey.length, 1, true),
            ...mnPublicKey,
            ...Masternode._numToBytes(sigBytes.length, 1, true),
            ...sigBytes,
            ...Masternode._numToBytes(sigTime, 8, true),
            ...Masternode._numToBytes(
                _chain_params_js__WEBPACK_IMPORTED_MODULE_1__.cChainParams.current.PROTOCOL_VERSION,
                4,
                true
            ),
            ...(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(this.collateralTxId).reverse(),
            ...Masternode._numToBytes(this.outidx, 4, true),
            ...Masternode._numToBytes(0, 1, true),
            ...Masternode._numToBytes(0xffffffff, 4, true),
            ...(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(blockHash).reverse(),
            ...Masternode._numToBytes(sigTime, 8, true),
            ...Masternode._numToBytes(sigPingBytes.length, 1, true),
            ...sigPingBytes,
            ...Masternode._numToBytes(1, 4, true),
            ...Masternode._numToBytes(1, 4, true),
        ];
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToHex)(message);
    }

    /**
     * Start the masternode
     * @return {Promise<bool>} Whether or not the message was relayed successfully. This does not necessarely mean
     * starting was successful, but only that the node was able to decode the broadcast.
     */
    async start() {
        const message = await this.broadcastMessageToHex();
        const url = `${_settings_js__WEBPACK_IMPORTED_MODULE_0__.cNode.url}/relaymasternodebroadcast?params=${message}`;
        const response = await (await fetch(url)).text();
        return response.includes('Masternode broadcast sent');
    }

    /**
     *
     * @param {object} options
     * @param {bool} options.fAllowFinished - Pass `true` to stop filtering proposals if finished
     * @return {Promise<Array<object>} A list of currently active proposal
     */
    static async getProposals({ fAllowFinished = false } = {}) {
        const url = `${_settings_js__WEBPACK_IMPORTED_MODULE_0__.cNode.url}/getbudgetinfo`;
        let arrProposals = await (await fetch(url)).json();

        // Apply optional filters
        if (!fAllowFinished) {
            arrProposals = arrProposals.filter(
                (a) => a.RemainingPaymentCount > 0
            );
        }
        return arrProposals;
    }

    /**
     * @param {string} hash - the hash of the proposal to vote
     * @param {number} voteCode - the vote code. "Yes" is 1, "No" is 2
     * @param {number} sigTime - The current time in seconds since UNIX epoch
     * @return {Promise<string>} The signed message used to vote
     */
    async getSignedVoteMessage(hash, voteCode, sigTime) {
        const msg = [
            ...(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(this.collateralTxId).reverse(),
            ...Masternode._numToBytes(this.outidx, 4, true),
            // Should be tx sequence, but 0xffffff is fine
            ...[0, 255, 255, 255, 255],
            ...(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(hash).reverse(),
            ...Masternode._numToBytes(voteCode, 4, true),
            ...Masternode._numToBytes(sigTime, 8, true),
        ];

        const [signature, v] = await _noble_secp256k1__WEBPACK_IMPORTED_MODULE_6__.sign(
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.dSHA256)(msg),
            (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.parseWIF)(this.mnPrivateKey, true),
            { der: false, recovered: true }
        );
        return buffer__WEBPACK_IMPORTED_MODULE_4__.Buffer.from([v + 27, ...signature]).toString('base64');
    }

    /**
     * @param {string} hash - the hash of the proposal to vote
     * @param {number} voteCode - the vote code. "Yes" is 1, "No" is 2
     * @return {Promise<string>} The response from the node
     */
    async vote(hash, voteCode) {
        const sigTime = Math.round(Date.now() / 1000);
        const signature = await this.getSignedVoteMessage(
            hash,
            voteCode,
            sigTime
        );
        const url = `${_settings_js__WEBPACK_IMPORTED_MODULE_0__.cNode.url}/mnbudgetrawvote?params=${
            this.collateralTxId
        },${this.outidx},${hash},${
            voteCode === 1 ? 'yes' : 'no'
        },${sigTime},${encodeURI(signature).replaceAll('+', '%2b')}`;
        const text = await (await fetch(url)).text();
        return text;
    }
}


/***/ }),

/***/ "./scripts/mempool.js":
/*!****************************!*\
  !*** ./scripts/mempool.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mempool": () => (/* binding */ Mempool),
/* harmony export */   "UTXO": () => (/* binding */ UTXO)
/* harmony export */ });
/* harmony import */ var _network_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network.js */ "./scripts/network.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ "./scripts/global.js");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc.js */ "./scripts/misc.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.js */ "./scripts/settings.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");





/** An Unspent Transaction Output, used as Inputs of future transactions */
class UTXO {
    /**
     * @param {Object} UTXO
     * @param {String} UTXO.id - Transaction ID
     * @param {String} UTXO.path - If applicable, the HD Path of the owning address
     * @param {Number} UTXO.sats - Satoshi value in this UTXO
     * @param {String} UTXO.script - HEX encoded spending script
     * @param {Number} UTXO.vout - Output position of this transaction
     * @param {Number} UTXO.height - Block height of the UTXO
     * @param {Number} UTXO.status - UTXO status enum state
     * @param {bool} UTXO.isDelegate - Whether the UTXO is a cold stake delegation
     */
    constructor({
        id,
        path,
        sats,
        script,
        vout,
        height,
        status,
        isDelegate = false,
        isReward = false,
    } = {}) {
        /** Transaction ID
         * @type {String} */
        this.id = id;

        /** HD Path of the owning address
         *  @type {String} */
        this.path = path;

        /** Satoshi value in this UTXO
         *  @type {Number} */
        this.sats = sats;

        /** HEX encoded spending script
         *  @type {String} */
        this.script = script;

        /** Output position of this transaction
         *  @type {Number} */
        this.vout = vout;

        /** Block height of the UTXO
         *  @type {Number} */
        this.height = height;

        /** UTXO status enum state
         *  @type {Number} */
        this.status = status;

        /** If it's a delegation UTXO
         * @type {bool} */
        this.isDelegate = isDelegate;

        this.isReward = isReward;
    }

    /**
     * Check for equality between this UTXO and another UTXO
     * @param {UTXO} cUTXO - UTXO to compare against
     * @returns {Boolean} `true` if equal, `false` if unequal
     */
    equalsUTXO(cUTXO) {
        return (
            this.id === cUTXO.id &&
            this.vout === cUTXO.vout &&
            this.status === cUTXO.status
        );
    }
}

/** A Mempool instance, stores and handles UTXO data for the wallet */
class Mempool {
    constructor() {
        /**
         * An array of all known UTXOs
         * @type {Array<UTXO>}
         */
        this.UTXOs = [];
    }

    /** The CONFIRMED state (UTXO is spendable) */
    static CONFIRMED = 0;

    /** The REMOVED state (UTXO was spent and will be removed soon) */
    static REMOVED = 1;

    /** The PENDING state (standard UTXO is in mempool, pending confirmation) */
    static PENDING = 2;

    /**
     * Remove a UTXO after a set amount of time
     * @param {Number} nBlocks - Estimated blocks to wait
     * @param {UTXO} cUTXO - UTXO to remove
     */
    async removeWithDelay(nBlocks, cUTXO) {
        await (0,_misc_js__WEBPACK_IMPORTED_MODULE_2__.sleep)(nBlocks * 60 * 1000);
        this.removeUTXO(cUTXO);
    }

    /**
     * Check if an exact UTXO match can be found in our wallet
     * @param {Object} UTXO
     * @param {String} UTXO.id - Transaction ID
     * @param {Number} UTXO.vout - Output position of this transaction
     * @param {Number} [UTXO.status] - UTXO status enum state. If it's undefined, it will ignore it.
     * @returns {Boolean} `true` or `false`
     */
    isAlreadyStored({ id, vout, status }) {
        return this.UTXOs.some(
            (cUTXO) =>
                cUTXO.id === id &&
                cUTXO.vout === vout &&
                (!status || cUTXO.status === status)
        );
    }

    /**
     * Fetches an array of UTXOs filtered by their state
     * @param {Number} nState - Specific UTXO state
     * @returns {Array<UTXO>} `array` - An array of UTXOs
     */
    getUTXOsByState(nState) {
        return this.UTXOs.filter((cUTXO) => cUTXO.status === nState);
    }

    /**
     * Removes a UTXO from a specific state
     * @param {UTXO} cNewUTXO - Pending UTXO to remove
     * @param {Number} nState - Specific state of this UTXO to search for
     */
    removeFromState(cNewUTXO, nState) {
        const arrPendingUTXOs = this.getUTXOsByState(nState);
        // Loop each pending UTXO
        for (const cUTXO of arrPendingUTXOs) {
            // Search for matching ID + output number
            if (cUTXO.id === cNewUTXO.id && cUTXO.vout === cNewUTXO.vout) {
                // Nuke it from orbit
                this.removeUTXO(cUTXO);
                break;
            }
        }
    }

    /**
     * Add a new UTXO to the wallet
     * @param {Object} UTXO
     * @param {String} UTXO.id - Transaction ID
     * @param {String} UTXO.path - If applicable, the HD Path of the owning address
     * @param {Number} UTXO.sats - Satoshi value in this UTXO
     * @param {String} UTXO.script - HEX encoded spending script
     * @param {Number} UTXO.vout - Output position of this transaction
     * @param {Number} UTXO.height - Block height of the UTXO
     * @param {Number} UTXO.status - UTXO status enum state
     * @param {Boolean} UTXO.isDelegate - If this is a Cold Delegation
     */
    addUTXO({
        id,
        path,
        sats,
        script,
        vout,
        height,
        status,
        isDelegate,
        isReward,
    }) {
        const newUTXO = new UTXO({
            id,
            path,
            sats,
            script,
            vout,
            height,
            status,
            isDelegate,
            isReward,
        });

        if (this.isAlreadyStored({ id, vout })) {
            this.updateUTXO({ id, vout });
        } else {
            this.UTXOs.push(newUTXO);
        }
        (0,_global_js__WEBPACK_IMPORTED_MODULE_1__.getBalance)(true);
        (0,_global_js__WEBPACK_IMPORTED_MODULE_1__.getStakingBalance)(true);
    }

    /**
     * Update an existing UTXO, by confirming its pending status
     * The UTXO must be in
     * @param {Object} UTXO - Object to be deconstructed
     * @param {String} UTXO.id - Transaction id
     * @param {Number} UTXO.vout - vout
     */
    updateUTXO({ id, vout }) {
        if (_settings_js__WEBPACK_IMPORTED_MODULE_3__.debug) {
            console.assert(
                this.isAlreadyStored({ id, vout }),
                'updateUTXO must be called with an existing UTXO'
            );
        }
        const cUTXO = this.UTXOs.find(
            (utxo) => utxo.id === id && utxo.vout == vout
        );
        switch (cUTXO.status) {
            case Mempool.PENDING:
                cUTXO.status = Mempool.CONFIRMED;
                break;
        }
        (0,_global_js__WEBPACK_IMPORTED_MODULE_1__.getBalance)(true);
        (0,_global_js__WEBPACK_IMPORTED_MODULE_1__.getStakingBalance)(true);
    }

    /**
     * Remove a UTXO completely from our wallet
     * @param {UTXO} cUTXO - UTXO to remove
     */
    removeUTXO(cUTXO) {
        this.UTXOs = this.UTXOs.filter((utxo) => !utxo.equalsUTXO(cUTXO));
    }

    /**
     * Remove a UTXO completely from our wallet, with a 12 minute delay given his id, path and vout
     * @param {Object} UTXO
     * @param {String} UTXO.id - Transaction ID
     * @param {Number} UTXO.vout - Output position of this transaction
     */
    autoRemoveUTXO({ id, vout }) {
        for (const cUTXO of this.UTXOs) {
            // Loop given + internal UTXOs to find a match, then start the delayed removal
            if (cUTXO.id === id && cUTXO.vout === vout) {
                cUTXO.status = Mempool.REMOVED;
                this.removeWithDelay(12, cUTXO);
                return;
            }
        }
        console.error(
            'Mempool: Failed to find UTXO ' +
                id +
                ' (' +
                vout +
                ') for auto-removal!'
        );
    }

    /**
     * Remove many UTXOs completely from our wallet, with a 12 minute delay
     * @param {Array<UTXO>} arrUTXOs - UTXOs to remove
     */
    autoRemoveUTXOs(arrUTXOs) {
        for (const cNewUTXO of arrUTXOs) {
            for (const cUTXO of this.UTXOs) {
                // Loop given + internal UTXOs to find a match, then start the delayed removal
                if (cUTXO.equalsUTXO(cNewUTXO)) {
                    cUTXO.status = Mempool.REMOVED;
                    this.removeWithDelay(12, cUTXO);
                    break;
                }
            }
        }
    }

    /**
     * Fetches an array of confirmed UTXOs, an easier alias to {@link getUTXOsByState}
     * @returns {Array<UTXO>} `array` - An array of UTXOs
     */
    getConfirmed() {
        return this.getUTXOsByState(Mempool.CONFIRMED);
    }

    /**
     * Get standard, non delegated, UTXOs
     * @returns {Array<UTXO>} Non delegated utxos
     */
    getStandardUTXOs() {
        return this.UTXOs.filter(
            (cUTXO) => cUTXO.status !== Mempool.REMOVED && !cUTXO.isDelegate
        );
    }

    /**
     * Get delegated UTXOs
     * @returns {Array<UTXO>} Delegated UTXOs
     */
    getDelegatedUTXOs() {
        return this.UTXOs.filter(
            (cUTXO) => cUTXO.status !== Mempool.REMOVED && cUTXO.isDelegate
        );
    }

    /**
     * Returns the real-time balance of the wallet (all addresses)
     * @returns {Number} Balance in satoshis
     */
    getBalance() {
        // Fetch 'standard' balances: the sum of all Confirmed or Unconfirmed transactions (excluding Masternode collaterals)
        return this.getStandardUTXOs()
            .filter((cUTXO) => !(0,_global_js__WEBPACK_IMPORTED_MODULE_1__.isMasternodeUTXO)(cUTXO))
            .reduce((a, b) => a + b.sats, 0);
    }

    /**
     * Returns if a UTXO is valid
     * @param {UTXO} cUTXO - UTXO
     * @returns {Boolean} `true` if the reward UTXO is spendable, `false` if not
     */
    static isValidUTXO(cUTXO) {
        if (cUTXO.isReward) {
            return _network_js__WEBPACK_IMPORTED_MODULE_0__.cachedBlockCount - cUTXO.height > 100;
        } else {
            return true;
        }
    }

    /**
     * Returns the real-time delegated balance of the wallet (all addresses)
     * @returns {Number} Delegated balance in satoshis
     */
    getDelegatedBalance() {
        return this.getDelegatedUTXOs().reduce((a, b) => a + b.sats, 0);
    }
}


/***/ }),

/***/ "./scripts/misc.js":
/*!*************************!*\
  !*** ./scripts/misc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LEN_B58": () => (/* binding */ LEN_B58),
/* harmony export */   "MAP_B58": () => (/* binding */ MAP_B58),
/* harmony export */   "confirmPopup": () => (/* binding */ confirmPopup),
/* harmony export */   "convertMnPrivKeyFromHex": () => (/* binding */ convertMnPrivKeyFromHex),
/* harmony export */   "createAlert": () => (/* binding */ createAlert),
/* harmony export */   "createQR": () => (/* binding */ createQR),
/* harmony export */   "generateMnPrivkey": () => (/* binding */ generateMnPrivkey),
/* harmony export */   "getSafeRand": () => (/* binding */ getSafeRand),
/* harmony export */   "hash": () => (/* binding */ hash),
/* harmony export */   "pubChksum": () => (/* binding */ pubChksum),
/* harmony export */   "pubKeyHashNetworkLen": () => (/* binding */ pubKeyHashNetworkLen),
/* harmony export */   "pubPrebaseLen": () => (/* binding */ pubPrebaseLen),
/* harmony export */   "sanitizeHTML": () => (/* binding */ sanitizeHTML),
/* harmony export */   "sleep": () => (/* binding */ sleep),
/* harmony export */   "writeToUint8": () => (/* binding */ writeToUint8)
/* harmony export */ });
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.js */ "./scripts/i18n.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ "./scripts/global.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chain_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chain_params */ "./scripts/chain_params.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./scripts/utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







/* MPW constants */
const pubKeyHashNetworkLen = 21;
const pubChksum = 4;
const pubPrebaseLen = pubKeyHashNetworkLen + pubChksum;

// Base58 Encoding Map
const MAP_B58 =
    '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const LEN_B58 = MAP_B58.length;

/* --- UTILS --- */
// Cryptographic Random-Gen
function getSafeRand(nSize = 32) {
    return crypto.getRandomValues(new Uint8Array(nSize));
}

// Writes a sequence of Array-like bytes into a location within a Uint8Array
function writeToUint8(arr, bytes, pos) {
    const arrLen = arr.length;
    // Sanity: ensure an overflow cannot occur, if one is detected, somewhere in MPW's state could be corrupted.
    if (arrLen - pos - bytes.length < 0) {
        const strERR =
            'CRITICAL: Overflow detected (' +
            (arrLen - pos - bytes.length) +
            '), possible state corruption, backup and refresh advised.';
        createAlert('warning', strERR, 5000);
        throw Error(strERR);
    }
    let i = 0;
    while (pos < arrLen) arr[pos++] = bytes[i++];
}

/* --- NOTIFICATIONS --- */
// Alert - Do NOT display arbitrary / external errors, the use of `.innerHTML` allows for input styling at this cost.
// Supported types: success, info, warning
function createAlert(type, message, alertVariables = [], timeout = 0) {
    const domAlert = document.createElement('div');
    domAlert.classList.add('alertpop');
    domAlert.classList.add(type);
    setTimeout(() => {
        domAlert.style.opacity = '1';
        domAlert.style.zIndex = '999999';
        domAlert.classList.add('bounce-ani');
        domAlert.classList.add('bounce');
    }, 100);

    // Maintainer QoL adjustment: if `alertVariables` is a number, it is instead assumed to be `timeout`
    if (typeof alertVariables === 'number') {
        timeout = alertVariables;
        alertVariables = [];
    }

    // Apply translations
    const translatedMessage = (0,_i18n_js__WEBPACK_IMPORTED_MODULE_0__.translateAlerts)(message, alertVariables);

    // Message
    domAlert.innerHTML = translatedMessage;
    domAlert.destroy = () => {
        // Fully destroy timers + DOM elements, no memory leaks!
        clearTimeout(domAlert.timer);
        domAlert.style.opacity = '0';
        setTimeout(() => {
            domAlert.remove();
        }, 600);
    };
    // On Click: Delete alert from DOM after close animation.
    domAlert.addEventListener('click', domAlert.destroy);
    // On Timeout: Delete alert from DOM after a period of inactive time.
    if (timeout > 0) domAlert.timer = setTimeout(domAlert.destroy, timeout);
    _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domAlertPos.appendChild(domAlert);
}

// Shows the confirm modal with the provided html.
// If resolvePromise has a value, the popup won't have
// Confirm/Cancel buttons and will wait for the promise to resolve
// Returns the awaited value of resolvePromise
// or true/false if the user confirmed or not the modal
async function confirmPopup({ title, html, resolvePromise }) {
    // If there's a title provided: display the header and text
    _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domConfirmModalHeader.style.display = title ? 'block' : 'none';
    _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domConfirmModalTitle.innerHTML = title || '';

    // If there's a promise to resolve, don't display buttons; the modal visibility will be controlled by the promise (f.e: a 'pls wait' screen)
    _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domConfirmModalButtons.style.setProperty(
        'display',
        resolvePromise ? 'none' : 'block',
        resolvePromise ? 'important' : undefined
    );
    $('#confirmModal').modal(resolvePromise ? 'show' : { keyboard: false });

    // Set content display
    _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domConfirmModalContent.innerHTML = html;

    // Wait for the promise to resolve OR create a new one which resolves upon a modal button click
    resolvePromise =
        resolvePromise ||
        new Promise((res, _) => {
            _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domConfirmModalConfirmButton.onclick = () => {
                res(true);
            };
            _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domConfirmModalCancelButton.onclick = () => {
                res(false);
            };
        });
    try {
        return await resolvePromise;
    } finally {
        // We want to hide the modal even if an exception occurs
        $('#confirmModal').modal('hide');
    }
}

// Generates and sets a QRCode image from a string and dom element
function createQR(strData = '', domImg, size = 4) {
    // QRCode class consists of 'typeNumber' & 'errorCorrectionLevel'
    const cQR = qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default()(size, 'L');
    cQR.addData(strData);
    cQR.make();
    domImg.innerHTML = cQR.createImgTag(2, 2);
    domImg.firstChild.style.borderRadius = '8px';
}

//generate private key for masternodes
async function generateMnPrivkey() {
    // maximum value for a decoded private key
    let max_decoded_value =
        115792089237316195423570985008687907852837564279074904382605163141518161494337n;
    let valid = false;
    let priv_key = 0;
    while (!valid) {
        priv_key = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.bytesToHex)(getSafeRand(32));
        let decoded_priv_key = BigInt('0x' + priv_key);

        if (0 < decoded_priv_key && decoded_priv_key < max_decoded_value) {
            valid = true;
        }
    }
    return await convertMnPrivKeyFromHex(priv_key);
}

async function convertMnPrivKeyFromHex(hexStr) {
    //prefixes
    let WIF_PREFIX = 212;
    let TESTNET_WIF_PREFIX = 239;
    let base58_secret = _chain_params__WEBPACK_IMPORTED_MODULE_4__.cChainParams.current.isTestnet
        ? TESTNET_WIF_PREFIX
        : WIF_PREFIX;

    //convert the hexStr+ initial prefix to byte array hexToBytes(string)
    let data = [...(0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.hexToBytes)(hexStr)];
    data.unshift(base58_secret);

    //generate the checksum with double sha256 hashing
    let checksum = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.hexToBytes)(await hash((0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.hexToBytes)(await hash(data)))).slice(
        0,
        4
    );

    //concatenate data and checksum
    for (const byte of checksum) {
        data.push(byte);
    }

    return bs58__WEBPACK_IMPORTED_MODULE_3___default().encode(data);
}

//sha256 a bytearray and return the hash in hexadecimal
async function hash(byteArray) {
    const utf8 = new Uint8Array(byteArray);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
    return hashHex;
}

function sanitizeHTML(text) {
    const element = document.createElement('div');
    element.innerText = text;
    return element.innerHTML;
}

/**
 * An artificial sleep function to pause code execution
 *
 * @param {Number} ms - The milliseconds to sleep
 *
 * @example
 * // Pause an asynchronous script for 1 second
 * await sleep(1000);
 */
function sleep(ms) {
    return new Promise((res, _) => setTimeout(res, ms));
}


/***/ }),

/***/ "./scripts/native.js":
/*!***************************!*\
  !*** ./scripts/native.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerWorker": () => (/* binding */ registerWorker)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./scripts/global.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc */ "./scripts/misc.js");



// Register a service worker, if it's supported
function registerWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./native-worker.js');

        // Listen for device pre-install events, these fire if MPW is capable of being installed on the device
        window.addEventListener('beforeinstallprompt', (event) => {
            // Prevent the mini-infobar from appearing on mobile.
            event.preventDefault();
        });

        // Listen for successful installs
        window.addEventListener('appinstalled', (_event) => {
            // Notify!
            return (0,_misc__WEBPACK_IMPORTED_MODULE_1__.createAlert)('success', 'App Installed!', 2500);
        });
    }
}


/***/ }),

/***/ "./scripts/network.js":
/*!****************************!*\
  !*** ./scripts/network.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrRewards": () => (/* binding */ arrRewards),
/* harmony export */   "cachedBlockCount": () => (/* binding */ cachedBlockCount),
/* harmony export */   "disableNetwork": () => (/* binding */ disableNetwork),
/* harmony export */   "enableNetwork": () => (/* binding */ enableNetwork),
/* harmony export */   "getBlockCount": () => (/* binding */ getBlockCount),
/* harmony export */   "getFee": () => (/* binding */ getFee),
/* harmony export */   "getStakingRewards": () => (/* binding */ getStakingRewards),
/* harmony export */   "getTxInfo": () => (/* binding */ getTxInfo),
/* harmony export */   "lastWallet": () => (/* binding */ lastWallet),
/* harmony export */   "networkEnabled": () => (/* binding */ networkEnabled),
/* harmony export */   "sendTransaction": () => (/* binding */ sendTransaction),
/* harmony export */   "submitAnalytics": () => (/* binding */ submitAnalytics),
/* harmony export */   "toggleNetwork": () => (/* binding */ toggleNetwork)
/* harmony export */ });
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ "./scripts/settings.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.js */ "./scripts/global.js");
/* harmony import */ var _wallet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.js */ "./scripts/wallet.js");
/* harmony import */ var _chain_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chain_params.js */ "./scripts/chain_params.js");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc.js */ "./scripts/misc.js");
/* harmony import */ var _mempool_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mempool.js */ "./scripts/mempool.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");






let networkEnabled = true;
let cachedBlockCount = 0;
let arrRewards = [];

// Disable the network, return true if successful.
function disableNetwork() {
    if (networkEnabled) return !toggleNetwork();
    return false;
}

function toggleNetwork() {
    networkEnabled = !networkEnabled;
    //TRANSLATION CHANGE
    //doms.domNetwork.innerHTML = '<b>Network:</b> ' + (networkEnabled ? 'Enabled' : 'Disabled');
    _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domNetworkE.style.display = networkEnabled ? '' : 'none';
    _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domNetworkD.style.display = networkEnabled ? 'none' : '';
    return networkEnabled;
}

// Enable the network, return true if successful.
function enableNetwork() {
    if (!networkEnabled) return toggleNetwork();
    return false;
}

let lastWallet = 0;

function networkError() {
    if (disableNetwork()) {
        (0,_misc_js__WEBPACK_IMPORTED_MODULE_4__.createAlert)(
            'warning',
            '<b>Failed to synchronize!</b> Please try again later.' +
                '<br>You can attempt re-connect via the Settings.',
            []
        );
    }
}

function getBlockCount() {
    var request = new XMLHttpRequest();
    request.open('GET', _settings_js__WEBPACK_IMPORTED_MODULE_0__.cExplorer.url + '/api/v2/api', true);
    request.onerror = networkError;
    request.onload = function () {
        const data = JSON.parse(this.response);
        // If the block count has changed, refresh all of our data!
        _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domBalanceReload.classList.remove('playAnim');
        _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domBalanceReloadStaking.classList.remove('playAnim');
        if (data.backend.blocks > cachedBlockCount) {
            console.log(
                'New block detected! ' +
                    cachedBlockCount +
                    ' --> ' +
                    data.backend.blocks
            );
            getUTXOs();
            getStakingRewards();
        }
        cachedBlockCount = data.backend.blocks;
    };
    request.send();
}

/**
 * Parses UTXOs and puts them in the mempool
 * @param {Array<Object>} arrUTXOs - Array of object-formatted UTXOs
 * @returns {Promise<void>} Resolves when it has parsed every UTXO
 */
async function acceptUTXO(arrUTXOs) {
    const nTimeSyncStart = Date.now() / 1000;

    for (const cUTXO of arrUTXOs) {
        if (_global_js__WEBPACK_IMPORTED_MODULE_1__.mempool.isAlreadyStored({ id: cUTXO.txid, vout: cUTXO.vout })) {
            _global_js__WEBPACK_IMPORTED_MODULE_1__.mempool.updateUTXO({ id: cUTXO.txid, vout: cUTXO.vout });
            continue;
        }
        const cTx = await (
            await fetch(`${_settings_js__WEBPACK_IMPORTED_MODULE_0__.cExplorer.url}/api/v2/tx-specific/${cUTXO.txid}`)
        ).json();
        const cVout = cTx.vout[cUTXO.vout];

        let path;
        if (cUTXO.path) {
            path = cUTXO.path.split('/');
            path[2] =
                (_wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey.isHardwareWallet
                    ? _chain_params_js__WEBPACK_IMPORTED_MODULE_3__.cChainParams.current.BIP44_TYPE_LEDGER
                    : _chain_params_js__WEBPACK_IMPORTED_MODULE_3__.cChainParams.current.BIP44_TYPE) + "'";
            lastWallet = Math.max(parseInt(path[5]), lastWallet);
            path = path.join('/');
        }

        const isColdStake = cVout.scriptPubKey.type === 'coldstake';
        const isStandard = cVout.scriptPubKey.type === 'pubkeyhash';
        const isReward = cTx.vout[0].scriptPubKey.hex === '';
        // We don't know what this is
        if (!isColdStake && !isStandard) {
            continue;
        }

        _global_js__WEBPACK_IMPORTED_MODULE_1__.mempool.addUTXO({
            id: cUTXO.txid,
            path,
            sats: Math.round(cVout.value * _chain_params_js__WEBPACK_IMPORTED_MODULE_3__.COIN),
            script: cVout.scriptPubKey.hex,
            vout: cVout.n,
            height: cachedBlockCount - (cTx.confirmations - 1),
            status: cTx.confirmations < 1 ? _mempool_js__WEBPACK_IMPORTED_MODULE_5__.Mempool.PENDING : _mempool_js__WEBPACK_IMPORTED_MODULE_5__.Mempool.CONFIRMED,
            isDelegate: isColdStake,
            isReward,
        });
    }
    (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.getNewAddress)(true);
    if (arrUTXOs.length) {
        // If allowed by settings: submit a sync performance measurement to Labs Analytics
        return submitAnalytics('time_to_sync', {
            time: Date.now() / 1000 - nTimeSyncStart,
            explorer: _settings_js__WEBPACK_IMPORTED_MODULE_0__.cExplorer.name,
        });
    }
}

/**
 * Fetch UTXOs from the current primary explorer
 * @returns {Promise<void>} Resolves when it has finished fetching UTXOs
 */
async function getUTXOs() {
    // Don't fetch UTXOs if we're already scanning for them!
    if (getUTXOs.isSyncing) return;
    getUTXOs.isSyncing = true;
    try {
        let publicKey;
        if (_wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey.isHD) {
            const derivationPath = (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.getDerivationPath)(_wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey.isHardwareWallet)
                .split('/')
                .slice(0, 4)
                .join('/');
            publicKey = await _wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey.getxpub(derivationPath);
        } else {
            publicKey = await _wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey.getAddress();
        }
        // Validate and sync these UTXOs
        await acceptUTXO(
            await (
                await fetch(`${_settings_js__WEBPACK_IMPORTED_MODULE_0__.cExplorer.url}/api/v2/utxo/${publicKey}`)
            ).json()
        );
    } catch (e) {
        console.error(e);
        networkError();
    } finally {
        getUTXOs.isSyncing = false;
    }
}

async function sendTransaction(hex, msg = '') {
    try {
        const data = await (
            await fetch(_settings_js__WEBPACK_IMPORTED_MODULE_0__.cExplorer.url + '/api/v2/sendtx/', {
                method: 'post',
                body: hex,
            })
        ).json();
        if (data.result && data.result.length === 64) {
            console.log('Transaction sent! ' + data.result);
            _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domTxOutput.innerHTML =
                '<h4 style="color:green; font-family:mono !important;">' +
                data.result +
                '</h4>';
            _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domSimpleTXs.style.display = 'none';
            _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domAddress1s.value = '';
            _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domValue1s.innerHTML = '';
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_4__.createAlert)(
                'success',
                msg || 'Transaction sent!',
                msg ? 1250 + msg.length * 50 : 1500
            );
            // If allowed by settings: submit a simple 'tx' ping to Labs Analytics
            submitAnalytics('transaction');
            return true;
        } else {
            console.log('Error sending transaction: ' + data.result);
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_4__.createAlert)('warning', 'Transaction Failed!', 1250);
            // Attempt to parse and prettify JSON (if any), otherwise, display the raw output.
            let strError = data.error;
            try {
                strError = JSON.stringify(JSON.parse(data), null, 4);
                console.log('parsed');
            } catch (e) {
                console.log('no parse!');
                console.log(e);
            }
            _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domTxOutput.innerHTML =
                '<h4 style="color:red;font-family:mono !important;"><pre style="color: inherit;">' +
                strError +
                '</pre></h4>';
            return false;
        }
    } catch (e) {
        console.error(e);
        networkError();
    }
}

function getFee(bytes) {
    // TEMPORARY: Hardcoded fee per-byte
    return bytes * 50; // 50 sat/byte
}

async function getStakingRewards() {
    if (!networkEnabled || _wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey == undefined) return;
    _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domGuiStakingLoadMoreIcon.style.opacity = 0.5;
    const stopAnim = () => (_global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domGuiStakingLoadMoreIcon.style.opacity = 1);
    const nHeight = arrRewards.length
        ? arrRewards[arrRewards.length - 1].blockHeight
        : 0;
    let mapPaths = new Map();
    const txSum = (v) =>
        v.reduce(
            (t, s) =>
                t +
                (s.addresses
                    .map((strAddr) => mapPaths.get(strAddr))
                    .filter((v) => v).length && s.addresses.length === 2
                    ? parseInt(s.value)
                    : 0),
            0
        );
    let cData;
    if (_wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey.isHD) {
        const derivationPath = (0,_wallet_js__WEBPACK_IMPORTED_MODULE_2__.getDerivationPath)(_wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey.isHardwareWallet)
            .split('/')
            .slice(0, 4)
            .join('/');
        const xpub = await _wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey.getxpub(derivationPath);
        cData = await (
            await fetch(
                `${
                    _settings_js__WEBPACK_IMPORTED_MODULE_0__.cExplorer.url
                }/api/v2/xpub/${xpub}?details=txs&pageSize=500&to=${
                    nHeight ? nHeight - 1 : 0
                }`
            )
        ).json();
        // Map all address <--> derivation paths
        if (cData.tokens)
            cData.tokens.forEach((cAddrPath) =>
                mapPaths.set(cAddrPath.name, cAddrPath.path)
            );
    } else {
        const address = await _wallet_js__WEBPACK_IMPORTED_MODULE_2__.masterKey.getAddress();
        cData = await (
            await fetch(
                `${
                    _settings_js__WEBPACK_IMPORTED_MODULE_0__.cExplorer.url
                }/api/v2/address/${address}?details=txs&pageSize=500&to=${
                    nHeight ? nHeight - 1 : 0
                }`
            )
        ).json();
        mapPaths.set(address, ':)');
    }
    if (cData && cData.transactions) {
        // Update rewards
        arrRewards = arrRewards.concat(
            cData.transactions
                .filter((tx) => tx.vout[0].addresses[0] === 'CoinStake TX')
                .map((tx) => {
                    return {
                        id: tx.txid,
                        time: tx.blockTime,
                        blockHeight: tx.blockHeight,
                        amount: (txSum(tx.vout) - txSum(tx.vin)) / _chain_params_js__WEBPACK_IMPORTED_MODULE_3__.COIN,
                    };
                })
                .filter((tx) => tx.amount != 0)
        );

        // If the results don't match the full 'max/requested results', then we know there's nothing more to load, hide the button!
        if (cData.transactions.length !== cData.itemsOnPage)
            _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domGuiStakingLoadMore.style.display = 'none';

        // Update GUI
        stopAnim();
        (0,_global_js__WEBPACK_IMPORTED_MODULE_1__.updateStakingRewardsGUI)(true);
    } else {
        // No balance history!
        _global_js__WEBPACK_IMPORTED_MODULE_1__.doms.domGuiStakingLoadMore.style.display = 'none';

        // Update GUI
        stopAnim();
    }
}

async function getTxInfo(txHash) {
    const req = await fetch(`${_settings_js__WEBPACK_IMPORTED_MODULE_0__.cExplorer.url}/api/v2/tx/${txHash}`);
    return await req.json();
}

// PIVX Labs Analytics: if you are a user, you can disable this FULLY via the Settings.
// ... if you're a developer, we ask you to keep these stats to enhance upstream development,
// ... but you are free to completely strip MPW of any analytics, if you wish, no hard feelings.
function submitAnalytics(strType, cData = {}) {
    if (!networkEnabled) return;

    // Limit analytics here to prevent 'leakage' even if stats are implemented incorrectly or forced
    let i = 0,
        arrAllowedKeys = [];
    for (i; i < _settings_js__WEBPACK_IMPORTED_MODULE_0__.cAnalyticsLevel.stats.length; i++) {
        const cStat = _settings_js__WEBPACK_IMPORTED_MODULE_0__.cAnalyticsLevel.stats[i];
        arrAllowedKeys.push(_settings_js__WEBPACK_IMPORTED_MODULE_0__.cStatKeys.find((a) => _settings_js__WEBPACK_IMPORTED_MODULE_0__.STATS[a] === cStat));
    }

    // Check if this 'stat type' was granted permissions
    if (!arrAllowedKeys.includes(strType)) return false;

    // Format
    const cStats = { type: strType, ...cData };

    // Send to Labs Analytics
    const request = new XMLHttpRequest();
    request.open('POST', 'https://scpscan.net/mpw/statistic', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(cStats));
    return true;
}


/***/ }),

/***/ "./scripts/prices.js":
/*!***************************!*\
  !*** ./scripts/prices.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COINGECKO_ENDPOINT": () => (/* binding */ COINGECKO_ENDPOINT),
/* harmony export */   "CoinGecko": () => (/* binding */ CoinGecko),
/* harmony export */   "MarketSource": () => (/* binding */ MarketSource),
/* harmony export */   "refreshPriceDisplay": () => (/* binding */ refreshPriceDisplay)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./scripts/global.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./scripts/settings.js");



/**
 * CoinGecko's endpoint for PIVX data, optimised for least bandwidth
 * - No localisation, tickers, community data, developer data or sparklines
 */
const COINGECKO_ENDPOINT =
    'https://api.coingecko.com/api/v3/coins/pivx?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';

/**
 * The generic market data source template, used to build site-specific classes
 */
class MarketSource {
    /** The storage object for raw market data */
    cData = {};

    /** The name of the market source */
    strName = '';

    /** The customised API endpoint of the market source */
    strEndpoint = '';

    /**
     * Ensure a market data cache exists, if not, fetch it and resume
     */
    async ensureCacheExists() {
        if (!this.cData || !Object.keys(this.cData).length) await this.fetch();
    }

    /**
     * Fetches the raw market source data
     * @returns {Promise<object>}
     */
    async fetch() {
        return (this.cData = await (await fetch(this.strEndpoint)).json());
    }
}

/**
 * The CoinGecko market data source
 */
class CoinGecko extends MarketSource {
    constructor() {
        super();
        this.strName = 'CoinGecko';
        this.strEndpoint = COINGECKO_ENDPOINT;
    }

    /**
     * Get the price in a specific display currency
     * @param {string} strCurrency - The CoinGecko-supported display currency
     * @return {Promise<number>}
     */
    async getPrice(strCurrency) {
        await this.ensureCacheExists();
        return this.cData.market_data.current_price[strCurrency];
    }

    /**
     * Get a list of the supported display currencies
     * @returns {Promise<Array<string>>} - A list of CoinGecko-supported display currencies
     */
    async getCurrencies() {
        await this.ensureCacheExists();
        return Object.keys(this.cData.market_data.current_price);
    }
}

/**
 * Refreshes market data from the user's data source, then re-renders currency options and price displays
 */
async function refreshPriceDisplay() {
    // Refresh our price data
    await _settings__WEBPACK_IMPORTED_MODULE_1__.cMarket.fetch();

    // Update the currency customisation menu from the selected data source
    await (0,_settings__WEBPACK_IMPORTED_MODULE_1__.fillCurrencySelect)();

    // Update price values
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.getBalance)(true);
}


/***/ }),

/***/ "./scripts/settings.js":
/*!*****************************!*\
  !*** ./scripts/settings.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATS": () => (/* binding */ STATS),
/* harmony export */   "cAnalyticsLevel": () => (/* binding */ cAnalyticsLevel),
/* harmony export */   "cExplorer": () => (/* binding */ cExplorer),
/* harmony export */   "cMarket": () => (/* binding */ cMarket),
/* harmony export */   "cNode": () => (/* binding */ cNode),
/* harmony export */   "cStatKeys": () => (/* binding */ cStatKeys),
/* harmony export */   "debug": () => (/* binding */ debug),
/* harmony export */   "fillCurrencySelect": () => (/* binding */ fillCurrencySelect),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "strCurrency": () => (/* binding */ strCurrency),
/* harmony export */   "toggleDebug": () => (/* binding */ toggleDebug),
/* harmony export */   "toggleTestnet": () => (/* binding */ toggleTestnet)
/* harmony export */ });
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ "./scripts/global.js");
/* harmony import */ var _wallet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.js */ "./scripts/wallet.js");
/* harmony import */ var _chain_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chain_params.js */ "./scripts/chain_params.js");
/* harmony import */ var _network_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network.js */ "./scripts/network.js");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc.js */ "./scripts/misc.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n.js */ "./scripts/i18n.js");
/* harmony import */ var _prices_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices.js */ "./scripts/prices.js");








// --- Default Settings
/** A mode that emits verbose console info for internal MPW operations */
let debug = false;
/** A lock which blocks ALL network requests in totality */
let networkEnabled = true;
/**
 * The user-selected display currency from market-aggregator sites
 * @type {string}
 */
let strCurrency = 'usd';
/**
 * The global market data source
 * @type {CoinGecko}
 */
let cMarket = new _prices_js__WEBPACK_IMPORTED_MODULE_6__.CoinGecko();
/** The user-selected explorer, used for most of MPW's data synchronisation */
let cExplorer = _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.Explorers[0];
/** The user-selected MPW node, used for alternative blockchain data */
let cNode = _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.Nodes[0];

let transparencyReport;
// A list of statistic keys and their descriptions
let STATS = {
    // Stat key   // Description of the stat, it's data, and it's purpose
    hit: 'A ping indicating an app load, no unique data is sent.',
    time_to_sync: 'The time in seconds it took for MPW to last synchronise.',
    transaction:
        'A ping indicating a Tx, no unique data is sent, but may be inferred from on-chain time.',
};

const cStatKeys = Object.keys(STATS);

// A list of Analytics 'levels' at which the user may set depending on their privacy preferences
let arrAnalytics = [
    // Statistic level  // Allowed statistics
    { name: 'Disabled', stats: [] },
    { name: 'Minimal', stats: [STATS.hit, STATS.time_to_sync] },
    {
        name: 'Balanced',
        stats: [STATS.hit, STATS.time_to_sync, STATS.transaction],
    },
];

let cAnalyticsLevel = arrAnalytics[2];

// Users need not look below here.
// ------------------------------
// Global Keystore / Wallet Information

// --- DOM Cache
function start() {
    //TRANSLATIONS
    //to make translations work we need to change it so that we just enable or disable the visibility of the text
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domNetworkE.style.display = networkEnabled ? '' : 'none';
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domNetworkD.style.display = networkEnabled ? 'none' : '';
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domTestnet.style.display = _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.isTestnet
        ? ''
        : 'none';
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domDebug.style.display = debug ? '' : 'none';

    // Hook up the 'currency' select UI
    document.getElementById('currency').onchange = function (evt) {
        setCurrency(evt.target.value);
    };

    // Hook up the 'explorer' select UI
    document.getElementById('explorer').onchange = function (evt) {
        setExplorer(
            _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.Explorers.find(
                (a) => a.url === evt.target.value
            )
        );
    };

    // Hook up the 'translation' select UI
    document.getElementById('translation').onchange = function (evt) {
        setTranslation(evt.target.value);
    };

    // Hook up the 'analytics' select UI
    document.getElementById('analytics').onchange = function (evt) {
        setAnalytics(arrAnalytics.find((a) => a.name === evt.target.value));
    };

    // Fill all selection UIs with their options
    if (networkEnabled) {
        fillCurrencySelect();
    }
    fillExplorerSelect();
    fillNodeSelect();
    fillTranslationSelect();

    // Add each analytics level into the UI selector
    const domAnalyticsSelect = document.getElementById('analytics');
    for (const analLevel of arrAnalytics) {
        const opt = document.createElement('option');
        opt.value = opt.innerHTML = analLevel.name;
        domAnalyticsSelect.appendChild(opt);
    }

    // Fetch settings from LocalStorage
    const strSettingAnalytics = localStorage.getItem('analytics');

    // Apply translations to the transparency report
    STATS = {
        // Stat key   // Description of the stat, it's data, and it's purpose
        hit: _i18n_js__WEBPACK_IMPORTED_MODULE_5__.translation.hit,
        time_to_sync: _i18n_js__WEBPACK_IMPORTED_MODULE_5__.translation.time_to_sync,
        transaction: _i18n_js__WEBPACK_IMPORTED_MODULE_5__.translation.transaction,
    };
    transparencyReport = _i18n_js__WEBPACK_IMPORTED_MODULE_5__.translation.transparencyReport;
    arrAnalytics = [
        // Statistic level  // Allowed statistics
        { name: 'Disabled', stats: [] },
        { name: 'Minimal', stats: [STATS.hit, STATS.time_to_sync] },
        {
            name: 'Balanced',
            stats: [STATS.hit, STATS.time_to_sync, STATS.transaction],
        },
    ];

    // Honour the "Do Not Track" header by default
    if (!strSettingAnalytics && navigator.doNotTrack === '1') {
        // Disabled
        setAnalytics(arrAnalytics[0], true);
        _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domAnalyticsDescriptor.innerHTML =
            '<h6 style="color:#dcdf6b;font-family:mono !important;"><pre style="color: inherit;">Analytics disabled to honour "Do Not Track" browser setting, you may manually enable if desired, though!</pre></h6>';
    } else {
        // Load from storage, or use defaults
        setAnalytics(
            (cAnalyticsLevel =
                arrAnalytics.find((a) => a.name === strSettingAnalytics) ||
                cAnalyticsLevel),
            true
        );
    }

    // And update the UI to reflect them
    domAnalyticsSelect.value = cAnalyticsLevel.name;
}
// --- Settings Functions
function setExplorer(explorer, fSilent = false) {
    cExplorer = explorer;
    localStorage.setItem(
        'explorer' + (_chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.isTestnet ? '-testnet' : ''),
        explorer.url
    );

    // Enable networking + notify if allowed
    (0,_network_js__WEBPACK_IMPORTED_MODULE_3__.enableNetwork)();
    if (!fSilent)
        (0,_misc_js__WEBPACK_IMPORTED_MODULE_4__.createAlert)(
            'success',
            _i18n_js__WEBPACK_IMPORTED_MODULE_5__.ALERTS.SWITCHED_EXPLORERS,
            [{ explorerName: cExplorer.name }],
            2250
        );
}

function setNode(node, fSilent = false) {
    cNode = node;
    localStorage.setItem(
        'node' + (_chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.isTestnet ? '-testnet' : ''),
        node.url
    );

    // Enable networking + notify if allowed
    (0,_network_js__WEBPACK_IMPORTED_MODULE_3__.enableNetwork)();
    if (!fSilent)
        (0,_misc_js__WEBPACK_IMPORTED_MODULE_4__.createAlert)(
            'success',
            _i18n_js__WEBPACK_IMPORTED_MODULE_5__.ALERTS.SWITCHED_NODE,
            [{ node: cNode.name }],
            2250
        );
}

//TRANSLATION
/**
 * Switches the translation and sets the translation preference to local storage
 * @param {string} lang
 * @param {bool} fSilent
 */
function setTranslation(lang) {
    (0,_i18n_js__WEBPACK_IMPORTED_MODULE_5__.switchTranslation)(lang);
    localStorage.setItem('translation', lang);
}

/**
 * Sets and saves the display currency setting in runtime and localStorage
 * @param {string} currency - The currency string name
 */
function setCurrency(currency) {
    strCurrency = currency;
    localStorage.setItem('displayCurrency', strCurrency);
    // Update the UI to reflect the new currency
    (0,_global_js__WEBPACK_IMPORTED_MODULE_0__.getBalance)(true);
}

/**
 * Fills the translation dropbox on the settings page
 */
function fillTranslationSelect() {
    while (_global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domTranslationSelect.options.length > 0) {
        _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domTranslationSelect.remove(0);
    }

    // Add each trusted explorer into the UI selector
    for (const lang of _i18n_js__WEBPACK_IMPORTED_MODULE_5__.arrActiveLangs) {
        const opt = document.createElement('option');
        opt.innerHTML = opt.value = lang;
        _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domTranslationSelect.appendChild(opt);
    }

    // And update the UI to reflect them
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domTranslationSelect.value =
        localStorage.getItem('translation') || 'en';
}

/**
 * Fills the display currency dropbox on the settings page
 */
async function fillCurrencySelect() {
    while (_global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domCurrencySelect.options.length > 0) {
        _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domCurrencySelect.remove(0);
    }

    // Add each data source currency into the UI selector
    for (const currency of await cMarket.getCurrencies()) {
        const opt = document.createElement('option');
        opt.innerHTML = currency.toUpperCase();
        opt.value = currency;
        _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domCurrencySelect.appendChild(opt);
    }

    // And update the UI to reflect them
    strCurrency = _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domCurrencySelect.value =
        localStorage.getItem('displayCurrency') || strCurrency;
}

function setAnalytics(level, fSilent = false) {
    cAnalyticsLevel = level;
    localStorage.setItem('analytics', level.name);
    // For total transparency, we'll 'describe' the various analytic keys of this chosen level
    let strDesc = '<center>--- ' + transparencyReport + ' ---</center><br>',
        i = 0;
    const nLongestKeyLen = cStatKeys.reduce((prev, e) =>
        prev.length >= e.length ? prev : e
    ).length;
    for (i; i < cAnalyticsLevel.stats.length; i++) {
        const cStat = cAnalyticsLevel.stats[i];
        // This formats Stat keys into { $key $(padding) $description }
        strDesc +=
            cStatKeys
                .find((a) => STATS[a] === cStat)
                .padEnd(nLongestKeyLen, ' ') +
            ': ' +
            cStat +
            '<br>';
    }

    // Set display + notify if allowed
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domAnalyticsDescriptor.innerHTML =
        cAnalyticsLevel.name === arrAnalytics[0].name
            ? ''
            : '<h6 style="color:#dcdf6b;font-family:mono !important;"><pre style="color: inherit;">' +
              strDesc +
              '</pre></h6>';
    if (!fSilent)
        (0,_misc_js__WEBPACK_IMPORTED_MODULE_4__.createAlert)(
            'success',
            _i18n_js__WEBPACK_IMPORTED_MODULE_5__.ALERTS.SWITCHED_ANALYTICS,
            [{ level: cAnalyticsLevel.name }],
            2250
        );
}

function toggleTestnet() {
    if (_wallet_js__WEBPACK_IMPORTED_MODULE_1__.fWalletLoaded)
        return (0,_misc_js__WEBPACK_IMPORTED_MODULE_4__.createAlert)('warning', _i18n_js__WEBPACK_IMPORTED_MODULE_5__.ALERTS.UNABLE_SWITCH_TESTNET, [], 3250);

    // Update current chain config
    _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current = _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.isTestnet
        ? _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.main
        : _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.testnet;

    // Update UI and static tickers
    //TRANSLATIONS
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domTestnet.style.display = _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.isTestnet
        ? ''
        : 'none';
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domGuiBalanceTicker.innerText = _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.TICKER;
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domGuiBalanceStakingTicker.innerText = _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.TICKER;
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domPrefixNetwork.innerText =
        _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.PUBKEY_PREFIX.join(' or ');
    fillExplorerSelect();
    fillNodeSelect();
    (0,_global_js__WEBPACK_IMPORTED_MODULE_0__.getBalance)(true);
    (0,_global_js__WEBPACK_IMPORTED_MODULE_0__.getStakingBalance)(true);
    (0,_global_js__WEBPACK_IMPORTED_MODULE_0__.updateStakingRewardsGUI)();
}

function toggleDebug() {
    debug = !debug;
    //TRANSLATION CHANGES
    //doms.domDebug.innerHTML = debug ? '<b>DEBUG MODE ON</b>' : '';
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domDebug.style.display = debug ? '' : 'none';
}

function fillExplorerSelect() {
    cExplorer = _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.Explorers[0];

    while (_global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domExplorerSelect.options.length > 0) {
        _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domExplorerSelect.remove(0);
    }

    // Add each trusted explorer into the UI selector
    for (const explorer of _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.Explorers) {
        const opt = document.createElement('option');
        opt.value = explorer.url;
        opt.innerHTML =
            explorer.name + ' (' + explorer.url.replace('https://', '') + ')';
        _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domExplorerSelect.appendChild(opt);
    }

    // Fetch settings from LocalStorage
    const strSettingExplorer = localStorage.getItem(
        'explorer' + (_chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.isTestnet ? '-testnet' : '')
    );

    // For any that exist: load them, or use the defaults
    setExplorer(
        _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.Explorers.find(
            (a) => a.url === strSettingExplorer
        ) || cExplorer,
        true
    );

    // And update the UI to reflect them
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domExplorerSelect.value = cExplorer.url;
}

function fillNodeSelect() {
    cNode = _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.Nodes[0];

    while (_global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domNodeSelect.options.length > 0) {
        _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domNodeSelect.remove(0);
    }

    // Add each trusted node into the UI selector
    for (const node of _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.Nodes) {
        const opt = document.createElement('option');
        opt.value = node.url;
        opt.innerHTML =
            node.name + ' (' + node.url.replace('https://', '') + ')';
        _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domNodeSelect.appendChild(opt);
    }

    // Fetch settings from LocalStorage
    const strSettingNode = localStorage.getItem(
        'node' + (_chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.isTestnet ? '-testnet' : '')
    );

    // For any that exist: load them, or use the defaults
    setNode(
        _chain_params_js__WEBPACK_IMPORTED_MODULE_2__.cChainParams.current.Nodes.find((a) => a.url === strSettingNode) ||
            cNode,
        true
    );

    // And update the UI to reflect them
    _global_js__WEBPACK_IMPORTED_MODULE_0__.doms.domNodeSelect.value = cNode.url;
}


/***/ }),

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bytesToHex": () => (/* binding */ bytesToHex),
/* harmony export */   "dSHA256": () => (/* binding */ dSHA256),
/* harmony export */   "hexToBytes": () => (/* binding */ hexToBytes)
/* harmony export */ });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @noble/hashes/sha256 */ "./node_modules/@noble/hashes/esm/sha256.js");



function hexToBytes(str) {
    return buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(str, 'hex');
}

function bytesToHex(bytes) {
    return buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(bytes).toString('hex');
}

/**
   @returns {Uint8Array} double sha256 or the buffer
 */
function dSHA256(buff) {
    return (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_1__.sha256)((0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_1__.sha256)(new Uint8Array(buff)));
}


/***/ }),

/***/ "./scripts/vanitygen_worker.js":
/*!*************************************!*\
  !*** ./scripts/vanitygen_worker.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wallet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet.js */ "./scripts/wallet.js");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc.js */ "./scripts/misc.js");



onmessage = function (_evt) {
    while (true) {
        const cKeypair = {};
        cKeypair.priv = (0,_misc_js__WEBPACK_IMPORTED_MODULE_1__.getSafeRand)();

        cKeypair.pub = (0,_wallet_js__WEBPACK_IMPORTED_MODULE_0__.deriveAddress)({ pkBytes: cKeypair.priv });
        postMessage(cKeypair);
    }
};


/***/ }),

/***/ "./scripts/wallet.js":
/*!***************************!*\
  !*** ./scripts/wallet.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HardwareWalletMasterKey": () => (/* binding */ HardwareWalletMasterKey),
/* harmony export */   "HdMasterKey": () => (/* binding */ HdMasterKey),
/* harmony export */   "LEDGER_ERRS": () => (/* binding */ LEDGER_ERRS),
/* harmony export */   "LegacyMasterKey": () => (/* binding */ LegacyMasterKey),
/* harmony export */   "cHardwareWallet": () => (/* binding */ cHardwareWallet),
/* harmony export */   "decryptWallet": () => (/* binding */ decryptWallet),
/* harmony export */   "deriveAddress": () => (/* binding */ deriveAddress),
/* harmony export */   "encryptWallet": () => (/* binding */ encryptWallet),
/* harmony export */   "fWalletLoaded": () => (/* binding */ fWalletLoaded),
/* harmony export */   "generateOrEncodePrivkey": () => (/* binding */ generateOrEncodePrivkey),
/* harmony export */   "generateWallet": () => (/* binding */ generateWallet),
/* harmony export */   "getDerivationPath": () => (/* binding */ getDerivationPath),
/* harmony export */   "getNewAddress": () => (/* binding */ getNewAddress),
/* harmony export */   "hasEncryptedWallet": () => (/* binding */ hasEncryptedWallet),
/* harmony export */   "hasHardwareWallet": () => (/* binding */ hasHardwareWallet),
/* harmony export */   "hasWalletUnlocked": () => (/* binding */ hasWalletUnlocked),
/* harmony export */   "importWallet": () => (/* binding */ importWallet),
/* harmony export */   "isYourAddress": () => (/* binding */ isYourAddress),
/* harmony export */   "masterKey": () => (/* binding */ masterKey),
/* harmony export */   "parseWIF": () => (/* binding */ parseWIF),
/* harmony export */   "strHardwareName": () => (/* binding */ strHardwareName),
/* harmony export */   "verifyMnemonic": () => (/* binding */ verifyMnemonic),
/* harmony export */   "verifyWIF": () => (/* binding */ verifyWIF)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./scripts/utils.js");
/* harmony import */ var _noble_secp256k1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @noble/secp256k1 */ "./node_modules/@noble/secp256k1/lib/esm/index.js");
/* harmony import */ var _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @noble/hashes/sha256 */ "./node_modules/@noble/hashes/esm/sha256.js");
/* harmony import */ var _noble_hashes_ripemd160__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @noble/hashes/ripemd160 */ "./node_modules/@noble/hashes/esm/ripemd160.js");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bip39 */ "./node_modules/bip39/src/index.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global.js */ "./scripts/global.js");
/* harmony import */ var hdkey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hdkey */ "./node_modules/hdkey/lib/hdkey.js");
/* harmony import */ var hdkey__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hdkey__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _network_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./network.js */ "./scripts/network.js");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./misc.js */ "./scripts/misc.js");
/* harmony import */ var _chain_params_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chain_params.js */ "./scripts/chain_params.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./i18n.js */ "./scripts/i18n.js");
/* harmony import */ var _aes_gcm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aes-gcm.js */ "./scripts/aes-gcm.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ledgerhq_hw_app_btc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ledgerhq/hw-app-btc */ "./node_modules/@ledgerhq/hw-app-btc/lib-es/Btc.js");
/* harmony import */ var _ledgerhq_hw_transport_webusb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ledgerhq/hw-transport-webusb */ "./node_modules/@ledgerhq/hw-transport-webusb/lib-es/TransportWebUSB.js");
/* harmony import */ var create_xpub__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! create-xpub */ "./node_modules/create-xpub/src/index.js");
/* harmony import */ var create_xpub__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(create_xpub__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var jdenticon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jdenticon */ "./node_modules/jdenticon/dist/jdenticon-module.mjs");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");



















let fWalletLoaded = false;

/**
 * Abstract class masterkey
 * @abstract
 */
class MasterKey {
    /**
     * @param {String} [path] - BIP32 path pointing to the private key.
     * @return {Promise<Array<Number>>} Array of bytes containing private key
     * @abstract
     */
    async getPrivateKeyBytes(_path) {
        throw new Error('Not implemented');
    }

    /**
     * @param {String} [path] - BIP32 path pointing to the private key.
     * @return {String} encoded private key
     * @abstract
     */
    async getPrivateKey(path) {
        return generateOrEncodePrivkey(await this.getPrivateKeyBytes(path))
            .strWIF;
    }

    /**
     * @param {String} [path] - BIP32 path pointing to the address
     * @return {String} Address
     * @abstract
     */
    async getAddress(path) {
        return deriveAddress({ pkBytes: await this.getPrivateKeyBytes(path) });
    }

    /**
     * @param {String} path - BIP32 path pointing to the xpub
     * @return {Promise<String>} xpub
     * @abstract
     */
    async getxpub(_path) {
        throw new Error('Not implemented');
    }

    /**
     * Wipe all private data from key.
     * @return {void}
     * @abstract
     */
    wipePrivateData() {
        throw new Error('Not implemented');
    }

    /**
     * @return {String} private key suitable for backup.
     * @abstract
     */
    get keyToBackup() {
        throw new Error('Not implemented');
    }

    /**
     * @return {String} public key to export. Only suitable for monitoring balance.
     * @abstract
     */
    get keyToExport() {
        throw new Error('Not implemented');
    }

    /**
     * @return {Boolean} Whether or not this is a Hierarchical Deterministic wallet
     */
    get isHD() {
        return this._isHD;
    }

    /**
     * @return {Boolean} Whether or not this is a hardware wallet
     */
    get isHardwareWallet() {
        return this._isHardwareWallet;
    }

    /**
     * @return {Boolean} Whether or not this key is view only or not
     */
    get isViewOnly() {
        return this._isViewOnly;
    }
}

class HdMasterKey extends MasterKey {
    constructor({ seed, xpriv, xpub }) {
        super();
        // Generate the HDKey
        if (seed) this._hdKey = hdkey__WEBPACK_IMPORTED_MODULE_6___default().fromMasterSeed(seed);
        if (xpriv) this._hdKey = hdkey__WEBPACK_IMPORTED_MODULE_6___default().fromExtendedKey(xpriv);
        if (xpub) this._hdKey = hdkey__WEBPACK_IMPORTED_MODULE_6___default().fromExtendedKey(xpub);
        this._isViewOnly = !!xpub;
        if (!this._hdKey)
            throw new Error('All of seed, xpriv and xpub are undefined');
        this._isHD = true;
        this._isHardwareWallet = false;
    }

    async getPrivateKeyBytes(path) {
        if (this.isViewOnly) {
            throw new Error(
                'Trying to get private key bytes from a view only key'
            );
        }
        return this._hdKey.derive(path).privateKey;
    }

    get keyToBackup() {
        if (this.isViewOnly) {
            throw new Error('Trying to get private key from a view only key');
        }
        return this._hdKey.privateExtendedKey;
    }

    async getxpub(path) {
        if (this.isViewOnly) return this._hdKey.publicExtendedKey;
        return this._hdKey.derive(path).publicExtendedKey;
    }

    getAddress(path) {
        let child;
        if (this.isViewOnly) {
            // If we're view only we can't derive hardened keys, so we'll assume
            // That the xpub has already been derived
            child = this._hdKey.derive(
                path
                    .split('/')
                    .filter((n) => !n.includes("'"))
                    .join('/')
            );
        } else {
            child = this._hdKey.derive(path);
        }
        return deriveAddress({ publicKey: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToHex)(child.publicKey) });
    }

    wipePrivateData() {
        if (this._isViewOnly) return;

        this._hdKey = hdkey__WEBPACK_IMPORTED_MODULE_6___default().fromExtendedKey(this.keyToExport);
        this._isViewOnly = true;
    }

    get keyToExport() {
        if (this._isViewOnly) return this._hdKey.publicExtendedKey;
        // We need the xpub to point at the account level
        return this._hdKey.derive(
            getDerivationPath(false).split('/').slice(0, 4).join('/')
        ).publicExtendedKey;
    }
}

class HardwareWalletMasterKey extends MasterKey {
    constructor() {
        super();
        this._isHD = true;
        this._isHardwareWallet = true;
    }
    async getPrivateKeyBytes(_path) {
        throw new Error('Hardware wallets cannot export private keys');
    }

    async getAddress(path, { verify } = {}) {
        return deriveAddress({
            publicKey: await getHardwareWalletKeys(path, false, verify),
        });
    }

    get keyToBackup() {
        throw new Error("Hardware wallets don't have keys to backup");
    }

    async getxpub(path) {
        if (!this.xpub) {
            this.xpub = await getHardwareWalletKeys(path, true);
        }
        return this.xpub;
    }

    // Hardware Wallets don't have exposed private data
    wipePrivateData() {}

    get isViewOnly() {
        return false;
    }
    get keyToExport() {
        return this.getxpub(
            getDerivationPath(true)
                .split('/')
                .filter((v) => !v.includes("'"))
                .join('/')
        );
    }
}

class LegacyMasterKey extends MasterKey {
    constructor({ pkBytes, address }) {
        super();
        this._isHD = false;
        this._isHardwareWallet = false;
        this._pkBytes = pkBytes;
        this._address = address || super.getAddress();
        this._isViewOnly = !!address;
    }

    getAddress() {
        return this._address;
    }

    get keyToExport() {
        return this._address;
    }

    async getPrivateKeyBytes(_path) {
        if (this.isViewOnly) {
            throw new Error(
                'Trying to get private key bytes from a view only key'
            );
        }
        return this._pkBytes;
    }

    get keyToBackup() {
        return generateOrEncodePrivkey(this._pkBytes).strWIF;
    }

    async getxpub(_path) {
        throw new Error(
            'Trying to get an extended public key from a legacy address'
        );
    }

    wipePrivateData() {
        this._pkBytes = null;
        this._isViewOnly = true;
    }
}

// Ledger Hardware wallet constants
const LEDGER_ERRS = new Map([
    // Ledger error code <--> User-friendly string
    [25870, 'Open the PIVX app on your device'],
    [25873, 'Open the PIVX app on your device'],
    [57408, 'Navigate to the PIVX app on your device'],
    [27157, 'Wrong app! Open the PIVX app on your device'],
    [27266, 'Wrong app! Open the PIVX app on your device'],
    [27904, 'Wrong app! Open the PIVX app on your device'],
    [27010, 'Unlock your Ledger, then try again!'],
    [27404, 'Unlock your Ledger, then try again!'],
]);

let masterKey;

// Construct a full BIP44 pubkey derivation path from it's parts
function getDerivationPath(
    fLedger = false,
    nAccount = 0,
    nReceiving = 0,
    nIndex = 0
) {
    // Coin-Type is different on Ledger, as such, we modify it if we're using a Ledger to derive a key
    const strCoinType = fLedger
        ? _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.cChainParams.current.BIP44_TYPE_LEDGER
        : _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.cChainParams.current.BIP44_TYPE;
    if (masterKey && !masterKey.isHD && !fLedger) {
        return `:)//${strCoinType}'`;
    }
    return `m/44'/${strCoinType}'/${nAccount}'/${nReceiving}/${nIndex}`;
}

// Verify the integrity of a WIF private key, optionally parsing and returning the key payload
function verifyWIF(
    strWIF = '',
    fParseBytes = false,
    skipVerification = false
) {
    // Convert from Base58
    const bWIF = bs58__WEBPACK_IMPORTED_MODULE_12___default().decode(strWIF);

    if (!skipVerification) {
        // Verify the byte length
        if (bWIF.byteLength !== _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.PRIVKEY_BYTE_LENGTH) {
            throw Error(
                'Private key length (' +
                    bWIF.byteLength +
                    ') is invalid, should be ' +
                    _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.PRIVKEY_BYTE_LENGTH +
                    '!'
            );
        }

        // Verify the network byte
        if (bWIF[0] !== _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.cChainParams.current.SECRET_KEY) {
            // Find the network it's trying to use, if any
            const cNetwork = Object.keys(_chain_params_js__WEBPACK_IMPORTED_MODULE_9__.cChainParams)
                .filter((strNet) => strNet !== 'current')
                .map((strNet) => _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.cChainParams[strNet])
                .find((cNet) => cNet.SECRET_KEY === bWIF[0]);
            // Give a specific alert based on the byte properties
            throw Error(
                cNetwork
                    ? 'This private key is for ' +
                          (cNetwork.isTestnet ? 'Testnet' : 'Mainnet') +
                          ', wrong network!'
                    : 'This private key belongs to another coin, or is corrupted.'
            );
        }

        // Perform SHA256d hash of the WIF bytes
        const shaHash = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dSHA256)(bWIF.slice(0, 34));

        // Verify checksum (comparison by String since JS hates comparing object-like primitives)
        const bChecksumWIF = bWIF.slice(bWIF.byteLength - 4);
        const bChecksum = shaHash.slice(0, 4);
        if (bChecksumWIF.join('') !== bChecksum.join('')) {
            throw Error(
                'Private key checksum is invalid, key may be modified, mis-typed, or corrupt.'
            );
        }
    }

    return fParseBytes ? Uint8Array.from(bWIF.slice(1, 33)) : true;
}

// A convenient alias to verifyWIF that returns the raw byte payload
function parseWIF(strWIF, skipVerification = false) {
    return verifyWIF(strWIF, true, skipVerification);
}

// Generate a new private key OR encode an existing private key from raw bytes
function generateOrEncodePrivkey(pkBytesToEncode) {
    // Private Key Generation
    const pkBytes = pkBytesToEncode || (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.getSafeRand)();
    const pkNetBytesLen = pkBytes.length + 2;
    const pkNetBytes = new Uint8Array(pkNetBytesLen);

    // Network Encoding
    pkNetBytes[0] = _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.cChainParams.current.SECRET_KEY; // Private key prefix (1 byte)
    (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.writeToUint8)(pkNetBytes, pkBytes, 1); // Private key bytes  (32 bytes)
    pkNetBytes[pkNetBytesLen - 1] = 1; // Leading digit      (1 byte)

    // Double SHA-256 hash
    const shaObj = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dSHA256)(pkNetBytes);

    // WIF Checksum
    const checksum = shaObj.slice(0, 4);
    const keyWithChecksum = new Uint8Array(pkNetBytesLen + checksum.length);
    (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.writeToUint8)(keyWithChecksum, pkNetBytes, 0);
    (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.writeToUint8)(keyWithChecksum, checksum, pkNetBytesLen);

    // Return both the raw bytes and the WIF format
    return { pkBytes, strWIF: bs58__WEBPACK_IMPORTED_MODULE_12___default().encode(keyWithChecksum) };
}

/**
 * Compress an uncompressed Public Key in byte form
 * @param {Array<Number> | Uint8Array} pubKeyBytes - The uncompressed public key bytes
 * @returns {Array<Number>} The compressed public key bytes
 */
function compressPublicKey(pubKeyBytes) {
    if (pubKeyBytes.length != 65)
        throw new Error('Attempting to compress an invalid uncompressed key');
    const x = pubKeyBytes.slice(1, 33);
    const y = pubKeyBytes.slice(33);

    // Compressed key is [key_parity + 2, x]
    return [y[31] % 2 === 0 ? 2 : 3, ...x];
}

/**
 * Derive a Secp256k1 network-encoded public key (coin address) from raw private or public key bytes
 * @param {Object} options - The object to deconstruct
 * @param {String} [options.publicKey] - The hex encoded public key. Can be both compressed or uncompressed
 * @param {Array<Number> | Uint8Array} [options.pkBytes] - An array of bytes containing the private key
 * @param {"ENCODED" | "UNCOMPRESSED_HEX" | "COMPRESSED_HEX"} options.output - Output
 * @return {String} the public key with the specified encoding
 */
function deriveAddress({ pkBytes, publicKey, output = 'ENCODED' }) {
    if (!pkBytes && !publicKey) return null;
    const compress = output !== 'UNCOMPRESSED_HEX';
    // Public Key Derivation
    let pubKeyBytes = publicKey
        ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(publicKey)
        : _noble_secp256k1__WEBPACK_IMPORTED_MODULE_1__.getPublicKey(pkBytes, compress);

    if (output === 'UNCOMPRESSED_HEX') {
        if (pubKeyBytes.length !== 65) {
            // It's actually possible, but it's probably not something that we'll need
            throw new Error("Can't uncompress an already compressed key");
        }
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToHex)(pubKeyBytes);
    }

    if (pubKeyBytes.length === 65) {
        pubKeyBytes = compressPublicKey(pubKeyBytes);
    }

    if (pubKeyBytes.length != 33) {
        throw new Error('Invalid public key');
    }

    if (output === 'COMPRESSED_HEX') {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToHex)(pubKeyBytes);
    }

    // First pubkey SHA-256 hash
    const pubKeyHashing = (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256)(new Uint8Array(pubKeyBytes));

    // RIPEMD160 hash
    const pubKeyHashRipemd160 = (0,_noble_hashes_ripemd160__WEBPACK_IMPORTED_MODULE_3__.ripemd160)(pubKeyHashing);

    // Network Encoding
    const pubKeyHashNetwork = new Uint8Array(_misc_js__WEBPACK_IMPORTED_MODULE_8__.pubKeyHashNetworkLen);
    pubKeyHashNetwork[0] = _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.cChainParams.current.PUBKEY_ADDRESS;
    (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.writeToUint8)(pubKeyHashNetwork, pubKeyHashRipemd160, 1);

    // Double SHA-256 hash
    const pubKeyHashingSF = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dSHA256)(pubKeyHashNetwork);

    // Checksum
    const checksumPubKey = pubKeyHashingSF.slice(0, 4);

    // Public key pre-base58
    const pubKeyPreBase = new Uint8Array(_misc_js__WEBPACK_IMPORTED_MODULE_8__.pubPrebaseLen);
    (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.writeToUint8)(pubKeyPreBase, pubKeyHashNetwork, 0);
    (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.writeToUint8)(pubKeyPreBase, checksumPubKey, _misc_js__WEBPACK_IMPORTED_MODULE_8__.pubKeyHashNetworkLen);

    // Encode as Base58 human-readable network address
    return bs58__WEBPACK_IMPORTED_MODULE_12___default().encode(pubKeyPreBase);
}

// Wallet Import
async function importWallet({
    newWif = false,
    fRaw = false,
    isHardwareWallet = false,
    skipConfirmation = false,
} = {}) {
    const strImportConfirm =
        "Do you really want to import a new address? If you haven't saved the last private key, the wallet will be LOST forever.";
    const walletConfirm =
        fWalletLoaded && !skipConfirmation
            ? await (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.confirmPopup)({ html: strImportConfirm })
            : true;

    if (walletConfirm) {
        if (isHardwareWallet) {
            // Firefox does NOT support WebUSB, thus cannot work with Hardware wallets out-of-the-box
            if (navigator.userAgent.includes('Firefox')) {
                return (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)(
                    'warning',
                    _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.WALLET_FIREFOX_UNSUPPORTED,
                    [],
                    7500
                );
            }

            const publicKey = await getHardwareWalletKeys(
                getDerivationPath(true)
            );
            // Errors are handled within the above function, so there's no need for an 'else' here, just silent ignore.
            if (!publicKey) return;

            // Derive our hardware address and import!
            masterKey = new HardwareWalletMasterKey();

            // Hide the 'export wallet' button, it's not relevant to hardware wallets
            _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domExportWallet.hidden = true;

            (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)(
                'info',
                _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.WALLET_HARDWARE_WALLET,
                [{ hardwareWallet: strHardwareName }],
                12500
            );
        } else {
            // If raw bytes: purely encode the given bytes rather than generating our own bytes
            if (fRaw) {
                newWif = generateOrEncodePrivkey(newWif).strWIF;

                // A raw import likely means non-user owned key (i.e: created via VanityGen), thus, we assume safety first and add an exit blocking listener
                addEventListener('beforeunload', _global_js__WEBPACK_IMPORTED_MODULE_5__.beforeUnloadListener, {
                    capture: true,
                });
            }

            // Select WIF from internal source OR user input (could be: WIF, Mnemonic or xpriv)
            const privateImportValue = newWif || _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domPrivKey.value;
            _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domPrivKey.value = '';

            if (await verifyMnemonic(privateImportValue)) {
                // Generate our masterkey via Mnemonic Phrase
                const seed = await (0,bip39__WEBPACK_IMPORTED_MODULE_4__.mnemonicToSeed)(privateImportValue);
                masterKey = new HdMasterKey({ seed });
            } else {
                // Public Key Derivation
                try {
                    if (privateImportValue.startsWith('xpub')) {
                        masterKey = new HdMasterKey({
                            xpub: privateImportValue,
                        });
                    } else if (privateImportValue.startsWith('xprv')) {
                        masterKey = new HdMasterKey({
                            xpriv: privateImportValue,
                        });
                    } else if (
                        privateImportValue.length === 34 &&
                        _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.cChainParams.current.PUBKEY_PREFIX.includes(
                            privateImportValue[0]
                        )
                    ) {
                        masterKey = new LegacyMasterKey({
                            address: privateImportValue,
                        });
                    } else {
                        // Lastly, attempt to parse as a WIF private key
                        const pkBytes = parseWIF(privateImportValue);

                        // Hide the 'new address' button, since non-HD wallets are essentially single-address MPW wallets
                        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domNewAddress.style.display = 'none';

                        // Import the raw private key
                        masterKey = new LegacyMasterKey({ pkBytes });
                    }
                } catch (e) {
                    return (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)(
                        'warning',
                        _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.FAILED_TO_IMPORT + e.message,
                        [],
                        6000
                    );
                }
            }
        }

        // Reaching here: the deserialisation was a full cryptographic success, so a wallet is now imported!
        fWalletLoaded = true;

        // Hide wipe wallet button if there is no private key
        if (masterKey.isViewOnly || masterKey.isHardwareWallet) {
            _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domWipeWallet.hidden = true;
            if (hasEncryptedWallet()) {
                _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domRestoreWallet.hidden = false;
            }
        }

        getNewAddress({ updateGUI: true });
        // Display Text
        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domGuiWallet.style.display = 'block';

        // Update identicon
        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domIdenticon.dataset.jdenticonValue = masterKey.getAddress(
            getDerivationPath()
        );
        jdenticon__WEBPACK_IMPORTED_MODULE_16__.update('#identicon');

        // Hide the encryption warning if the user pasted the private key
        // Or in Testnet mode or is using a hardware wallet or is view-only mode
        if (
            !(
                newWif ||
                _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.cChainParams.current.isTestnet ||
                isHardwareWallet ||
                masterKey.isViewOnly
            )
        )
            _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domGenKeyWarning.style.display = 'block';

        // Fetch state from explorer
        if (_network_js__WEBPACK_IMPORTED_MODULE_7__.networkEnabled) (0,_global_js__WEBPACK_IMPORTED_MODULE_5__.refreshChainData)();

        // Hide all wallet starter options
        (0,_global_js__WEBPACK_IMPORTED_MODULE_5__.hideAllWalletOptions)();
    }
}

// Wallet Generation
async function generateWallet(noUI = false) {
    const strImportConfirm =
        "Do you really want to import a new address? If you haven't saved the last private key, the wallet will be LOST forever.";
    const walletConfirm =
        fWalletLoaded && !noUI
            ? await (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.confirmPopup)({ html: strImportConfirm })
            : true;
    if (walletConfirm) {
        const mnemonic = (0,bip39__WEBPACK_IMPORTED_MODULE_4__.generateMnemonic)();

        if (!noUI) await informUserOfMnemonic(mnemonic);
        const seed = await (0,bip39__WEBPACK_IMPORTED_MODULE_4__.mnemonicToSeed)(mnemonic);

        // Prompt the user to encrypt the seed
        masterKey = new HdMasterKey({ seed });
        fWalletLoaded = true;

        if (!_chain_params_js__WEBPACK_IMPORTED_MODULE_9__.cChainParams.current.isTestnet)
            _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domGenKeyWarning.style.display = 'block';
        // Add a listener to block page unloads until we are sure the user has saved their keys, safety first!
        addEventListener('beforeunload', _global_js__WEBPACK_IMPORTED_MODULE_5__.beforeUnloadListener, {
            capture: true,
        });

        // Display the dashboard
        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domGuiWallet.style.display = 'block';
        (0,_global_js__WEBPACK_IMPORTED_MODULE_5__.hideAllWalletOptions)();

        // Update identicon
        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domIdenticon.dataset.jdenticonValue = masterKey.getAddress(
            getDerivationPath()
        );
        jdenticon__WEBPACK_IMPORTED_MODULE_16__.update('#identicon');

        getNewAddress({ updateGUI: true });

        // Refresh the balance UI (why? because it'll also display any 'get some funds!' alerts)
        (0,_global_js__WEBPACK_IMPORTED_MODULE_5__.getBalance)(true);
        (0,_global_js__WEBPACK_IMPORTED_MODULE_5__.getStakingBalance)(true);
    }

    return masterKey;
}

async function verifyMnemonic(strMnemonic = '', fPopupConfirm = true) {
    const nWordCount = strMnemonic.trim().split(/\s+/g).length;

    // Sanity check: Convert to lowercase
    strMnemonic = strMnemonic.toLowerCase();

    // Ensure it's a word count that makes sense
    if (nWordCount >= 12 && nWordCount <= 24) {
        if (!(0,bip39__WEBPACK_IMPORTED_MODULE_4__.validateMnemonic)(strMnemonic)) {
            // The reason we want to ask the user for confirmation is that the mnemonic
            // Could have been generated with another app that has a different dictionary
            return (
                fPopupConfirm &&
                (await (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.confirmPopup)({
                    title: 'Unexpected Seed Phrase',
                    html: 'The seed phrase is either invalid, or was not generated by MPW.<br>Do you still want to proceed?',
                }))
            );
        } else {
            // Valid count and mnemonic
            return true;
        }
    } else {
        // Invalid count
        return false;
    }
}

function informUserOfMnemonic(mnemonic) {
    return new Promise((res, _) => {
        $('#mnemonicModal').modal({ keyboard: false });
        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domMnemonicModalContent.innerText = mnemonic;
        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domMnemonicModalButton.onclick = () => {
            res();
            $('#mnemonicModal').modal('hide');
        };
        $('#mnemonicModal').modal('show');
    });
}

async function encryptWallet(strPassword = '') {
    // Encrypt the wallet WIF with AES-GCM and a user-chosen password - suitable for browser storage
    let strEncWIF = await (0,_aes_gcm_js__WEBPACK_IMPORTED_MODULE_11__.encrypt)(masterKey.keyToBackup, strPassword);
    if (!strEncWIF) return false;

    // Set the encrypted wallet in localStorage
    localStorage.setItem('encwif', strEncWIF);
    localStorage.setItem('publicKey', await masterKey.keyToExport);

    // Hide the encryption warning
    _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domGenKeyWarning.style.display = 'none';

    // Remove the exit blocker, we can annoy the user less knowing the key is safe in their localstorage!
    removeEventListener('beforeunload', _global_js__WEBPACK_IMPORTED_MODULE_5__.beforeUnloadListener, {
        capture: true,
    });
}

async function decryptWallet(strPassword = '') {
    // Check if there's any encrypted WIF available
    const strEncWIF = localStorage.getItem('encwif');
    if (!strEncWIF || strEncWIF.length < 1) return false;

    // Prompt to decrypt it via password
    const strDecWIF = await (0,_aes_gcm_js__WEBPACK_IMPORTED_MODULE_11__.decrypt)(strEncWIF, strPassword);
    if (!strDecWIF || strDecWIF === 'decryption failed!') {
        if (strDecWIF)
            return (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)('warning', 'Incorrect password!', 6000);
    } else {
        await importWallet({
            newWif: strDecWIF,
            skipConfirmation: true,
        });
        // Ensure publicKey is set
        localStorage.setItem('publicKey', await masterKey.keyToExport);
        return true;
    }
}

function hasEncryptedWallet() {
    return localStorage.getItem('encwif') ? true : false;
}

// If the privateKey is null then the user connected a hardware wallet
function hasHardwareWallet() {
    if (!masterKey) return false;
    return masterKey.isHardwareWallet == true;
}

function hasWalletUnlocked(fIncludeNetwork = false) {
    if (fIncludeNetwork && !_network_js__WEBPACK_IMPORTED_MODULE_7__.networkEnabled)
        return (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)(
            'warning',
            _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.WALLET_OFFLINE_AUTOMATIC,
            [],
            5500
        );
    if (!masterKey) {
        return (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)(
            'warning',
            _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.WALLET_UNLOCK_IMPORT,
            [{ unlock: hasEncryptedWallet() ? 'unlock ' : 'import/create' }],
            3500
        );
    } else {
        return true;
    }
}

let addressIndex = 0;
async function isYourAddress(address) {
    let i = 0;
    while (i < addressIndex) {
        const path = getDerivationPath(masterKey.isHardwareWallet, 0, 0, i);
        const testAddress = await masterKey.getAddress(path);
        if (address === testAddress) {
            return [true, path];
        }
        i++;
    }
    return [false, 0];
}

function createAddressConfirmation(address) {
    return `Please confirm this is the address you see on your ${strHardwareName}.
              <div class="seed-phrase">${address}</div>`;
}

async function getNewAddress({
    updateGUI = false,
    verify = false,
} = {}) {
    const last = _network_js__WEBPACK_IMPORTED_MODULE_7__.lastWallet || 0;
    addressIndex = addressIndex > last ? addressIndex : last + 1;
    if (addressIndex - last > _chain_params_js__WEBPACK_IMPORTED_MODULE_9__.MAX_ACCOUNT_GAP) {
        // If the user creates more than ${MAX_ACCOUNT_GAP} empty wallets we will not be able to sync them!
        addressIndex = last;
    }
    const path = getDerivationPath(
        masterKey.isHardwareWallet,
        0,
        0,
        addressIndex
    );
    // Use Xpub?
    const address = await masterKey.getAddress(path);
    if (verify && masterKey.isHardwareWallet) {
        // Generate address to present to the user without asking to verify
        const confAddress = await (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.confirmPopup)({
            title: _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.CONFIRM_POPUP_VERIFY_ADDR,
            html: createAddressConfirmation(address),
            resolvePromise: masterKey.getAddress(path, { verify }),
        });
        if (address !== confAddress) {
            throw new Error('User did not verify address');
        }
    }

    if (updateGUI) {
        (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createQR)('pivx:' + address, _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domModalQR);
        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domModalQrLabel.innerHTML =
            'pivx:' +
            address +
            `<i onclick="MPW.toClipboard('${address}', this)" id="guiAddressCopy" class="fas fa-clipboard" style="cursor: pointer; width: 20px;"></i>`;
        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domModalQR.firstChild.style.width = '100%';
        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domModalQR.firstChild.style.height = 'auto';
        _global_js__WEBPACK_IMPORTED_MODULE_5__.doms.domModalQR.firstChild.classList.add('no-antialias');
        document.getElementById('clipboard').value = address;
    }
    addressIndex++;
    return [address, path];
}

let cHardwareWallet = null;
let strHardwareName = '';
let transport;
async function getHardwareWalletKeys(
    path,
    xpub = false,
    verify = false,
    _attempts = 0
) {
    try {
        // Check if we haven't setup a connection yet OR the previous connection disconnected
        if (!cHardwareWallet || transport._disconnectEmitted) {
            transport = await _ledgerhq_hw_transport_webusb__WEBPACK_IMPORTED_MODULE_14__["default"].create();
            cHardwareWallet = new _ledgerhq_hw_app_btc__WEBPACK_IMPORTED_MODULE_13__["default"]({ transport, currency: 'PIVX' });
        }

        // Update device info and fetch the pubkey
        strHardwareName =
            transport.device.manufacturerName +
            ' ' +
            transport.device.productName;

        // Prompt the user in both UIs
        if (verify) (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)('info', _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.WALLET_CONFIRM_L, [], 3500);
        const cPubKey = await cHardwareWallet.getWalletPublicKey(path, {
            verify,
            format: 'legacy',
        });

        if (xpub) {
            return create_xpub__WEBPACK_IMPORTED_MODULE_15___default()({
                depth: 3,
                childNumber: 2147483648,
                chainCode: cPubKey.chainCode,
                publicKey: cPubKey.publicKey,
            });
        } else {
            return cPubKey.publicKey;
        }
    } catch (e) {
        if (e.message.includes('denied by the user')) {
            // User denied an operation
            return false;
        }

        // If there's no device, nudge the user to plug it in.
        if (e.message.toLowerCase().includes('no device selected')) {
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)('info', _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.WALLET_NO_HARDWARE, [], 10000);
            return false;
        }

        // If the device is unplugged, or connection lost through other means (such as spontanious device explosion)
        if (e.message.includes("Failed to execute 'transferIn'")) {
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)(
                'info',
                _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.WALLET_HARDWARE_CONNECTION_LOST,
                [
                    {
                        hardwareWallet: strHardwareName,
                    },
                ],
                10000
            );
            return false;
        }
        if (_attempts < 10) {
            // This is an ugly hack :(
            // in the event where multiple parts of the code decide to ask for an address, just
            // Retry at most 10 times waiting 200ms each time
            await (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.sleep)(200);
            return getHardwareWalletKeys(path, xpub, verify, _attempts + 1);
        }

        // If the ledger is busy, just nudge the user.
        if (e.message.includes('is busy')) {
            (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)(
                'info',
                _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.WALLET_HARDWARE_BUSY,
                [
                    {
                        hardwareWallet: strHardwareName,
                    },
                ],
                7500
            );
            return false;
        }

        // Check if this is an expected error
        if (!e.statusCode || !LEDGER_ERRS.has(e.statusCode)) {
            console.error(
                'MISSING LEDGER ERROR-CODE TRANSLATION! - Please report this below error on our GitHub so we can handle it more nicely!'
            );
            console.error(e);
        }

        // Translate the error to a user-friendly string (if possible)
        (0,_misc_js__WEBPACK_IMPORTED_MODULE_8__.createAlert)(
            'warning',
            _i18n_js__WEBPACK_IMPORTED_MODULE_10__.ALERTS.WALLET_HARDWARE_ERROR,
            [
                {
                    hardwareWallet: strHardwareName,
                },
                {
                    error: LEDGER_ERRS.get(e.statusCode),
                },
            ],
            5500
        );

        return false;
    }
}


/***/ }),

/***/ "?ce41":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d546":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3fc0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4068":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e7e4":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7bec":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0aec":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?fbf1":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ed1b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d17e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b91d":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_ledgerhq_hw-app-btc_lib-es_Btc_js-node_modules_ledgerhq_hw-transport-web-4a43ac"], () => (__webpack_require__("./scripts/vanitygen_worker.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "./" + chunkId + ".mpw.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = self.location + "";
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"scripts_global_js-scripts_misc_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkMPW"] = self["webpackChunkMPW"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_ledgerhq_hw-app-btc_lib-es_Btc_js-node_modules_ledgerhq_hw-transport-web-4a43ac").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	MPW = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=scripts_global_js-scripts_misc_js.mpw.js.map