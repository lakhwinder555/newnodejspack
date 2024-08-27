pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run tests if any
                sh 'npm test'
            }
        }
        
        stage('Run Application') {
            steps {
                // Run the Node.js application
                sh 'node app.js'
            }
        }
    }
}

