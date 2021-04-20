#!/bin/bash

echo "Running tests for dsa-connect"

echo "Starting ganache-cli"
npm run ganache:fork &

sleep 5

echo "Running tests"
npm run test
