---
title: Join Mainnet
sidebar_label: Join Mainnet
---


# Join Mainnet

This document outlines the steps to join an existing testnet

## Pre-requisite Readings

- [Validator Security](./security/security.md)

## Mainnet

You need to set the **genesis file** and **seeds**. If you need more information about past networks, check our [mainnet repo](https://github.com/tharsis/mainnet). The table below gives an overview of all Mainnet Chain IDs. Note that, the displayed version might differ when an active Software Upgrade proposal exists on chain.

| Chain ID       | Description     | Site                                                                          | Status  |
| -------------- | --------------- | ------------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| `point_10687-1` | Point Chain Mainnet | [Point Chain](https://github.com/pointnetwork/point-chain-config/tree/main/mainnet-1) | `Live`  |

:::warning
**IMPORTANT:** If you join mainnet as a validator make sure you follow all the [security](./security/security.md) recommendations!
:::

## Install `pointd`

Follow the [installation](./quickstart/installation.md) document to install the Point Chain binary `pointd`.

:::warning
Make sure you have the right version of `pointd` installed.
:::

### Save Chain ID

We recommend saving the mainnet `chain-id` into your `pointd`'s `client.toml`. This will make it so you do not have to manually pass in the `chain-id` flag for every CLI command.

:::tip
See the Official [Chain IDs](./../users/technical_concepts/chain_id) for reference.
:::

```bash
pointd config chain-id point_10687-1
```

## Initialize Node

We need to initialize the node to create all the necessary validator and node configuration files:

```bash
pointd init <your_custom_moniker> --chain-id point_10687-1
```

:::danger
Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.
:::

By default, the `init` command creates your `~/.pointd` (i.e `$HOME`) directory with subfolders `config/` and `data/`.
In the `config` directory, the most important files for configuration are `app.toml` and `config.toml`.

## Genesis & Seeds

### Copy the Genesis File

Download the `genesis.json` file from the [`archive`](https://github.com/pointnetwork/point-chain-config/blob/main/mainnet-1/genesis.json) and copy it over to the `config` directory: `~/.pointd/config/genesis.json`. This is a genesis file with the chain-id and genesis accounts balances.

```bash
wget https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/mainnet-1/genesis.json
mv genesis.json ~/.pointd/config/
```

Then verify the correctness of the genesis configuration file:

```bash
pointd validate-genesis
```

### Add Seed Nodes

Your node needs to know how to find [peers](https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#peers). You'll need to add healthy [seed nodes](https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#seed) to `$HOME/.pointd/config/config.toml`. The [`mainnet`](https://github.com/tharsis/mainnet) repo contains links to some seed nodes.

Edit the file located in `~/.pointd/config/config.toml` and the `seeds` to the following:

```toml
#######################################################
###           P2P Configuration Options             ###
#######################################################
[p2p]

# ...

# Comma separated list of seed nodes to connect to
seeds = "<node-id>@<ip>:<p2p port>"
```

You can use the following code to get seeds from the repo and add it to your config:

```bash
SEEDS=`curl -sL https://raw.githubusercontent.com/tharsis/mainnet/main/point_10687-1/seeds.txt | awk '{print $1}' | paste -s -d, -`
sed -i.bak -e "s/^seeds =.*/seeds = \"$SEEDS\"/" ~/.pointd/config/config.toml
```

:::tip
For more information on seeds and peers, you can the Tendermint [P2P documentation](https://docs.tendermint.com/master/spec/p2p/peer.html).
:::

### Add Persistent Peers

We can set the [`persistent_peers`](https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#persistent-peer) field in `~/.pointd/config/config.toml` to specify peers that your node will maintain persistent connections with. You can retrieve them from the list of
available peers on the [`mainnet`](https://github.com/tharsis/mainnet) repo.

A list of available persistent peers is also available in the `#find-peers` channel in the [Point Chain Discord](https://discord.com/invite/DkH6zxCXWz). You can get a random 10 entries from the `peers.txt` file in the `PEERS` variable by running the following command:

```bash
PEERS=`curl -sL https://raw.githubusercontent.com/tharsis/mainnet/main/point_10687-1/peers.txt | sort -R | head -n 10 | awk '{print $1}' | paste -s -d, -`
```

Use `sed` to include them into the configuration. You can also add them manually:

```bash
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" ~/.pointd/config/config.toml
```

## Run a Mainnet Validator

:::tip
For more details on how to run your validator, follow the validator [these](./setup/run_validator.md) instructions.
:::

```bash
pointd tx staking create-validator \
  --amount=1000000000000apoint \
  --pubkey=$(pointd tendermint show-validator) \
  --moniker="Point ChainWhale" \
  --chain-id=<chain_id> \
  --commission-rate="0.05" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1" \
  --gas="auto" \
  --gas-prices="0.025apoint" \
  --from=<key_name>
```

:::danger
🚨 **DANGER**: <u>Never</u> create your validator keys using a [`test`](./../users/keys/keyring) keying backend. Doing so might result in a loss of funds by making your funds remotely accessible via the `eth_sendTransaction` JSON-RPC endpoint.

Ref: [Security Advisory: Insecurely configured geth can make funds remotely accessible](https://blog.ethereum.org/2015/08/29/security-alert-insecurely-configured-geth-can-make-funds-remotely-accessible/)
:::

## Start mainnet

The final step is to [start the nodes](./quickstart/run_node.md#start-node). Once enough voting power (+2/3) from the genesis validators is up-and-running, the node will start producing blocks.

```bash
pointd start
```

## Share your Peer

You can share your peer to posting it in the `#find-peers` channel in the [Point Chain Discord](https://discord.com/invite/DkH6zxCXWz).

:::tip
To get your Node ID use

```bash
pointd tendermint show-node-id
```

:::
