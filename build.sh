export DOCKER_BUILDKIT=1
yarn install --frozen-lockfile
yarn tsc
yarn build:backend
docker image build . -f packages/backend/Dockerfile --tag backstage:1.$1
docker tag backstage:1.$1 mauron/backstage:1.$1
docker push mauron/backstage:1.$1
