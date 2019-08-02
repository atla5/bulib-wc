#!/bin/bash
CSS_BUNDLE_FILEPATH="dist/bundle.css";

# compile scss into css
scss ./src/header/header.scss > ./src/header/header.css;
scss ./src/header/mobile-nav.scss >> ./src/header/header.css;

# bundle css into single 'shared' css file
mkdir dist || true;
cat ./node_modules/material-icons/css/material-icons.min.css > $CSS_BUNDLE_FILEPATH;

cat assets/css/common.css >> $CSS_BUNDLE_FILEPATH;
cat assets/css/card.css >> $CSS_BUNDLE_FILEPATH;
cat assets/css/cta.css >> $CSS_BUNDLE_FILEPATH;
cat src/header/header.css >>  $CSS_BUNDLE_FILEPATH;