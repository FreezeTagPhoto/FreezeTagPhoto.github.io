# Quickstart Guide

This guide will show you how to get a basic FreezeTag instance up-and-running.

## Prerequisites

You will need to download and install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) for your system. Docker Compose is used to provide a consistent, easy install of FreezeTag, but it is possible to set up advanced deployments if you wish. The easiest way to install Docker Compose is likely through Docker Desktop, but you may be interested in alternative services depending on your setup. We have confirmed that Podman and Colima work.

## Install

Once you have the prerequisites, you can [download FreezeTag](https://freezetag.app/download). Extract the zip file into your directory of choice; the app and all app data is self-contained. Now, you can use the scripts provided in the `FreezeTag/startup_scripts` folder to manage the app. You will need to use the `.cmd` files on Windows, and the `.sh` files for MacOS and Linux. You can create desktop shortcuts to these scripts if you would like, make sure to create shortcuts for the `start` and `stop` scripts so you can start and stop the app at will.

## Data

If you ever need to modify your installation of FreezeTag, you can protect your FreezeTag data by copying and saving the `FreezeTag/backend/data` folder. If you would like to import data from an old version of FreezeTag into a new version of FreezeTag, then you can put the contents of the old data folder into that same `FreezeTag/backend/data` folder of the new version.

## Running

You can double-click the `start.sh` script to start the app, and the `stop.sh` script to stop the app. On that same machine, you can access the interface through <http://localhost:3000> and access the API through <http://localhost:3824>. Swagger Docs for the API are hosted at <http://localhost:3824/swagger>. If you want to use the instance over the network, then you will need to access it through the IP address of the machine hosting the app.

### WARNING!

By default, FreezeTag does not run through https, the secure protocol. On a secure home network, or for usage exclusively on a local machine, this is generally fine, as attackers will not be able to reach the instance. If you want to make your FreezeTag instance accessible outside of your network, then you should set up https through a nginx proxy or similar software. If you do not know how to do that, then you should seek assistance from someone you trust. Failing to properly enable https when needed puts you at risk of malware.

## Logging In

On initial startup, the only user account present is a generated admin account with username `admin` and password `admin`. Once you sign in with this account, you will be able to change the password of this account on the Settings page, as well as create new accounts on the Accounts page. These steps are detailed in future pages of the documentation.

## Next Steps

Guides for the primary features of FreezeTag are provided in the [Use Cases](use_cases.md) chapter.
