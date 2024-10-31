pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Clone the GitHub repository
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Simulate a build process
                echo "Starting the build process"
                sh '''
                docker buildx create --name mybuilder --use || echo "Builder already exists"
                docker buildx inspect --bootstrap
                docker build -t express-app .
                docker image ls
                docker run -d --name lab2 -p 8081:8081 express-app
                docker ps -a
                docker stop lab2 || true
                docker rm lab2 || true
                '''
        
            }
        }

        stage('Test') {
            steps {
                // Run a simple test command
                echo "Running tests"
            
            }
        }

        stage('Notification') {
            steps {
                // Send a notification based on build result
                script {
                    if (currentBuild.result == 'SUCCESS' || currentBuild.result == null) {
                        echo "Build succeeded! Notifying team..."
                    } else {
                        echo "Build failed! Notifying team..."
                    }
                    // Here you could integrate notifications via email, Slack, etc.
                    // For example, using email:
                    // mail to: 'team@example.com', subject: "Build ${currentBuild.result}", body: "The build completed with status: ${currentBuild.result}"
                }
            }
        }
    }

    post {
        always {
            // Optional cleanup steps can be added here
            echo "Build and test stages complete."
        }
    }
}

