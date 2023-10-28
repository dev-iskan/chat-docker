create-network:
	docker network create alifacademy

infrastructure-up:
	docker-compose --project-name alifacademy-infrastructure -f infrastructure/docker-compose.yml up -d
infrastructure-down:
	docker-compose --project-name alifacademy-infrastructure -f infrastructure/docker-compose.yml down --remove-orphans

backend-up:
	docker-compose --project-name alifacademy-backend -f backend/docker-compose.yml up -d
backend-down:
	docker-compose --project-name alifacademy-backend -f backend/docker-compose.yml down --remove-orphans
backend-exec:
	docker-compose --project-name alifacademy-backend -f backend/docker-compose.yml exec -it php-cli-app ${COMMAND}
backend-composer-install:
	make backend-exec COMMAND="composer install"

frontend-up:
	docker-compose --project-name alifacademy-frontend -f frontend/docker-compose.yml up -d
frontend-down:
	docker-compose --project-name alifacademy-frontend -f frontend/docker-compose.yml down --remove-orphans
frontend-exec:
	docker-compose --project-name alifacademy-frontend -f frontend/docker-compose.yml exec -it node-app-cli ${COMMAND}
frontend-npm-install:
	make frontend-exec COMMAND="npm run install"


all-up:
	make infrastructure-up
	make backend-up
	make frontend-up
all-down:
	make infrastructure-down
	make backend-down
	make frontend-down