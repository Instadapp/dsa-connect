#!/bin/bash

echo "Running tests for dsa-connect"

echo "Starting ganache-cli"
npm run hardhat:fork &

sleep 10

echo "Running tests"
npm run test
