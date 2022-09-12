#! /bin/sh

yarn install

yarn typeorm migration:run

yarn run dev