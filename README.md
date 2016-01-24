# Leaky Ionic App #

## Purpose ##

* The purpose of this application is to teach about how memory leaks can effect hybrid mobile applications and how to track them down

* This application is purposely left in an unstable state so you can apply the techniques learned to fix them

* Presentation of techniques is found here [https://docs.google.com/presentation/d/1xtbJzqopuDTxBSOuU1ZgK1TjPExuRWXsVqyjC2N_QOw/edit?usp=sharing](https://docs.google.com/presentation/d/1xtbJzqopuDTxBSOuU1ZgK1TjPExuRWXsVqyjC2N_QOw/edit?usp=sharing)

## Problem ##

* Try and find the 3 memory leaks in this application

## Application Requirements ##

* Node [https://nodejs.org/en/](https://nodejs.org/en/)
* Cordova / Ionic: 

```shell
npm install -g cordova ionic
```

* ios-sim

```shell
npm install -g ios-sim
```

* gulp

```shell
npm install -g gulp
```


## Install Instructions ##

Clone the repo
```shell
git clone https://github.com/concertcoder/leaky-ionic-app.git
```

Enter repo
```shell
cd leaky-ionic-app
```

Install node dependancies
```shell
npm install
```

Install bower dependancies
```shell
bower install
```

Setup IOS platform
```shell
ionic platform add ios
```

## Run ##

Run IOS
```shell
ionic run ios
```

Run in browser
```shell
gulp serve
```
