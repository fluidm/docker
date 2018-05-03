#!/usr/bin/env bash

mkdir keys -p
mkdir data -p

docker-compose run --rm openvpn ovpn_genconfig -u udp://`ifconfig eth0 | sed -En 's/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p'`
docker-compose run --rm openvpn ovpn_initpki

docker-compose run --rm openvpn easyrsa build-client-full work nopass
docker-compose run --rm openvpn easyrsa build-client-full home nopass
docker-compose run --rm openvpn easyrsa build-client-full android nopass

docker-compose run --rm openvpn ovpn_getclient work > keys/work.ovpn
docker-compose run --rm openvpn ovpn_getclient home > keys/home.ovpn
docker-compose run --rm openvpn ovpn_getclient android > keys/android.ovpn
