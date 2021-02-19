#!/bin/bash

echo "Running tests for dsa-connect"

echo "Starting ganache-cli"
npm run ganache:fork:travis &

echo "Running tests"
npm run test
