#!/bin/bash

echo "Running tests for dsa-connect"

echo "Starting ganache-cli"
npx ganache-cli --fork $ETH_NODE_URL --unlock $PUBLIC_ADDRESS &

sleep 5

echo "Running tests"
npm run test
