#!/bin/bash

while [ ! -z "$1" ]; do
  mkdir "$1"
  cp template.pug "$1/index.pug"

  shift
done
