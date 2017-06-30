.PHONY: all bftn july12

all: bftn july12

bftn:
	docker run -v $(PWD):/work lol /bin/sh -c "cd /work && ln -s /bftn/node_modules . && npm run build"

july12:
	docker run -v $(PWD):/work lol /bin/sh -c "cd /work/_src && ln -s /july12/node_modules . && npm run build"
