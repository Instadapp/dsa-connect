#!/bin/bash

echo "Running tests for dsa-connect"

echo "Starting ganache-cli"
npm run ganache:fork &

sleep 5

echo "Running test-1"
npm run test

sleep 5

echo "Running test-2"
npm run test:dist