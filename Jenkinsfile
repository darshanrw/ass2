pipeline {
    agent any
    
    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Set Up Docker Buildx') {
            steps {
                // Set up Docker Buildx
                sh 'docker buildx create --name mybuilder --use || echo "Builder already exists"'
                sh 'docker buildx inspect --bootstrap'
            }
        }

        stage('Cache Docker Layers') {
            steps {
                // Caching Docker layers to speed up builds
                // Jenkins does not support caching natively like GitHub Actions, but 
                // Docker’s own layer caching will apply if the workspace is reused.
                echo "Using Docker's own caching mechanism as a substitute for GitHub Actions caching."
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                sh 'docker build -t express-app .'
            }
        }

        stage('Verify Docker Image') {
            steps {
                // List Docker images to verify the image was built
                sh 'docker image ls'
            }
        }

        stage('Run Docker Container') {
            steps {
                // Run the Docker container
                sh 'docker run -d --name ass2 -p 8081:8081 express-app'
            }
        }

        stage('Verify Running Container') {
            steps {
                // Verify the running container
                sh 'docker ps -a'
            }
        }

        stage('Stop and Remove Docker Container') {
            steps {
                // Stop and remove the container to clean up
                sh '''
                docker stop assignment2 || true
                docker rm assignment2 || true
                '''
            }
        }
    }
}