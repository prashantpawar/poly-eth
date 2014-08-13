poly-eth
========

Poly-eth is a JavaScript wrapper / polyfil around the synchronous and asynchronous eth JavaScript objects injected in the various ethereum clients.


Current support


| Function     | AlethZero      | Ethereal        | Description |
|--------------|----------------|-----------------|-------------|
| getBlock (number or string) | x | x | Retrieves a block by either the address or the number. If supplied with a string it will assume address, number otherwise. |
| transact (sec, recipient, value, gas, gas price, data) | x | x |  Creates a new transaction using your current key. |
| create (sec, value, gas, gas price, init, body) | x | x |  Creates a new contract using your current key. |
| getKeys (none) | Done | Done |   Retrieves an array of your current keys in hex format. |
| getStorageAt (object address, storage address) | x | x |  Retrieves the storage address of the given object. |
| getBalanceAt (object address) | x | x |  Retrieves the balance at the current address |
| watch (string [, string]) | x | x |  Watches for changes on a specific address' state object such as state root changes or value changes. |
| disconnect (string [, string]) | x | x |  Disconnects from a previous watched address. |
| secretToAddress (seckey) | x | x |  Retrieves the address of the specified secret key. |
| getPeerCount() | x | x |  Returns the number of connected peers. |
| getIsMining() | x | x |  Returns whether or not the current node is mining. |
| getIsListening() | x | x |  Returns whether or not the current node is listening for connections. |
| getCoinBase() | | |  Returns the current coinbase address. |
| GetTxCountAt() | | |  Returns the transaction nonce of the current key. |
| ...          | ...            | ...             | ... |
