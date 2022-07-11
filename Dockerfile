# A) USING NODE && NGINX
# STEP 1
# get the base node image
FROM node:16.10.0 as builder

# set the working dir for container
WORKDIR /frontend

# copy all project files
COPY . .

# install npm dependencies
RUN yarn install && yarn build

# STEP 2
# nginx state for serving content
FROM nginx

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /frontend/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# B) USING ONLY NODE

# # get the base node image
# FROM node:alpine as builder

# # set the working dir for container
# WORKDIR /frontend

# # copy the json file first
# COPY ./package.json /frontend

# # install npm dependencies
# RUN npm install

# # copy other project files
# COPY . .

# # build the folder
# CMD [ "npm", "run", "start" ]