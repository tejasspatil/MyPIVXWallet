if (networkEnabled) {
  var url = 'https://' + explorer
  var githubRepo = 'https://api.github.com/repos/dogecash/dogecash-web-wallet/releases';
  var getBlockCount = function() {
    var request = new XMLHttpRequest();
    request.open('GET', "https://stakecubecoin.net/pivx/blocks", true);
    request.onload = function () {
      let data = Number(this.response);
      // If the block count has changed, refresh all of our data!
      domBalanceReload.className = domBalanceReload.className.replace(/ playAnim/g, "");
      domBalanceReloadStaking.className = domBalanceReloadStaking.className.replace(/ playAnim/g, "");
      if (data > cachedBlockCount) {
        console.log("New block detected! " + cachedBlockCount + " --> " + data);
        if (publicKeyForNetwork)
          getUnspentTransactions();
      }
      cachedBlockCount = data;
    }
    request.send();
  }
  var getUnspentTransactions = function () {
    var request = new XMLHttpRequest()
    request.open('GET', "https://chainz.cryptoid.info/pivx/api.dws?q=unspent&active=" + publicKeyForNetwork + "&key=fb4fd0981734", true)
    request.onload = function () {
      data = JSON.parse(this.response)
      if (!data.unspent_outputs || data.unspent_outputs.length === 0) {
        console.log('No unspent Transactions');
        document.getElementById("errorNotice").innerHTML = '<div class="alert alert-danger" role="alert"><h4>Note:</h4><h5>You don\'t have any funds, get some coins first!</h5></div>';
        cachedUTXOs = [];
      } else {
        cachedUTXOs = [];
        amountOfTransactions = data.unspent_outputs.length;
        if (amountOfTransactions > 0)
          document.getElementById("errorNotice").innerHTML = '';
        if (amountOfTransactions <= 1000) {
          for (i = 0; i < amountOfTransactions; i++) {
            cachedUTXOs.push({
              'id': data.unspent_outputs[i].tx_hash,
              'vout': data.unspent_outputs[i].tx_ouput_n,
              'sats': data.unspent_outputs[i].value,
              'script': data.unspent_outputs[i].script
            });
          }
          // Update the GUI with the newly cached UTXO set
          getBalance(true);
        } else {
          //Temporary message for when there are alot of inputs
          //Probably use change all of this to using websockets will work better
          document.getElementById("errorNotice").innerHTML = '<div class="alert alert-danger" role="alert"><h4>Note:</h4><h5>This address has over 1000 UTXOs, which may be problematic for the wallet to handle, transact with caution!</h5></div>';
        }
      }
    }
    request.send();
    // In parallel, fetch Cold Staking UTXOs
    getDelegatedUTXOs();
  }
  var arrUTXOsToSearch = [];
  var searchUTXO = function () {
    if (!arrUTXOsToSearch.length) return;
    var request = new XMLHttpRequest()
    request.open('GET', "https://stakecubecoin.net/pivx/api/tx-specific/" + arrUTXOsToSearch[0].txid, true);
    request.onload = function () {
      data = JSON.parse(this.response);
      // Check the UTXOs
      for (const cVout of data.vout) {
        if (cVout.scriptPubKey.type === 'coldstake' && cVout.scriptPubKey.addresses.includes(publicKeyForNetwork)) {
          if (!arrDelegatedUTXOs.find(a => a.id === data.txid && a.vout === cVout.n)) {
            arrDelegatedUTXOs.push({
              'id': data.txid,
              'vout': cVout.n,
              'sats': Number(cVout.value * COIN),
              'script': cVout.scriptPubKey.hex
            });
          }
        }
      }
      arrUTXOsToSearch.shift();
      getStakingBalance(true);
      if (arrUTXOsToSearch.length) searchUTXO();
    }
    request.send();
  }
  var getDelegatedUTXOs = function () {
    if (arrUTXOsToSearch.length) return;
    var request = new XMLHttpRequest()
    request.open('GET', "https://stakecubecoin.net/pivx/api/utxo/" + publicKeyForNetwork, true);
    request.onload = function () {
      data = JSON.parse(this.response);
      arrUTXOsToSearch = data;
      arrDelegatedUTXOs = [];
      searchUTXO();
    }
    request.send();
  }
  var sendTransaction = function (hex, msg = '') {
    if (typeof hex !== 'undefined') {
      var request = new XMLHttpRequest()
      request.open('GET', 'https://stakecubecoin.net/pivx/submittx?tx=' + hex, true)
      request.onload = function () {
        data = this.response;
        if (data.length === 64) {
          console.log('Transaction sent! ' + data);
          if (domAddress1s.value !== donationAddress)
            document.getElementById("transactionFinal").innerHTML = ('<h4 style="color:green">Transaction sent! ' + data + '</h4>');
          else
            document.getElementById("transactionFinal").innerHTML = ('<h4 style="color:green">Thank you for supporting MyPIVXWallet! 💜💜💜<br>' + data + '</h4>');
          domSimpleTXs.style.display = 'none';
          domAddress1s.value = '';
          domValue1s.innerHTML = '';
          if (msg) alert(msg);
        } else {
          console.log('Error sending transaction: ' + data);
          document.getElementById("transactionFinal").innerHTML = ('<h4 style="color:red">Error sending transaction: ' + data + "</h4>");
        }
      }

      request.send()
    } else {
      console.log("hex undefined");
    }
  }
  var calculatefee = function (bytes) {
    // TEMPORARY: Hardcoded fee per-byte
    fee = Number(((bytes * 250) / COIN).toFixed(8)); // 250 sat/byte

    /*var request = new XMLHttpRequest()
    request.open('GET', url + '/api/v1/estimatefee/10', false)
    request.onload = function () {
      data = JSON.parse(this.response)
      console.log(data);
      console.log('current fee rate' + data['result']);
      fee = data['result'];
    }
    request.send()*/
  }
  var versionCheck = function () {
    var request = new XMLHttpRequest()
    request.open('GET', githubRepo, true)
    request.onload = function () {
      data = JSON.parse(this.response)
      var currentReleaseVersion = (data[0]['tag_name']).replace("V", "")
      if (parseFloat(currentReleaseVersion) > parseFloat(wallet_version)) {
        console.log("out of date");
        document.getElementById("outdated").style.display = 'block';
      }
    }
    request.send()
  }
  //Call a version check if network is enabled:
  //versionCheck();
  document.getElementById('Network').innerHTML = "<b> Network:</b> Enabled";
}
