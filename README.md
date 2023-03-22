# GitHub Actions test repository

This repository is a test repository to automtically validate new versions of the [gh-action-deploy script](https://github.com/codesphere-cloud/codesphere-monorepo/blob/master/packages/scripts/src/github-action-deploy-workspace.ts).

The flow consists of:
- Create a new dev branch
- Change the reponse value in [src/config.json](./src/config.json)
- Create PR
- Wait for deploying
- Check if webser is reachable and contains the updated response
