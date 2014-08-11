poly-eth
========

Poly-eth is a JavaScript wrapper / polyfil around the synchronous and asynchronous eth JavaScript objects injected in the various ethereum clients.


Current support

| Function     | AlethZero      | Ethereal        | Description |
|--------------|----------------|-----------------|-------------|
| getBlock (number or string) | | | Retrieves a block by either the address or the number. If supplied with a string it will assume address, number otherwise. |
| transact (sec, recipient, value, gas, gas price, data) | | |  Creates a new transaction using your current key. |
| create (sec, value, gas, gas price, init, body) | | |  Creates a new contract using your current key. |
| getKey (none) | | |   Retrieves your current key in hex format. |
| getStorageAt (object address, storage address) | | |  Retrieves the storage address of the given object. |
| getBalanceAt (object address) | | |  Retrieves the balance at the current address |
| watch (string [, string]) | | |  Watches for changes on a specific address' state object such as state root changes or value changes. |
| disconnect (string [, string]) | | |  Disconnects from a previous watched address. |
| secretToAddress (seckey) | | |  Retrieves the address of the specified secret key. |
| getPeerCount() | | |  Returns the number of connected peers. |
| getIsMining() | | |  Returns whether or not the current node is mining. |
| getIsListening() | | |  Returns whether or not the current node is listening for connections. |
| getCoinBase() | | |  Returns the current coinbase address. |
| GetTxCountAt() | | |  Returns the transaction nonce of the current key. |
| ...          | ...            | ...             | ... |
