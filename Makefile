create-network:
	docker network create alifacademy

backend-up:
	docker-compose --project-name alifacademy-backend -f backend/docker-compose.yml up -d
backend-down:
	docker-compose --project-name alifacademy-backend -f backend/docker-compose.yml down --remove-orphans
backend-exec:
	docker-compose --project-name alifacademy-backend -f backend/docker-compose.yml exec -it php-cli-app ${COMMAND}


infrastructure-up:
	docker-compose --project-name alifacademy-infrastructure -f infrastructure/docker-compose.yml up -d
infrastructure-down:
	docker-compose --project-name alifacademy-infrastructure -f infrastructure/docker-compose.yml down --remove-orphans