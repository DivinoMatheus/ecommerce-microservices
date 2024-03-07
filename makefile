build-products:
	(cd products-service/ && yarn install)
	(cd products-service/ && yarn build)

build-accounts:
	(cd accounts-service/ && yarn install)
	(cd accounts-service/ && yarn build)

build-carts:
	(cd carts-service/ && yarn install)
	(cd carts-service/ && yarn build)

build-orders:
	(cd orders-service/ && yarn install)
	(cd orders-service/ && yarn build)

build-payments:
	(cd payments-service/ && yarn install)
	(cd payments-service/ && yarn build)

build-notifications:
	(cd notifications-service/ && yarn install)
	(cd notifications-service/ && yarn build)

build-ecommerce-bff:
	(cd ecommerce-bff/ && yarn install)
	(cd ecommerce-bff/ && yarn build)

run-products:
	(cd products-service/ && pm2 start dist/main.js --name products-service)

run-accounts:
	(cd accounts-service/ && pm2 start dist/main.js --name accounts-service)

run-carts:
	(cd carts-service/ && pm2 start dist/main.js --name carts-service)

run-orders:
	(cd orders-service/ && pm2 start dist/main.js --name orders-service)

run-payments:
	(cd payments-service/ && pm2 start dist/main.js --name payments-service)

run-notifications:
	(cd notifications-service/ && pm2 start dist/main.js --name notifications-service)

run-ecommerce-bff:
	(cd ecommerce-bff/ && pm2 start dist/main.js --name ecommerce-bff)

build-all: build-products build-accounts build-carts build-orders build-payments build-notifications build-ecommerce-bff

run-all: run-products run-accounts run-carts run-orders run-payments run-notifications run-ecommerce-bff

stop-all:
	pm2 delete all

restart-all: stop-all run-all