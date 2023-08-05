# pulumi-remote-host-issue

This repository demonstractes remote ssh connection issue for `RemoteImage` resource introduced in [`@pulumi/docker@4.3.1`](https://github.com/pulumi/pulumi-docker/releases/tag/v4.3.1) release.

### Reproduction

1. You'll need a remote server with configured SSH access and docker running on that server
2. Clone this repository
3. Install dependencies via `pnpm i --frozen-lockfile` command
4. Run `DOCKER_HOST=ssh://user@remote-host-or-ip pulumi up -y`

The last step will result in following error message:

```
Diagnostics:
  docker:index:RemoteImage (pulumi-remote-host-issue-image):
    error: 1 error occurred:
    	* Error pinging Docker server: error during connect: Get "http://docker.example.com/_ping": dial tcp: lookup docker.example.com: no such host
```

This error shows up at least on Linux (when I'm runnig pulumi GitHub action) and on macOS.

### Workaround

Downgrade and stick with [`@pulumi/docker@4.3.0`](https://github.com/pulumi/pulumi-docker/releases/tag/v4.3.0) release.
