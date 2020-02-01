<!-- ami-09d069a04349dc3cb -->

sudo yum update -y
sudo yum install git -y
sudo yum install docker -y

sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo chown $USER:docker /var/run/docker.sock

sudo service docker start
sudo usermod -a -G docker ec2-user
sudo chkconfig docker on

git clone https://github.com/brocktubre/docker-guru-api
cd docker-guru-api

docker-compose up --build