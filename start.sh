#!/bin/bash
docker run -d -p $1:$1 --network=main --name=$2 -e NAME="$2" -e PORT=$1 simple-node
