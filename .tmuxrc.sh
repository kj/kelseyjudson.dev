#!/bin/sh

session_name=kelseyjudson-dev

init () {
	new_window watch-zola ./bin/start
	new_window watch-scss ./bin/build-scss -w
}
