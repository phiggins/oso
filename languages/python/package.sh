#!/usr/bin/env bash
cd io

rm -rf build
ENV=LINUX /opt/python/cp36-cp36m/bin/python setup.py build
ENV=LINUX /opt/python/cp36-cp36m/bin/python setup.py sdist bdist_wheel

rm -rf build
ENV=LINUX /opt/python/cp37-cp37m/bin/python setup.py build
ENV=LINUX /opt/python/cp37-cp37m/bin/python setup.py sdist bdist_wheel

rm -rf build
ENV=LINUX /opt/python/cp38-cp38/bin/python setup.py build
ENV=LINUX /opt/python/cp38-cp38/bin/python setup.py sdist bdist_wheel