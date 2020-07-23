# To Config nginx
server {
   listen 8080;
   server_name localhost;
   root /home/pvthanh98it/react_projects/todos/build;
   index index.html index.htm;
   location / {
   try_files $uri /index.html =404;
   }
}
