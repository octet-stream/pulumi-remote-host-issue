import {RemoteImage, Container} from "@pulumi/docker"

const image = new RemoteImage("pulumi-remote-host-issue-image", {
  name: "nginx:1.25-alpine"
})

new Container("pulumi-remote-host-issue-container", {
  name: "pulumi-remote-host-issue",
  image: image.imageId
})
